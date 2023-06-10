# `azurerm_hdinsight_kafka_cluster`

Refer to the Terraform Registory for docs: [`azurerm_hdinsight_kafka_cluster`](https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster).

# `hdinsightKafkaCluster` Submodule <a name="`hdinsightKafkaCluster` Submodule" id="@cdktf/provider-azurerm.hdinsightKafkaCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HdinsightKafkaCluster <a name="HdinsightKafkaCluster" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster azurerm_hdinsight_kafka_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaCluster;

HdinsightKafkaCluster.Builder.create(Construct scope, java.lang.String id)
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
    .clusterVersion(java.lang.String)
    .componentVersion(HdinsightKafkaClusterComponentVersion)
    .gateway(HdinsightKafkaClusterGateway)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .roles(HdinsightKafkaClusterRoles)
    .tier(java.lang.String)
//  .computeIsolation(HdinsightKafkaClusterComputeIsolation)
//  .diskEncryption(IResolvable)
//  .diskEncryption(java.util.List<HdinsightKafkaClusterDiskEncryption>)
//  .encryptionInTransitEnabled(java.lang.Boolean)
//  .encryptionInTransitEnabled(IResolvable)
//  .extension(HdinsightKafkaClusterExtension)
//  .id(java.lang.String)
//  .metastores(HdinsightKafkaClusterMetastores)
//  .monitor(HdinsightKafkaClusterMonitor)
//  .network(HdinsightKafkaClusterNetwork)
//  .restProxy(HdinsightKafkaClusterRestProxy)
//  .securityProfile(HdinsightKafkaClusterSecurityProfile)
//  .storageAccount(IResolvable)
//  .storageAccount(java.util.List<HdinsightKafkaClusterStorageAccount>)
//  .storageAccountGen2(HdinsightKafkaClusterStorageAccountGen2)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(HdinsightKafkaClusterTimeouts)
//  .tlsMinVersion(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.clusterVersion">clusterVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#cluster_version HdinsightKafkaCluster#cluster_version}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.componentVersion">componentVersion</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion">HdinsightKafkaClusterComponentVersion</a></code> | component_version block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.gateway">gateway</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway">HdinsightKafkaClusterGateway</a></code> | gateway block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#location HdinsightKafkaCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#resource_group_name HdinsightKafkaCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.roles">roles</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles">HdinsightKafkaClusterRoles</a></code> | roles block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.tier">tier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#tier HdinsightKafkaCluster#tier}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.computeIsolation">computeIsolation</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation">HdinsightKafkaClusterComputeIsolation</a></code> | compute_isolation block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.diskEncryption">diskEncryption</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption">HdinsightKafkaClusterDiskEncryption</a>></code> | disk_encryption block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.encryptionInTransitEnabled">encryptionInTransitEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#encryption_in_transit_enabled HdinsightKafkaCluster#encryption_in_transit_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.extension">extension</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension">HdinsightKafkaClusterExtension</a></code> | extension block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#id HdinsightKafkaCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.metastores">metastores</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores">HdinsightKafkaClusterMetastores</a></code> | metastores block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.monitor">monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor">HdinsightKafkaClusterMonitor</a></code> | monitor block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.network">network</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork">HdinsightKafkaClusterNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.restProxy">restProxy</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy">HdinsightKafkaClusterRestProxy</a></code> | rest_proxy block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.securityProfile">securityProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile">HdinsightKafkaClusterSecurityProfile</a></code> | security_profile block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.storageAccount">storageAccount</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount">HdinsightKafkaClusterStorageAccount</a>></code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.storageAccountGen2">storageAccountGen2</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2">HdinsightKafkaClusterStorageAccountGen2</a></code> | storage_account_gen2 block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#tags HdinsightKafkaCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts">HdinsightKafkaClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.tlsMinVersion">tlsMinVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#tls_min_version HdinsightKafkaCluster#tls_min_version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterVersion`<sup>Required</sup> <a name="clusterVersion" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.clusterVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#cluster_version HdinsightKafkaCluster#cluster_version}.

---

##### `componentVersion`<sup>Required</sup> <a name="componentVersion" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.componentVersion"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion">HdinsightKafkaClusterComponentVersion</a>

component_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#component_version HdinsightKafkaCluster#component_version}

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.gateway"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway">HdinsightKafkaClusterGateway</a>

gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#gateway HdinsightKafkaCluster#gateway}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#location HdinsightKafkaCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#resource_group_name HdinsightKafkaCluster#resource_group_name}.

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.roles"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles">HdinsightKafkaClusterRoles</a>

roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#roles HdinsightKafkaCluster#roles}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.tier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#tier HdinsightKafkaCluster#tier}.

---

##### `computeIsolation`<sup>Optional</sup> <a name="computeIsolation" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.computeIsolation"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation">HdinsightKafkaClusterComputeIsolation</a>

compute_isolation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#compute_isolation HdinsightKafkaCluster#compute_isolation}

---

##### `diskEncryption`<sup>Optional</sup> <a name="diskEncryption" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.diskEncryption"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption">HdinsightKafkaClusterDiskEncryption</a>>

disk_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#disk_encryption HdinsightKafkaCluster#disk_encryption}

---

##### `encryptionInTransitEnabled`<sup>Optional</sup> <a name="encryptionInTransitEnabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.encryptionInTransitEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#encryption_in_transit_enabled HdinsightKafkaCluster#encryption_in_transit_enabled}.

---

##### `extension`<sup>Optional</sup> <a name="extension" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.extension"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension">HdinsightKafkaClusterExtension</a>

extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#extension HdinsightKafkaCluster#extension}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#id HdinsightKafkaCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metastores`<sup>Optional</sup> <a name="metastores" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.metastores"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores">HdinsightKafkaClusterMetastores</a>

metastores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#metastores HdinsightKafkaCluster#metastores}

---

##### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.monitor"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor">HdinsightKafkaClusterMonitor</a>

monitor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#monitor HdinsightKafkaCluster#monitor}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.network"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork">HdinsightKafkaClusterNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#network HdinsightKafkaCluster#network}

---

##### `restProxy`<sup>Optional</sup> <a name="restProxy" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.restProxy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy">HdinsightKafkaClusterRestProxy</a>

rest_proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#rest_proxy HdinsightKafkaCluster#rest_proxy}

---

##### `securityProfile`<sup>Optional</sup> <a name="securityProfile" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.securityProfile"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile">HdinsightKafkaClusterSecurityProfile</a>

security_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#security_profile HdinsightKafkaCluster#security_profile}

---

##### `storageAccount`<sup>Optional</sup> <a name="storageAccount" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.storageAccount"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount">HdinsightKafkaClusterStorageAccount</a>>

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#storage_account HdinsightKafkaCluster#storage_account}

---

##### `storageAccountGen2`<sup>Optional</sup> <a name="storageAccountGen2" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.storageAccountGen2"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2">HdinsightKafkaClusterStorageAccountGen2</a>

storage_account_gen2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#storage_account_gen2 HdinsightKafkaCluster#storage_account_gen2}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#tags HdinsightKafkaCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts">HdinsightKafkaClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#timeouts HdinsightKafkaCluster#timeouts}

---

##### `tlsMinVersion`<sup>Optional</sup> <a name="tlsMinVersion" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.tlsMinVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#tls_min_version HdinsightKafkaCluster#tls_min_version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putComponentVersion">putComponentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putComputeIsolation">putComputeIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putDiskEncryption">putDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putExtension">putExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putGateway">putGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putMetastores">putMetastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putMonitor">putMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putNetwork">putNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putRestProxy">putRestProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putRoles">putRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putSecurityProfile">putSecurityProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putStorageAccount">putStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putStorageAccountGen2">putStorageAccountGen2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetComputeIsolation">resetComputeIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetDiskEncryption">resetDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetEncryptionInTransitEnabled">resetEncryptionInTransitEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetExtension">resetExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetMetastores">resetMetastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetMonitor">resetMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetRestProxy">resetRestProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetSecurityProfile">resetSecurityProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetStorageAccount">resetStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetStorageAccountGen2">resetStorageAccountGen2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetTlsMinVersion">resetTlsMinVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putComponentVersion` <a name="putComponentVersion" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putComponentVersion"></a>

