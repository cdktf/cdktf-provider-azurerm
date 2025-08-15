# `arcKubernetesProvisionedCluster` Submodule <a name="`arcKubernetesProvisionedCluster` Submodule" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArcKubernetesProvisionedCluster <a name="ArcKubernetesProvisionedCluster" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster azurerm_arc_kubernetes_provisioned_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.arc_kubernetes_provisioned_cluster.ArcKubernetesProvisionedCluster;

ArcKubernetesProvisionedCluster.Builder.create(Construct scope, java.lang.String id)
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
    .identity(ArcKubernetesProvisionedClusterIdentity)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .arcAgentAutoUpgradeEnabled(java.lang.Boolean)
//  .arcAgentAutoUpgradeEnabled(IResolvable)
//  .arcAgentDesiredVersion(java.lang.String)
//  .azureActiveDirectory(ArcKubernetesProvisionedClusterAzureActiveDirectory)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ArcKubernetesProvisionedClusterTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentity">ArcKubernetesProvisionedClusterIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#location ArcKubernetesProvisionedCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#name ArcKubernetesProvisionedCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#resource_group_name ArcKubernetesProvisionedCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.arcAgentAutoUpgradeEnabled">arcAgentAutoUpgradeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#arc_agent_auto_upgrade_enabled ArcKubernetesProvisionedCluster#arc_agent_auto_upgrade_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.arcAgentDesiredVersion">arcAgentDesiredVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#arc_agent_desired_version ArcKubernetesProvisionedCluster#arc_agent_desired_version}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.azureActiveDirectory">azureActiveDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectory">ArcKubernetesProvisionedClusterAzureActiveDirectory</a></code> | azure_active_directory block. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#id ArcKubernetesProvisionedCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#tags ArcKubernetesProvisionedCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeouts">ArcKubernetesProvisionedClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentity">ArcKubernetesProvisionedClusterIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#identity ArcKubernetesProvisionedCluster#identity}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#location ArcKubernetesProvisionedCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#name ArcKubernetesProvisionedCluster#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#resource_group_name ArcKubernetesProvisionedCluster#resource_group_name}.

---

##### `arcAgentAutoUpgradeEnabled`<sup>Optional</sup> <a name="arcAgentAutoUpgradeEnabled" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.arcAgentAutoUpgradeEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#arc_agent_auto_upgrade_enabled ArcKubernetesProvisionedCluster#arc_agent_auto_upgrade_enabled}.

---

##### `arcAgentDesiredVersion`<sup>Optional</sup> <a name="arcAgentDesiredVersion" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.arcAgentDesiredVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#arc_agent_desired_version ArcKubernetesProvisionedCluster#arc_agent_desired_version}.

---

##### `azureActiveDirectory`<sup>Optional</sup> <a name="azureActiveDirectory" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.azureActiveDirectory"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectory">ArcKubernetesProvisionedClusterAzureActiveDirectory</a>

azure_active_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#azure_active_directory ArcKubernetesProvisionedCluster#azure_active_directory}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#id ArcKubernetesProvisionedCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#tags ArcKubernetesProvisionedCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeouts">ArcKubernetesProvisionedClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#timeouts ArcKubernetesProvisionedCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.putAzureActiveDirectory">putAzureActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.resetArcAgentAutoUpgradeEnabled">resetArcAgentAutoUpgradeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.resetArcAgentDesiredVersion">resetArcAgentDesiredVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.resetAzureActiveDirectory">resetAzureActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAzureActiveDirectory` <a name="putAzureActiveDirectory" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.putAzureActiveDirectory"></a>

