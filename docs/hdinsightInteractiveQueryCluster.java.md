# `hdinsightInteractiveQueryCluster` Submodule <a name="`hdinsightInteractiveQueryCluster` Submodule" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HdinsightInteractiveQueryCluster <a name="HdinsightInteractiveQueryCluster" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster azurerm_hdinsight_interactive_query_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryCluster;

HdinsightInteractiveQueryCluster.Builder.create(Construct scope, java.lang.String id)
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
    .componentVersion(HdinsightInteractiveQueryClusterComponentVersion)
    .gateway(HdinsightInteractiveQueryClusterGateway)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .roles(HdinsightInteractiveQueryClusterRoles)
    .tier(java.lang.String)
//  .computeIsolation(HdinsightInteractiveQueryClusterComputeIsolation)
//  .diskEncryption(IResolvable)
//  .diskEncryption(java.util.List<HdinsightInteractiveQueryClusterDiskEncryption>)
//  .encryptionInTransitEnabled(java.lang.Boolean)
//  .encryptionInTransitEnabled(IResolvable)
//  .extension(HdinsightInteractiveQueryClusterExtension)
//  .id(java.lang.String)
//  .metastores(HdinsightInteractiveQueryClusterMetastores)
//  .monitor(HdinsightInteractiveQueryClusterMonitor)
//  .network(HdinsightInteractiveQueryClusterNetwork)
//  .privateLinkConfiguration(HdinsightInteractiveQueryClusterPrivateLinkConfiguration)
//  .securityProfile(HdinsightInteractiveQueryClusterSecurityProfile)
//  .storageAccount(IResolvable)
//  .storageAccount(java.util.List<HdinsightInteractiveQueryClusterStorageAccount>)
//  .storageAccountGen2(HdinsightInteractiveQueryClusterStorageAccountGen2)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(HdinsightInteractiveQueryClusterTimeouts)
//  .tlsMinVersion(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.clusterVersion">clusterVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#cluster_version HdinsightInteractiveQueryCluster#cluster_version}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.componentVersion">componentVersion</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersion">HdinsightInteractiveQueryClusterComponentVersion</a></code> | component_version block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.gateway">gateway</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway">HdinsightInteractiveQueryClusterGateway</a></code> | gateway block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#location HdinsightInteractiveQueryCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#name HdinsightInteractiveQueryCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#resource_group_name HdinsightInteractiveQueryCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.roles">roles</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles">HdinsightInteractiveQueryClusterRoles</a></code> | roles block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.tier">tier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#tier HdinsightInteractiveQueryCluster#tier}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.computeIsolation">computeIsolation</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation">HdinsightInteractiveQueryClusterComputeIsolation</a></code> | compute_isolation block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.diskEncryption">diskEncryption</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption">HdinsightInteractiveQueryClusterDiskEncryption</a>></code> | disk_encryption block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.encryptionInTransitEnabled">encryptionInTransitEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#encryption_in_transit_enabled HdinsightInteractiveQueryCluster#encryption_in_transit_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.extension">extension</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension">HdinsightInteractiveQueryClusterExtension</a></code> | extension block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#id HdinsightInteractiveQueryCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.metastores">metastores</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores">HdinsightInteractiveQueryClusterMetastores</a></code> | metastores block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.monitor">monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor">HdinsightInteractiveQueryClusterMonitor</a></code> | monitor block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.network">network</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork">HdinsightInteractiveQueryClusterNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.privateLinkConfiguration">privateLinkConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfiguration</a></code> | private_link_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.securityProfile">securityProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile">HdinsightInteractiveQueryClusterSecurityProfile</a></code> | security_profile block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.storageAccount">storageAccount</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount">HdinsightInteractiveQueryClusterStorageAccount</a>></code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.storageAccountGen2">storageAccountGen2</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2">HdinsightInteractiveQueryClusterStorageAccountGen2</a></code> | storage_account_gen2 block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#tags HdinsightInteractiveQueryCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts">HdinsightInteractiveQueryClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.tlsMinVersion">tlsMinVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#tls_min_version HdinsightInteractiveQueryCluster#tls_min_version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterVersion`<sup>Required</sup> <a name="clusterVersion" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.clusterVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#cluster_version HdinsightInteractiveQueryCluster#cluster_version}.

---

##### `componentVersion`<sup>Required</sup> <a name="componentVersion" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.componentVersion"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersion">HdinsightInteractiveQueryClusterComponentVersion</a>

component_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#component_version HdinsightInteractiveQueryCluster#component_version}

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.gateway"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway">HdinsightInteractiveQueryClusterGateway</a>

gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#gateway HdinsightInteractiveQueryCluster#gateway}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#location HdinsightInteractiveQueryCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#name HdinsightInteractiveQueryCluster#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#resource_group_name HdinsightInteractiveQueryCluster#resource_group_name}.

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.roles"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles">HdinsightInteractiveQueryClusterRoles</a>

roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#roles HdinsightInteractiveQueryCluster#roles}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.tier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#tier HdinsightInteractiveQueryCluster#tier}.

---

##### `computeIsolation`<sup>Optional</sup> <a name="computeIsolation" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.computeIsolation"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation">HdinsightInteractiveQueryClusterComputeIsolation</a>

compute_isolation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#compute_isolation HdinsightInteractiveQueryCluster#compute_isolation}

---

##### `diskEncryption`<sup>Optional</sup> <a name="diskEncryption" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.diskEncryption"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption">HdinsightInteractiveQueryClusterDiskEncryption</a>>

disk_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#disk_encryption HdinsightInteractiveQueryCluster#disk_encryption}

---

##### `encryptionInTransitEnabled`<sup>Optional</sup> <a name="encryptionInTransitEnabled" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.encryptionInTransitEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#encryption_in_transit_enabled HdinsightInteractiveQueryCluster#encryption_in_transit_enabled}.

---

##### `extension`<sup>Optional</sup> <a name="extension" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.extension"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension">HdinsightInteractiveQueryClusterExtension</a>

extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#extension HdinsightInteractiveQueryCluster#extension}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#id HdinsightInteractiveQueryCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metastores`<sup>Optional</sup> <a name="metastores" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.metastores"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores">HdinsightInteractiveQueryClusterMetastores</a>

metastores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#metastores HdinsightInteractiveQueryCluster#metastores}

---

##### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.monitor"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor">HdinsightInteractiveQueryClusterMonitor</a>

monitor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#monitor HdinsightInteractiveQueryCluster#monitor}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.network"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork">HdinsightInteractiveQueryClusterNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#network HdinsightInteractiveQueryCluster#network}

---

##### `privateLinkConfiguration`<sup>Optional</sup> <a name="privateLinkConfiguration" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.privateLinkConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfiguration</a>

private_link_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#private_link_configuration HdinsightInteractiveQueryCluster#private_link_configuration}

---

##### `securityProfile`<sup>Optional</sup> <a name="securityProfile" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.securityProfile"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile">HdinsightInteractiveQueryClusterSecurityProfile</a>

security_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#security_profile HdinsightInteractiveQueryCluster#security_profile}

---

##### `storageAccount`<sup>Optional</sup> <a name="storageAccount" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.storageAccount"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount">HdinsightInteractiveQueryClusterStorageAccount</a>>

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#storage_account HdinsightInteractiveQueryCluster#storage_account}

---

##### `storageAccountGen2`<sup>Optional</sup> <a name="storageAccountGen2" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.storageAccountGen2"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2">HdinsightInteractiveQueryClusterStorageAccountGen2</a>

storage_account_gen2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#storage_account_gen2 HdinsightInteractiveQueryCluster#storage_account_gen2}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#tags HdinsightInteractiveQueryCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts">HdinsightInteractiveQueryClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#timeouts HdinsightInteractiveQueryCluster#timeouts}

---

##### `tlsMinVersion`<sup>Optional</sup> <a name="tlsMinVersion" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.tlsMinVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#tls_min_version HdinsightInteractiveQueryCluster#tls_min_version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putComponentVersion">putComponentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putComputeIsolation">putComputeIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putDiskEncryption">putDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putExtension">putExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putGateway">putGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putMetastores">putMetastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putMonitor">putMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putNetwork">putNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putPrivateLinkConfiguration">putPrivateLinkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putRoles">putRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putSecurityProfile">putSecurityProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putStorageAccount">putStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putStorageAccountGen2">putStorageAccountGen2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetComputeIsolation">resetComputeIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetDiskEncryption">resetDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetEncryptionInTransitEnabled">resetEncryptionInTransitEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetExtension">resetExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetMetastores">resetMetastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetMonitor">resetMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetPrivateLinkConfiguration">resetPrivateLinkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetSecurityProfile">resetSecurityProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetStorageAccount">resetStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetStorageAccountGen2">resetStorageAccountGen2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetTlsMinVersion">resetTlsMinVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putComponentVersion` <a name="putComponentVersion" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putComponentVersion"></a>