```java
public void putComponentVersion(HdinsightKafkaClusterComponentVersion value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putComponentVersion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion">HdinsightKafkaClusterComponentVersion</a>

---

##### `putComputeIsolation` <a name="putComputeIsolation" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putComputeIsolation"></a>

```java
public void putComputeIsolation(HdinsightKafkaClusterComputeIsolation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putComputeIsolation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation">HdinsightKafkaClusterComputeIsolation</a>

---

##### `putDiskEncryption` <a name="putDiskEncryption" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putDiskEncryption"></a>

```java
public void putDiskEncryption(IResolvable OR java.util.List<HdinsightKafkaClusterDiskEncryption> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putDiskEncryption.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption">HdinsightKafkaClusterDiskEncryption</a>>

---

##### `putExtension` <a name="putExtension" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putExtension"></a>

```java
public void putExtension(HdinsightKafkaClusterExtension value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putExtension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension">HdinsightKafkaClusterExtension</a>

---

##### `putGateway` <a name="putGateway" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putGateway"></a>

```java
public void putGateway(HdinsightKafkaClusterGateway value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putGateway.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway">HdinsightKafkaClusterGateway</a>

---

##### `putMetastores` <a name="putMetastores" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putMetastores"></a>

```java
public void putMetastores(HdinsightKafkaClusterMetastores value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putMetastores.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores">HdinsightKafkaClusterMetastores</a>

---

##### `putMonitor` <a name="putMonitor" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putMonitor"></a>

```java
public void putMonitor(HdinsightKafkaClusterMonitor value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putMonitor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor">HdinsightKafkaClusterMonitor</a>

---

##### `putNetwork` <a name="putNetwork" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putNetwork"></a>

```java
public void putNetwork(HdinsightKafkaClusterNetwork value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork">HdinsightKafkaClusterNetwork</a>

---

##### `putRestProxy` <a name="putRestProxy" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putRestProxy"></a>

```java
public void putRestProxy(HdinsightKafkaClusterRestProxy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putRestProxy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy">HdinsightKafkaClusterRestProxy</a>

---

##### `putRoles` <a name="putRoles" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putRoles"></a>

```java
public void putRoles(HdinsightKafkaClusterRoles value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putRoles.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles">HdinsightKafkaClusterRoles</a>

---

##### `putSecurityProfile` <a name="putSecurityProfile" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putSecurityProfile"></a>

```java
public void putSecurityProfile(HdinsightKafkaClusterSecurityProfile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putSecurityProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile">HdinsightKafkaClusterSecurityProfile</a>

---

##### `putStorageAccount` <a name="putStorageAccount" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putStorageAccount"></a>

```java
public void putStorageAccount(IResolvable OR java.util.List<HdinsightKafkaClusterStorageAccount> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putStorageAccount.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount">HdinsightKafkaClusterStorageAccount</a>>

---

##### `putStorageAccountGen2` <a name="putStorageAccountGen2" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putStorageAccountGen2"></a>

```java
public void putStorageAccountGen2(HdinsightKafkaClusterStorageAccountGen2 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putStorageAccountGen2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2">HdinsightKafkaClusterStorageAccountGen2</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putTimeouts"></a>

```java
public void putTimeouts(HdinsightKafkaClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts">HdinsightKafkaClusterTimeouts</a>

---

##### `resetComputeIsolation` <a name="resetComputeIsolation" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetComputeIsolation"></a>

```java
public void resetComputeIsolation()
```

##### `resetDiskEncryption` <a name="resetDiskEncryption" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetDiskEncryption"></a>

```java
public void resetDiskEncryption()
```

##### `resetEncryptionInTransitEnabled` <a name="resetEncryptionInTransitEnabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetEncryptionInTransitEnabled"></a>

```java
public void resetEncryptionInTransitEnabled()
```

##### `resetExtension` <a name="resetExtension" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetExtension"></a>

```java
public void resetExtension()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetId"></a>

```java
public void resetId()
```

##### `resetMetastores` <a name="resetMetastores" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetMetastores"></a>

```java
public void resetMetastores()
```

##### `resetMonitor` <a name="resetMonitor" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetMonitor"></a>

```java
public void resetMonitor()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetRestProxy` <a name="resetRestProxy" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetRestProxy"></a>

```java
public void resetRestProxy()
```

##### `resetSecurityProfile` <a name="resetSecurityProfile" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetSecurityProfile"></a>

```java
public void resetSecurityProfile()
```

##### `resetStorageAccount` <a name="resetStorageAccount" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetStorageAccount"></a>

```java
public void resetStorageAccount()
```

##### `resetStorageAccountGen2` <a name="resetStorageAccountGen2" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetStorageAccountGen2"></a>

```java
public void resetStorageAccountGen2()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTlsMinVersion` <a name="resetTlsMinVersion" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetTlsMinVersion"></a>

```java
public void resetTlsMinVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaCluster;

HdinsightKafkaCluster.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaCluster;

HdinsightKafkaCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaCluster;

HdinsightKafkaCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.componentVersion">componentVersion</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference">HdinsightKafkaClusterComponentVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.computeIsolation">computeIsolation</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference">HdinsightKafkaClusterComputeIsolationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.diskEncryption">diskEncryption</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList">HdinsightKafkaClusterDiskEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.extension">extension</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference">HdinsightKafkaClusterExtensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.gateway">gateway</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference">HdinsightKafkaClusterGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.httpsEndpoint">httpsEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.kafkaRestProxyEndpoint">kafkaRestProxyEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.metastores">metastores</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference">HdinsightKafkaClusterMetastoresOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.monitor">monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference">HdinsightKafkaClusterMonitorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.network">network</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference">HdinsightKafkaClusterNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.restProxy">restProxy</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference">HdinsightKafkaClusterRestProxyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.roles">roles</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference">HdinsightKafkaClusterRolesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.securityProfile">securityProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference">HdinsightKafkaClusterSecurityProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.sshEndpoint">sshEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.storageAccount">storageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList">HdinsightKafkaClusterStorageAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.storageAccountGen2">storageAccountGen2</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference">HdinsightKafkaClusterStorageAccountGen2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference">HdinsightKafkaClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.clusterVersionInput">clusterVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.componentVersionInput">componentVersionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion">HdinsightKafkaClusterComponentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.computeIsolationInput">computeIsolationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation">HdinsightKafkaClusterComputeIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.diskEncryptionInput">diskEncryptionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption">HdinsightKafkaClusterDiskEncryption</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.encryptionInTransitEnabledInput">encryptionInTransitEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.extensionInput">extensionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension">HdinsightKafkaClusterExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.gatewayInput">gatewayInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway">HdinsightKafkaClusterGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.metastoresInput">metastoresInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores">HdinsightKafkaClusterMetastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.monitorInput">monitorInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor">HdinsightKafkaClusterMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.networkInput">networkInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork">HdinsightKafkaClusterNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.restProxyInput">restProxyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy">HdinsightKafkaClusterRestProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.rolesInput">rolesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles">HdinsightKafkaClusterRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.securityProfileInput">securityProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile">HdinsightKafkaClusterSecurityProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.storageAccountGen2Input">storageAccountGen2Input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2">HdinsightKafkaClusterStorageAccountGen2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.storageAccountInput">storageAccountInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount">HdinsightKafkaClusterStorageAccount</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tierInput">tierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts">HdinsightKafkaClusterTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tlsMinVersionInput">tlsMinVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.clusterVersion">clusterVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.encryptionInTransitEnabled">encryptionInTransitEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tier">tier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tlsMinVersion">tlsMinVersion</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `componentVersion`<sup>Required</sup> <a name="componentVersion" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.componentVersion"></a>

```java
public HdinsightKafkaClusterComponentVersionOutputReference getComponentVersion();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference">HdinsightKafkaClusterComponentVersionOutputReference</a>

---

##### `computeIsolation`<sup>Required</sup> <a name="computeIsolation" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.computeIsolation"></a>

```java
public HdinsightKafkaClusterComputeIsolationOutputReference getComputeIsolation();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference">HdinsightKafkaClusterComputeIsolationOutputReference</a>

---

##### `diskEncryption`<sup>Required</sup> <a name="diskEncryption" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.diskEncryption"></a>

```java
public HdinsightKafkaClusterDiskEncryptionList getDiskEncryption();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList">HdinsightKafkaClusterDiskEncryptionList</a>

---

##### `extension`<sup>Required</sup> <a name="extension" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.extension"></a>

```java
public HdinsightKafkaClusterExtensionOutputReference getExtension();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference">HdinsightKafkaClusterExtensionOutputReference</a>

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.gateway"></a>

```java
public HdinsightKafkaClusterGatewayOutputReference getGateway();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference">HdinsightKafkaClusterGatewayOutputReference</a>

---

##### `httpsEndpoint`<sup>Required</sup> <a name="httpsEndpoint" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.httpsEndpoint"></a>

```java
public java.lang.String getHttpsEndpoint();
```

- *Type:* java.lang.String

---

##### `kafkaRestProxyEndpoint`<sup>Required</sup> <a name="kafkaRestProxyEndpoint" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.kafkaRestProxyEndpoint"></a>

```java
public java.lang.String getKafkaRestProxyEndpoint();
```

- *Type:* java.lang.String

---

##### `metastores`<sup>Required</sup> <a name="metastores" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.metastores"></a>

```java
public HdinsightKafkaClusterMetastoresOutputReference getMetastores();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference">HdinsightKafkaClusterMetastoresOutputReference</a>

---

##### `monitor`<sup>Required</sup> <a name="monitor" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.monitor"></a>

```java
public HdinsightKafkaClusterMonitorOutputReference getMonitor();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference">HdinsightKafkaClusterMonitorOutputReference</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.network"></a>

```java
public HdinsightKafkaClusterNetworkOutputReference getNetwork();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference">HdinsightKafkaClusterNetworkOutputReference</a>

---

##### `restProxy`<sup>Required</sup> <a name="restProxy" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.restProxy"></a>

```java
public HdinsightKafkaClusterRestProxyOutputReference getRestProxy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference">HdinsightKafkaClusterRestProxyOutputReference</a>

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.roles"></a>

```java
public HdinsightKafkaClusterRolesOutputReference getRoles();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference">HdinsightKafkaClusterRolesOutputReference</a>

---

##### `securityProfile`<sup>Required</sup> <a name="securityProfile" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.securityProfile"></a>

```java
public HdinsightKafkaClusterSecurityProfileOutputReference getSecurityProfile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference">HdinsightKafkaClusterSecurityProfileOutputReference</a>

---

##### `sshEndpoint`<sup>Required</sup> <a name="sshEndpoint" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.sshEndpoint"></a>

```java
public java.lang.String getSshEndpoint();
```

- *Type:* java.lang.String

---

##### `storageAccount`<sup>Required</sup> <a name="storageAccount" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.storageAccount"></a>

```java
public HdinsightKafkaClusterStorageAccountList getStorageAccount();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList">HdinsightKafkaClusterStorageAccountList</a>

---

##### `storageAccountGen2`<sup>Required</sup> <a name="storageAccountGen2" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.storageAccountGen2"></a>

```java
public HdinsightKafkaClusterStorageAccountGen2OutputReference getStorageAccountGen2();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference">HdinsightKafkaClusterStorageAccountGen2OutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.timeouts"></a>

```java
public HdinsightKafkaClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference">HdinsightKafkaClusterTimeoutsOutputReference</a>

---

##### `clusterVersionInput`<sup>Optional</sup> <a name="clusterVersionInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.clusterVersionInput"></a>

```java
public java.lang.String getClusterVersionInput();
```

- *Type:* java.lang.String

---

##### `componentVersionInput`<sup>Optional</sup> <a name="componentVersionInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.componentVersionInput"></a>

```java
public HdinsightKafkaClusterComponentVersion getComponentVersionInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion">HdinsightKafkaClusterComponentVersion</a>

---

##### `computeIsolationInput`<sup>Optional</sup> <a name="computeIsolationInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.computeIsolationInput"></a>

```java
public HdinsightKafkaClusterComputeIsolation getComputeIsolationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation">HdinsightKafkaClusterComputeIsolation</a>

---

##### `diskEncryptionInput`<sup>Optional</sup> <a name="diskEncryptionInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.diskEncryptionInput"></a>

```java
public java.lang.Object getDiskEncryptionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption">HdinsightKafkaClusterDiskEncryption</a>>

---

##### `encryptionInTransitEnabledInput`<sup>Optional</sup> <a name="encryptionInTransitEnabledInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.encryptionInTransitEnabledInput"></a>

```java
public java.lang.Object getEncryptionInTransitEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `extensionInput`<sup>Optional</sup> <a name="extensionInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.extensionInput"></a>

```java
public HdinsightKafkaClusterExtension getExtensionInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension">HdinsightKafkaClusterExtension</a>

---

##### `gatewayInput`<sup>Optional</sup> <a name="gatewayInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.gatewayInput"></a>

```java
public HdinsightKafkaClusterGateway getGatewayInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway">HdinsightKafkaClusterGateway</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `metastoresInput`<sup>Optional</sup> <a name="metastoresInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.metastoresInput"></a>

```java
public HdinsightKafkaClusterMetastores getMetastoresInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores">HdinsightKafkaClusterMetastores</a>

---

##### `monitorInput`<sup>Optional</sup> <a name="monitorInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.monitorInput"></a>

```java
public HdinsightKafkaClusterMonitor getMonitorInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor">HdinsightKafkaClusterMonitor</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.networkInput"></a>

```java
public HdinsightKafkaClusterNetwork getNetworkInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork">HdinsightKafkaClusterNetwork</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `restProxyInput`<sup>Optional</sup> <a name="restProxyInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.restProxyInput"></a>

```java
public HdinsightKafkaClusterRestProxy getRestProxyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy">HdinsightKafkaClusterRestProxy</a>

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.rolesInput"></a>

```java
public HdinsightKafkaClusterRoles getRolesInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles">HdinsightKafkaClusterRoles</a>

---

##### `securityProfileInput`<sup>Optional</sup> <a name="securityProfileInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.securityProfileInput"></a>

```java
public HdinsightKafkaClusterSecurityProfile getSecurityProfileInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile">HdinsightKafkaClusterSecurityProfile</a>

---

##### `storageAccountGen2Input`<sup>Optional</sup> <a name="storageAccountGen2Input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.storageAccountGen2Input"></a>

```java
public HdinsightKafkaClusterStorageAccountGen2 getStorageAccountGen2Input();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2">HdinsightKafkaClusterStorageAccountGen2</a>

---

##### `storageAccountInput`<sup>Optional</sup> <a name="storageAccountInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.storageAccountInput"></a>

```java
public java.lang.Object getStorageAccountInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount">HdinsightKafkaClusterStorageAccount</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tierInput"></a>

```java
public java.lang.String getTierInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts">HdinsightKafkaClusterTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `tlsMinVersionInput`<sup>Optional</sup> <a name="tlsMinVersionInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tlsMinVersionInput"></a>

```java
public java.lang.String getTlsMinVersionInput();
```

- *Type:* java.lang.String

---

##### `clusterVersion`<sup>Required</sup> <a name="clusterVersion" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.clusterVersion"></a>

```java
public java.lang.String getClusterVersion();
```

- *Type:* java.lang.String

---

##### `encryptionInTransitEnabled`<sup>Required</sup> <a name="encryptionInTransitEnabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.encryptionInTransitEnabled"></a>

```java
public java.lang.Object getEncryptionInTransitEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

---

##### `tlsMinVersion`<sup>Required</sup> <a name="tlsMinVersion" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tlsMinVersion"></a>

```java
public java.lang.String getTlsMinVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### HdinsightKafkaClusterComponentVersion <a name="HdinsightKafkaClusterComponentVersion" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterComponentVersion;

HdinsightKafkaClusterComponentVersion.builder()
    .kafka(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion.property.kafka">kafka</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#kafka HdinsightKafkaCluster#kafka}. |

---

##### `kafka`<sup>Required</sup> <a name="kafka" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion.property.kafka"></a>

```java
public java.lang.String getKafka();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#kafka HdinsightKafkaCluster#kafka}.

---

### HdinsightKafkaClusterComputeIsolation <a name="HdinsightKafkaClusterComputeIsolation" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterComputeIsolation;

HdinsightKafkaClusterComputeIsolation.builder()
//  .computeIsolationEnabled(java.lang.Boolean)
//  .computeIsolationEnabled(IResolvable)
//  .hostSku(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation.property.computeIsolationEnabled">computeIsolationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#compute_isolation_enabled HdinsightKafkaCluster#compute_isolation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation.property.hostSku">hostSku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#host_sku HdinsightKafkaCluster#host_sku}. |

---

##### `computeIsolationEnabled`<sup>Optional</sup> <a name="computeIsolationEnabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation.property.computeIsolationEnabled"></a>

```java
public java.lang.Object getComputeIsolationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#compute_isolation_enabled HdinsightKafkaCluster#compute_isolation_enabled}.

---

##### `hostSku`<sup>Optional</sup> <a name="hostSku" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation.property.hostSku"></a>

```java
public java.lang.String getHostSku();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#host_sku HdinsightKafkaCluster#host_sku}.

---

### HdinsightKafkaClusterConfig <a name="HdinsightKafkaClusterConfig" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterConfig;

HdinsightKafkaClusterConfig.builder()
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
    .clusterVersion(java.lang.String)
    .componentVersion(HdinsightKafkaClusterComponentVersion)
    .gateway(HdinsightKafkaClusterGateway)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .roles(HdinsightKafkaClusterRoles)
    .tier(java.lang.String)
//  .computeIsolation(HdinsightKafkaClusterComputeIsolation)
//  .diskEncryption(IResolvable)
//  .diskEncryption(java.util.List<HdinsightKafkaClusterDiskEncryption>)
//  .encryptionInTransitEnabled(java.lang.Boolean)
//  .encryptionInTransitEnabled(IResolvable)
//  .extension(HdinsightKafkaClusterExtension)
//  .id(java.lang.String)
//  .metastores(HdinsightKafkaClusterMetastores)
//  .monitor(HdinsightKafkaClusterMonitor)
//  .network(HdinsightKafkaClusterNetwork)
//  .restProxy(HdinsightKafkaClusterRestProxy)
//  .securityProfile(HdinsightKafkaClusterSecurityProfile)
//  .storageAccount(IResolvable)
//  .storageAccount(java.util.List<HdinsightKafkaClusterStorageAccount>)
//  .storageAccountGen2(HdinsightKafkaClusterStorageAccountGen2)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(HdinsightKafkaClusterTimeouts)
//  .tlsMinVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.clusterVersion">clusterVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#cluster_version HdinsightKafkaCluster#cluster_version}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.componentVersion">componentVersion</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion">HdinsightKafkaClusterComponentVersion</a></code> | component_version block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.gateway">gateway</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway">HdinsightKafkaClusterGateway</a></code> | gateway block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#location HdinsightKafkaCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#resource_group_name HdinsightKafkaCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.roles">roles</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles">HdinsightKafkaClusterRoles</a></code> | roles block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.tier">tier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#tier HdinsightKafkaCluster#tier}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.computeIsolation">computeIsolation</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation">HdinsightKafkaClusterComputeIsolation</a></code> | compute_isolation block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.diskEncryption">diskEncryption</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption">HdinsightKafkaClusterDiskEncryption</a>></code> | disk_encryption block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.encryptionInTransitEnabled">encryptionInTransitEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#encryption_in_transit_enabled HdinsightKafkaCluster#encryption_in_transit_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.extension">extension</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension">HdinsightKafkaClusterExtension</a></code> | extension block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#id HdinsightKafkaCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.metastores">metastores</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores">HdinsightKafkaClusterMetastores</a></code> | metastores block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.monitor">monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor">HdinsightKafkaClusterMonitor</a></code> | monitor block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.network">network</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork">HdinsightKafkaClusterNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.restProxy">restProxy</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy">HdinsightKafkaClusterRestProxy</a></code> | rest_proxy block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.securityProfile">securityProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile">HdinsightKafkaClusterSecurityProfile</a></code> | security_profile block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.storageAccount">storageAccount</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount">HdinsightKafkaClusterStorageAccount</a>></code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.storageAccountGen2">storageAccountGen2</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2">HdinsightKafkaClusterStorageAccountGen2</a></code> | storage_account_gen2 block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#tags HdinsightKafkaCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts">HdinsightKafkaClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.tlsMinVersion">tlsMinVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#tls_min_version HdinsightKafkaCluster#tls_min_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterVersion`<sup>Required</sup> <a name="clusterVersion" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.clusterVersion"></a>

```java
public java.lang.String getClusterVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#cluster_version HdinsightKafkaCluster#cluster_version}.

---

##### `componentVersion`<sup>Required</sup> <a name="componentVersion" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.componentVersion"></a>

```java
public HdinsightKafkaClusterComponentVersion getComponentVersion();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion">HdinsightKafkaClusterComponentVersion</a>

component_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#component_version HdinsightKafkaCluster#component_version}

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.gateway"></a>

```java
public HdinsightKafkaClusterGateway getGateway();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway">HdinsightKafkaClusterGateway</a>

gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#gateway HdinsightKafkaCluster#gateway}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#location HdinsightKafkaCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#resource_group_name HdinsightKafkaCluster#resource_group_name}.

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.roles"></a>

```java
public HdinsightKafkaClusterRoles getRoles();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles">HdinsightKafkaClusterRoles</a>

roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#roles HdinsightKafkaCluster#roles}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#tier HdinsightKafkaCluster#tier}.

---

##### `computeIsolation`<sup>Optional</sup> <a name="computeIsolation" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.computeIsolation"></a>

```java
public HdinsightKafkaClusterComputeIsolation getComputeIsolation();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation">HdinsightKafkaClusterComputeIsolation</a>

compute_isolation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#compute_isolation HdinsightKafkaCluster#compute_isolation}

---

##### `diskEncryption`<sup>Optional</sup> <a name="diskEncryption" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.diskEncryption"></a>

```java
public java.lang.Object getDiskEncryption();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption">HdinsightKafkaClusterDiskEncryption</a>>

disk_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#disk_encryption HdinsightKafkaCluster#disk_encryption}

---

##### `encryptionInTransitEnabled`<sup>Optional</sup> <a name="encryptionInTransitEnabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.encryptionInTransitEnabled"></a>

```java
public java.lang.Object getEncryptionInTransitEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#encryption_in_transit_enabled HdinsightKafkaCluster#encryption_in_transit_enabled}.

---

##### `extension`<sup>Optional</sup> <a name="extension" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.extension"></a>

```java
public HdinsightKafkaClusterExtension getExtension();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension">HdinsightKafkaClusterExtension</a>

extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#extension HdinsightKafkaCluster#extension}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#id HdinsightKafkaCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metastores`<sup>Optional</sup> <a name="metastores" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.metastores"></a>

```java
public HdinsightKafkaClusterMetastores getMetastores();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores">HdinsightKafkaClusterMetastores</a>

metastores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#metastores HdinsightKafkaCluster#metastores}

---

##### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.monitor"></a>

```java
public HdinsightKafkaClusterMonitor getMonitor();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor">HdinsightKafkaClusterMonitor</a>

monitor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#monitor HdinsightKafkaCluster#monitor}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.network"></a>

```java
public HdinsightKafkaClusterNetwork getNetwork();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork">HdinsightKafkaClusterNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#network HdinsightKafkaCluster#network}

---

##### `restProxy`<sup>Optional</sup> <a name="restProxy" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.restProxy"></a>

```java
public HdinsightKafkaClusterRestProxy getRestProxy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy">HdinsightKafkaClusterRestProxy</a>

rest_proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#rest_proxy HdinsightKafkaCluster#rest_proxy}

---

##### `securityProfile`<sup>Optional</sup> <a name="securityProfile" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.securityProfile"></a>

```java
public HdinsightKafkaClusterSecurityProfile getSecurityProfile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile">HdinsightKafkaClusterSecurityProfile</a>

security_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#security_profile HdinsightKafkaCluster#security_profile}

---

##### `storageAccount`<sup>Optional</sup> <a name="storageAccount" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.storageAccount"></a>

```java
public java.lang.Object getStorageAccount();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount">HdinsightKafkaClusterStorageAccount</a>>

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#storage_account HdinsightKafkaCluster#storage_account}

---

##### `storageAccountGen2`<sup>Optional</sup> <a name="storageAccountGen2" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.storageAccountGen2"></a>

```java
public HdinsightKafkaClusterStorageAccountGen2 getStorageAccountGen2();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2">HdinsightKafkaClusterStorageAccountGen2</a>

storage_account_gen2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#storage_account_gen2 HdinsightKafkaCluster#storage_account_gen2}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#tags HdinsightKafkaCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.timeouts"></a>

```java
public HdinsightKafkaClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts">HdinsightKafkaClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#timeouts HdinsightKafkaCluster#timeouts}

---

##### `tlsMinVersion`<sup>Optional</sup> <a name="tlsMinVersion" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.tlsMinVersion"></a>

```java
public java.lang.String getTlsMinVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#tls_min_version HdinsightKafkaCluster#tls_min_version}.

---

### HdinsightKafkaClusterDiskEncryption <a name="HdinsightKafkaClusterDiskEncryption" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterDiskEncryption;

HdinsightKafkaClusterDiskEncryption.builder()
//  .encryptionAlgorithm(java.lang.String)
//  .encryptionAtHostEnabled(java.lang.Boolean)
//  .encryptionAtHostEnabled(IResolvable)
//  .keyVaultKeyId(java.lang.String)
//  .keyVaultManagedIdentityId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#encryption_algorithm HdinsightKafkaCluster#encryption_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption.property.encryptionAtHostEnabled">encryptionAtHostEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#encryption_at_host_enabled HdinsightKafkaCluster#encryption_at_host_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#key_vault_key_id HdinsightKafkaCluster#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption.property.keyVaultManagedIdentityId">keyVaultManagedIdentityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#key_vault_managed_identity_id HdinsightKafkaCluster#key_vault_managed_identity_id}. |

---

##### `encryptionAlgorithm`<sup>Optional</sup> <a name="encryptionAlgorithm" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption.property.encryptionAlgorithm"></a>

```java
public java.lang.String getEncryptionAlgorithm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#encryption_algorithm HdinsightKafkaCluster#encryption_algorithm}.

---

##### `encryptionAtHostEnabled`<sup>Optional</sup> <a name="encryptionAtHostEnabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption.property.encryptionAtHostEnabled"></a>

```java
public java.lang.Object getEncryptionAtHostEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#encryption_at_host_enabled HdinsightKafkaCluster#encryption_at_host_enabled}.

---

##### `keyVaultKeyId`<sup>Optional</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption.property.keyVaultKeyId"></a>

```java
public java.lang.String getKeyVaultKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#key_vault_key_id HdinsightKafkaCluster#key_vault_key_id}.

---

##### `keyVaultManagedIdentityId`<sup>Optional</sup> <a name="keyVaultManagedIdentityId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption.property.keyVaultManagedIdentityId"></a>

```java
public java.lang.String getKeyVaultManagedIdentityId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#key_vault_managed_identity_id HdinsightKafkaCluster#key_vault_managed_identity_id}.

---

### HdinsightKafkaClusterExtension <a name="HdinsightKafkaClusterExtension" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterExtension;

HdinsightKafkaClusterExtension.builder()
    .logAnalyticsWorkspaceId(java.lang.String)
    .primaryKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#log_analytics_workspace_id HdinsightKafkaCluster#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension.property.primaryKey">primaryKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#primary_key HdinsightKafkaCluster#primary_key}. |

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension.property.logAnalyticsWorkspaceId"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#log_analytics_workspace_id HdinsightKafkaCluster#log_analytics_workspace_id}.

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension.property.primaryKey"></a>

```java
public java.lang.String getPrimaryKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#primary_key HdinsightKafkaCluster#primary_key}.

---

### HdinsightKafkaClusterGateway <a name="HdinsightKafkaClusterGateway" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterGateway;

HdinsightKafkaClusterGateway.builder()
    .password(java.lang.String)
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}.

---

### HdinsightKafkaClusterMetastores <a name="HdinsightKafkaClusterMetastores" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterMetastores;

HdinsightKafkaClusterMetastores.builder()
//  .ambari(HdinsightKafkaClusterMetastoresAmbari)
//  .hive(HdinsightKafkaClusterMetastoresHive)
//  .oozie(HdinsightKafkaClusterMetastoresOozie)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores.property.ambari">ambari</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari">HdinsightKafkaClusterMetastoresAmbari</a></code> | ambari block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores.property.hive">hive</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive">HdinsightKafkaClusterMetastoresHive</a></code> | hive block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores.property.oozie">oozie</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie">HdinsightKafkaClusterMetastoresOozie</a></code> | oozie block. |

---

##### `ambari`<sup>Optional</sup> <a name="ambari" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores.property.ambari"></a>

```java
public HdinsightKafkaClusterMetastoresAmbari getAmbari();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari">HdinsightKafkaClusterMetastoresAmbari</a>

ambari block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#ambari HdinsightKafkaCluster#ambari}

---

##### `hive`<sup>Optional</sup> <a name="hive" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores.property.hive"></a>

```java
public HdinsightKafkaClusterMetastoresHive getHive();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive">HdinsightKafkaClusterMetastoresHive</a>

hive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#hive HdinsightKafkaCluster#hive}

---

##### `oozie`<sup>Optional</sup> <a name="oozie" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores.property.oozie"></a>

```java
public HdinsightKafkaClusterMetastoresOozie getOozie();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie">HdinsightKafkaClusterMetastoresOozie</a>

oozie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#oozie HdinsightKafkaCluster#oozie}

---

### HdinsightKafkaClusterMetastoresAmbari <a name="HdinsightKafkaClusterMetastoresAmbari" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterMetastoresAmbari;

HdinsightKafkaClusterMetastoresAmbari.builder()
    .databaseName(java.lang.String)
    .password(java.lang.String)
    .server(java.lang.String)
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#database_name HdinsightKafkaCluster#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari.property.server">server</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#server HdinsightKafkaCluster#server}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#database_name HdinsightKafkaCluster#database_name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari.property.server"></a>

```java
public java.lang.String getServer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#server HdinsightKafkaCluster#server}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}.

---

### HdinsightKafkaClusterMetastoresHive <a name="HdinsightKafkaClusterMetastoresHive" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterMetastoresHive;

HdinsightKafkaClusterMetastoresHive.builder()
    .databaseName(java.lang.String)
    .password(java.lang.String)
    .server(java.lang.String)
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#database_name HdinsightKafkaCluster#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive.property.server">server</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#server HdinsightKafkaCluster#server}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#database_name HdinsightKafkaCluster#database_name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive.property.server"></a>

```java
public java.lang.String getServer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#server HdinsightKafkaCluster#server}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}.

---

### HdinsightKafkaClusterMetastoresOozie <a name="HdinsightKafkaClusterMetastoresOozie" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterMetastoresOozie;

HdinsightKafkaClusterMetastoresOozie.builder()
    .databaseName(java.lang.String)
    .password(java.lang.String)
    .server(java.lang.String)
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#database_name HdinsightKafkaCluster#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie.property.server">server</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#server HdinsightKafkaCluster#server}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#database_name HdinsightKafkaCluster#database_name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie.property.server"></a>

```java
public java.lang.String getServer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#server HdinsightKafkaCluster#server}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}.

---

### HdinsightKafkaClusterMonitor <a name="HdinsightKafkaClusterMonitor" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterMonitor;

HdinsightKafkaClusterMonitor.builder()
    .logAnalyticsWorkspaceId(java.lang.String)
    .primaryKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#log_analytics_workspace_id HdinsightKafkaCluster#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor.property.primaryKey">primaryKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#primary_key HdinsightKafkaCluster#primary_key}. |

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor.property.logAnalyticsWorkspaceId"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#log_analytics_workspace_id HdinsightKafkaCluster#log_analytics_workspace_id}.

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor.property.primaryKey"></a>

```java
public java.lang.String getPrimaryKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#primary_key HdinsightKafkaCluster#primary_key}.

---

### HdinsightKafkaClusterNetwork <a name="HdinsightKafkaClusterNetwork" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterNetwork;

HdinsightKafkaClusterNetwork.builder()
//  .connectionDirection(java.lang.String)
//  .privateLinkEnabled(java.lang.Boolean)
//  .privateLinkEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork.property.connectionDirection">connectionDirection</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#connection_direction HdinsightKafkaCluster#connection_direction}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork.property.privateLinkEnabled">privateLinkEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#private_link_enabled HdinsightKafkaCluster#private_link_enabled}. |

---

##### `connectionDirection`<sup>Optional</sup> <a name="connectionDirection" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork.property.connectionDirection"></a>

```java
public java.lang.String getConnectionDirection();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#connection_direction HdinsightKafkaCluster#connection_direction}.

---

##### `privateLinkEnabled`<sup>Optional</sup> <a name="privateLinkEnabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork.property.privateLinkEnabled"></a>

```java
public java.lang.Object getPrivateLinkEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#private_link_enabled HdinsightKafkaCluster#private_link_enabled}.

---

### HdinsightKafkaClusterRestProxy <a name="HdinsightKafkaClusterRestProxy" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterRestProxy;

HdinsightKafkaClusterRestProxy.builder()
    .securityGroupId(java.lang.String)
    .securityGroupName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy.property.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#security_group_id HdinsightKafkaCluster#security_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy.property.securityGroupName">securityGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#security_group_name HdinsightKafkaCluster#security_group_name}. |

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy.property.securityGroupId"></a>

```java
public java.lang.String getSecurityGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#security_group_id HdinsightKafkaCluster#security_group_id}.

---

##### `securityGroupName`<sup>Required</sup> <a name="securityGroupName" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy.property.securityGroupName"></a>

```java
public java.lang.String getSecurityGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#security_group_name HdinsightKafkaCluster#security_group_name}.

---

### HdinsightKafkaClusterRoles <a name="HdinsightKafkaClusterRoles" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterRoles;

HdinsightKafkaClusterRoles.builder()
    .headNode(HdinsightKafkaClusterRolesHeadNode)
    .workerNode(HdinsightKafkaClusterRolesWorkerNode)
    .zookeeperNode(HdinsightKafkaClusterRolesZookeeperNode)
//  .kafkaManagementNode(HdinsightKafkaClusterRolesKafkaManagementNode)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles.property.headNode">headNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode">HdinsightKafkaClusterRolesHeadNode</a></code> | head_node block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles.property.workerNode">workerNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode">HdinsightKafkaClusterRolesWorkerNode</a></code> | worker_node block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles.property.zookeeperNode">zookeeperNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode">HdinsightKafkaClusterRolesZookeeperNode</a></code> | zookeeper_node block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles.property.kafkaManagementNode">kafkaManagementNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode">HdinsightKafkaClusterRolesKafkaManagementNode</a></code> | kafka_management_node block. |

---

##### `headNode`<sup>Required</sup> <a name="headNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles.property.headNode"></a>

```java
public HdinsightKafkaClusterRolesHeadNode getHeadNode();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode">HdinsightKafkaClusterRolesHeadNode</a>

head_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#head_node HdinsightKafkaCluster#head_node}

---

##### `workerNode`<sup>Required</sup> <a name="workerNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles.property.workerNode"></a>

```java
public HdinsightKafkaClusterRolesWorkerNode getWorkerNode();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode">HdinsightKafkaClusterRolesWorkerNode</a>

worker_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#worker_node HdinsightKafkaCluster#worker_node}

---

##### `zookeeperNode`<sup>Required</sup> <a name="zookeeperNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles.property.zookeeperNode"></a>

```java
public HdinsightKafkaClusterRolesZookeeperNode getZookeeperNode();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode">HdinsightKafkaClusterRolesZookeeperNode</a>

zookeeper_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#zookeeper_node HdinsightKafkaCluster#zookeeper_node}

---

##### `kafkaManagementNode`<sup>Optional</sup> <a name="kafkaManagementNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles.property.kafkaManagementNode"></a>

```java
public HdinsightKafkaClusterRolesKafkaManagementNode getKafkaManagementNode();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode">HdinsightKafkaClusterRolesKafkaManagementNode</a>

kafka_management_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#kafka_management_node HdinsightKafkaCluster#kafka_management_node}

---

### HdinsightKafkaClusterRolesHeadNode <a name="HdinsightKafkaClusterRolesHeadNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterRolesHeadNode;

HdinsightKafkaClusterRolesHeadNode.builder()
    .username(java.lang.String)
    .vmSize(java.lang.String)
//  .password(java.lang.String)
//  .scriptActions(IResolvable)
//  .scriptActions(java.util.List<HdinsightKafkaClusterRolesHeadNodeScriptActions>)
//  .sshKeys(java.util.List<java.lang.String>)
//  .subnetId(java.lang.String)
//  .virtualNetworkId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.vmSize">vmSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.scriptActions">scriptActions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions">HdinsightKafkaClusterRolesHeadNodeScriptActions</a>></code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.sshKeys">sshKeys</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}.

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.vmSize"></a>

```java
public java.lang.String getVmSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}.

---

##### `scriptActions`<sup>Optional</sup> <a name="scriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.scriptActions"></a>

```java
public java.lang.Object getScriptActions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions">HdinsightKafkaClusterRolesHeadNodeScriptActions</a>>

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#script_actions HdinsightKafkaCluster#script_actions}

---

##### `sshKeys`<sup>Optional</sup> <a name="sshKeys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.sshKeys"></a>

```java
public java.util.List<java.lang.String> getSshKeys();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}.

---

##### `virtualNetworkId`<sup>Optional</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}.

---

### HdinsightKafkaClusterRolesHeadNodeScriptActions <a name="HdinsightKafkaClusterRolesHeadNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterRolesHeadNodeScriptActions;

HdinsightKafkaClusterRolesHeadNodeScriptActions.builder()
    .name(java.lang.String)
    .uri(java.lang.String)
//  .parameters(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions.property.uri">uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#uri HdinsightKafkaCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions.property.parameters">parameters</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#parameters HdinsightKafkaCluster#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#uri HdinsightKafkaCluster#uri}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#parameters HdinsightKafkaCluster#parameters}.

---

### HdinsightKafkaClusterRolesKafkaManagementNode <a name="HdinsightKafkaClusterRolesKafkaManagementNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterRolesKafkaManagementNode;

HdinsightKafkaClusterRolesKafkaManagementNode.builder()
    .username(java.lang.String)
    .vmSize(java.lang.String)
//  .password(java.lang.String)
//  .scriptActions(IResolvable)
//  .scriptActions(java.util.List<HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions>)
//  .sshKeys(java.util.List<java.lang.String>)
//  .subnetId(java.lang.String)
//  .virtualNetworkId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.vmSize">vmSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.scriptActions">scriptActions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions">HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions</a>></code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.sshKeys">sshKeys</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}.

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.vmSize"></a>

```java
public java.lang.String getVmSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}.

---

##### `scriptActions`<sup>Optional</sup> <a name="scriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.scriptActions"></a>

```java
public java.lang.Object getScriptActions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions">HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions</a>>

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#script_actions HdinsightKafkaCluster#script_actions}

---

##### `sshKeys`<sup>Optional</sup> <a name="sshKeys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.sshKeys"></a>

```java
public java.util.List<java.lang.String> getSshKeys();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}.

---

##### `virtualNetworkId`<sup>Optional</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}.

---

### HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions <a name="HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions;

HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions.builder()
    .name(java.lang.String)
    .uri(java.lang.String)
//  .parameters(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions.property.uri">uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#uri HdinsightKafkaCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions.property.parameters">parameters</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#parameters HdinsightKafkaCluster#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#uri HdinsightKafkaCluster#uri}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#parameters HdinsightKafkaCluster#parameters}.

---

### HdinsightKafkaClusterRolesWorkerNode <a name="HdinsightKafkaClusterRolesWorkerNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterRolesWorkerNode;

HdinsightKafkaClusterRolesWorkerNode.builder()
    .numberOfDisksPerNode(java.lang.Number)
    .targetInstanceCount(java.lang.Number)
    .username(java.lang.String)
    .vmSize(java.lang.String)
//  .password(java.lang.String)
//  .scriptActions(IResolvable)
//  .scriptActions(java.util.List<HdinsightKafkaClusterRolesWorkerNodeScriptActions>)
//  .sshKeys(java.util.List<java.lang.String>)
//  .subnetId(java.lang.String)
//  .virtualNetworkId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.numberOfDisksPerNode">numberOfDisksPerNode</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#number_of_disks_per_node HdinsightKafkaCluster#number_of_disks_per_node}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.targetInstanceCount">targetInstanceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#target_instance_count HdinsightKafkaCluster#target_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.vmSize">vmSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.scriptActions">scriptActions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions">HdinsightKafkaClusterRolesWorkerNodeScriptActions</a>></code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.sshKeys">sshKeys</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}. |

---

##### `numberOfDisksPerNode`<sup>Required</sup> <a name="numberOfDisksPerNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.numberOfDisksPerNode"></a>

```java
public java.lang.Number getNumberOfDisksPerNode();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#number_of_disks_per_node HdinsightKafkaCluster#number_of_disks_per_node}.

---

##### `targetInstanceCount`<sup>Required</sup> <a name="targetInstanceCount" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.targetInstanceCount"></a>

```java
public java.lang.Number getTargetInstanceCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#target_instance_count HdinsightKafkaCluster#target_instance_count}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}.

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.vmSize"></a>

```java
public java.lang.String getVmSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}.

---

##### `scriptActions`<sup>Optional</sup> <a name="scriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.scriptActions"></a>

```java
public java.lang.Object getScriptActions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions">HdinsightKafkaClusterRolesWorkerNodeScriptActions</a>>

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#script_actions HdinsightKafkaCluster#script_actions}

---

##### `sshKeys`<sup>Optional</sup> <a name="sshKeys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.sshKeys"></a>

```java
public java.util.List<java.lang.String> getSshKeys();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}.

---

##### `virtualNetworkId`<sup>Optional</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}.

---

### HdinsightKafkaClusterRolesWorkerNodeScriptActions <a name="HdinsightKafkaClusterRolesWorkerNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions;

HdinsightKafkaClusterRolesWorkerNodeScriptActions.builder()
    .name(java.lang.String)
    .uri(java.lang.String)
//  .parameters(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions.property.uri">uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#uri HdinsightKafkaCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions.property.parameters">parameters</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#parameters HdinsightKafkaCluster#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#uri HdinsightKafkaCluster#uri}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#parameters HdinsightKafkaCluster#parameters}.

---

### HdinsightKafkaClusterRolesZookeeperNode <a name="HdinsightKafkaClusterRolesZookeeperNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterRolesZookeeperNode;

HdinsightKafkaClusterRolesZookeeperNode.builder()
    .username(java.lang.String)
    .vmSize(java.lang.String)
//  .password(java.lang.String)
//  .scriptActions(IResolvable)
//  .scriptActions(java.util.List<HdinsightKafkaClusterRolesZookeeperNodeScriptActions>)
//  .sshKeys(java.util.List<java.lang.String>)
//  .subnetId(java.lang.String)
//  .virtualNetworkId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.vmSize">vmSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.scriptActions">scriptActions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions">HdinsightKafkaClusterRolesZookeeperNodeScriptActions</a>></code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.sshKeys">sshKeys</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}.

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.vmSize"></a>

```java
public java.lang.String getVmSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}.

---

##### `scriptActions`<sup>Optional</sup> <a name="scriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.scriptActions"></a>

```java
public java.lang.Object getScriptActions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions">HdinsightKafkaClusterRolesZookeeperNodeScriptActions</a>>

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#script_actions HdinsightKafkaCluster#script_actions}

---

##### `sshKeys`<sup>Optional</sup> <a name="sshKeys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.sshKeys"></a>

```java
public java.util.List<java.lang.String> getSshKeys();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}.

---

##### `virtualNetworkId`<sup>Optional</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}.

---

### HdinsightKafkaClusterRolesZookeeperNodeScriptActions <a name="HdinsightKafkaClusterRolesZookeeperNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions;

HdinsightKafkaClusterRolesZookeeperNodeScriptActions.builder()
    .name(java.lang.String)
    .uri(java.lang.String)
//  .parameters(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions.property.uri">uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#uri HdinsightKafkaCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions.property.parameters">parameters</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#parameters HdinsightKafkaCluster#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#uri HdinsightKafkaCluster#uri}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#parameters HdinsightKafkaCluster#parameters}.

---

### HdinsightKafkaClusterSecurityProfile <a name="HdinsightKafkaClusterSecurityProfile" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterSecurityProfile;

HdinsightKafkaClusterSecurityProfile.builder()
    .aaddsResourceId(java.lang.String)
    .domainName(java.lang.String)
    .domainUsername(java.lang.String)
    .domainUserPassword(java.lang.String)
    .ldapsUrls(java.util.List<java.lang.String>)
    .msiResourceId(java.lang.String)
//  .clusterUsersGroupDns(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.aaddsResourceId">aaddsResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#aadds_resource_id HdinsightKafkaCluster#aadds_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#domain_name HdinsightKafkaCluster#domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.domainUsername">domainUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#domain_username HdinsightKafkaCluster#domain_username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.domainUserPassword">domainUserPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#domain_user_password HdinsightKafkaCluster#domain_user_password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.ldapsUrls">ldapsUrls</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#ldaps_urls HdinsightKafkaCluster#ldaps_urls}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.msiResourceId">msiResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#msi_resource_id HdinsightKafkaCluster#msi_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.clusterUsersGroupDns">clusterUsersGroupDns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#cluster_users_group_dns HdinsightKafkaCluster#cluster_users_group_dns}. |

---

##### `aaddsResourceId`<sup>Required</sup> <a name="aaddsResourceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.aaddsResourceId"></a>

```java
public java.lang.String getAaddsResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#aadds_resource_id HdinsightKafkaCluster#aadds_resource_id}.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#domain_name HdinsightKafkaCluster#domain_name}.

---

##### `domainUsername`<sup>Required</sup> <a name="domainUsername" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.domainUsername"></a>

```java
public java.lang.String getDomainUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#domain_username HdinsightKafkaCluster#domain_username}.

---

##### `domainUserPassword`<sup>Required</sup> <a name="domainUserPassword" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.domainUserPassword"></a>

```java
public java.lang.String getDomainUserPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#domain_user_password HdinsightKafkaCluster#domain_user_password}.

---

##### `ldapsUrls`<sup>Required</sup> <a name="ldapsUrls" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.ldapsUrls"></a>

```java
public java.util.List<java.lang.String> getLdapsUrls();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#ldaps_urls HdinsightKafkaCluster#ldaps_urls}.

---

##### `msiResourceId`<sup>Required</sup> <a name="msiResourceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.msiResourceId"></a>

```java
public java.lang.String getMsiResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#msi_resource_id HdinsightKafkaCluster#msi_resource_id}.

---

##### `clusterUsersGroupDns`<sup>Optional</sup> <a name="clusterUsersGroupDns" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.clusterUsersGroupDns"></a>

```java
public java.util.List<java.lang.String> getClusterUsersGroupDns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#cluster_users_group_dns HdinsightKafkaCluster#cluster_users_group_dns}.

---

### HdinsightKafkaClusterStorageAccount <a name="HdinsightKafkaClusterStorageAccount" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterStorageAccount;

HdinsightKafkaClusterStorageAccount.builder()
    .isDefault(java.lang.Boolean)
    .isDefault(IResolvable)
    .storageAccountKey(java.lang.String)
    .storageContainerId(java.lang.String)
//  .storageResourceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount.property.isDefault">isDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#is_default HdinsightKafkaCluster#is_default}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount.property.storageAccountKey">storageAccountKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#storage_account_key HdinsightKafkaCluster#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount.property.storageContainerId">storageContainerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#storage_container_id HdinsightKafkaCluster#storage_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount.property.storageResourceId">storageResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#storage_resource_id HdinsightKafkaCluster#storage_resource_id}. |

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount.property.isDefault"></a>

```java
public java.lang.Object getIsDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#is_default HdinsightKafkaCluster#is_default}.

---

##### `storageAccountKey`<sup>Required</sup> <a name="storageAccountKey" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount.property.storageAccountKey"></a>

```java
public java.lang.String getStorageAccountKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#storage_account_key HdinsightKafkaCluster#storage_account_key}.

---

##### `storageContainerId`<sup>Required</sup> <a name="storageContainerId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount.property.storageContainerId"></a>

```java
public java.lang.String getStorageContainerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#storage_container_id HdinsightKafkaCluster#storage_container_id}.

---

##### `storageResourceId`<sup>Optional</sup> <a name="storageResourceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount.property.storageResourceId"></a>

```java
public java.lang.String getStorageResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#storage_resource_id HdinsightKafkaCluster#storage_resource_id}.

---

### HdinsightKafkaClusterStorageAccountGen2 <a name="HdinsightKafkaClusterStorageAccountGen2" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterStorageAccountGen2;

HdinsightKafkaClusterStorageAccountGen2.builder()
    .filesystemId(java.lang.String)
    .isDefault(java.lang.Boolean)
    .isDefault(IResolvable)
    .managedIdentityResourceId(java.lang.String)
    .storageResourceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2.property.filesystemId">filesystemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#filesystem_id HdinsightKafkaCluster#filesystem_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2.property.isDefault">isDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#is_default HdinsightKafkaCluster#is_default}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2.property.managedIdentityResourceId">managedIdentityResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#managed_identity_resource_id HdinsightKafkaCluster#managed_identity_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2.property.storageResourceId">storageResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#storage_resource_id HdinsightKafkaCluster#storage_resource_id}. |

---

##### `filesystemId`<sup>Required</sup> <a name="filesystemId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2.property.filesystemId"></a>

```java
public java.lang.String getFilesystemId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#filesystem_id HdinsightKafkaCluster#filesystem_id}.

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2.property.isDefault"></a>

```java
public java.lang.Object getIsDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#is_default HdinsightKafkaCluster#is_default}.

---

##### `managedIdentityResourceId`<sup>Required</sup> <a name="managedIdentityResourceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2.property.managedIdentityResourceId"></a>

```java
public java.lang.String getManagedIdentityResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#managed_identity_resource_id HdinsightKafkaCluster#managed_identity_resource_id}.

---

##### `storageResourceId`<sup>Required</sup> <a name="storageResourceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2.property.storageResourceId"></a>

```java
public java.lang.String getStorageResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#storage_resource_id HdinsightKafkaCluster#storage_resource_id}.

---

### HdinsightKafkaClusterTimeouts <a name="HdinsightKafkaClusterTimeouts" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterTimeouts;

HdinsightKafkaClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#create HdinsightKafkaCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#delete HdinsightKafkaCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#read HdinsightKafkaCluster#read}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#update HdinsightKafkaCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#create HdinsightKafkaCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#delete HdinsightKafkaCluster#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#read HdinsightKafkaCluster#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/hdinsight_kafka_cluster#update HdinsightKafkaCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HdinsightKafkaClusterComponentVersionOutputReference <a name="HdinsightKafkaClusterComponentVersionOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterComponentVersionOutputReference;

new HdinsightKafkaClusterComponentVersionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.property.kafkaInput">kafkaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.property.kafka">kafka</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion">HdinsightKafkaClusterComponentVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kafkaInput`<sup>Optional</sup> <a name="kafkaInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.property.kafkaInput"></a>

```java
public java.lang.String getKafkaInput();
```

- *Type:* java.lang.String

---

##### `kafka`<sup>Required</sup> <a name="kafka" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.property.kafka"></a>

```java
public java.lang.String getKafka();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.property.internalValue"></a>

```java
public HdinsightKafkaClusterComponentVersion getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion">HdinsightKafkaClusterComponentVersion</a>

---


### HdinsightKafkaClusterComputeIsolationOutputReference <a name="HdinsightKafkaClusterComputeIsolationOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterComputeIsolationOutputReference;

new HdinsightKafkaClusterComputeIsolationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.resetComputeIsolationEnabled">resetComputeIsolationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.resetHostSku">resetHostSku</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComputeIsolationEnabled` <a name="resetComputeIsolationEnabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.resetComputeIsolationEnabled"></a>

```java
public void resetComputeIsolationEnabled()
```

##### `resetHostSku` <a name="resetHostSku" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.resetHostSku"></a>

```java
public void resetHostSku()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.computeIsolationEnabledInput">computeIsolationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.hostSkuInput">hostSkuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.computeIsolationEnabled">computeIsolationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.hostSku">hostSku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation">HdinsightKafkaClusterComputeIsolation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `computeIsolationEnabledInput`<sup>Optional</sup> <a name="computeIsolationEnabledInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.computeIsolationEnabledInput"></a>

```java
public java.lang.Object getComputeIsolationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostSkuInput`<sup>Optional</sup> <a name="hostSkuInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.hostSkuInput"></a>

```java
public java.lang.String getHostSkuInput();
```

- *Type:* java.lang.String

---

##### `computeIsolationEnabled`<sup>Required</sup> <a name="computeIsolationEnabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.computeIsolationEnabled"></a>

```java
public java.lang.Object getComputeIsolationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostSku`<sup>Required</sup> <a name="hostSku" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.hostSku"></a>

```java
public java.lang.String getHostSku();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.internalValue"></a>

```java
public HdinsightKafkaClusterComputeIsolation getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation">HdinsightKafkaClusterComputeIsolation</a>

---


### HdinsightKafkaClusterDiskEncryptionList <a name="HdinsightKafkaClusterDiskEncryptionList" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterDiskEncryptionList;

new HdinsightKafkaClusterDiskEncryptionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.get"></a>

```java
public HdinsightKafkaClusterDiskEncryptionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption">HdinsightKafkaClusterDiskEncryption</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption">HdinsightKafkaClusterDiskEncryption</a>>

---


### HdinsightKafkaClusterDiskEncryptionOutputReference <a name="HdinsightKafkaClusterDiskEncryptionOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterDiskEncryptionOutputReference;

new HdinsightKafkaClusterDiskEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resetEncryptionAlgorithm">resetEncryptionAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resetEncryptionAtHostEnabled">resetEncryptionAtHostEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resetKeyVaultKeyId">resetKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resetKeyVaultManagedIdentityId">resetKeyVaultManagedIdentityId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionAlgorithm` <a name="resetEncryptionAlgorithm" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resetEncryptionAlgorithm"></a>

```java
public void resetEncryptionAlgorithm()
```

##### `resetEncryptionAtHostEnabled` <a name="resetEncryptionAtHostEnabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resetEncryptionAtHostEnabled"></a>

```java
public void resetEncryptionAtHostEnabled()
```

##### `resetKeyVaultKeyId` <a name="resetKeyVaultKeyId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resetKeyVaultKeyId"></a>

```java
public void resetKeyVaultKeyId()
```

##### `resetKeyVaultManagedIdentityId` <a name="resetKeyVaultManagedIdentityId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resetKeyVaultManagedIdentityId"></a>

```java
public void resetKeyVaultManagedIdentityId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.encryptionAlgorithmInput">encryptionAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabledInput">encryptionAtHostEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.keyVaultKeyIdInput">keyVaultKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityIdInput">keyVaultManagedIdentityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabled">encryptionAtHostEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityId">keyVaultManagedIdentityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption">HdinsightKafkaClusterDiskEncryption</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionAlgorithmInput`<sup>Optional</sup> <a name="encryptionAlgorithmInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.encryptionAlgorithmInput"></a>

```java
public java.lang.String getEncryptionAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `encryptionAtHostEnabledInput`<sup>Optional</sup> <a name="encryptionAtHostEnabledInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabledInput"></a>

```java
public java.lang.Object getEncryptionAtHostEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyVaultKeyIdInput`<sup>Optional</sup> <a name="keyVaultKeyIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.keyVaultKeyIdInput"></a>

```java
public java.lang.String getKeyVaultKeyIdInput();
```

- *Type:* java.lang.String

---

##### `keyVaultManagedIdentityIdInput`<sup>Optional</sup> <a name="keyVaultManagedIdentityIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityIdInput"></a>

```java
public java.lang.String getKeyVaultManagedIdentityIdInput();
```

- *Type:* java.lang.String

---

##### `encryptionAlgorithm`<sup>Required</sup> <a name="encryptionAlgorithm" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.encryptionAlgorithm"></a>

```java
public java.lang.String getEncryptionAlgorithm();
```

- *Type:* java.lang.String

---

##### `encryptionAtHostEnabled`<sup>Required</sup> <a name="encryptionAtHostEnabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabled"></a>

```java
public java.lang.Object getEncryptionAtHostEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.keyVaultKeyId"></a>

```java
public java.lang.String getKeyVaultKeyId();
```

- *Type:* java.lang.String

---

##### `keyVaultManagedIdentityId`<sup>Required</sup> <a name="keyVaultManagedIdentityId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityId"></a>

```java
public java.lang.String getKeyVaultManagedIdentityId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption">HdinsightKafkaClusterDiskEncryption</a> OR com.hashicorp.cdktf.IResolvable

---


### HdinsightKafkaClusterExtensionOutputReference <a name="HdinsightKafkaClusterExtensionOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterExtensionOutputReference;

new HdinsightKafkaClusterExtensionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.logAnalyticsWorkspaceIdInput">logAnalyticsWorkspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.primaryKeyInput">primaryKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.primaryKey">primaryKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension">HdinsightKafkaClusterExtension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="logAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.logAnalyticsWorkspaceIdInput"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `primaryKeyInput`<sup>Optional</sup> <a name="primaryKeyInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.primaryKeyInput"></a>

```java
public java.lang.String getPrimaryKeyInput();
```

- *Type:* java.lang.String

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.logAnalyticsWorkspaceId"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceId();
```

- *Type:* java.lang.String

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.primaryKey"></a>

```java
public java.lang.String getPrimaryKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.internalValue"></a>

```java
public HdinsightKafkaClusterExtension getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension">HdinsightKafkaClusterExtension</a>

---


### HdinsightKafkaClusterGatewayOutputReference <a name="HdinsightKafkaClusterGatewayOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterGatewayOutputReference;

new HdinsightKafkaClusterGatewayOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway">HdinsightKafkaClusterGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.internalValue"></a>

```java
public HdinsightKafkaClusterGateway getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway">HdinsightKafkaClusterGateway</a>

---


### HdinsightKafkaClusterMetastoresAmbariOutputReference <a name="HdinsightKafkaClusterMetastoresAmbariOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterMetastoresAmbariOutputReference;

new HdinsightKafkaClusterMetastoresAmbariOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.serverInput">serverInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.server">server</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari">HdinsightKafkaClusterMetastoresAmbari</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.serverInput"></a>

```java
public java.lang.String getServerInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.server"></a>

```java
public java.lang.String getServer();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.internalValue"></a>

```java
public HdinsightKafkaClusterMetastoresAmbari getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari">HdinsightKafkaClusterMetastoresAmbari</a>

---


### HdinsightKafkaClusterMetastoresHiveOutputReference <a name="HdinsightKafkaClusterMetastoresHiveOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterMetastoresHiveOutputReference;

new HdinsightKafkaClusterMetastoresHiveOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.serverInput">serverInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.server">server</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive">HdinsightKafkaClusterMetastoresHive</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.serverInput"></a>

```java
public java.lang.String getServerInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.server"></a>

```java
public java.lang.String getServer();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.internalValue"></a>

```java
public HdinsightKafkaClusterMetastoresHive getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive">HdinsightKafkaClusterMetastoresHive</a>

---


### HdinsightKafkaClusterMetastoresOozieOutputReference <a name="HdinsightKafkaClusterMetastoresOozieOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterMetastoresOozieOutputReference;

new HdinsightKafkaClusterMetastoresOozieOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.serverInput">serverInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.server">server</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie">HdinsightKafkaClusterMetastoresOozie</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.serverInput"></a>

```java
public java.lang.String getServerInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.server"></a>

```java
public java.lang.String getServer();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.internalValue"></a>

```java
public HdinsightKafkaClusterMetastoresOozie getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie">HdinsightKafkaClusterMetastoresOozie</a>

---


### HdinsightKafkaClusterMetastoresOutputReference <a name="HdinsightKafkaClusterMetastoresOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterMetastoresOutputReference;

new HdinsightKafkaClusterMetastoresOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putAmbari">putAmbari</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putHive">putHive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putOozie">putOozie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.resetAmbari">resetAmbari</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.resetHive">resetHive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.resetOozie">resetOozie</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAmbari` <a name="putAmbari" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putAmbari"></a>

```java
public void putAmbari(HdinsightKafkaClusterMetastoresAmbari value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putAmbari.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari">HdinsightKafkaClusterMetastoresAmbari</a>

---

##### `putHive` <a name="putHive" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putHive"></a>

```java
public void putHive(HdinsightKafkaClusterMetastoresHive value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putHive.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive">HdinsightKafkaClusterMetastoresHive</a>

---

##### `putOozie` <a name="putOozie" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putOozie"></a>

```java
public void putOozie(HdinsightKafkaClusterMetastoresOozie value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putOozie.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie">HdinsightKafkaClusterMetastoresOozie</a>

---

##### `resetAmbari` <a name="resetAmbari" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.resetAmbari"></a>

```java
public void resetAmbari()
```

##### `resetHive` <a name="resetHive" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.resetHive"></a>

```java
public void resetHive()
```

##### `resetOozie` <a name="resetOozie" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.resetOozie"></a>

```java
public void resetOozie()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.ambari">ambari</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference">HdinsightKafkaClusterMetastoresAmbariOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.hive">hive</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference">HdinsightKafkaClusterMetastoresHiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.oozie">oozie</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference">HdinsightKafkaClusterMetastoresOozieOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.ambariInput">ambariInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari">HdinsightKafkaClusterMetastoresAmbari</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.hiveInput">hiveInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive">HdinsightKafkaClusterMetastoresHive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.oozieInput">oozieInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie">HdinsightKafkaClusterMetastoresOozie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores">HdinsightKafkaClusterMetastores</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ambari`<sup>Required</sup> <a name="ambari" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.ambari"></a>

```java
public HdinsightKafkaClusterMetastoresAmbariOutputReference getAmbari();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference">HdinsightKafkaClusterMetastoresAmbariOutputReference</a>

---

##### `hive`<sup>Required</sup> <a name="hive" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.hive"></a>

```java
public HdinsightKafkaClusterMetastoresHiveOutputReference getHive();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference">HdinsightKafkaClusterMetastoresHiveOutputReference</a>

---

##### `oozie`<sup>Required</sup> <a name="oozie" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.oozie"></a>

```java
public HdinsightKafkaClusterMetastoresOozieOutputReference getOozie();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference">HdinsightKafkaClusterMetastoresOozieOutputReference</a>

---

##### `ambariInput`<sup>Optional</sup> <a name="ambariInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.ambariInput"></a>

```java
public HdinsightKafkaClusterMetastoresAmbari getAmbariInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari">HdinsightKafkaClusterMetastoresAmbari</a>

---

##### `hiveInput`<sup>Optional</sup> <a name="hiveInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.hiveInput"></a>

```java
public HdinsightKafkaClusterMetastoresHive getHiveInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive">HdinsightKafkaClusterMetastoresHive</a>

---

##### `oozieInput`<sup>Optional</sup> <a name="oozieInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.oozieInput"></a>

```java
public HdinsightKafkaClusterMetastoresOozie getOozieInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie">HdinsightKafkaClusterMetastoresOozie</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.internalValue"></a>

```java
public HdinsightKafkaClusterMetastores getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores">HdinsightKafkaClusterMetastores</a>

---


### HdinsightKafkaClusterMonitorOutputReference <a name="HdinsightKafkaClusterMonitorOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterMonitorOutputReference;

new HdinsightKafkaClusterMonitorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.logAnalyticsWorkspaceIdInput">logAnalyticsWorkspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.primaryKeyInput">primaryKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.primaryKey">primaryKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor">HdinsightKafkaClusterMonitor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="logAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.logAnalyticsWorkspaceIdInput"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `primaryKeyInput`<sup>Optional</sup> <a name="primaryKeyInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.primaryKeyInput"></a>

```java
public java.lang.String getPrimaryKeyInput();
```

- *Type:* java.lang.String

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.logAnalyticsWorkspaceId"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceId();
```

- *Type:* java.lang.String

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.primaryKey"></a>

```java
public java.lang.String getPrimaryKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.internalValue"></a>

```java
public HdinsightKafkaClusterMonitor getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor">HdinsightKafkaClusterMonitor</a>

---


### HdinsightKafkaClusterNetworkOutputReference <a name="HdinsightKafkaClusterNetworkOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterNetworkOutputReference;

new HdinsightKafkaClusterNetworkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.resetConnectionDirection">resetConnectionDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.resetPrivateLinkEnabled">resetPrivateLinkEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionDirection` <a name="resetConnectionDirection" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.resetConnectionDirection"></a>

```java
public void resetConnectionDirection()
```

##### `resetPrivateLinkEnabled` <a name="resetPrivateLinkEnabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.resetPrivateLinkEnabled"></a>

```java
public void resetPrivateLinkEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.connectionDirectionInput">connectionDirectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.privateLinkEnabledInput">privateLinkEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.connectionDirection">connectionDirection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.privateLinkEnabled">privateLinkEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork">HdinsightKafkaClusterNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionDirectionInput`<sup>Optional</sup> <a name="connectionDirectionInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.connectionDirectionInput"></a>

```java
public java.lang.String getConnectionDirectionInput();
```

- *Type:* java.lang.String

---

##### `privateLinkEnabledInput`<sup>Optional</sup> <a name="privateLinkEnabledInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.privateLinkEnabledInput"></a>

```java
public java.lang.Object getPrivateLinkEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `connectionDirection`<sup>Required</sup> <a name="connectionDirection" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.connectionDirection"></a>

```java
public java.lang.String getConnectionDirection();
```

- *Type:* java.lang.String

---

##### `privateLinkEnabled`<sup>Required</sup> <a name="privateLinkEnabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.privateLinkEnabled"></a>

```java
public java.lang.Object getPrivateLinkEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.internalValue"></a>

```java
public HdinsightKafkaClusterNetwork getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork">HdinsightKafkaClusterNetwork</a>

---


### HdinsightKafkaClusterRestProxyOutputReference <a name="HdinsightKafkaClusterRestProxyOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterRestProxyOutputReference;

new HdinsightKafkaClusterRestProxyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.securityGroupIdInput">securityGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.securityGroupNameInput">securityGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.securityGroupName">securityGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy">HdinsightKafkaClusterRestProxy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupIdInput`<sup>Optional</sup> <a name="securityGroupIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.securityGroupIdInput"></a>

```java
public java.lang.String getSecurityGroupIdInput();
```

- *Type:* java.lang.String

---

##### `securityGroupNameInput`<sup>Optional</sup> <a name="securityGroupNameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.securityGroupNameInput"></a>

```java
public java.lang.String getSecurityGroupNameInput();
```

- *Type:* java.lang.String

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.securityGroupId"></a>

```java
public java.lang.String getSecurityGroupId();
```

- *Type:* java.lang.String

---

##### `securityGroupName`<sup>Required</sup> <a name="securityGroupName" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.securityGroupName"></a>

```java
public java.lang.String getSecurityGroupName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.internalValue"></a>

```java
public HdinsightKafkaClusterRestProxy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy">HdinsightKafkaClusterRestProxy</a>

---


### HdinsightKafkaClusterRolesHeadNodeOutputReference <a name="HdinsightKafkaClusterRolesHeadNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterRolesHeadNodeOutputReference;

new HdinsightKafkaClusterRolesHeadNodeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.putScriptActions">putScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resetScriptActions">resetScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resetSshKeys">resetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resetVirtualNetworkId">resetVirtualNetworkId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScriptActions` <a name="putScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.putScriptActions"></a>

```java
public void putScriptActions(IResolvable OR java.util.List<HdinsightKafkaClusterRolesHeadNodeScriptActions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions">HdinsightKafkaClusterRolesHeadNodeScriptActions</a>>

---

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetScriptActions` <a name="resetScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resetScriptActions"></a>

```java
public void resetScriptActions()
```

##### `resetSshKeys` <a name="resetSshKeys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resetSshKeys"></a>

```java
public void resetSshKeys()
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resetSubnetId"></a>

```java
public void resetSubnetId()
```

##### `resetVirtualNetworkId` <a name="resetVirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resetVirtualNetworkId"></a>

```java
public void resetVirtualNetworkId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.scriptActions">scriptActions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList">HdinsightKafkaClusterRolesHeadNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.scriptActionsInput">scriptActionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions">HdinsightKafkaClusterRolesHeadNodeScriptActions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.sshKeysInput">sshKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.vmSizeInput">vmSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.sshKeys">sshKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.vmSize">vmSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode">HdinsightKafkaClusterRolesHeadNode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scriptActions`<sup>Required</sup> <a name="scriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.scriptActions"></a>

```java
public HdinsightKafkaClusterRolesHeadNodeScriptActionsList getScriptActions();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList">HdinsightKafkaClusterRolesHeadNodeScriptActionsList</a>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `scriptActionsInput`<sup>Optional</sup> <a name="scriptActionsInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.scriptActionsInput"></a>

```java
public java.lang.Object getScriptActionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions">HdinsightKafkaClusterRolesHeadNodeScriptActions</a>>

---

##### `sshKeysInput`<sup>Optional</sup> <a name="sshKeysInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.sshKeysInput"></a>

```java
public java.util.List<java.lang.String> getSshKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.virtualNetworkIdInput"></a>

```java
public java.lang.String getVirtualNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `vmSizeInput`<sup>Optional</sup> <a name="vmSizeInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.vmSizeInput"></a>

```java
public java.lang.String getVmSizeInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `sshKeys`<sup>Required</sup> <a name="sshKeys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.sshKeys"></a>

```java
public java.util.List<java.lang.String> getSshKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.vmSize"></a>

```java
public java.lang.String getVmSize();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.internalValue"></a>

```java
public HdinsightKafkaClusterRolesHeadNode getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode">HdinsightKafkaClusterRolesHeadNode</a>

---


### HdinsightKafkaClusterRolesHeadNodeScriptActionsList <a name="HdinsightKafkaClusterRolesHeadNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList;

new HdinsightKafkaClusterRolesHeadNodeScriptActionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.get"></a>

```java
public HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions">HdinsightKafkaClusterRolesHeadNodeScriptActions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions">HdinsightKafkaClusterRolesHeadNodeScriptActions</a>>

---


### HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference <a name="HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference;

new HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.resetParameters"></a>

```java
public void resetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.parameters">parameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions">HdinsightKafkaClusterRolesHeadNodeScriptActions</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.parametersInput"></a>

```java
public java.lang.String getParametersInput();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions">HdinsightKafkaClusterRolesHeadNodeScriptActions</a> OR com.hashicorp.cdktf.IResolvable

---


### HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference <a name="HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference;

new HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.putScriptActions">putScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resetScriptActions">resetScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resetSshKeys">resetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resetVirtualNetworkId">resetVirtualNetworkId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScriptActions` <a name="putScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.putScriptActions"></a>

```java
public void putScriptActions(IResolvable OR java.util.List<HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions">HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions</a>>

---

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetScriptActions` <a name="resetScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resetScriptActions"></a>

```java
public void resetScriptActions()
```

##### `resetSshKeys` <a name="resetSshKeys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resetSshKeys"></a>

```java
public void resetSshKeys()
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resetSubnetId"></a>

```java
public void resetSubnetId()
```

##### `resetVirtualNetworkId` <a name="resetVirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resetVirtualNetworkId"></a>

```java
public void resetVirtualNetworkId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.scriptActions">scriptActions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList">HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.scriptActionsInput">scriptActionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions">HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.sshKeysInput">sshKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.vmSizeInput">vmSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.sshKeys">sshKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.vmSize">vmSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode">HdinsightKafkaClusterRolesKafkaManagementNode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scriptActions`<sup>Required</sup> <a name="scriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.scriptActions"></a>

```java
public HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList getScriptActions();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList">HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList</a>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `scriptActionsInput`<sup>Optional</sup> <a name="scriptActionsInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.scriptActionsInput"></a>

```java
public java.lang.Object getScriptActionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions">HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions</a>>

---

##### `sshKeysInput`<sup>Optional</sup> <a name="sshKeysInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.sshKeysInput"></a>

```java
public java.util.List<java.lang.String> getSshKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.virtualNetworkIdInput"></a>

```java
public java.lang.String getVirtualNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `vmSizeInput`<sup>Optional</sup> <a name="vmSizeInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.vmSizeInput"></a>

```java
public java.lang.String getVmSizeInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `sshKeys`<sup>Required</sup> <a name="sshKeys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.sshKeys"></a>

```java
public java.util.List<java.lang.String> getSshKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.vmSize"></a>

```java
public java.lang.String getVmSize();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.internalValue"></a>

```java
public HdinsightKafkaClusterRolesKafkaManagementNode getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode">HdinsightKafkaClusterRolesKafkaManagementNode</a>

---


### HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList <a name="HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList;

new HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.get"></a>

```java
public HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions">HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions">HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions</a>>

---


### HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference <a name="HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference;

new HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.resetParameters"></a>

```java
public void resetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.parameters">parameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions">HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.parametersInput"></a>

```java
public java.lang.String getParametersInput();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions">HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions</a> OR com.hashicorp.cdktf.IResolvable

---


### HdinsightKafkaClusterRolesOutputReference <a name="HdinsightKafkaClusterRolesOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterRolesOutputReference;

new HdinsightKafkaClusterRolesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putHeadNode">putHeadNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putKafkaManagementNode">putKafkaManagementNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putWorkerNode">putWorkerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putZookeeperNode">putZookeeperNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.resetKafkaManagementNode">resetKafkaManagementNode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeadNode` <a name="putHeadNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putHeadNode"></a>

```java
public void putHeadNode(HdinsightKafkaClusterRolesHeadNode value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putHeadNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode">HdinsightKafkaClusterRolesHeadNode</a>

---

##### `putKafkaManagementNode` <a name="putKafkaManagementNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putKafkaManagementNode"></a>

```java
public void putKafkaManagementNode(HdinsightKafkaClusterRolesKafkaManagementNode value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putKafkaManagementNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode">HdinsightKafkaClusterRolesKafkaManagementNode</a>

---

##### `putWorkerNode` <a name="putWorkerNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putWorkerNode"></a>

```java
public void putWorkerNode(HdinsightKafkaClusterRolesWorkerNode value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putWorkerNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode">HdinsightKafkaClusterRolesWorkerNode</a>

---

##### `putZookeeperNode` <a name="putZookeeperNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putZookeeperNode"></a>

```java
public void putZookeeperNode(HdinsightKafkaClusterRolesZookeeperNode value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putZookeeperNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode">HdinsightKafkaClusterRolesZookeeperNode</a>

---

##### `resetKafkaManagementNode` <a name="resetKafkaManagementNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.resetKafkaManagementNode"></a>

```java
public void resetKafkaManagementNode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.headNode">headNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference">HdinsightKafkaClusterRolesHeadNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.kafkaManagementNode">kafkaManagementNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference">HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.workerNode">workerNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference">HdinsightKafkaClusterRolesWorkerNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.zookeeperNode">zookeeperNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference">HdinsightKafkaClusterRolesZookeeperNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.headNodeInput">headNodeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode">HdinsightKafkaClusterRolesHeadNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.kafkaManagementNodeInput">kafkaManagementNodeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode">HdinsightKafkaClusterRolesKafkaManagementNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.workerNodeInput">workerNodeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode">HdinsightKafkaClusterRolesWorkerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.zookeeperNodeInput">zookeeperNodeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode">HdinsightKafkaClusterRolesZookeeperNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles">HdinsightKafkaClusterRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headNode`<sup>Required</sup> <a name="headNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.headNode"></a>

```java
public HdinsightKafkaClusterRolesHeadNodeOutputReference getHeadNode();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference">HdinsightKafkaClusterRolesHeadNodeOutputReference</a>

---

##### `kafkaManagementNode`<sup>Required</sup> <a name="kafkaManagementNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.kafkaManagementNode"></a>

```java
public HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference getKafkaManagementNode();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference">HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference</a>

---

##### `workerNode`<sup>Required</sup> <a name="workerNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.workerNode"></a>

```java
public HdinsightKafkaClusterRolesWorkerNodeOutputReference getWorkerNode();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference">HdinsightKafkaClusterRolesWorkerNodeOutputReference</a>

---

##### `zookeeperNode`<sup>Required</sup> <a name="zookeeperNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.zookeeperNode"></a>

```java
public HdinsightKafkaClusterRolesZookeeperNodeOutputReference getZookeeperNode();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference">HdinsightKafkaClusterRolesZookeeperNodeOutputReference</a>

---

##### `headNodeInput`<sup>Optional</sup> <a name="headNodeInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.headNodeInput"></a>

```java
public HdinsightKafkaClusterRolesHeadNode getHeadNodeInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode">HdinsightKafkaClusterRolesHeadNode</a>

---

##### `kafkaManagementNodeInput`<sup>Optional</sup> <a name="kafkaManagementNodeInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.kafkaManagementNodeInput"></a>

```java
public HdinsightKafkaClusterRolesKafkaManagementNode getKafkaManagementNodeInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode">HdinsightKafkaClusterRolesKafkaManagementNode</a>

---

##### `workerNodeInput`<sup>Optional</sup> <a name="workerNodeInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.workerNodeInput"></a>

```java
public HdinsightKafkaClusterRolesWorkerNode getWorkerNodeInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode">HdinsightKafkaClusterRolesWorkerNode</a>

---

##### `zookeeperNodeInput`<sup>Optional</sup> <a name="zookeeperNodeInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.zookeeperNodeInput"></a>

```java
public HdinsightKafkaClusterRolesZookeeperNode getZookeeperNodeInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode">HdinsightKafkaClusterRolesZookeeperNode</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.internalValue"></a>

```java
public HdinsightKafkaClusterRoles getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles">HdinsightKafkaClusterRoles</a>

---


### HdinsightKafkaClusterRolesWorkerNodeOutputReference <a name="HdinsightKafkaClusterRolesWorkerNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference;

new HdinsightKafkaClusterRolesWorkerNodeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.putScriptActions">putScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resetScriptActions">resetScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resetSshKeys">resetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resetVirtualNetworkId">resetVirtualNetworkId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScriptActions` <a name="putScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.putScriptActions"></a>

```java
public void putScriptActions(IResolvable OR java.util.List<HdinsightKafkaClusterRolesWorkerNodeScriptActions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions">HdinsightKafkaClusterRolesWorkerNodeScriptActions</a>>

---

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetScriptActions` <a name="resetScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resetScriptActions"></a>

```java
public void resetScriptActions()
```

##### `resetSshKeys` <a name="resetSshKeys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resetSshKeys"></a>

```java
public void resetSshKeys()
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resetSubnetId"></a>

```java
public void resetSubnetId()
```

##### `resetVirtualNetworkId` <a name="resetVirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resetVirtualNetworkId"></a>

```java
public void resetVirtualNetworkId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.scriptActions">scriptActions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList">HdinsightKafkaClusterRolesWorkerNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.numberOfDisksPerNodeInput">numberOfDisksPerNodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.scriptActionsInput">scriptActionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions">HdinsightKafkaClusterRolesWorkerNodeScriptActions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.sshKeysInput">sshKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.targetInstanceCountInput">targetInstanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.vmSizeInput">vmSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.numberOfDisksPerNode">numberOfDisksPerNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.sshKeys">sshKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.targetInstanceCount">targetInstanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.vmSize">vmSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode">HdinsightKafkaClusterRolesWorkerNode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scriptActions`<sup>Required</sup> <a name="scriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.scriptActions"></a>

```java
public HdinsightKafkaClusterRolesWorkerNodeScriptActionsList getScriptActions();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList">HdinsightKafkaClusterRolesWorkerNodeScriptActionsList</a>

---

##### `numberOfDisksPerNodeInput`<sup>Optional</sup> <a name="numberOfDisksPerNodeInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.numberOfDisksPerNodeInput"></a>

```java
public java.lang.Number getNumberOfDisksPerNodeInput();
```

- *Type:* java.lang.Number

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `scriptActionsInput`<sup>Optional</sup> <a name="scriptActionsInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.scriptActionsInput"></a>

```java
public java.lang.Object getScriptActionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions">HdinsightKafkaClusterRolesWorkerNodeScriptActions</a>>

---

##### `sshKeysInput`<sup>Optional</sup> <a name="sshKeysInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.sshKeysInput"></a>

```java
public java.util.List<java.lang.String> getSshKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `targetInstanceCountInput`<sup>Optional</sup> <a name="targetInstanceCountInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.targetInstanceCountInput"></a>

```java
public java.lang.Number getTargetInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.virtualNetworkIdInput"></a>

```java
public java.lang.String getVirtualNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `vmSizeInput`<sup>Optional</sup> <a name="vmSizeInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.vmSizeInput"></a>

```java
public java.lang.String getVmSizeInput();
```

- *Type:* java.lang.String

---

##### `numberOfDisksPerNode`<sup>Required</sup> <a name="numberOfDisksPerNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.numberOfDisksPerNode"></a>

```java
public java.lang.Number getNumberOfDisksPerNode();
```

- *Type:* java.lang.Number

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `sshKeys`<sup>Required</sup> <a name="sshKeys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.sshKeys"></a>

```java
public java.util.List<java.lang.String> getSshKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `targetInstanceCount`<sup>Required</sup> <a name="targetInstanceCount" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.targetInstanceCount"></a>

```java
public java.lang.Number getTargetInstanceCount();
```

- *Type:* java.lang.Number

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.vmSize"></a>

```java
public java.lang.String getVmSize();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.internalValue"></a>

```java
public HdinsightKafkaClusterRolesWorkerNode getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode">HdinsightKafkaClusterRolesWorkerNode</a>

---


### HdinsightKafkaClusterRolesWorkerNodeScriptActionsList <a name="HdinsightKafkaClusterRolesWorkerNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList;

new HdinsightKafkaClusterRolesWorkerNodeScriptActionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.get"></a>

```java
public HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions">HdinsightKafkaClusterRolesWorkerNodeScriptActions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions">HdinsightKafkaClusterRolesWorkerNodeScriptActions</a>>

---


### HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference <a name="HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference;

new HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.resetParameters"></a>

```java
public void resetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.parameters">parameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions">HdinsightKafkaClusterRolesWorkerNodeScriptActions</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.parametersInput"></a>

```java
public java.lang.String getParametersInput();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions">HdinsightKafkaClusterRolesWorkerNodeScriptActions</a> OR com.hashicorp.cdktf.IResolvable

---


### HdinsightKafkaClusterRolesZookeeperNodeOutputReference <a name="HdinsightKafkaClusterRolesZookeeperNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference;

new HdinsightKafkaClusterRolesZookeeperNodeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.putScriptActions">putScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resetScriptActions">resetScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resetSshKeys">resetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resetVirtualNetworkId">resetVirtualNetworkId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScriptActions` <a name="putScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.putScriptActions"></a>

```java
public void putScriptActions(IResolvable OR java.util.List<HdinsightKafkaClusterRolesZookeeperNodeScriptActions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions">HdinsightKafkaClusterRolesZookeeperNodeScriptActions</a>>

---

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetScriptActions` <a name="resetScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resetScriptActions"></a>

```java
public void resetScriptActions()
```

##### `resetSshKeys` <a name="resetSshKeys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resetSshKeys"></a>

```java
public void resetSshKeys()
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resetSubnetId"></a>

```java
public void resetSubnetId()
```

##### `resetVirtualNetworkId` <a name="resetVirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resetVirtualNetworkId"></a>

```java
public void resetVirtualNetworkId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.scriptActions">scriptActions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList">HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.scriptActionsInput">scriptActionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions">HdinsightKafkaClusterRolesZookeeperNodeScriptActions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.sshKeysInput">sshKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.vmSizeInput">vmSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.sshKeys">sshKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.vmSize">vmSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode">HdinsightKafkaClusterRolesZookeeperNode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scriptActions`<sup>Required</sup> <a name="scriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.scriptActions"></a>

```java
public HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList getScriptActions();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList">HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList</a>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `scriptActionsInput`<sup>Optional</sup> <a name="scriptActionsInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.scriptActionsInput"></a>

```java
public java.lang.Object getScriptActionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions">HdinsightKafkaClusterRolesZookeeperNodeScriptActions</a>>

---

##### `sshKeysInput`<sup>Optional</sup> <a name="sshKeysInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.sshKeysInput"></a>

```java
public java.util.List<java.lang.String> getSshKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.virtualNetworkIdInput"></a>

```java
public java.lang.String getVirtualNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `vmSizeInput`<sup>Optional</sup> <a name="vmSizeInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.vmSizeInput"></a>

```java
public java.lang.String getVmSizeInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `sshKeys`<sup>Required</sup> <a name="sshKeys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.sshKeys"></a>

```java
public java.util.List<java.lang.String> getSshKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.vmSize"></a>

```java
public java.lang.String getVmSize();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.internalValue"></a>

```java
public HdinsightKafkaClusterRolesZookeeperNode getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode">HdinsightKafkaClusterRolesZookeeperNode</a>

---


### HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList <a name="HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList;

new HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.get"></a>

```java
public HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions">HdinsightKafkaClusterRolesZookeeperNodeScriptActions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions">HdinsightKafkaClusterRolesZookeeperNodeScriptActions</a>>

---


### HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference <a name="HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference;

new HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.resetParameters"></a>

```java
public void resetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.parameters">parameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions">HdinsightKafkaClusterRolesZookeeperNodeScriptActions</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.parametersInput"></a>

```java
public java.lang.String getParametersInput();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions">HdinsightKafkaClusterRolesZookeeperNodeScriptActions</a> OR com.hashicorp.cdktf.IResolvable

---


### HdinsightKafkaClusterSecurityProfileOutputReference <a name="HdinsightKafkaClusterSecurityProfileOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterSecurityProfileOutputReference;

new HdinsightKafkaClusterSecurityProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.resetClusterUsersGroupDns">resetClusterUsersGroupDns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClusterUsersGroupDns` <a name="resetClusterUsersGroupDns" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.resetClusterUsersGroupDns"></a>

```java
public void resetClusterUsersGroupDns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.aaddsResourceIdInput">aaddsResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.clusterUsersGroupDnsInput">clusterUsersGroupDnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainUsernameInput">domainUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainUserPasswordInput">domainUserPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.ldapsUrlsInput">ldapsUrlsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.msiResourceIdInput">msiResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.aaddsResourceId">aaddsResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.clusterUsersGroupDns">clusterUsersGroupDns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainUsername">domainUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainUserPassword">domainUserPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.ldapsUrls">ldapsUrls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.msiResourceId">msiResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile">HdinsightKafkaClusterSecurityProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aaddsResourceIdInput`<sup>Optional</sup> <a name="aaddsResourceIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.aaddsResourceIdInput"></a>

```java
public java.lang.String getAaddsResourceIdInput();
```

- *Type:* java.lang.String

---

##### `clusterUsersGroupDnsInput`<sup>Optional</sup> <a name="clusterUsersGroupDnsInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.clusterUsersGroupDnsInput"></a>

```java
public java.util.List<java.lang.String> getClusterUsersGroupDnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `domainUsernameInput`<sup>Optional</sup> <a name="domainUsernameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainUsernameInput"></a>

```java
public java.lang.String getDomainUsernameInput();
```

- *Type:* java.lang.String

---

##### `domainUserPasswordInput`<sup>Optional</sup> <a name="domainUserPasswordInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainUserPasswordInput"></a>

```java
public java.lang.String getDomainUserPasswordInput();
```

- *Type:* java.lang.String

---

##### `ldapsUrlsInput`<sup>Optional</sup> <a name="ldapsUrlsInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.ldapsUrlsInput"></a>

```java
public java.util.List<java.lang.String> getLdapsUrlsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `msiResourceIdInput`<sup>Optional</sup> <a name="msiResourceIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.msiResourceIdInput"></a>

```java
public java.lang.String getMsiResourceIdInput();
```

- *Type:* java.lang.String

---

##### `aaddsResourceId`<sup>Required</sup> <a name="aaddsResourceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.aaddsResourceId"></a>

```java
public java.lang.String getAaddsResourceId();
```

- *Type:* java.lang.String

---

##### `clusterUsersGroupDns`<sup>Required</sup> <a name="clusterUsersGroupDns" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.clusterUsersGroupDns"></a>

```java
public java.util.List<java.lang.String> getClusterUsersGroupDns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `domainUsername`<sup>Required</sup> <a name="domainUsername" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainUsername"></a>

```java
public java.lang.String getDomainUsername();
```

- *Type:* java.lang.String

---

##### `domainUserPassword`<sup>Required</sup> <a name="domainUserPassword" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainUserPassword"></a>

```java
public java.lang.String getDomainUserPassword();
```

- *Type:* java.lang.String

---

##### `ldapsUrls`<sup>Required</sup> <a name="ldapsUrls" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.ldapsUrls"></a>

```java
public java.util.List<java.lang.String> getLdapsUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `msiResourceId`<sup>Required</sup> <a name="msiResourceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.msiResourceId"></a>

```java
public java.lang.String getMsiResourceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.internalValue"></a>

```java
public HdinsightKafkaClusterSecurityProfile getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile">HdinsightKafkaClusterSecurityProfile</a>

---


### HdinsightKafkaClusterStorageAccountGen2OutputReference <a name="HdinsightKafkaClusterStorageAccountGen2OutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterStorageAccountGen2OutputReference;

new HdinsightKafkaClusterStorageAccountGen2OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.filesystemIdInput">filesystemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.isDefaultInput">isDefaultInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.managedIdentityResourceIdInput">managedIdentityResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.storageResourceIdInput">storageResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.filesystemId">filesystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.isDefault">isDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.managedIdentityResourceId">managedIdentityResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.storageResourceId">storageResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2">HdinsightKafkaClusterStorageAccountGen2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filesystemIdInput`<sup>Optional</sup> <a name="filesystemIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.filesystemIdInput"></a>

```java
public java.lang.String getFilesystemIdInput();
```

- *Type:* java.lang.String

---

##### `isDefaultInput`<sup>Optional</sup> <a name="isDefaultInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.isDefaultInput"></a>

```java
public java.lang.Object getIsDefaultInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `managedIdentityResourceIdInput`<sup>Optional</sup> <a name="managedIdentityResourceIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.managedIdentityResourceIdInput"></a>

```java
public java.lang.String getManagedIdentityResourceIdInput();
```

- *Type:* java.lang.String

---

##### `storageResourceIdInput`<sup>Optional</sup> <a name="storageResourceIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.storageResourceIdInput"></a>

```java
public java.lang.String getStorageResourceIdInput();
```

- *Type:* java.lang.String

---

##### `filesystemId`<sup>Required</sup> <a name="filesystemId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.filesystemId"></a>

```java
public java.lang.String getFilesystemId();
```

- *Type:* java.lang.String

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.isDefault"></a>

```java
public java.lang.Object getIsDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `managedIdentityResourceId`<sup>Required</sup> <a name="managedIdentityResourceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.managedIdentityResourceId"></a>

```java
public java.lang.String getManagedIdentityResourceId();
```

- *Type:* java.lang.String

---

##### `storageResourceId`<sup>Required</sup> <a name="storageResourceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.storageResourceId"></a>

```java
public java.lang.String getStorageResourceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.internalValue"></a>

```java
public HdinsightKafkaClusterStorageAccountGen2 getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2">HdinsightKafkaClusterStorageAccountGen2</a>

---


### HdinsightKafkaClusterStorageAccountList <a name="HdinsightKafkaClusterStorageAccountList" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterStorageAccountList;

new HdinsightKafkaClusterStorageAccountList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.get"></a>

```java
public HdinsightKafkaClusterStorageAccountOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount">HdinsightKafkaClusterStorageAccount</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount">HdinsightKafkaClusterStorageAccount</a>>

---


### HdinsightKafkaClusterStorageAccountOutputReference <a name="HdinsightKafkaClusterStorageAccountOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterStorageAccountOutputReference;

new HdinsightKafkaClusterStorageAccountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.resetStorageResourceId">resetStorageResourceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStorageResourceId` <a name="resetStorageResourceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.resetStorageResourceId"></a>

```java
public void resetStorageResourceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.isDefaultInput">isDefaultInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageAccountKeyInput">storageAccountKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageContainerIdInput">storageContainerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageResourceIdInput">storageResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.isDefault">isDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageAccountKey">storageAccountKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageContainerId">storageContainerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageResourceId">storageResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount">HdinsightKafkaClusterStorageAccount</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isDefaultInput`<sup>Optional</sup> <a name="isDefaultInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.isDefaultInput"></a>

```java
public java.lang.Object getIsDefaultInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `storageAccountKeyInput`<sup>Optional</sup> <a name="storageAccountKeyInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageAccountKeyInput"></a>

```java
public java.lang.String getStorageAccountKeyInput();
```

- *Type:* java.lang.String

---

##### `storageContainerIdInput`<sup>Optional</sup> <a name="storageContainerIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageContainerIdInput"></a>

```java
public java.lang.String getStorageContainerIdInput();
```

- *Type:* java.lang.String

---

##### `storageResourceIdInput`<sup>Optional</sup> <a name="storageResourceIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageResourceIdInput"></a>

```java
public java.lang.String getStorageResourceIdInput();
```

- *Type:* java.lang.String

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.isDefault"></a>

```java
public java.lang.Object getIsDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `storageAccountKey`<sup>Required</sup> <a name="storageAccountKey" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageAccountKey"></a>

```java
public java.lang.String getStorageAccountKey();
```

- *Type:* java.lang.String

---

##### `storageContainerId`<sup>Required</sup> <a name="storageContainerId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageContainerId"></a>

```java
public java.lang.String getStorageContainerId();
```

- *Type:* java.lang.String

---

##### `storageResourceId`<sup>Required</sup> <a name="storageResourceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageResourceId"></a>

```java
public java.lang.String getStorageResourceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount">HdinsightKafkaClusterStorageAccount</a> OR com.hashicorp.cdktf.IResolvable

---


### HdinsightKafkaClusterTimeoutsOutputReference <a name="HdinsightKafkaClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_kafka_cluster.HdinsightKafkaClusterTimeoutsOutputReference;

new HdinsightKafkaClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts">HdinsightKafkaClusterTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts">HdinsightKafkaClusterTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