```java
public void putAzureActiveDirectory(ArcKubernetesProvisionedClusterAzureActiveDirectory value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.putAzureActiveDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectory">ArcKubernetesProvisionedClusterAzureActiveDirectory</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.putIdentity"></a>

```java
public void putIdentity(ArcKubernetesProvisionedClusterIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentity">ArcKubernetesProvisionedClusterIdentity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.putTimeouts"></a>

```java
public void putTimeouts(ArcKubernetesProvisionedClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeouts">ArcKubernetesProvisionedClusterTimeouts</a>

---

##### `resetArcAgentAutoUpgradeEnabled` <a name="resetArcAgentAutoUpgradeEnabled" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.resetArcAgentAutoUpgradeEnabled"></a>

```java
public void resetArcAgentAutoUpgradeEnabled()
```

##### `resetArcAgentDesiredVersion` <a name="resetArcAgentDesiredVersion" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.resetArcAgentDesiredVersion"></a>

```java
public void resetArcAgentDesiredVersion()
```

##### `resetAzureActiveDirectory` <a name="resetAzureActiveDirectory" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.resetAzureActiveDirectory"></a>

```java
public void resetAzureActiveDirectory()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ArcKubernetesProvisionedCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.arc_kubernetes_provisioned_cluster.ArcKubernetesProvisionedCluster;

ArcKubernetesProvisionedCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.arc_kubernetes_provisioned_cluster.ArcKubernetesProvisionedCluster;

ArcKubernetesProvisionedCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.arc_kubernetes_provisioned_cluster.ArcKubernetesProvisionedCluster;

ArcKubernetesProvisionedCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.arc_kubernetes_provisioned_cluster.ArcKubernetesProvisionedCluster;

ArcKubernetesProvisionedCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ArcKubernetesProvisionedCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ArcKubernetesProvisionedCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ArcKubernetesProvisionedCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ArcKubernetesProvisionedCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ArcKubernetesProvisionedCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.agentVersion">agentVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.azureActiveDirectory">azureActiveDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference">ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.distribution">distribution</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference">ArcKubernetesProvisionedClusterIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.infrastructure">infrastructure</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.kubernetesVersion">kubernetesVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.offering">offering</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference">ArcKubernetesProvisionedClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.totalCoreCount">totalCoreCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.totalNodeCount">totalNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.arcAgentAutoUpgradeEnabledInput">arcAgentAutoUpgradeEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.arcAgentDesiredVersionInput">arcAgentDesiredVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.azureActiveDirectoryInput">azureActiveDirectoryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectory">ArcKubernetesProvisionedClusterAzureActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentity">ArcKubernetesProvisionedClusterIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeouts">ArcKubernetesProvisionedClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.arcAgentAutoUpgradeEnabled">arcAgentAutoUpgradeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.arcAgentDesiredVersion">arcAgentDesiredVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `agentVersion`<sup>Required</sup> <a name="agentVersion" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.agentVersion"></a>

```java
public java.lang.String getAgentVersion();
```

- *Type:* java.lang.String

---

##### `azureActiveDirectory`<sup>Required</sup> <a name="azureActiveDirectory" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.azureActiveDirectory"></a>

```java
public ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference getAzureActiveDirectory();
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference">ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference</a>

---

##### `distribution`<sup>Required</sup> <a name="distribution" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.distribution"></a>

```java
public java.lang.String getDistribution();
```

- *Type:* java.lang.String

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.identity"></a>

```java
public ArcKubernetesProvisionedClusterIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference">ArcKubernetesProvisionedClusterIdentityOutputReference</a>

---

##### `infrastructure`<sup>Required</sup> <a name="infrastructure" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.infrastructure"></a>

```java
public java.lang.String getInfrastructure();
```

- *Type:* java.lang.String

---

##### `kubernetesVersion`<sup>Required</sup> <a name="kubernetesVersion" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.kubernetesVersion"></a>

```java
public java.lang.String getKubernetesVersion();
```

- *Type:* java.lang.String

---

##### `offering`<sup>Required</sup> <a name="offering" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.offering"></a>

```java
public java.lang.String getOffering();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.timeouts"></a>

```java
public ArcKubernetesProvisionedClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference">ArcKubernetesProvisionedClusterTimeoutsOutputReference</a>

---

##### `totalCoreCount`<sup>Required</sup> <a name="totalCoreCount" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.totalCoreCount"></a>

```java
public java.lang.Number getTotalCoreCount();
```

- *Type:* java.lang.Number

---

##### `totalNodeCount`<sup>Required</sup> <a name="totalNodeCount" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.totalNodeCount"></a>

```java
public java.lang.Number getTotalNodeCount();
```

- *Type:* java.lang.Number

---

##### `arcAgentAutoUpgradeEnabledInput`<sup>Optional</sup> <a name="arcAgentAutoUpgradeEnabledInput" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.arcAgentAutoUpgradeEnabledInput"></a>

```java
public java.lang.Object getArcAgentAutoUpgradeEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `arcAgentDesiredVersionInput`<sup>Optional</sup> <a name="arcAgentDesiredVersionInput" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.arcAgentDesiredVersionInput"></a>

```java
public java.lang.String getArcAgentDesiredVersionInput();
```

- *Type:* java.lang.String

---

##### `azureActiveDirectoryInput`<sup>Optional</sup> <a name="azureActiveDirectoryInput" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.azureActiveDirectoryInput"></a>

```java
public ArcKubernetesProvisionedClusterAzureActiveDirectory getAzureActiveDirectoryInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectory">ArcKubernetesProvisionedClusterAzureActiveDirectory</a>

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.identityInput"></a>

```java
public ArcKubernetesProvisionedClusterIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentity">ArcKubernetesProvisionedClusterIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeouts">ArcKubernetesProvisionedClusterTimeouts</a>

---

##### `arcAgentAutoUpgradeEnabled`<sup>Required</sup> <a name="arcAgentAutoUpgradeEnabled" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.arcAgentAutoUpgradeEnabled"></a>

```java
public java.lang.Object getArcAgentAutoUpgradeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `arcAgentDesiredVersion`<sup>Required</sup> <a name="arcAgentDesiredVersion" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.arcAgentDesiredVersion"></a>

```java
public java.lang.String getArcAgentDesiredVersion();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ArcKubernetesProvisionedClusterAzureActiveDirectory <a name="ArcKubernetesProvisionedClusterAzureActiveDirectory" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectory.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.arc_kubernetes_provisioned_cluster.ArcKubernetesProvisionedClusterAzureActiveDirectory;

ArcKubernetesProvisionedClusterAzureActiveDirectory.builder()
//  .adminGroupObjectIds(java.util.List<java.lang.String>)
//  .azureRbacEnabled(java.lang.Boolean)
//  .azureRbacEnabled(IResolvable)
//  .tenantId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectory.property.adminGroupObjectIds">adminGroupObjectIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#admin_group_object_ids ArcKubernetesProvisionedCluster#admin_group_object_ids}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectory.property.azureRbacEnabled">azureRbacEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#azure_rbac_enabled ArcKubernetesProvisionedCluster#azure_rbac_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectory.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#tenant_id ArcKubernetesProvisionedCluster#tenant_id}. |

---

##### `adminGroupObjectIds`<sup>Optional</sup> <a name="adminGroupObjectIds" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectory.property.adminGroupObjectIds"></a>

```java
public java.util.List<java.lang.String> getAdminGroupObjectIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#admin_group_object_ids ArcKubernetesProvisionedCluster#admin_group_object_ids}.

---

##### `azureRbacEnabled`<sup>Optional</sup> <a name="azureRbacEnabled" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectory.property.azureRbacEnabled"></a>

```java
public java.lang.Object getAzureRbacEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#azure_rbac_enabled ArcKubernetesProvisionedCluster#azure_rbac_enabled}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectory.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#tenant_id ArcKubernetesProvisionedCluster#tenant_id}.

---

### ArcKubernetesProvisionedClusterConfig <a name="ArcKubernetesProvisionedClusterConfig" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.arc_kubernetes_provisioned_cluster.ArcKubernetesProvisionedClusterConfig;

ArcKubernetesProvisionedClusterConfig.builder()
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
    .identity(ArcKubernetesProvisionedClusterIdentity)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .arcAgentAutoUpgradeEnabled(java.lang.Boolean)
//  .arcAgentAutoUpgradeEnabled(IResolvable)
//  .arcAgentDesiredVersion(java.lang.String)
//  .azureActiveDirectory(ArcKubernetesProvisionedClusterAzureActiveDirectory)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ArcKubernetesProvisionedClusterTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentity">ArcKubernetesProvisionedClusterIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#location ArcKubernetesProvisionedCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#name ArcKubernetesProvisionedCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#resource_group_name ArcKubernetesProvisionedCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.arcAgentAutoUpgradeEnabled">arcAgentAutoUpgradeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#arc_agent_auto_upgrade_enabled ArcKubernetesProvisionedCluster#arc_agent_auto_upgrade_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.arcAgentDesiredVersion">arcAgentDesiredVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#arc_agent_desired_version ArcKubernetesProvisionedCluster#arc_agent_desired_version}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.azureActiveDirectory">azureActiveDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectory">ArcKubernetesProvisionedClusterAzureActiveDirectory</a></code> | azure_active_directory block. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#id ArcKubernetesProvisionedCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#tags ArcKubernetesProvisionedCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeouts">ArcKubernetesProvisionedClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.identity"></a>

```java
public ArcKubernetesProvisionedClusterIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentity">ArcKubernetesProvisionedClusterIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#identity ArcKubernetesProvisionedCluster#identity}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#location ArcKubernetesProvisionedCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#name ArcKubernetesProvisionedCluster#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#resource_group_name ArcKubernetesProvisionedCluster#resource_group_name}.

---

##### `arcAgentAutoUpgradeEnabled`<sup>Optional</sup> <a name="arcAgentAutoUpgradeEnabled" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.arcAgentAutoUpgradeEnabled"></a>

```java
public java.lang.Object getArcAgentAutoUpgradeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#arc_agent_auto_upgrade_enabled ArcKubernetesProvisionedCluster#arc_agent_auto_upgrade_enabled}.

---

##### `arcAgentDesiredVersion`<sup>Optional</sup> <a name="arcAgentDesiredVersion" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.arcAgentDesiredVersion"></a>

```java
public java.lang.String getArcAgentDesiredVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#arc_agent_desired_version ArcKubernetesProvisionedCluster#arc_agent_desired_version}.

---

##### `azureActiveDirectory`<sup>Optional</sup> <a name="azureActiveDirectory" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.azureActiveDirectory"></a>

```java
public ArcKubernetesProvisionedClusterAzureActiveDirectory getAzureActiveDirectory();
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectory">ArcKubernetesProvisionedClusterAzureActiveDirectory</a>

azure_active_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#azure_active_directory ArcKubernetesProvisionedCluster#azure_active_directory}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#id ArcKubernetesProvisionedCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#tags ArcKubernetesProvisionedCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.timeouts"></a>

```java
public ArcKubernetesProvisionedClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeouts">ArcKubernetesProvisionedClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#timeouts ArcKubernetesProvisionedCluster#timeouts}

---

### ArcKubernetesProvisionedClusterIdentity <a name="ArcKubernetesProvisionedClusterIdentity" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.arc_kubernetes_provisioned_cluster.ArcKubernetesProvisionedClusterIdentity;

ArcKubernetesProvisionedClusterIdentity.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#type ArcKubernetesProvisionedCluster#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#type ArcKubernetesProvisionedCluster#type}.

---

### ArcKubernetesProvisionedClusterTimeouts <a name="ArcKubernetesProvisionedClusterTimeouts" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.arc_kubernetes_provisioned_cluster.ArcKubernetesProvisionedClusterTimeouts;

ArcKubernetesProvisionedClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#create ArcKubernetesProvisionedCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#delete ArcKubernetesProvisionedCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#read ArcKubernetesProvisionedCluster#read}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#update ArcKubernetesProvisionedCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#create ArcKubernetesProvisionedCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#delete ArcKubernetesProvisionedCluster#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#read ArcKubernetesProvisionedCluster#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_provisioned_cluster#update ArcKubernetesProvisionedCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference <a name="ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.arc_kubernetes_provisioned_cluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference;

new ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.resetAdminGroupObjectIds">resetAdminGroupObjectIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.resetAzureRbacEnabled">resetAzureRbacEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.resetTenantId">resetTenantId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdminGroupObjectIds` <a name="resetAdminGroupObjectIds" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.resetAdminGroupObjectIds"></a>

```java
public void resetAdminGroupObjectIds()
```

##### `resetAzureRbacEnabled` <a name="resetAzureRbacEnabled" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.resetAzureRbacEnabled"></a>

```java
public void resetAzureRbacEnabled()
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.resetTenantId"></a>

```java
public void resetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.property.adminGroupObjectIdsInput">adminGroupObjectIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.property.azureRbacEnabledInput">azureRbacEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.property.adminGroupObjectIds">adminGroupObjectIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.property.azureRbacEnabled">azureRbacEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectory">ArcKubernetesProvisionedClusterAzureActiveDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adminGroupObjectIdsInput`<sup>Optional</sup> <a name="adminGroupObjectIdsInput" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.property.adminGroupObjectIdsInput"></a>

```java
public java.util.List<java.lang.String> getAdminGroupObjectIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `azureRbacEnabledInput`<sup>Optional</sup> <a name="azureRbacEnabledInput" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.property.azureRbacEnabledInput"></a>

```java
public java.lang.Object getAzureRbacEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `adminGroupObjectIds`<sup>Required</sup> <a name="adminGroupObjectIds" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.property.adminGroupObjectIds"></a>

```java
public java.util.List<java.lang.String> getAdminGroupObjectIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `azureRbacEnabled`<sup>Required</sup> <a name="azureRbacEnabled" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.property.azureRbacEnabled"></a>

```java
public java.lang.Object getAzureRbacEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.property.internalValue"></a>

```java
public ArcKubernetesProvisionedClusterAzureActiveDirectory getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectory">ArcKubernetesProvisionedClusterAzureActiveDirectory</a>

---


### ArcKubernetesProvisionedClusterIdentityOutputReference <a name="ArcKubernetesProvisionedClusterIdentityOutputReference" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.arc_kubernetes_provisioned_cluster.ArcKubernetesProvisionedClusterIdentityOutputReference;

new ArcKubernetesProvisionedClusterIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentity">ArcKubernetesProvisionedClusterIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.property.internalValue"></a>

```java
public ArcKubernetesProvisionedClusterIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentity">ArcKubernetesProvisionedClusterIdentity</a>

---


### ArcKubernetesProvisionedClusterTimeoutsOutputReference <a name="ArcKubernetesProvisionedClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.arc_kubernetes_provisioned_cluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference;

new ArcKubernetesProvisionedClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeouts">ArcKubernetesProvisionedClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeouts">ArcKubernetesProvisionedClusterTimeouts</a>

---