```java
public void putComponentVersion(HdinsightInteractiveQueryClusterComponentVersion value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putComponentVersion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersion">HdinsightInteractiveQueryClusterComponentVersion</a>

---

##### `putComputeIsolation` <a name="putComputeIsolation" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putComputeIsolation"></a>

```java
public void putComputeIsolation(HdinsightInteractiveQueryClusterComputeIsolation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putComputeIsolation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation">HdinsightInteractiveQueryClusterComputeIsolation</a>

---

##### `putDiskEncryption` <a name="putDiskEncryption" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putDiskEncryption"></a>

```java
public void putDiskEncryption(IResolvable OR java.util.List<HdinsightInteractiveQueryClusterDiskEncryption> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putDiskEncryption.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption">HdinsightInteractiveQueryClusterDiskEncryption</a>>

---

##### `putExtension` <a name="putExtension" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putExtension"></a>

```java
public void putExtension(HdinsightInteractiveQueryClusterExtension value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putExtension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension">HdinsightInteractiveQueryClusterExtension</a>

---

##### `putGateway` <a name="putGateway" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putGateway"></a>

```java
public void putGateway(HdinsightInteractiveQueryClusterGateway value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putGateway.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway">HdinsightInteractiveQueryClusterGateway</a>

---

##### `putMetastores` <a name="putMetastores" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putMetastores"></a>

```java
public void putMetastores(HdinsightInteractiveQueryClusterMetastores value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putMetastores.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores">HdinsightInteractiveQueryClusterMetastores</a>

---

##### `putMonitor` <a name="putMonitor" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putMonitor"></a>

```java
public void putMonitor(HdinsightInteractiveQueryClusterMonitor value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putMonitor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor">HdinsightInteractiveQueryClusterMonitor</a>

---

##### `putNetwork` <a name="putNetwork" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putNetwork"></a>

```java
public void putNetwork(HdinsightInteractiveQueryClusterNetwork value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork">HdinsightInteractiveQueryClusterNetwork</a>

---

##### `putPrivateLinkConfiguration` <a name="putPrivateLinkConfiguration" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putPrivateLinkConfiguration"></a>

```java
public void putPrivateLinkConfiguration(HdinsightInteractiveQueryClusterPrivateLinkConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putPrivateLinkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfiguration</a>

---

##### `putRoles` <a name="putRoles" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putRoles"></a>

```java
public void putRoles(HdinsightInteractiveQueryClusterRoles value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putRoles.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles">HdinsightInteractiveQueryClusterRoles</a>

---

##### `putSecurityProfile` <a name="putSecurityProfile" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putSecurityProfile"></a>

```java
public void putSecurityProfile(HdinsightInteractiveQueryClusterSecurityProfile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putSecurityProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile">HdinsightInteractiveQueryClusterSecurityProfile</a>

---

##### `putStorageAccount` <a name="putStorageAccount" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putStorageAccount"></a>

```java
public void putStorageAccount(IResolvable OR java.util.List<HdinsightInteractiveQueryClusterStorageAccount> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putStorageAccount.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount">HdinsightInteractiveQueryClusterStorageAccount</a>>

---

##### `putStorageAccountGen2` <a name="putStorageAccountGen2" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putStorageAccountGen2"></a>

```java
public void putStorageAccountGen2(HdinsightInteractiveQueryClusterStorageAccountGen2 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putStorageAccountGen2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2">HdinsightInteractiveQueryClusterStorageAccountGen2</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putTimeouts"></a>

```java
public void putTimeouts(HdinsightInteractiveQueryClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts">HdinsightInteractiveQueryClusterTimeouts</a>

---

##### `resetComputeIsolation` <a name="resetComputeIsolation" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetComputeIsolation"></a>

```java
public void resetComputeIsolation()
```

##### `resetDiskEncryption` <a name="resetDiskEncryption" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetDiskEncryption"></a>

```java
public void resetDiskEncryption()
```

##### `resetEncryptionInTransitEnabled` <a name="resetEncryptionInTransitEnabled" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetEncryptionInTransitEnabled"></a>

```java
public void resetEncryptionInTransitEnabled()
```

##### `resetExtension` <a name="resetExtension" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetExtension"></a>

```java
public void resetExtension()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetId"></a>

```java
public void resetId()
```

##### `resetMetastores` <a name="resetMetastores" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetMetastores"></a>

```java
public void resetMetastores()
```

##### `resetMonitor` <a name="resetMonitor" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetMonitor"></a>

```java
public void resetMonitor()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetPrivateLinkConfiguration` <a name="resetPrivateLinkConfiguration" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetPrivateLinkConfiguration"></a>

```java
public void resetPrivateLinkConfiguration()
```

##### `resetSecurityProfile` <a name="resetSecurityProfile" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetSecurityProfile"></a>

```java
public void resetSecurityProfile()
```

##### `resetStorageAccount` <a name="resetStorageAccount" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetStorageAccount"></a>

```java
public void resetStorageAccount()
```

##### `resetStorageAccountGen2` <a name="resetStorageAccountGen2" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetStorageAccountGen2"></a>

```java
public void resetStorageAccountGen2()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTlsMinVersion` <a name="resetTlsMinVersion" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetTlsMinVersion"></a>

```java
public void resetTlsMinVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a HdinsightInteractiveQueryCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryCluster;

HdinsightInteractiveQueryCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryCluster;

HdinsightInteractiveQueryCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryCluster;

HdinsightInteractiveQueryCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryCluster;

HdinsightInteractiveQueryCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),HdinsightInteractiveQueryCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a HdinsightInteractiveQueryCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the HdinsightInteractiveQueryCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing HdinsightInteractiveQueryCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the HdinsightInteractiveQueryCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.componentVersion">componentVersion</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference">HdinsightInteractiveQueryClusterComponentVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.computeIsolation">computeIsolation</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference">HdinsightInteractiveQueryClusterComputeIsolationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.diskEncryption">diskEncryption</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList">HdinsightInteractiveQueryClusterDiskEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.extension">extension</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference">HdinsightInteractiveQueryClusterExtensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.gateway">gateway</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference">HdinsightInteractiveQueryClusterGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.httpsEndpoint">httpsEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.metastores">metastores</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference">HdinsightInteractiveQueryClusterMetastoresOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.monitor">monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference">HdinsightInteractiveQueryClusterMonitorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.network">network</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference">HdinsightInteractiveQueryClusterNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.privateLinkConfiguration">privateLinkConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference">HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.roles">roles</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference">HdinsightInteractiveQueryClusterRolesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.securityProfile">securityProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference">HdinsightInteractiveQueryClusterSecurityProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.sshEndpoint">sshEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.storageAccount">storageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList">HdinsightInteractiveQueryClusterStorageAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.storageAccountGen2">storageAccountGen2</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference">HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference">HdinsightInteractiveQueryClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.clusterVersionInput">clusterVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.componentVersionInput">componentVersionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersion">HdinsightInteractiveQueryClusterComponentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.computeIsolationInput">computeIsolationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation">HdinsightInteractiveQueryClusterComputeIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.diskEncryptionInput">diskEncryptionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption">HdinsightInteractiveQueryClusterDiskEncryption</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.encryptionInTransitEnabledInput">encryptionInTransitEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.extensionInput">extensionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension">HdinsightInteractiveQueryClusterExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.gatewayInput">gatewayInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway">HdinsightInteractiveQueryClusterGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.metastoresInput">metastoresInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores">HdinsightInteractiveQueryClusterMetastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.monitorInput">monitorInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor">HdinsightInteractiveQueryClusterMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.networkInput">networkInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork">HdinsightInteractiveQueryClusterNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.privateLinkConfigurationInput">privateLinkConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.rolesInput">rolesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles">HdinsightInteractiveQueryClusterRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.securityProfileInput">securityProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile">HdinsightInteractiveQueryClusterSecurityProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.storageAccountGen2Input">storageAccountGen2Input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2">HdinsightInteractiveQueryClusterStorageAccountGen2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.storageAccountInput">storageAccountInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount">HdinsightInteractiveQueryClusterStorageAccount</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tierInput">tierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts">HdinsightInteractiveQueryClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tlsMinVersionInput">tlsMinVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.clusterVersion">clusterVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.encryptionInTransitEnabled">encryptionInTransitEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tier">tier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tlsMinVersion">tlsMinVersion</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `componentVersion`<sup>Required</sup> <a name="componentVersion" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.componentVersion"></a>

```java
public HdinsightInteractiveQueryClusterComponentVersionOutputReference getComponentVersion();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference">HdinsightInteractiveQueryClusterComponentVersionOutputReference</a>

---

##### `computeIsolation`<sup>Required</sup> <a name="computeIsolation" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.computeIsolation"></a>

```java
public HdinsightInteractiveQueryClusterComputeIsolationOutputReference getComputeIsolation();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference">HdinsightInteractiveQueryClusterComputeIsolationOutputReference</a>

---

##### `diskEncryption`<sup>Required</sup> <a name="diskEncryption" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.diskEncryption"></a>

```java
public HdinsightInteractiveQueryClusterDiskEncryptionList getDiskEncryption();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList">HdinsightInteractiveQueryClusterDiskEncryptionList</a>

---

##### `extension`<sup>Required</sup> <a name="extension" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.extension"></a>

```java
public HdinsightInteractiveQueryClusterExtensionOutputReference getExtension();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference">HdinsightInteractiveQueryClusterExtensionOutputReference</a>

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.gateway"></a>

```java
public HdinsightInteractiveQueryClusterGatewayOutputReference getGateway();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference">HdinsightInteractiveQueryClusterGatewayOutputReference</a>

---

##### `httpsEndpoint`<sup>Required</sup> <a name="httpsEndpoint" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.httpsEndpoint"></a>

```java
public java.lang.String getHttpsEndpoint();
```

- *Type:* java.lang.String

---

##### `metastores`<sup>Required</sup> <a name="metastores" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.metastores"></a>

```java
public HdinsightInteractiveQueryClusterMetastoresOutputReference getMetastores();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference">HdinsightInteractiveQueryClusterMetastoresOutputReference</a>

---

##### `monitor`<sup>Required</sup> <a name="monitor" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.monitor"></a>

```java
public HdinsightInteractiveQueryClusterMonitorOutputReference getMonitor();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference">HdinsightInteractiveQueryClusterMonitorOutputReference</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.network"></a>

```java
public HdinsightInteractiveQueryClusterNetworkOutputReference getNetwork();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference">HdinsightInteractiveQueryClusterNetworkOutputReference</a>

---

##### `privateLinkConfiguration`<sup>Required</sup> <a name="privateLinkConfiguration" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.privateLinkConfiguration"></a>

```java
public HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference getPrivateLinkConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference">HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference</a>

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.roles"></a>

```java
public HdinsightInteractiveQueryClusterRolesOutputReference getRoles();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference">HdinsightInteractiveQueryClusterRolesOutputReference</a>

---

##### `securityProfile`<sup>Required</sup> <a name="securityProfile" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.securityProfile"></a>

```java
public HdinsightInteractiveQueryClusterSecurityProfileOutputReference getSecurityProfile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference">HdinsightInteractiveQueryClusterSecurityProfileOutputReference</a>

---

##### `sshEndpoint`<sup>Required</sup> <a name="sshEndpoint" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.sshEndpoint"></a>

```java
public java.lang.String getSshEndpoint();
```

- *Type:* java.lang.String

---

##### `storageAccount`<sup>Required</sup> <a name="storageAccount" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.storageAccount"></a>

```java
public HdinsightInteractiveQueryClusterStorageAccountList getStorageAccount();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList">HdinsightInteractiveQueryClusterStorageAccountList</a>

---

##### `storageAccountGen2`<sup>Required</sup> <a name="storageAccountGen2" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.storageAccountGen2"></a>

```java
public HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference getStorageAccountGen2();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference">HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.timeouts"></a>

```java
public HdinsightInteractiveQueryClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference">HdinsightInteractiveQueryClusterTimeoutsOutputReference</a>

---

##### `clusterVersionInput`<sup>Optional</sup> <a name="clusterVersionInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.clusterVersionInput"></a>

```java
public java.lang.String getClusterVersionInput();
```

- *Type:* java.lang.String

---

##### `componentVersionInput`<sup>Optional</sup> <a name="componentVersionInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.componentVersionInput"></a>

```java
public HdinsightInteractiveQueryClusterComponentVersion getComponentVersionInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersion">HdinsightInteractiveQueryClusterComponentVersion</a>

---

##### `computeIsolationInput`<sup>Optional</sup> <a name="computeIsolationInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.computeIsolationInput"></a>

```java
public HdinsightInteractiveQueryClusterComputeIsolation getComputeIsolationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation">HdinsightInteractiveQueryClusterComputeIsolation</a>

---

##### `diskEncryptionInput`<sup>Optional</sup> <a name="diskEncryptionInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.diskEncryptionInput"></a>

```java
public java.lang.Object getDiskEncryptionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption">HdinsightInteractiveQueryClusterDiskEncryption</a>>

---

##### `encryptionInTransitEnabledInput`<sup>Optional</sup> <a name="encryptionInTransitEnabledInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.encryptionInTransitEnabledInput"></a>

```java
public java.lang.Object getEncryptionInTransitEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `extensionInput`<sup>Optional</sup> <a name="extensionInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.extensionInput"></a>

```java
public HdinsightInteractiveQueryClusterExtension getExtensionInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension">HdinsightInteractiveQueryClusterExtension</a>

---

##### `gatewayInput`<sup>Optional</sup> <a name="gatewayInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.gatewayInput"></a>

```java
public HdinsightInteractiveQueryClusterGateway getGatewayInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway">HdinsightInteractiveQueryClusterGateway</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `metastoresInput`<sup>Optional</sup> <a name="metastoresInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.metastoresInput"></a>

```java
public HdinsightInteractiveQueryClusterMetastores getMetastoresInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores">HdinsightInteractiveQueryClusterMetastores</a>

---

##### `monitorInput`<sup>Optional</sup> <a name="monitorInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.monitorInput"></a>

```java
public HdinsightInteractiveQueryClusterMonitor getMonitorInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor">HdinsightInteractiveQueryClusterMonitor</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.networkInput"></a>

```java
public HdinsightInteractiveQueryClusterNetwork getNetworkInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork">HdinsightInteractiveQueryClusterNetwork</a>

---

##### `privateLinkConfigurationInput`<sup>Optional</sup> <a name="privateLinkConfigurationInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.privateLinkConfigurationInput"></a>

```java
public HdinsightInteractiveQueryClusterPrivateLinkConfiguration getPrivateLinkConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfiguration</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.rolesInput"></a>

```java
public HdinsightInteractiveQueryClusterRoles getRolesInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles">HdinsightInteractiveQueryClusterRoles</a>

---

##### `securityProfileInput`<sup>Optional</sup> <a name="securityProfileInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.securityProfileInput"></a>

```java
public HdinsightInteractiveQueryClusterSecurityProfile getSecurityProfileInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile">HdinsightInteractiveQueryClusterSecurityProfile</a>

---

##### `storageAccountGen2Input`<sup>Optional</sup> <a name="storageAccountGen2Input" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.storageAccountGen2Input"></a>

```java
public HdinsightInteractiveQueryClusterStorageAccountGen2 getStorageAccountGen2Input();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2">HdinsightInteractiveQueryClusterStorageAccountGen2</a>

---

##### `storageAccountInput`<sup>Optional</sup> <a name="storageAccountInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.storageAccountInput"></a>

```java
public java.lang.Object getStorageAccountInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount">HdinsightInteractiveQueryClusterStorageAccount</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tierInput"></a>

```java
public java.lang.String getTierInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts">HdinsightInteractiveQueryClusterTimeouts</a>

---

##### `tlsMinVersionInput`<sup>Optional</sup> <a name="tlsMinVersionInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tlsMinVersionInput"></a>

```java
public java.lang.String getTlsMinVersionInput();
```

- *Type:* java.lang.String

---

##### `clusterVersion`<sup>Required</sup> <a name="clusterVersion" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.clusterVersion"></a>

```java
public java.lang.String getClusterVersion();
```

- *Type:* java.lang.String

---

##### `encryptionInTransitEnabled`<sup>Required</sup> <a name="encryptionInTransitEnabled" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.encryptionInTransitEnabled"></a>

```java
public java.lang.Object getEncryptionInTransitEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

---

##### `tlsMinVersion`<sup>Required</sup> <a name="tlsMinVersion" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tlsMinVersion"></a>

```java
public java.lang.String getTlsMinVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### HdinsightInteractiveQueryClusterComponentVersion <a name="HdinsightInteractiveQueryClusterComponentVersion" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterComponentVersion;

HdinsightInteractiveQueryClusterComponentVersion.builder()
    .interactiveHive(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersion.property.interactiveHive">interactiveHive</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#interactive_hive HdinsightInteractiveQueryCluster#interactive_hive}. |

---

##### `interactiveHive`<sup>Required</sup> <a name="interactiveHive" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersion.property.interactiveHive"></a>

```java
public java.lang.String getInteractiveHive();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#interactive_hive HdinsightInteractiveQueryCluster#interactive_hive}.

---

### HdinsightInteractiveQueryClusterComputeIsolation <a name="HdinsightInteractiveQueryClusterComputeIsolation" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterComputeIsolation;

HdinsightInteractiveQueryClusterComputeIsolation.builder()
//  .computeIsolationEnabled(java.lang.Boolean)
//  .computeIsolationEnabled(IResolvable)
//  .hostSku(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation.property.computeIsolationEnabled">computeIsolationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#compute_isolation_enabled HdinsightInteractiveQueryCluster#compute_isolation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation.property.hostSku">hostSku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#host_sku HdinsightInteractiveQueryCluster#host_sku}. |

---

##### `computeIsolationEnabled`<sup>Optional</sup> <a name="computeIsolationEnabled" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation.property.computeIsolationEnabled"></a>

```java
public java.lang.Object getComputeIsolationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#compute_isolation_enabled HdinsightInteractiveQueryCluster#compute_isolation_enabled}.

---

##### `hostSku`<sup>Optional</sup> <a name="hostSku" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation.property.hostSku"></a>

```java
public java.lang.String getHostSku();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#host_sku HdinsightInteractiveQueryCluster#host_sku}.

---

### HdinsightInteractiveQueryClusterConfig <a name="HdinsightInteractiveQueryClusterConfig" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterConfig;

HdinsightInteractiveQueryClusterConfig.builder()
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
    .componentVersion(HdinsightInteractiveQueryClusterComponentVersion)
    .gateway(HdinsightInteractiveQueryClusterGateway)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .roles(HdinsightInteractiveQueryClusterRoles)
    .tier(java.lang.String)
//  .computeIsolation(HdinsightInteractiveQueryClusterComputeIsolation)
//  .diskEncryption(IResolvable)
//  .diskEncryption(java.util.List<HdinsightInteractiveQueryClusterDiskEncryption>)
//  .encryptionInTransitEnabled(java.lang.Boolean)
//  .encryptionInTransitEnabled(IResolvable)
//  .extension(HdinsightInteractiveQueryClusterExtension)
//  .id(java.lang.String)
//  .metastores(HdinsightInteractiveQueryClusterMetastores)
//  .monitor(HdinsightInteractiveQueryClusterMonitor)
//  .network(HdinsightInteractiveQueryClusterNetwork)
//  .privateLinkConfiguration(HdinsightInteractiveQueryClusterPrivateLinkConfiguration)
//  .securityProfile(HdinsightInteractiveQueryClusterSecurityProfile)
//  .storageAccount(IResolvable)
//  .storageAccount(java.util.List<HdinsightInteractiveQueryClusterStorageAccount>)
//  .storageAccountGen2(HdinsightInteractiveQueryClusterStorageAccountGen2)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(HdinsightInteractiveQueryClusterTimeouts)
//  .tlsMinVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.clusterVersion">clusterVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#cluster_version HdinsightInteractiveQueryCluster#cluster_version}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.componentVersion">componentVersion</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersion">HdinsightInteractiveQueryClusterComponentVersion</a></code> | component_version block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.gateway">gateway</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway">HdinsightInteractiveQueryClusterGateway</a></code> | gateway block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#location HdinsightInteractiveQueryCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#name HdinsightInteractiveQueryCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#resource_group_name HdinsightInteractiveQueryCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.roles">roles</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles">HdinsightInteractiveQueryClusterRoles</a></code> | roles block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.tier">tier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#tier HdinsightInteractiveQueryCluster#tier}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.computeIsolation">computeIsolation</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation">HdinsightInteractiveQueryClusterComputeIsolation</a></code> | compute_isolation block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.diskEncryption">diskEncryption</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption">HdinsightInteractiveQueryClusterDiskEncryption</a>></code> | disk_encryption block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.encryptionInTransitEnabled">encryptionInTransitEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#encryption_in_transit_enabled HdinsightInteractiveQueryCluster#encryption_in_transit_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.extension">extension</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension">HdinsightInteractiveQueryClusterExtension</a></code> | extension block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#id HdinsightInteractiveQueryCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.metastores">metastores</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores">HdinsightInteractiveQueryClusterMetastores</a></code> | metastores block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.monitor">monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor">HdinsightInteractiveQueryClusterMonitor</a></code> | monitor block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.network">network</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork">HdinsightInteractiveQueryClusterNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.privateLinkConfiguration">privateLinkConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfiguration</a></code> | private_link_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.securityProfile">securityProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile">HdinsightInteractiveQueryClusterSecurityProfile</a></code> | security_profile block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.storageAccount">storageAccount</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount">HdinsightInteractiveQueryClusterStorageAccount</a>></code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.storageAccountGen2">storageAccountGen2</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2">HdinsightInteractiveQueryClusterStorageAccountGen2</a></code> | storage_account_gen2 block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#tags HdinsightInteractiveQueryCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts">HdinsightInteractiveQueryClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.tlsMinVersion">tlsMinVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#tls_min_version HdinsightInteractiveQueryCluster#tls_min_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterVersion`<sup>Required</sup> <a name="clusterVersion" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.clusterVersion"></a>

```java
public java.lang.String getClusterVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#cluster_version HdinsightInteractiveQueryCluster#cluster_version}.

---

##### `componentVersion`<sup>Required</sup> <a name="componentVersion" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.componentVersion"></a>

```java
public HdinsightInteractiveQueryClusterComponentVersion getComponentVersion();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersion">HdinsightInteractiveQueryClusterComponentVersion</a>

component_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#component_version HdinsightInteractiveQueryCluster#component_version}

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.gateway"></a>

```java
public HdinsightInteractiveQueryClusterGateway getGateway();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway">HdinsightInteractiveQueryClusterGateway</a>

gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#gateway HdinsightInteractiveQueryCluster#gateway}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#location HdinsightInteractiveQueryCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#name HdinsightInteractiveQueryCluster#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#resource_group_name HdinsightInteractiveQueryCluster#resource_group_name}.

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.roles"></a>

```java
public HdinsightInteractiveQueryClusterRoles getRoles();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles">HdinsightInteractiveQueryClusterRoles</a>

roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#roles HdinsightInteractiveQueryCluster#roles}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#tier HdinsightInteractiveQueryCluster#tier}.

---

##### `computeIsolation`<sup>Optional</sup> <a name="computeIsolation" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.computeIsolation"></a>

```java
public HdinsightInteractiveQueryClusterComputeIsolation getComputeIsolation();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation">HdinsightInteractiveQueryClusterComputeIsolation</a>

compute_isolation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#compute_isolation HdinsightInteractiveQueryCluster#compute_isolation}

---

##### `diskEncryption`<sup>Optional</sup> <a name="diskEncryption" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.diskEncryption"></a>

```java
public java.lang.Object getDiskEncryption();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption">HdinsightInteractiveQueryClusterDiskEncryption</a>>

disk_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#disk_encryption HdinsightInteractiveQueryCluster#disk_encryption}

---

##### `encryptionInTransitEnabled`<sup>Optional</sup> <a name="encryptionInTransitEnabled" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.encryptionInTransitEnabled"></a>

```java
public java.lang.Object getEncryptionInTransitEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#encryption_in_transit_enabled HdinsightInteractiveQueryCluster#encryption_in_transit_enabled}.

---

##### `extension`<sup>Optional</sup> <a name="extension" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.extension"></a>

```java
public HdinsightInteractiveQueryClusterExtension getExtension();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension">HdinsightInteractiveQueryClusterExtension</a>

extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#extension HdinsightInteractiveQueryCluster#extension}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#id HdinsightInteractiveQueryCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metastores`<sup>Optional</sup> <a name="metastores" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.metastores"></a>

```java
public HdinsightInteractiveQueryClusterMetastores getMetastores();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores">HdinsightInteractiveQueryClusterMetastores</a>

metastores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#metastores HdinsightInteractiveQueryCluster#metastores}

---

##### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.monitor"></a>

```java
public HdinsightInteractiveQueryClusterMonitor getMonitor();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor">HdinsightInteractiveQueryClusterMonitor</a>

monitor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#monitor HdinsightInteractiveQueryCluster#monitor}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.network"></a>

```java
public HdinsightInteractiveQueryClusterNetwork getNetwork();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork">HdinsightInteractiveQueryClusterNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#network HdinsightInteractiveQueryCluster#network}

---

##### `privateLinkConfiguration`<sup>Optional</sup> <a name="privateLinkConfiguration" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.privateLinkConfiguration"></a>

```java
public HdinsightInteractiveQueryClusterPrivateLinkConfiguration getPrivateLinkConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfiguration</a>

private_link_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#private_link_configuration HdinsightInteractiveQueryCluster#private_link_configuration}

---

##### `securityProfile`<sup>Optional</sup> <a name="securityProfile" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.securityProfile"></a>

```java
public HdinsightInteractiveQueryClusterSecurityProfile getSecurityProfile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile">HdinsightInteractiveQueryClusterSecurityProfile</a>

security_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#security_profile HdinsightInteractiveQueryCluster#security_profile}

---

##### `storageAccount`<sup>Optional</sup> <a name="storageAccount" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.storageAccount"></a>

```java
public java.lang.Object getStorageAccount();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount">HdinsightInteractiveQueryClusterStorageAccount</a>>

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#storage_account HdinsightInteractiveQueryCluster#storage_account}

---

##### `storageAccountGen2`<sup>Optional</sup> <a name="storageAccountGen2" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.storageAccountGen2"></a>

```java
public HdinsightInteractiveQueryClusterStorageAccountGen2 getStorageAccountGen2();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2">HdinsightInteractiveQueryClusterStorageAccountGen2</a>

storage_account_gen2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#storage_account_gen2 HdinsightInteractiveQueryCluster#storage_account_gen2}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#tags HdinsightInteractiveQueryCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.timeouts"></a>

```java
public HdinsightInteractiveQueryClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts">HdinsightInteractiveQueryClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#timeouts HdinsightInteractiveQueryCluster#timeouts}

---

##### `tlsMinVersion`<sup>Optional</sup> <a name="tlsMinVersion" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.tlsMinVersion"></a>

```java
public java.lang.String getTlsMinVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#tls_min_version HdinsightInteractiveQueryCluster#tls_min_version}.

---

### HdinsightInteractiveQueryClusterDiskEncryption <a name="HdinsightInteractiveQueryClusterDiskEncryption" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterDiskEncryption;

HdinsightInteractiveQueryClusterDiskEncryption.builder()
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
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#encryption_algorithm HdinsightInteractiveQueryCluster#encryption_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption.property.encryptionAtHostEnabled">encryptionAtHostEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#encryption_at_host_enabled HdinsightInteractiveQueryCluster#encryption_at_host_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#key_vault_key_id HdinsightInteractiveQueryCluster#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption.property.keyVaultManagedIdentityId">keyVaultManagedIdentityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#key_vault_managed_identity_id HdinsightInteractiveQueryCluster#key_vault_managed_identity_id}. |

---

##### `encryptionAlgorithm`<sup>Optional</sup> <a name="encryptionAlgorithm" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption.property.encryptionAlgorithm"></a>

```java
public java.lang.String getEncryptionAlgorithm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#encryption_algorithm HdinsightInteractiveQueryCluster#encryption_algorithm}.

---

##### `encryptionAtHostEnabled`<sup>Optional</sup> <a name="encryptionAtHostEnabled" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption.property.encryptionAtHostEnabled"></a>

```java
public java.lang.Object getEncryptionAtHostEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#encryption_at_host_enabled HdinsightInteractiveQueryCluster#encryption_at_host_enabled}.

---

##### `keyVaultKeyId`<sup>Optional</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption.property.keyVaultKeyId"></a>

```java
public java.lang.String getKeyVaultKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#key_vault_key_id HdinsightInteractiveQueryCluster#key_vault_key_id}.

---

##### `keyVaultManagedIdentityId`<sup>Optional</sup> <a name="keyVaultManagedIdentityId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption.property.keyVaultManagedIdentityId"></a>

```java
public java.lang.String getKeyVaultManagedIdentityId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#key_vault_managed_identity_id HdinsightInteractiveQueryCluster#key_vault_managed_identity_id}.

---

### HdinsightInteractiveQueryClusterExtension <a name="HdinsightInteractiveQueryClusterExtension" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterExtension;

HdinsightInteractiveQueryClusterExtension.builder()
    .logAnalyticsWorkspaceId(java.lang.String)
    .primaryKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#log_analytics_workspace_id HdinsightInteractiveQueryCluster#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension.property.primaryKey">primaryKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#primary_key HdinsightInteractiveQueryCluster#primary_key}. |

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension.property.logAnalyticsWorkspaceId"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#log_analytics_workspace_id HdinsightInteractiveQueryCluster#log_analytics_workspace_id}.

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension.property.primaryKey"></a>

```java
public java.lang.String getPrimaryKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#primary_key HdinsightInteractiveQueryCluster#primary_key}.

---

### HdinsightInteractiveQueryClusterGateway <a name="HdinsightInteractiveQueryClusterGateway" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterGateway;

HdinsightInteractiveQueryClusterGateway.builder()
    .password(java.lang.String)
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}.

---

### HdinsightInteractiveQueryClusterMetastores <a name="HdinsightInteractiveQueryClusterMetastores" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterMetastores;

HdinsightInteractiveQueryClusterMetastores.builder()
//  .ambari(HdinsightInteractiveQueryClusterMetastoresAmbari)
//  .hive(HdinsightInteractiveQueryClusterMetastoresHive)
//  .oozie(HdinsightInteractiveQueryClusterMetastoresOozie)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores.property.ambari">ambari</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari">HdinsightInteractiveQueryClusterMetastoresAmbari</a></code> | ambari block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores.property.hive">hive</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive">HdinsightInteractiveQueryClusterMetastoresHive</a></code> | hive block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores.property.oozie">oozie</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie">HdinsightInteractiveQueryClusterMetastoresOozie</a></code> | oozie block. |

---

##### `ambari`<sup>Optional</sup> <a name="ambari" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores.property.ambari"></a>

```java
public HdinsightInteractiveQueryClusterMetastoresAmbari getAmbari();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari">HdinsightInteractiveQueryClusterMetastoresAmbari</a>

ambari block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#ambari HdinsightInteractiveQueryCluster#ambari}

---

##### `hive`<sup>Optional</sup> <a name="hive" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores.property.hive"></a>

```java
public HdinsightInteractiveQueryClusterMetastoresHive getHive();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive">HdinsightInteractiveQueryClusterMetastoresHive</a>

hive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#hive HdinsightInteractiveQueryCluster#hive}

---

##### `oozie`<sup>Optional</sup> <a name="oozie" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores.property.oozie"></a>

```java
public HdinsightInteractiveQueryClusterMetastoresOozie getOozie();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie">HdinsightInteractiveQueryClusterMetastoresOozie</a>

oozie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#oozie HdinsightInteractiveQueryCluster#oozie}

---

### HdinsightInteractiveQueryClusterMetastoresAmbari <a name="HdinsightInteractiveQueryClusterMetastoresAmbari" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterMetastoresAmbari;

HdinsightInteractiveQueryClusterMetastoresAmbari.builder()
    .databaseName(java.lang.String)
    .password(java.lang.String)
    .server(java.lang.String)
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#database_name HdinsightInteractiveQueryCluster#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari.property.server">server</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#server HdinsightInteractiveQueryCluster#server}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#database_name HdinsightInteractiveQueryCluster#database_name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari.property.server"></a>

```java
public java.lang.String getServer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#server HdinsightInteractiveQueryCluster#server}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}.

---

### HdinsightInteractiveQueryClusterMetastoresHive <a name="HdinsightInteractiveQueryClusterMetastoresHive" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterMetastoresHive;

HdinsightInteractiveQueryClusterMetastoresHive.builder()
    .databaseName(java.lang.String)
    .password(java.lang.String)
    .server(java.lang.String)
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#database_name HdinsightInteractiveQueryCluster#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive.property.server">server</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#server HdinsightInteractiveQueryCluster#server}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#database_name HdinsightInteractiveQueryCluster#database_name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive.property.server"></a>

```java
public java.lang.String getServer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#server HdinsightInteractiveQueryCluster#server}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}.

---

### HdinsightInteractiveQueryClusterMetastoresOozie <a name="HdinsightInteractiveQueryClusterMetastoresOozie" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterMetastoresOozie;

HdinsightInteractiveQueryClusterMetastoresOozie.builder()
    .databaseName(java.lang.String)
    .password(java.lang.String)
    .server(java.lang.String)
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#database_name HdinsightInteractiveQueryCluster#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie.property.server">server</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#server HdinsightInteractiveQueryCluster#server}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#database_name HdinsightInteractiveQueryCluster#database_name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie.property.server"></a>

```java
public java.lang.String getServer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#server HdinsightInteractiveQueryCluster#server}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}.

---

### HdinsightInteractiveQueryClusterMonitor <a name="HdinsightInteractiveQueryClusterMonitor" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterMonitor;

HdinsightInteractiveQueryClusterMonitor.builder()
    .logAnalyticsWorkspaceId(java.lang.String)
    .primaryKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#log_analytics_workspace_id HdinsightInteractiveQueryCluster#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor.property.primaryKey">primaryKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#primary_key HdinsightInteractiveQueryCluster#primary_key}. |

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor.property.logAnalyticsWorkspaceId"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#log_analytics_workspace_id HdinsightInteractiveQueryCluster#log_analytics_workspace_id}.

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor.property.primaryKey"></a>

```java
public java.lang.String getPrimaryKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#primary_key HdinsightInteractiveQueryCluster#primary_key}.

---

### HdinsightInteractiveQueryClusterNetwork <a name="HdinsightInteractiveQueryClusterNetwork" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterNetwork;

HdinsightInteractiveQueryClusterNetwork.builder()
//  .connectionDirection(java.lang.String)
//  .privateLinkEnabled(java.lang.Boolean)
//  .privateLinkEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork.property.connectionDirection">connectionDirection</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#connection_direction HdinsightInteractiveQueryCluster#connection_direction}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork.property.privateLinkEnabled">privateLinkEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#private_link_enabled HdinsightInteractiveQueryCluster#private_link_enabled}. |

---

##### `connectionDirection`<sup>Optional</sup> <a name="connectionDirection" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork.property.connectionDirection"></a>

```java
public java.lang.String getConnectionDirection();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#connection_direction HdinsightInteractiveQueryCluster#connection_direction}.

---

##### `privateLinkEnabled`<sup>Optional</sup> <a name="privateLinkEnabled" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork.property.privateLinkEnabled"></a>

```java
public java.lang.Object getPrivateLinkEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#private_link_enabled HdinsightInteractiveQueryCluster#private_link_enabled}.

---

### HdinsightInteractiveQueryClusterPrivateLinkConfiguration <a name="HdinsightInteractiveQueryClusterPrivateLinkConfiguration" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration;

HdinsightInteractiveQueryClusterPrivateLinkConfiguration.builder()
    .groupId(java.lang.String)
    .ipConfiguration(HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration.property.groupId">groupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#group_id HdinsightInteractiveQueryCluster#group_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration.property.ipConfiguration">ipConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration</a></code> | ip_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#name HdinsightInteractiveQueryCluster#name}. |

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#group_id HdinsightInteractiveQueryCluster#group_id}.

---

##### `ipConfiguration`<sup>Required</sup> <a name="ipConfiguration" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration.property.ipConfiguration"></a>

```java
public HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration getIpConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration</a>

ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#ip_configuration HdinsightInteractiveQueryCluster#ip_configuration}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#name HdinsightInteractiveQueryCluster#name}.

---

### HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration <a name="HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration;

HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration.builder()
    .name(java.lang.String)
//  .primary(java.lang.Boolean)
//  .primary(IResolvable)
//  .privateIpAddress(java.lang.String)
//  .privateIpAllocationMethod(java.lang.String)
//  .subnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#name HdinsightInteractiveQueryCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration.property.primary">primary</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#primary HdinsightInteractiveQueryCluster#primary}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration.property.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#private_ip_address HdinsightInteractiveQueryCluster#private_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration.property.privateIpAllocationMethod">privateIpAllocationMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#private_ip_allocation_method HdinsightInteractiveQueryCluster#private_ip_allocation_method}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#subnet_id HdinsightInteractiveQueryCluster#subnet_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#name HdinsightInteractiveQueryCluster#name}.

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration.property.primary"></a>

```java
public java.lang.Object getPrimary();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#primary HdinsightInteractiveQueryCluster#primary}.

---

##### `privateIpAddress`<sup>Optional</sup> <a name="privateIpAddress" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration.property.privateIpAddress"></a>

```java
public java.lang.String getPrivateIpAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#private_ip_address HdinsightInteractiveQueryCluster#private_ip_address}.

---

##### `privateIpAllocationMethod`<sup>Optional</sup> <a name="privateIpAllocationMethod" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration.property.privateIpAllocationMethod"></a>

```java
public java.lang.String getPrivateIpAllocationMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#private_ip_allocation_method HdinsightInteractiveQueryCluster#private_ip_allocation_method}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#subnet_id HdinsightInteractiveQueryCluster#subnet_id}.

---

### HdinsightInteractiveQueryClusterRoles <a name="HdinsightInteractiveQueryClusterRoles" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterRoles;

HdinsightInteractiveQueryClusterRoles.builder()
    .headNode(HdinsightInteractiveQueryClusterRolesHeadNode)
    .workerNode(HdinsightInteractiveQueryClusterRolesWorkerNode)
    .zookeeperNode(HdinsightInteractiveQueryClusterRolesZookeeperNode)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles.property.headNode">headNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode">HdinsightInteractiveQueryClusterRolesHeadNode</a></code> | head_node block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles.property.workerNode">workerNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode">HdinsightInteractiveQueryClusterRolesWorkerNode</a></code> | worker_node block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles.property.zookeeperNode">zookeeperNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode">HdinsightInteractiveQueryClusterRolesZookeeperNode</a></code> | zookeeper_node block. |

---

##### `headNode`<sup>Required</sup> <a name="headNode" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles.property.headNode"></a>

```java
public HdinsightInteractiveQueryClusterRolesHeadNode getHeadNode();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode">HdinsightInteractiveQueryClusterRolesHeadNode</a>

head_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#head_node HdinsightInteractiveQueryCluster#head_node}

---

##### `workerNode`<sup>Required</sup> <a name="workerNode" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles.property.workerNode"></a>

```java
public HdinsightInteractiveQueryClusterRolesWorkerNode getWorkerNode();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode">HdinsightInteractiveQueryClusterRolesWorkerNode</a>

worker_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#worker_node HdinsightInteractiveQueryCluster#worker_node}

---

##### `zookeeperNode`<sup>Required</sup> <a name="zookeeperNode" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles.property.zookeeperNode"></a>

```java
public HdinsightInteractiveQueryClusterRolesZookeeperNode getZookeeperNode();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode">HdinsightInteractiveQueryClusterRolesZookeeperNode</a>

zookeeper_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#zookeeper_node HdinsightInteractiveQueryCluster#zookeeper_node}

---

### HdinsightInteractiveQueryClusterRolesHeadNode <a name="HdinsightInteractiveQueryClusterRolesHeadNode" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterRolesHeadNode;

HdinsightInteractiveQueryClusterRolesHeadNode.builder()
    .username(java.lang.String)
    .vmSize(java.lang.String)
//  .password(java.lang.String)
//  .scriptActions(IResolvable)
//  .scriptActions(java.util.List<HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions>)
//  .sshKeys(java.util.List<java.lang.String>)
//  .subnetId(java.lang.String)
//  .virtualNetworkId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.vmSize">vmSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#vm_size HdinsightInteractiveQueryCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.scriptActions">scriptActions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions">HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions</a>></code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.sshKeys">sshKeys</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#ssh_keys HdinsightInteractiveQueryCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#subnet_id HdinsightInteractiveQueryCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#virtual_network_id HdinsightInteractiveQueryCluster#virtual_network_id}. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}.

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.vmSize"></a>

```java
public java.lang.String getVmSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#vm_size HdinsightInteractiveQueryCluster#vm_size}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}.

---

##### `scriptActions`<sup>Optional</sup> <a name="scriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.scriptActions"></a>

```java
public java.lang.Object getScriptActions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions">HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions</a>>

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#script_actions HdinsightInteractiveQueryCluster#script_actions}

---

##### `sshKeys`<sup>Optional</sup> <a name="sshKeys" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.sshKeys"></a>

```java
public java.util.List<java.lang.String> getSshKeys();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#ssh_keys HdinsightInteractiveQueryCluster#ssh_keys}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#subnet_id HdinsightInteractiveQueryCluster#subnet_id}.

---

##### `virtualNetworkId`<sup>Optional</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#virtual_network_id HdinsightInteractiveQueryCluster#virtual_network_id}.

---

### HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions <a name="HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions;

HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions.builder()
    .name(java.lang.String)
    .uri(java.lang.String)
//  .parameters(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#name HdinsightInteractiveQueryCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions.property.uri">uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#uri HdinsightInteractiveQueryCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions.property.parameters">parameters</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#parameters HdinsightInteractiveQueryCluster#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#name HdinsightInteractiveQueryCluster#name}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#uri HdinsightInteractiveQueryCluster#uri}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#parameters HdinsightInteractiveQueryCluster#parameters}.

---

### HdinsightInteractiveQueryClusterRolesWorkerNode <a name="HdinsightInteractiveQueryClusterRolesWorkerNode" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterRolesWorkerNode;

HdinsightInteractiveQueryClusterRolesWorkerNode.builder()
    .targetInstanceCount(java.lang.Number)
    .username(java.lang.String)
    .vmSize(java.lang.String)
//  .autoscale(HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale)
//  .password(java.lang.String)
//  .scriptActions(IResolvable)
//  .scriptActions(java.util.List<HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions>)
//  .sshKeys(java.util.List<java.lang.String>)
//  .subnetId(java.lang.String)
//  .virtualNetworkId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.targetInstanceCount">targetInstanceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#target_instance_count HdinsightInteractiveQueryCluster#target_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.vmSize">vmSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#vm_size HdinsightInteractiveQueryCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.autoscale">autoscale</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale</a></code> | autoscale block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.scriptActions">scriptActions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions">HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions</a>></code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.sshKeys">sshKeys</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#ssh_keys HdinsightInteractiveQueryCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#subnet_id HdinsightInteractiveQueryCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#virtual_network_id HdinsightInteractiveQueryCluster#virtual_network_id}. |

---

##### `targetInstanceCount`<sup>Required</sup> <a name="targetInstanceCount" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.targetInstanceCount"></a>

```java
public java.lang.Number getTargetInstanceCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#target_instance_count HdinsightInteractiveQueryCluster#target_instance_count}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}.

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.vmSize"></a>

```java
public java.lang.String getVmSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#vm_size HdinsightInteractiveQueryCluster#vm_size}.

---

##### `autoscale`<sup>Optional</sup> <a name="autoscale" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.autoscale"></a>

```java
public HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale getAutoscale();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale</a>

autoscale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#autoscale HdinsightInteractiveQueryCluster#autoscale}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}.

---

##### `scriptActions`<sup>Optional</sup> <a name="scriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.scriptActions"></a>

```java
public java.lang.Object getScriptActions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions">HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions</a>>

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#script_actions HdinsightInteractiveQueryCluster#script_actions}

---

##### `sshKeys`<sup>Optional</sup> <a name="sshKeys" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.sshKeys"></a>

```java
public java.util.List<java.lang.String> getSshKeys();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#ssh_keys HdinsightInteractiveQueryCluster#ssh_keys}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#subnet_id HdinsightInteractiveQueryCluster#subnet_id}.

---

##### `virtualNetworkId`<sup>Optional</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#virtual_network_id HdinsightInteractiveQueryCluster#virtual_network_id}.

---

### HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale <a name="HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale;

HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale.builder()
//  .recurrence(HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale.property.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence</a></code> | recurrence block. |

---

##### `recurrence`<sup>Optional</sup> <a name="recurrence" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale.property.recurrence"></a>

```java
public HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence getRecurrence();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence</a>

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#recurrence HdinsightInteractiveQueryCluster#recurrence}

---

### HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence <a name="HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence;

HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence.builder()
    .schedule(IResolvable)
    .schedule(java.util.List<HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule>)
    .timezone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence.property.schedule">schedule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>></code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence.property.timezone">timezone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#timezone HdinsightInteractiveQueryCluster#timezone}. |

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence.property.schedule"></a>

```java
public java.lang.Object getSchedule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#schedule HdinsightInteractiveQueryCluster#schedule}

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#timezone HdinsightInteractiveQueryCluster#timezone}.

---

### HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule <a name="HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule;

HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.builder()
    .days(java.util.List<java.lang.String>)
    .targetInstanceCount(java.lang.Number)
    .time(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.days">days</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#days HdinsightInteractiveQueryCluster#days}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.targetInstanceCount">targetInstanceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#target_instance_count HdinsightInteractiveQueryCluster#target_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.time">time</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#time HdinsightInteractiveQueryCluster#time}. |

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.days"></a>

```java
public java.util.List<java.lang.String> getDays();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#days HdinsightInteractiveQueryCluster#days}.

---

##### `targetInstanceCount`<sup>Required</sup> <a name="targetInstanceCount" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.targetInstanceCount"></a>

```java
public java.lang.Number getTargetInstanceCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#target_instance_count HdinsightInteractiveQueryCluster#target_instance_count}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.time"></a>

```java
public java.lang.String getTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#time HdinsightInteractiveQueryCluster#time}.

---

### HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions <a name="HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions;

HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions.builder()
    .name(java.lang.String)
    .uri(java.lang.String)
//  .parameters(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#name HdinsightInteractiveQueryCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions.property.uri">uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#uri HdinsightInteractiveQueryCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions.property.parameters">parameters</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#parameters HdinsightInteractiveQueryCluster#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#name HdinsightInteractiveQueryCluster#name}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#uri HdinsightInteractiveQueryCluster#uri}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#parameters HdinsightInteractiveQueryCluster#parameters}.

---

### HdinsightInteractiveQueryClusterRolesZookeeperNode <a name="HdinsightInteractiveQueryClusterRolesZookeeperNode" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterRolesZookeeperNode;

HdinsightInteractiveQueryClusterRolesZookeeperNode.builder()
    .username(java.lang.String)
    .vmSize(java.lang.String)
//  .password(java.lang.String)
//  .scriptActions(IResolvable)
//  .scriptActions(java.util.List<HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions>)
//  .sshKeys(java.util.List<java.lang.String>)
//  .subnetId(java.lang.String)
//  .virtualNetworkId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.vmSize">vmSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#vm_size HdinsightInteractiveQueryCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.scriptActions">scriptActions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions">HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions</a>></code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.sshKeys">sshKeys</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#ssh_keys HdinsightInteractiveQueryCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#subnet_id HdinsightInteractiveQueryCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#virtual_network_id HdinsightInteractiveQueryCluster#virtual_network_id}. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}.

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.vmSize"></a>

```java
public java.lang.String getVmSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#vm_size HdinsightInteractiveQueryCluster#vm_size}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}.

---

##### `scriptActions`<sup>Optional</sup> <a name="scriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.scriptActions"></a>

```java
public java.lang.Object getScriptActions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions">HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions</a>>

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#script_actions HdinsightInteractiveQueryCluster#script_actions}

---

##### `sshKeys`<sup>Optional</sup> <a name="sshKeys" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.sshKeys"></a>

```java
public java.util.List<java.lang.String> getSshKeys();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#ssh_keys HdinsightInteractiveQueryCluster#ssh_keys}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#subnet_id HdinsightInteractiveQueryCluster#subnet_id}.

---

##### `virtualNetworkId`<sup>Optional</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#virtual_network_id HdinsightInteractiveQueryCluster#virtual_network_id}.

---

### HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions <a name="HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions;

HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions.builder()
    .name(java.lang.String)
    .uri(java.lang.String)
//  .parameters(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#name HdinsightInteractiveQueryCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions.property.uri">uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#uri HdinsightInteractiveQueryCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions.property.parameters">parameters</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#parameters HdinsightInteractiveQueryCluster#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#name HdinsightInteractiveQueryCluster#name}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#uri HdinsightInteractiveQueryCluster#uri}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#parameters HdinsightInteractiveQueryCluster#parameters}.

---

### HdinsightInteractiveQueryClusterSecurityProfile <a name="HdinsightInteractiveQueryClusterSecurityProfile" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterSecurityProfile;

HdinsightInteractiveQueryClusterSecurityProfile.builder()
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
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.aaddsResourceId">aaddsResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#aadds_resource_id HdinsightInteractiveQueryCluster#aadds_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#domain_name HdinsightInteractiveQueryCluster#domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.domainUsername">domainUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#domain_username HdinsightInteractiveQueryCluster#domain_username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.domainUserPassword">domainUserPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#domain_user_password HdinsightInteractiveQueryCluster#domain_user_password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.ldapsUrls">ldapsUrls</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#ldaps_urls HdinsightInteractiveQueryCluster#ldaps_urls}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.msiResourceId">msiResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#msi_resource_id HdinsightInteractiveQueryCluster#msi_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.clusterUsersGroupDns">clusterUsersGroupDns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#cluster_users_group_dns HdinsightInteractiveQueryCluster#cluster_users_group_dns}. |

---

##### `aaddsResourceId`<sup>Required</sup> <a name="aaddsResourceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.aaddsResourceId"></a>

```java
public java.lang.String getAaddsResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#aadds_resource_id HdinsightInteractiveQueryCluster#aadds_resource_id}.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#domain_name HdinsightInteractiveQueryCluster#domain_name}.

---

##### `domainUsername`<sup>Required</sup> <a name="domainUsername" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.domainUsername"></a>

```java
public java.lang.String getDomainUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#domain_username HdinsightInteractiveQueryCluster#domain_username}.

---

##### `domainUserPassword`<sup>Required</sup> <a name="domainUserPassword" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.domainUserPassword"></a>

```java
public java.lang.String getDomainUserPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#domain_user_password HdinsightInteractiveQueryCluster#domain_user_password}.

---

##### `ldapsUrls`<sup>Required</sup> <a name="ldapsUrls" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.ldapsUrls"></a>

```java
public java.util.List<java.lang.String> getLdapsUrls();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#ldaps_urls HdinsightInteractiveQueryCluster#ldaps_urls}.

---

##### `msiResourceId`<sup>Required</sup> <a name="msiResourceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.msiResourceId"></a>

```java
public java.lang.String getMsiResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#msi_resource_id HdinsightInteractiveQueryCluster#msi_resource_id}.

---

##### `clusterUsersGroupDns`<sup>Optional</sup> <a name="clusterUsersGroupDns" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.clusterUsersGroupDns"></a>

```java
public java.util.List<java.lang.String> getClusterUsersGroupDns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#cluster_users_group_dns HdinsightInteractiveQueryCluster#cluster_users_group_dns}.

---

### HdinsightInteractiveQueryClusterStorageAccount <a name="HdinsightInteractiveQueryClusterStorageAccount" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterStorageAccount;

HdinsightInteractiveQueryClusterStorageAccount.builder()
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
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount.property.isDefault">isDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#is_default HdinsightInteractiveQueryCluster#is_default}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount.property.storageAccountKey">storageAccountKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#storage_account_key HdinsightInteractiveQueryCluster#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount.property.storageContainerId">storageContainerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#storage_container_id HdinsightInteractiveQueryCluster#storage_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount.property.storageResourceId">storageResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#storage_resource_id HdinsightInteractiveQueryCluster#storage_resource_id}. |

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount.property.isDefault"></a>

```java
public java.lang.Object getIsDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#is_default HdinsightInteractiveQueryCluster#is_default}.

---

##### `storageAccountKey`<sup>Required</sup> <a name="storageAccountKey" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount.property.storageAccountKey"></a>

```java
public java.lang.String getStorageAccountKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#storage_account_key HdinsightInteractiveQueryCluster#storage_account_key}.

---

##### `storageContainerId`<sup>Required</sup> <a name="storageContainerId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount.property.storageContainerId"></a>

```java
public java.lang.String getStorageContainerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#storage_container_id HdinsightInteractiveQueryCluster#storage_container_id}.

---

##### `storageResourceId`<sup>Optional</sup> <a name="storageResourceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount.property.storageResourceId"></a>

```java
public java.lang.String getStorageResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#storage_resource_id HdinsightInteractiveQueryCluster#storage_resource_id}.

---

### HdinsightInteractiveQueryClusterStorageAccountGen2 <a name="HdinsightInteractiveQueryClusterStorageAccountGen2" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterStorageAccountGen2;

HdinsightInteractiveQueryClusterStorageAccountGen2.builder()
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
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2.property.filesystemId">filesystemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#filesystem_id HdinsightInteractiveQueryCluster#filesystem_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2.property.isDefault">isDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#is_default HdinsightInteractiveQueryCluster#is_default}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2.property.managedIdentityResourceId">managedIdentityResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#managed_identity_resource_id HdinsightInteractiveQueryCluster#managed_identity_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2.property.storageResourceId">storageResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#storage_resource_id HdinsightInteractiveQueryCluster#storage_resource_id}. |

---

##### `filesystemId`<sup>Required</sup> <a name="filesystemId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2.property.filesystemId"></a>

```java
public java.lang.String getFilesystemId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#filesystem_id HdinsightInteractiveQueryCluster#filesystem_id}.

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2.property.isDefault"></a>

```java
public java.lang.Object getIsDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#is_default HdinsightInteractiveQueryCluster#is_default}.

---

##### `managedIdentityResourceId`<sup>Required</sup> <a name="managedIdentityResourceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2.property.managedIdentityResourceId"></a>

```java
public java.lang.String getManagedIdentityResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#managed_identity_resource_id HdinsightInteractiveQueryCluster#managed_identity_resource_id}.

---

##### `storageResourceId`<sup>Required</sup> <a name="storageResourceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2.property.storageResourceId"></a>

```java
public java.lang.String getStorageResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#storage_resource_id HdinsightInteractiveQueryCluster#storage_resource_id}.

---

### HdinsightInteractiveQueryClusterTimeouts <a name="HdinsightInteractiveQueryClusterTimeouts" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterTimeouts;

HdinsightInteractiveQueryClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#create HdinsightInteractiveQueryCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#delete HdinsightInteractiveQueryCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#read HdinsightInteractiveQueryCluster#read}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#update HdinsightInteractiveQueryCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#create HdinsightInteractiveQueryCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#delete HdinsightInteractiveQueryCluster#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#read HdinsightInteractiveQueryCluster#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/hdinsight_interactive_query_cluster#update HdinsightInteractiveQueryCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HdinsightInteractiveQueryClusterComponentVersionOutputReference <a name="HdinsightInteractiveQueryClusterComponentVersionOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference;

new HdinsightInteractiveQueryClusterComponentVersionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.property.interactiveHiveInput">interactiveHiveInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.property.interactiveHive">interactiveHive</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersion">HdinsightInteractiveQueryClusterComponentVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `interactiveHiveInput`<sup>Optional</sup> <a name="interactiveHiveInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.property.interactiveHiveInput"></a>

```java
public java.lang.String getInteractiveHiveInput();
```

- *Type:* java.lang.String

---

##### `interactiveHive`<sup>Required</sup> <a name="interactiveHive" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.property.interactiveHive"></a>

```java
public java.lang.String getInteractiveHive();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.property.internalValue"></a>

```java
public HdinsightInteractiveQueryClusterComponentVersion getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersion">HdinsightInteractiveQueryClusterComponentVersion</a>

---


### HdinsightInteractiveQueryClusterComputeIsolationOutputReference <a name="HdinsightInteractiveQueryClusterComputeIsolationOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference;

new HdinsightInteractiveQueryClusterComputeIsolationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.resetComputeIsolationEnabled">resetComputeIsolationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.resetHostSku">resetHostSku</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComputeIsolationEnabled` <a name="resetComputeIsolationEnabled" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.resetComputeIsolationEnabled"></a>

```java
public void resetComputeIsolationEnabled()
```

##### `resetHostSku` <a name="resetHostSku" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.resetHostSku"></a>

```java
public void resetHostSku()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.computeIsolationEnabledInput">computeIsolationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.hostSkuInput">hostSkuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.computeIsolationEnabled">computeIsolationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.hostSku">hostSku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation">HdinsightInteractiveQueryClusterComputeIsolation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `computeIsolationEnabledInput`<sup>Optional</sup> <a name="computeIsolationEnabledInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.computeIsolationEnabledInput"></a>

```java
public java.lang.Object getComputeIsolationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostSkuInput`<sup>Optional</sup> <a name="hostSkuInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.hostSkuInput"></a>

```java
public java.lang.String getHostSkuInput();
```

- *Type:* java.lang.String

---

##### `computeIsolationEnabled`<sup>Required</sup> <a name="computeIsolationEnabled" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.computeIsolationEnabled"></a>

```java
public java.lang.Object getComputeIsolationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostSku`<sup>Required</sup> <a name="hostSku" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.hostSku"></a>

```java
public java.lang.String getHostSku();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.internalValue"></a>

```java
public HdinsightInteractiveQueryClusterComputeIsolation getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation">HdinsightInteractiveQueryClusterComputeIsolation</a>

---


### HdinsightInteractiveQueryClusterDiskEncryptionList <a name="HdinsightInteractiveQueryClusterDiskEncryptionList" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterDiskEncryptionList;

new HdinsightInteractiveQueryClusterDiskEncryptionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.get"></a>

```java
public HdinsightInteractiveQueryClusterDiskEncryptionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption">HdinsightInteractiveQueryClusterDiskEncryption</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption">HdinsightInteractiveQueryClusterDiskEncryption</a>>

---


### HdinsightInteractiveQueryClusterDiskEncryptionOutputReference <a name="HdinsightInteractiveQueryClusterDiskEncryptionOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference;

new HdinsightInteractiveQueryClusterDiskEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.resetEncryptionAlgorithm">resetEncryptionAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.resetEncryptionAtHostEnabled">resetEncryptionAtHostEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.resetKeyVaultKeyId">resetKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.resetKeyVaultManagedIdentityId">resetKeyVaultManagedIdentityId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionAlgorithm` <a name="resetEncryptionAlgorithm" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.resetEncryptionAlgorithm"></a>

```java
public void resetEncryptionAlgorithm()
```

##### `resetEncryptionAtHostEnabled` <a name="resetEncryptionAtHostEnabled" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.resetEncryptionAtHostEnabled"></a>

```java
public void resetEncryptionAtHostEnabled()
```

##### `resetKeyVaultKeyId` <a name="resetKeyVaultKeyId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.resetKeyVaultKeyId"></a>

```java
public void resetKeyVaultKeyId()
```

##### `resetKeyVaultManagedIdentityId` <a name="resetKeyVaultManagedIdentityId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.resetKeyVaultManagedIdentityId"></a>

```java
public void resetKeyVaultManagedIdentityId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.encryptionAlgorithmInput">encryptionAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabledInput">encryptionAtHostEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.keyVaultKeyIdInput">keyVaultKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityIdInput">keyVaultManagedIdentityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabled">encryptionAtHostEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityId">keyVaultManagedIdentityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption">HdinsightInteractiveQueryClusterDiskEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionAlgorithmInput`<sup>Optional</sup> <a name="encryptionAlgorithmInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.encryptionAlgorithmInput"></a>

```java
public java.lang.String getEncryptionAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `encryptionAtHostEnabledInput`<sup>Optional</sup> <a name="encryptionAtHostEnabledInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabledInput"></a>

```java
public java.lang.Object getEncryptionAtHostEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyVaultKeyIdInput`<sup>Optional</sup> <a name="keyVaultKeyIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.keyVaultKeyIdInput"></a>

```java
public java.lang.String getKeyVaultKeyIdInput();
```

- *Type:* java.lang.String

---

##### `keyVaultManagedIdentityIdInput`<sup>Optional</sup> <a name="keyVaultManagedIdentityIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityIdInput"></a>

```java
public java.lang.String getKeyVaultManagedIdentityIdInput();
```

- *Type:* java.lang.String

---

##### `encryptionAlgorithm`<sup>Required</sup> <a name="encryptionAlgorithm" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.encryptionAlgorithm"></a>

```java
public java.lang.String getEncryptionAlgorithm();
```

- *Type:* java.lang.String

---

##### `encryptionAtHostEnabled`<sup>Required</sup> <a name="encryptionAtHostEnabled" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabled"></a>

```java
public java.lang.Object getEncryptionAtHostEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.keyVaultKeyId"></a>

```java
public java.lang.String getKeyVaultKeyId();
```

- *Type:* java.lang.String

---

##### `keyVaultManagedIdentityId`<sup>Required</sup> <a name="keyVaultManagedIdentityId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityId"></a>

```java
public java.lang.String getKeyVaultManagedIdentityId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption">HdinsightInteractiveQueryClusterDiskEncryption</a>

---


### HdinsightInteractiveQueryClusterExtensionOutputReference <a name="HdinsightInteractiveQueryClusterExtensionOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterExtensionOutputReference;

new HdinsightInteractiveQueryClusterExtensionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.logAnalyticsWorkspaceIdInput">logAnalyticsWorkspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.primaryKeyInput">primaryKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.primaryKey">primaryKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension">HdinsightInteractiveQueryClusterExtension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="logAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.logAnalyticsWorkspaceIdInput"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `primaryKeyInput`<sup>Optional</sup> <a name="primaryKeyInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.primaryKeyInput"></a>

```java
public java.lang.String getPrimaryKeyInput();
```

- *Type:* java.lang.String

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.logAnalyticsWorkspaceId"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceId();
```

- *Type:* java.lang.String

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.primaryKey"></a>

```java
public java.lang.String getPrimaryKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.internalValue"></a>

```java
public HdinsightInteractiveQueryClusterExtension getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension">HdinsightInteractiveQueryClusterExtension</a>

---


### HdinsightInteractiveQueryClusterGatewayOutputReference <a name="HdinsightInteractiveQueryClusterGatewayOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterGatewayOutputReference;

new HdinsightInteractiveQueryClusterGatewayOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway">HdinsightInteractiveQueryClusterGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.internalValue"></a>

```java
public HdinsightInteractiveQueryClusterGateway getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway">HdinsightInteractiveQueryClusterGateway</a>

---


### HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference <a name="HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference;

new HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.serverInput">serverInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.server">server</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari">HdinsightInteractiveQueryClusterMetastoresAmbari</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.serverInput"></a>

```java
public java.lang.String getServerInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.server"></a>

```java
public java.lang.String getServer();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.internalValue"></a>

```java
public HdinsightInteractiveQueryClusterMetastoresAmbari getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari">HdinsightInteractiveQueryClusterMetastoresAmbari</a>

---


### HdinsightInteractiveQueryClusterMetastoresHiveOutputReference <a name="HdinsightInteractiveQueryClusterMetastoresHiveOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference;

new HdinsightInteractiveQueryClusterMetastoresHiveOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.serverInput">serverInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.server">server</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive">HdinsightInteractiveQueryClusterMetastoresHive</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.serverInput"></a>

```java
public java.lang.String getServerInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.server"></a>

```java
public java.lang.String getServer();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.internalValue"></a>

```java
public HdinsightInteractiveQueryClusterMetastoresHive getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive">HdinsightInteractiveQueryClusterMetastoresHive</a>

---


### HdinsightInteractiveQueryClusterMetastoresOozieOutputReference <a name="HdinsightInteractiveQueryClusterMetastoresOozieOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference;

new HdinsightInteractiveQueryClusterMetastoresOozieOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.serverInput">serverInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.server">server</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie">HdinsightInteractiveQueryClusterMetastoresOozie</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.serverInput"></a>

```java
public java.lang.String getServerInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.server"></a>

```java
public java.lang.String getServer();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.internalValue"></a>

```java
public HdinsightInteractiveQueryClusterMetastoresOozie getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie">HdinsightInteractiveQueryClusterMetastoresOozie</a>

---


### HdinsightInteractiveQueryClusterMetastoresOutputReference <a name="HdinsightInteractiveQueryClusterMetastoresOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterMetastoresOutputReference;

new HdinsightInteractiveQueryClusterMetastoresOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.putAmbari">putAmbari</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.putHive">putHive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.putOozie">putOozie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.resetAmbari">resetAmbari</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.resetHive">resetHive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.resetOozie">resetOozie</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAmbari` <a name="putAmbari" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.putAmbari"></a>

```java
public void putAmbari(HdinsightInteractiveQueryClusterMetastoresAmbari value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.putAmbari.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari">HdinsightInteractiveQueryClusterMetastoresAmbari</a>

---

##### `putHive` <a name="putHive" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.putHive"></a>

```java
public void putHive(HdinsightInteractiveQueryClusterMetastoresHive value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.putHive.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive">HdinsightInteractiveQueryClusterMetastoresHive</a>

---

##### `putOozie` <a name="putOozie" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.putOozie"></a>

```java
public void putOozie(HdinsightInteractiveQueryClusterMetastoresOozie value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.putOozie.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie">HdinsightInteractiveQueryClusterMetastoresOozie</a>

---

##### `resetAmbari` <a name="resetAmbari" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.resetAmbari"></a>

```java
public void resetAmbari()
```

##### `resetHive` <a name="resetHive" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.resetHive"></a>

```java
public void resetHive()
```

##### `resetOozie` <a name="resetOozie" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.resetOozie"></a>

```java
public void resetOozie()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.ambari">ambari</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference">HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.hive">hive</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference">HdinsightInteractiveQueryClusterMetastoresHiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.oozie">oozie</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference">HdinsightInteractiveQueryClusterMetastoresOozieOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.ambariInput">ambariInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari">HdinsightInteractiveQueryClusterMetastoresAmbari</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.hiveInput">hiveInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive">HdinsightInteractiveQueryClusterMetastoresHive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.oozieInput">oozieInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie">HdinsightInteractiveQueryClusterMetastoresOozie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores">HdinsightInteractiveQueryClusterMetastores</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ambari`<sup>Required</sup> <a name="ambari" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.ambari"></a>

```java
public HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference getAmbari();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference">HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference</a>

---

##### `hive`<sup>Required</sup> <a name="hive" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.hive"></a>

```java
public HdinsightInteractiveQueryClusterMetastoresHiveOutputReference getHive();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference">HdinsightInteractiveQueryClusterMetastoresHiveOutputReference</a>

---

##### `oozie`<sup>Required</sup> <a name="oozie" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.oozie"></a>

```java
public HdinsightInteractiveQueryClusterMetastoresOozieOutputReference getOozie();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference">HdinsightInteractiveQueryClusterMetastoresOozieOutputReference</a>

---

##### `ambariInput`<sup>Optional</sup> <a name="ambariInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.ambariInput"></a>

```java
public HdinsightInteractiveQueryClusterMetastoresAmbari getAmbariInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari">HdinsightInteractiveQueryClusterMetastoresAmbari</a>

---

##### `hiveInput`<sup>Optional</sup> <a name="hiveInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.hiveInput"></a>

```java
public HdinsightInteractiveQueryClusterMetastoresHive getHiveInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive">HdinsightInteractiveQueryClusterMetastoresHive</a>

---

##### `oozieInput`<sup>Optional</sup> <a name="oozieInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.oozieInput"></a>

```java
public HdinsightInteractiveQueryClusterMetastoresOozie getOozieInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie">HdinsightInteractiveQueryClusterMetastoresOozie</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.internalValue"></a>

```java
public HdinsightInteractiveQueryClusterMetastores getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores">HdinsightInteractiveQueryClusterMetastores</a>

---


### HdinsightInteractiveQueryClusterMonitorOutputReference <a name="HdinsightInteractiveQueryClusterMonitorOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterMonitorOutputReference;

new HdinsightInteractiveQueryClusterMonitorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.logAnalyticsWorkspaceIdInput">logAnalyticsWorkspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.primaryKeyInput">primaryKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.primaryKey">primaryKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor">HdinsightInteractiveQueryClusterMonitor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="logAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.logAnalyticsWorkspaceIdInput"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `primaryKeyInput`<sup>Optional</sup> <a name="primaryKeyInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.primaryKeyInput"></a>

```java
public java.lang.String getPrimaryKeyInput();
```

- *Type:* java.lang.String

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.logAnalyticsWorkspaceId"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceId();
```

- *Type:* java.lang.String

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.primaryKey"></a>

```java
public java.lang.String getPrimaryKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.internalValue"></a>

```java
public HdinsightInteractiveQueryClusterMonitor getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor">HdinsightInteractiveQueryClusterMonitor</a>

---


### HdinsightInteractiveQueryClusterNetworkOutputReference <a name="HdinsightInteractiveQueryClusterNetworkOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterNetworkOutputReference;

new HdinsightInteractiveQueryClusterNetworkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.resetConnectionDirection">resetConnectionDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.resetPrivateLinkEnabled">resetPrivateLinkEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionDirection` <a name="resetConnectionDirection" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.resetConnectionDirection"></a>

```java
public void resetConnectionDirection()
```

##### `resetPrivateLinkEnabled` <a name="resetPrivateLinkEnabled" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.resetPrivateLinkEnabled"></a>

```java
public void resetPrivateLinkEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.connectionDirectionInput">connectionDirectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.privateLinkEnabledInput">privateLinkEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.connectionDirection">connectionDirection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.privateLinkEnabled">privateLinkEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork">HdinsightInteractiveQueryClusterNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionDirectionInput`<sup>Optional</sup> <a name="connectionDirectionInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.connectionDirectionInput"></a>

```java
public java.lang.String getConnectionDirectionInput();
```

- *Type:* java.lang.String

---

##### `privateLinkEnabledInput`<sup>Optional</sup> <a name="privateLinkEnabledInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.privateLinkEnabledInput"></a>

```java
public java.lang.Object getPrivateLinkEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `connectionDirection`<sup>Required</sup> <a name="connectionDirection" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.connectionDirection"></a>

```java
public java.lang.String getConnectionDirection();
```

- *Type:* java.lang.String

---

##### `privateLinkEnabled`<sup>Required</sup> <a name="privateLinkEnabled" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.privateLinkEnabled"></a>

```java
public java.lang.Object getPrivateLinkEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.internalValue"></a>

```java
public HdinsightInteractiveQueryClusterNetwork getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork">HdinsightInteractiveQueryClusterNetwork</a>

---


### HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference <a name="HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference;

new HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.resetPrimary">resetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.resetPrivateIpAddress">resetPrivateIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.resetPrivateIpAllocationMethod">resetPrivateIpAllocationMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrimary` <a name="resetPrimary" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.resetPrimary"></a>

```java
public void resetPrimary()
```

##### `resetPrivateIpAddress` <a name="resetPrivateIpAddress" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.resetPrivateIpAddress"></a>

```java
public void resetPrivateIpAddress()
```

##### `resetPrivateIpAllocationMethod` <a name="resetPrivateIpAllocationMethod" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.resetPrivateIpAllocationMethod"></a>

```java
public void resetPrivateIpAllocationMethod()
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.resetSubnetId"></a>

```java
public void resetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.primaryInput">primaryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.privateIpAddressInput">privateIpAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.privateIpAllocationMethodInput">privateIpAllocationMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.primary">primary</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.privateIpAllocationMethod">privateIpAllocationMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.primaryInput"></a>

```java
public java.lang.Object getPrimaryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `privateIpAddressInput`<sup>Optional</sup> <a name="privateIpAddressInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.privateIpAddressInput"></a>

```java
public java.lang.String getPrivateIpAddressInput();
```

- *Type:* java.lang.String

---

##### `privateIpAllocationMethodInput`<sup>Optional</sup> <a name="privateIpAllocationMethodInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.privateIpAllocationMethodInput"></a>

```java
public java.lang.String getPrivateIpAllocationMethodInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.primary"></a>

```java
public java.lang.Object getPrimary();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.privateIpAddress"></a>

```java
public java.lang.String getPrivateIpAddress();
```

- *Type:* java.lang.String

---

##### `privateIpAllocationMethod`<sup>Required</sup> <a name="privateIpAllocationMethod" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.privateIpAllocationMethod"></a>

```java
public java.lang.String getPrivateIpAllocationMethod();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.internalValue"></a>

```java
public HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration</a>

---


### HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference <a name="HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference;

new HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.putIpConfiguration">putIpConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpConfiguration` <a name="putIpConfiguration" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.putIpConfiguration"></a>

```java
public void putIpConfiguration(HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.putIpConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.ipConfiguration">ipConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference">HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.ipConfigurationInput">ipConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipConfiguration`<sup>Required</sup> <a name="ipConfiguration" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.ipConfiguration"></a>

```java
public HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference getIpConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference">HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference</a>

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.groupIdInput"></a>

```java
public java.lang.String getGroupIdInput();
```

- *Type:* java.lang.String

---

##### `ipConfigurationInput`<sup>Optional</sup> <a name="ipConfigurationInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.ipConfigurationInput"></a>

```java
public HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration getIpConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.internalValue"></a>

```java
public HdinsightInteractiveQueryClusterPrivateLinkConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfiguration</a>

---


### HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference <a name="HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference;

new HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.putScriptActions">putScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.resetScriptActions">resetScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.resetSshKeys">resetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.resetVirtualNetworkId">resetVirtualNetworkId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScriptActions` <a name="putScriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.putScriptActions"></a>

```java
public void putScriptActions(IResolvable OR java.util.List<HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions">HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions</a>>

---

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetScriptActions` <a name="resetScriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.resetScriptActions"></a>

```java
public void resetScriptActions()
```

##### `resetSshKeys` <a name="resetSshKeys" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.resetSshKeys"></a>

```java
public void resetSshKeys()
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.resetSubnetId"></a>

```java
public void resetSubnetId()
```

##### `resetVirtualNetworkId` <a name="resetVirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.resetVirtualNetworkId"></a>

```java
public void resetVirtualNetworkId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.scriptActions">scriptActions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList">HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.scriptActionsInput">scriptActionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions">HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.sshKeysInput">sshKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.vmSizeInput">vmSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.sshKeys">sshKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.vmSize">vmSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode">HdinsightInteractiveQueryClusterRolesHeadNode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scriptActions`<sup>Required</sup> <a name="scriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.scriptActions"></a>

```java
public HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList getScriptActions();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList">HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList</a>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `scriptActionsInput`<sup>Optional</sup> <a name="scriptActionsInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.scriptActionsInput"></a>

```java
public java.lang.Object getScriptActionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions">HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions</a>>

---

##### `sshKeysInput`<sup>Optional</sup> <a name="sshKeysInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.sshKeysInput"></a>

```java
public java.util.List<java.lang.String> getSshKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.virtualNetworkIdInput"></a>

```java
public java.lang.String getVirtualNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `vmSizeInput`<sup>Optional</sup> <a name="vmSizeInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.vmSizeInput"></a>

```java
public java.lang.String getVmSizeInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `sshKeys`<sup>Required</sup> <a name="sshKeys" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.sshKeys"></a>

```java
public java.util.List<java.lang.String> getSshKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.vmSize"></a>

```java
public java.lang.String getVmSize();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.internalValue"></a>

```java
public HdinsightInteractiveQueryClusterRolesHeadNode getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode">HdinsightInteractiveQueryClusterRolesHeadNode</a>

---


### HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList <a name="HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList;

new HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.get"></a>

```java
public HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions">HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions">HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions</a>>

---


### HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference <a name="HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference;

new HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.resetParameters"></a>

```java
public void resetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.parameters">parameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions">HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.parametersInput"></a>

```java
public java.lang.String getParametersInput();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions">HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions</a>

---


### HdinsightInteractiveQueryClusterRolesOutputReference <a name="HdinsightInteractiveQueryClusterRolesOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterRolesOutputReference;

new HdinsightInteractiveQueryClusterRolesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.putHeadNode">putHeadNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.putWorkerNode">putWorkerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.putZookeeperNode">putZookeeperNode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeadNode` <a name="putHeadNode" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.putHeadNode"></a>

```java
public void putHeadNode(HdinsightInteractiveQueryClusterRolesHeadNode value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.putHeadNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode">HdinsightInteractiveQueryClusterRolesHeadNode</a>

---

##### `putWorkerNode` <a name="putWorkerNode" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.putWorkerNode"></a>

```java
public void putWorkerNode(HdinsightInteractiveQueryClusterRolesWorkerNode value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.putWorkerNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode">HdinsightInteractiveQueryClusterRolesWorkerNode</a>

---

##### `putZookeeperNode` <a name="putZookeeperNode" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.putZookeeperNode"></a>

```java
public void putZookeeperNode(HdinsightInteractiveQueryClusterRolesZookeeperNode value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.putZookeeperNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode">HdinsightInteractiveQueryClusterRolesZookeeperNode</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.headNode">headNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference">HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.workerNode">workerNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference">HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.zookeeperNode">zookeeperNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference">HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.headNodeInput">headNodeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode">HdinsightInteractiveQueryClusterRolesHeadNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.workerNodeInput">workerNodeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode">HdinsightInteractiveQueryClusterRolesWorkerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.zookeeperNodeInput">zookeeperNodeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode">HdinsightInteractiveQueryClusterRolesZookeeperNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles">HdinsightInteractiveQueryClusterRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headNode`<sup>Required</sup> <a name="headNode" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.headNode"></a>

```java
public HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference getHeadNode();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference">HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference</a>

---

##### `workerNode`<sup>Required</sup> <a name="workerNode" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.workerNode"></a>

```java
public HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference getWorkerNode();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference">HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference</a>

---

##### `zookeeperNode`<sup>Required</sup> <a name="zookeeperNode" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.zookeeperNode"></a>

```java
public HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference getZookeeperNode();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference">HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference</a>

---

##### `headNodeInput`<sup>Optional</sup> <a name="headNodeInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.headNodeInput"></a>

```java
public HdinsightInteractiveQueryClusterRolesHeadNode getHeadNodeInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode">HdinsightInteractiveQueryClusterRolesHeadNode</a>

---

##### `workerNodeInput`<sup>Optional</sup> <a name="workerNodeInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.workerNodeInput"></a>

```java
public HdinsightInteractiveQueryClusterRolesWorkerNode getWorkerNodeInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode">HdinsightInteractiveQueryClusterRolesWorkerNode</a>

---

##### `zookeeperNodeInput`<sup>Optional</sup> <a name="zookeeperNodeInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.zookeeperNodeInput"></a>

```java
public HdinsightInteractiveQueryClusterRolesZookeeperNode getZookeeperNodeInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode">HdinsightInteractiveQueryClusterRolesZookeeperNode</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.internalValue"></a>

```java
public HdinsightInteractiveQueryClusterRoles getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles">HdinsightInteractiveQueryClusterRoles</a>

---


### HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference <a name="HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference;

new HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.putRecurrence">putRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.resetRecurrence">resetRecurrence</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRecurrence` <a name="putRecurrence" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.putRecurrence"></a>

```java
public void putRecurrence(HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.putRecurrence.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence</a>

---

##### `resetRecurrence` <a name="resetRecurrence" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.resetRecurrence"></a>

```java
public void resetRecurrence()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.property.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.property.recurrenceInput">recurrenceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.property.recurrence"></a>

```java
public HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference getRecurrence();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference</a>

---

##### `recurrenceInput`<sup>Optional</sup> <a name="recurrenceInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.property.recurrenceInput"></a>

```java
public HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence getRecurrenceInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.property.internalValue"></a>

```java
public HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale</a>

---


### HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference <a name="HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference;

new HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.putSchedule">putSchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.putSchedule"></a>

```java
public void putSchedule(IResolvable OR java.util.List<HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.putSchedule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.timezoneInput">timezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.schedule"></a>

```java
public HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList getSchedule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList</a>

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.scheduleInput"></a>

```java
public java.lang.Object getScheduleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>>

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.timezoneInput"></a>

```java
public java.lang.String getTimezoneInput();
```

- *Type:* java.lang.String

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.internalValue"></a>

```java
public HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence</a>

---


### HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList <a name="HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList;

new HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.get"></a>

```java
public HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>>

---


### HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference <a name="HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference;

new HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.daysInput">daysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.targetInstanceCountInput">targetInstanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.timeInput">timeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.days">days</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.targetInstanceCount">targetInstanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.time">time</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.daysInput"></a>

```java
public java.util.List<java.lang.String> getDaysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetInstanceCountInput`<sup>Optional</sup> <a name="targetInstanceCountInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.targetInstanceCountInput"></a>

```java
public java.lang.Number getTargetInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.timeInput"></a>

```java
public java.lang.String getTimeInput();
```

- *Type:* java.lang.String

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.days"></a>

```java
public java.util.List<java.lang.String> getDays();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetInstanceCount`<sup>Required</sup> <a name="targetInstanceCount" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.targetInstanceCount"></a>

```java
public java.lang.Number getTargetInstanceCount();
```

- *Type:* java.lang.Number

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.time"></a>

```java
public java.lang.String getTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>

---


### HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference <a name="HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference;

new HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.putAutoscale">putAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.putScriptActions">putScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resetAutoscale">resetAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resetScriptActions">resetScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resetSshKeys">resetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resetVirtualNetworkId">resetVirtualNetworkId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoscale` <a name="putAutoscale" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.putAutoscale"></a>

```java
public void putAutoscale(HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.putAutoscale.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale</a>

---

##### `putScriptActions` <a name="putScriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.putScriptActions"></a>

```java
public void putScriptActions(IResolvable OR java.util.List<HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions">HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions</a>>

---

##### `resetAutoscale` <a name="resetAutoscale" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resetAutoscale"></a>

```java
public void resetAutoscale()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetScriptActions` <a name="resetScriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resetScriptActions"></a>

```java
public void resetScriptActions()
```

##### `resetSshKeys` <a name="resetSshKeys" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resetSshKeys"></a>

```java
public void resetSshKeys()
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resetSubnetId"></a>

```java
public void resetSubnetId()
```

##### `resetVirtualNetworkId` <a name="resetVirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resetVirtualNetworkId"></a>

```java
public void resetVirtualNetworkId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.autoscale">autoscale</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.scriptActions">scriptActions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList">HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.autoscaleInput">autoscaleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.scriptActionsInput">scriptActionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions">HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.sshKeysInput">sshKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.targetInstanceCountInput">targetInstanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.vmSizeInput">vmSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.sshKeys">sshKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.targetInstanceCount">targetInstanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.vmSize">vmSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode">HdinsightInteractiveQueryClusterRolesWorkerNode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoscale`<sup>Required</sup> <a name="autoscale" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.autoscale"></a>

```java
public HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference getAutoscale();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference</a>

---

##### `scriptActions`<sup>Required</sup> <a name="scriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.scriptActions"></a>

```java
public HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList getScriptActions();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList">HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList</a>

---

##### `autoscaleInput`<sup>Optional</sup> <a name="autoscaleInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.autoscaleInput"></a>

```java
public HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale getAutoscaleInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale</a>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `scriptActionsInput`<sup>Optional</sup> <a name="scriptActionsInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.scriptActionsInput"></a>

```java
public java.lang.Object getScriptActionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions">HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions</a>>

---

##### `sshKeysInput`<sup>Optional</sup> <a name="sshKeysInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.sshKeysInput"></a>

```java
public java.util.List<java.lang.String> getSshKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `targetInstanceCountInput`<sup>Optional</sup> <a name="targetInstanceCountInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.targetInstanceCountInput"></a>

```java
public java.lang.Number getTargetInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.virtualNetworkIdInput"></a>

```java
public java.lang.String getVirtualNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `vmSizeInput`<sup>Optional</sup> <a name="vmSizeInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.vmSizeInput"></a>

```java
public java.lang.String getVmSizeInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `sshKeys`<sup>Required</sup> <a name="sshKeys" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.sshKeys"></a>

```java
public java.util.List<java.lang.String> getSshKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `targetInstanceCount`<sup>Required</sup> <a name="targetInstanceCount" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.targetInstanceCount"></a>

```java
public java.lang.Number getTargetInstanceCount();
```

- *Type:* java.lang.Number

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.vmSize"></a>

```java
public java.lang.String getVmSize();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.internalValue"></a>

```java
public HdinsightInteractiveQueryClusterRolesWorkerNode getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode">HdinsightInteractiveQueryClusterRolesWorkerNode</a>

---


### HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList <a name="HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList;

new HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.get"></a>

```java
public HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions">HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions">HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions</a>>

---


### HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference <a name="HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference;

new HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.resetParameters"></a>

```java
public void resetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.parameters">parameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions">HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.parametersInput"></a>

```java
public java.lang.String getParametersInput();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions">HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions</a>

---


### HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference <a name="HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference;

new HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.putScriptActions">putScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.resetScriptActions">resetScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.resetSshKeys">resetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.resetVirtualNetworkId">resetVirtualNetworkId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScriptActions` <a name="putScriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.putScriptActions"></a>

```java
public void putScriptActions(IResolvable OR java.util.List<HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions">HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions</a>>

---

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetScriptActions` <a name="resetScriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.resetScriptActions"></a>

```java
public void resetScriptActions()
```

##### `resetSshKeys` <a name="resetSshKeys" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.resetSshKeys"></a>

```java
public void resetSshKeys()
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.resetSubnetId"></a>

```java
public void resetSubnetId()
```

##### `resetVirtualNetworkId` <a name="resetVirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.resetVirtualNetworkId"></a>

```java
public void resetVirtualNetworkId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.scriptActions">scriptActions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList">HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.scriptActionsInput">scriptActionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions">HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.sshKeysInput">sshKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.vmSizeInput">vmSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.sshKeys">sshKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.vmSize">vmSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode">HdinsightInteractiveQueryClusterRolesZookeeperNode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scriptActions`<sup>Required</sup> <a name="scriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.scriptActions"></a>

```java
public HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList getScriptActions();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList">HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList</a>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `scriptActionsInput`<sup>Optional</sup> <a name="scriptActionsInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.scriptActionsInput"></a>

```java
public java.lang.Object getScriptActionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions">HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions</a>>

---

##### `sshKeysInput`<sup>Optional</sup> <a name="sshKeysInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.sshKeysInput"></a>

```java
public java.util.List<java.lang.String> getSshKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.virtualNetworkIdInput"></a>

```java
public java.lang.String getVirtualNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `vmSizeInput`<sup>Optional</sup> <a name="vmSizeInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.vmSizeInput"></a>

```java
public java.lang.String getVmSizeInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `sshKeys`<sup>Required</sup> <a name="sshKeys" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.sshKeys"></a>

```java
public java.util.List<java.lang.String> getSshKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.vmSize"></a>

```java
public java.lang.String getVmSize();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.internalValue"></a>

```java
public HdinsightInteractiveQueryClusterRolesZookeeperNode getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode">HdinsightInteractiveQueryClusterRolesZookeeperNode</a>

---


### HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList <a name="HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList;

new HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.get"></a>

```java
public HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions">HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions">HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions</a>>

---


### HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference <a name="HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference;

new HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.resetParameters"></a>

```java
public void resetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.parameters">parameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions">HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.parametersInput"></a>

```java
public java.lang.String getParametersInput();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions">HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions</a>

---


### HdinsightInteractiveQueryClusterSecurityProfileOutputReference <a name="HdinsightInteractiveQueryClusterSecurityProfileOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference;

new HdinsightInteractiveQueryClusterSecurityProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.resetClusterUsersGroupDns">resetClusterUsersGroupDns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClusterUsersGroupDns` <a name="resetClusterUsersGroupDns" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.resetClusterUsersGroupDns"></a>

```java
public void resetClusterUsersGroupDns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.aaddsResourceIdInput">aaddsResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.clusterUsersGroupDnsInput">clusterUsersGroupDnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.domainUsernameInput">domainUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.domainUserPasswordInput">domainUserPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.ldapsUrlsInput">ldapsUrlsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.msiResourceIdInput">msiResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.aaddsResourceId">aaddsResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.clusterUsersGroupDns">clusterUsersGroupDns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.domainUsername">domainUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.domainUserPassword">domainUserPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.ldapsUrls">ldapsUrls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.msiResourceId">msiResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile">HdinsightInteractiveQueryClusterSecurityProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aaddsResourceIdInput`<sup>Optional</sup> <a name="aaddsResourceIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.aaddsResourceIdInput"></a>

```java
public java.lang.String getAaddsResourceIdInput();
```

- *Type:* java.lang.String

---

##### `clusterUsersGroupDnsInput`<sup>Optional</sup> <a name="clusterUsersGroupDnsInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.clusterUsersGroupDnsInput"></a>

```java
public java.util.List<java.lang.String> getClusterUsersGroupDnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `domainUsernameInput`<sup>Optional</sup> <a name="domainUsernameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.domainUsernameInput"></a>

```java
public java.lang.String getDomainUsernameInput();
```

- *Type:* java.lang.String

---

##### `domainUserPasswordInput`<sup>Optional</sup> <a name="domainUserPasswordInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.domainUserPasswordInput"></a>

```java
public java.lang.String getDomainUserPasswordInput();
```

- *Type:* java.lang.String

---

##### `ldapsUrlsInput`<sup>Optional</sup> <a name="ldapsUrlsInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.ldapsUrlsInput"></a>

```java
public java.util.List<java.lang.String> getLdapsUrlsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `msiResourceIdInput`<sup>Optional</sup> <a name="msiResourceIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.msiResourceIdInput"></a>

```java
public java.lang.String getMsiResourceIdInput();
```

- *Type:* java.lang.String

---

##### `aaddsResourceId`<sup>Required</sup> <a name="aaddsResourceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.aaddsResourceId"></a>

```java
public java.lang.String getAaddsResourceId();
```

- *Type:* java.lang.String

---

##### `clusterUsersGroupDns`<sup>Required</sup> <a name="clusterUsersGroupDns" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.clusterUsersGroupDns"></a>

```java
public java.util.List<java.lang.String> getClusterUsersGroupDns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `domainUsername`<sup>Required</sup> <a name="domainUsername" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.domainUsername"></a>

```java
public java.lang.String getDomainUsername();
```

- *Type:* java.lang.String

---

##### `domainUserPassword`<sup>Required</sup> <a name="domainUserPassword" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.domainUserPassword"></a>

```java
public java.lang.String getDomainUserPassword();
```

- *Type:* java.lang.String

---

##### `ldapsUrls`<sup>Required</sup> <a name="ldapsUrls" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.ldapsUrls"></a>

```java
public java.util.List<java.lang.String> getLdapsUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `msiResourceId`<sup>Required</sup> <a name="msiResourceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.msiResourceId"></a>

```java
public java.lang.String getMsiResourceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.internalValue"></a>

```java
public HdinsightInteractiveQueryClusterSecurityProfile getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile">HdinsightInteractiveQueryClusterSecurityProfile</a>

---


### HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference <a name="HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference;

new HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.filesystemIdInput">filesystemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.isDefaultInput">isDefaultInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.managedIdentityResourceIdInput">managedIdentityResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.storageResourceIdInput">storageResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.filesystemId">filesystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.isDefault">isDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.managedIdentityResourceId">managedIdentityResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.storageResourceId">storageResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2">HdinsightInteractiveQueryClusterStorageAccountGen2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filesystemIdInput`<sup>Optional</sup> <a name="filesystemIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.filesystemIdInput"></a>

```java
public java.lang.String getFilesystemIdInput();
```

- *Type:* java.lang.String

---

##### `isDefaultInput`<sup>Optional</sup> <a name="isDefaultInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.isDefaultInput"></a>

```java
public java.lang.Object getIsDefaultInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `managedIdentityResourceIdInput`<sup>Optional</sup> <a name="managedIdentityResourceIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.managedIdentityResourceIdInput"></a>

```java
public java.lang.String getManagedIdentityResourceIdInput();
```

- *Type:* java.lang.String

---

##### `storageResourceIdInput`<sup>Optional</sup> <a name="storageResourceIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.storageResourceIdInput"></a>

```java
public java.lang.String getStorageResourceIdInput();
```

- *Type:* java.lang.String

---

##### `filesystemId`<sup>Required</sup> <a name="filesystemId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.filesystemId"></a>

```java
public java.lang.String getFilesystemId();
```

- *Type:* java.lang.String

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.isDefault"></a>

```java
public java.lang.Object getIsDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `managedIdentityResourceId`<sup>Required</sup> <a name="managedIdentityResourceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.managedIdentityResourceId"></a>

```java
public java.lang.String getManagedIdentityResourceId();
```

- *Type:* java.lang.String

---

##### `storageResourceId`<sup>Required</sup> <a name="storageResourceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.storageResourceId"></a>

```java
public java.lang.String getStorageResourceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.internalValue"></a>

```java
public HdinsightInteractiveQueryClusterStorageAccountGen2 getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2">HdinsightInteractiveQueryClusterStorageAccountGen2</a>

---


### HdinsightInteractiveQueryClusterStorageAccountList <a name="HdinsightInteractiveQueryClusterStorageAccountList" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterStorageAccountList;

new HdinsightInteractiveQueryClusterStorageAccountList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.get"></a>

```java
public HdinsightInteractiveQueryClusterStorageAccountOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount">HdinsightInteractiveQueryClusterStorageAccount</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount">HdinsightInteractiveQueryClusterStorageAccount</a>>

---


### HdinsightInteractiveQueryClusterStorageAccountOutputReference <a name="HdinsightInteractiveQueryClusterStorageAccountOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference;

new HdinsightInteractiveQueryClusterStorageAccountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.resetStorageResourceId">resetStorageResourceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStorageResourceId` <a name="resetStorageResourceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.resetStorageResourceId"></a>

```java
public void resetStorageResourceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.isDefaultInput">isDefaultInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.storageAccountKeyInput">storageAccountKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.storageContainerIdInput">storageContainerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.storageResourceIdInput">storageResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.isDefault">isDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.storageAccountKey">storageAccountKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.storageContainerId">storageContainerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.storageResourceId">storageResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount">HdinsightInteractiveQueryClusterStorageAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isDefaultInput`<sup>Optional</sup> <a name="isDefaultInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.isDefaultInput"></a>

```java
public java.lang.Object getIsDefaultInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `storageAccountKeyInput`<sup>Optional</sup> <a name="storageAccountKeyInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.storageAccountKeyInput"></a>

```java
public java.lang.String getStorageAccountKeyInput();
```

- *Type:* java.lang.String

---

##### `storageContainerIdInput`<sup>Optional</sup> <a name="storageContainerIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.storageContainerIdInput"></a>

```java
public java.lang.String getStorageContainerIdInput();
```

- *Type:* java.lang.String

---

##### `storageResourceIdInput`<sup>Optional</sup> <a name="storageResourceIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.storageResourceIdInput"></a>

```java
public java.lang.String getStorageResourceIdInput();
```

- *Type:* java.lang.String

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.isDefault"></a>

```java
public java.lang.Object getIsDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `storageAccountKey`<sup>Required</sup> <a name="storageAccountKey" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.storageAccountKey"></a>

```java
public java.lang.String getStorageAccountKey();
```

- *Type:* java.lang.String

---

##### `storageContainerId`<sup>Required</sup> <a name="storageContainerId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.storageContainerId"></a>

```java
public java.lang.String getStorageContainerId();
```

- *Type:* java.lang.String

---

##### `storageResourceId`<sup>Required</sup> <a name="storageResourceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.storageResourceId"></a>

```java
public java.lang.String getStorageResourceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount">HdinsightInteractiveQueryClusterStorageAccount</a>

---


### HdinsightInteractiveQueryClusterTimeoutsOutputReference <a name="HdinsightInteractiveQueryClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hdinsight_interactive_query_cluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference;

new HdinsightInteractiveQueryClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts">HdinsightInteractiveQueryClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts">HdinsightInteractiveQueryClusterTimeouts</a>

---



