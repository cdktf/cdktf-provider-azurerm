# `machineLearningInferenceCluster` Submodule <a name="`machineLearningInferenceCluster` Submodule" id="@cdktf/provider-azurerm.machineLearningInferenceCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MachineLearningInferenceCluster <a name="MachineLearningInferenceCluster" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster azurerm_machine_learning_inference_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.machine_learning_inference_cluster.MachineLearningInferenceCluster;

MachineLearningInferenceCluster.Builder.create(Construct scope, java.lang.String id)
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
    .kubernetesClusterId(java.lang.String)
    .location(java.lang.String)
    .machineLearningWorkspaceId(java.lang.String)
    .name(java.lang.String)
//  .clusterPurpose(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .identity(MachineLearningInferenceClusterIdentity)
//  .ssl(MachineLearningInferenceClusterSsl)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MachineLearningInferenceClusterTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.kubernetesClusterId">kubernetesClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#kubernetes_cluster_id MachineLearningInferenceCluster#kubernetes_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#location MachineLearningInferenceCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.machineLearningWorkspaceId">machineLearningWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#machine_learning_workspace_id MachineLearningInferenceCluster#machine_learning_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#name MachineLearningInferenceCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.clusterPurpose">clusterPurpose</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#cluster_purpose MachineLearningInferenceCluster#cluster_purpose}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#description MachineLearningInferenceCluster#description}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#id MachineLearningInferenceCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity">MachineLearningInferenceClusterIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.ssl">ssl</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl">MachineLearningInferenceClusterSsl</a></code> | ssl block. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#tags MachineLearningInferenceCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts">MachineLearningInferenceClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `kubernetesClusterId`<sup>Required</sup> <a name="kubernetesClusterId" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.kubernetesClusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#kubernetes_cluster_id MachineLearningInferenceCluster#kubernetes_cluster_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#location MachineLearningInferenceCluster#location}.

---

##### `machineLearningWorkspaceId`<sup>Required</sup> <a name="machineLearningWorkspaceId" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.machineLearningWorkspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#machine_learning_workspace_id MachineLearningInferenceCluster#machine_learning_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#name MachineLearningInferenceCluster#name}.

---

##### `clusterPurpose`<sup>Optional</sup> <a name="clusterPurpose" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.clusterPurpose"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#cluster_purpose MachineLearningInferenceCluster#cluster_purpose}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#description MachineLearningInferenceCluster#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#id MachineLearningInferenceCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity">MachineLearningInferenceClusterIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#identity MachineLearningInferenceCluster#identity}

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.ssl"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl">MachineLearningInferenceClusterSsl</a>

ssl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#ssl MachineLearningInferenceCluster#ssl}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#tags MachineLearningInferenceCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts">MachineLearningInferenceClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#timeouts MachineLearningInferenceCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.putSsl">putSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetClusterPurpose">resetClusterPurpose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetSsl">resetSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.putIdentity"></a>

```java
public void putIdentity(MachineLearningInferenceClusterIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity">MachineLearningInferenceClusterIdentity</a>

---

##### `putSsl` <a name="putSsl" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.putSsl"></a>

```java
public void putSsl(MachineLearningInferenceClusterSsl value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.putSsl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl">MachineLearningInferenceClusterSsl</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.putTimeouts"></a>

```java
public void putTimeouts(MachineLearningInferenceClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts">MachineLearningInferenceClusterTimeouts</a>

---

##### `resetClusterPurpose` <a name="resetClusterPurpose" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetClusterPurpose"></a>

```java
public void resetClusterPurpose()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetSsl` <a name="resetSsl" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetSsl"></a>

```java
public void resetSsl()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MachineLearningInferenceCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.machine_learning_inference_cluster.MachineLearningInferenceCluster;

MachineLearningInferenceCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.machine_learning_inference_cluster.MachineLearningInferenceCluster;

MachineLearningInferenceCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.machine_learning_inference_cluster.MachineLearningInferenceCluster;

MachineLearningInferenceCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.machine_learning_inference_cluster.MachineLearningInferenceCluster;

MachineLearningInferenceCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MachineLearningInferenceCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MachineLearningInferenceCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MachineLearningInferenceCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MachineLearningInferenceCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MachineLearningInferenceCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference">MachineLearningInferenceClusterIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.ssl">ssl</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference">MachineLearningInferenceClusterSslOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference">MachineLearningInferenceClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.clusterPurposeInput">clusterPurposeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity">MachineLearningInferenceClusterIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.kubernetesClusterIdInput">kubernetesClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.machineLearningWorkspaceIdInput">machineLearningWorkspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.sslInput">sslInput</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl">MachineLearningInferenceClusterSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts">MachineLearningInferenceClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.clusterPurpose">clusterPurpose</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.kubernetesClusterId">kubernetesClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.machineLearningWorkspaceId">machineLearningWorkspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.identity"></a>

```java
public MachineLearningInferenceClusterIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference">MachineLearningInferenceClusterIdentityOutputReference</a>

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.ssl"></a>

```java
public MachineLearningInferenceClusterSslOutputReference getSsl();
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference">MachineLearningInferenceClusterSslOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.timeouts"></a>

```java
public MachineLearningInferenceClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference">MachineLearningInferenceClusterTimeoutsOutputReference</a>

---

##### `clusterPurposeInput`<sup>Optional</sup> <a name="clusterPurposeInput" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.clusterPurposeInput"></a>

```java
public java.lang.String getClusterPurposeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.identityInput"></a>

```java
public MachineLearningInferenceClusterIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity">MachineLearningInferenceClusterIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kubernetesClusterIdInput`<sup>Optional</sup> <a name="kubernetesClusterIdInput" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.kubernetesClusterIdInput"></a>

```java
public java.lang.String getKubernetesClusterIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `machineLearningWorkspaceIdInput`<sup>Optional</sup> <a name="machineLearningWorkspaceIdInput" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.machineLearningWorkspaceIdInput"></a>

```java
public java.lang.String getMachineLearningWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sslInput`<sup>Optional</sup> <a name="sslInput" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.sslInput"></a>

```java
public MachineLearningInferenceClusterSsl getSslInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl">MachineLearningInferenceClusterSsl</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts">MachineLearningInferenceClusterTimeouts</a>

---

##### `clusterPurpose`<sup>Required</sup> <a name="clusterPurpose" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.clusterPurpose"></a>

```java
public java.lang.String getClusterPurpose();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kubernetesClusterId`<sup>Required</sup> <a name="kubernetesClusterId" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.kubernetesClusterId"></a>

```java
public java.lang.String getKubernetesClusterId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `machineLearningWorkspaceId`<sup>Required</sup> <a name="machineLearningWorkspaceId" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.machineLearningWorkspaceId"></a>

```java
public java.lang.String getMachineLearningWorkspaceId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MachineLearningInferenceClusterConfig <a name="MachineLearningInferenceClusterConfig" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.machine_learning_inference_cluster.MachineLearningInferenceClusterConfig;

MachineLearningInferenceClusterConfig.builder()
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
    .kubernetesClusterId(java.lang.String)
    .location(java.lang.String)
    .machineLearningWorkspaceId(java.lang.String)
    .name(java.lang.String)
//  .clusterPurpose(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .identity(MachineLearningInferenceClusterIdentity)
//  .ssl(MachineLearningInferenceClusterSsl)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MachineLearningInferenceClusterTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.kubernetesClusterId">kubernetesClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#kubernetes_cluster_id MachineLearningInferenceCluster#kubernetes_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#location MachineLearningInferenceCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.machineLearningWorkspaceId">machineLearningWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#machine_learning_workspace_id MachineLearningInferenceCluster#machine_learning_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#name MachineLearningInferenceCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.clusterPurpose">clusterPurpose</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#cluster_purpose MachineLearningInferenceCluster#cluster_purpose}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#description MachineLearningInferenceCluster#description}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#id MachineLearningInferenceCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity">MachineLearningInferenceClusterIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.ssl">ssl</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl">MachineLearningInferenceClusterSsl</a></code> | ssl block. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#tags MachineLearningInferenceCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts">MachineLearningInferenceClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `kubernetesClusterId`<sup>Required</sup> <a name="kubernetesClusterId" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.kubernetesClusterId"></a>

```java
public java.lang.String getKubernetesClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#kubernetes_cluster_id MachineLearningInferenceCluster#kubernetes_cluster_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#location MachineLearningInferenceCluster#location}.

---

##### `machineLearningWorkspaceId`<sup>Required</sup> <a name="machineLearningWorkspaceId" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.machineLearningWorkspaceId"></a>

```java
public java.lang.String getMachineLearningWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#machine_learning_workspace_id MachineLearningInferenceCluster#machine_learning_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#name MachineLearningInferenceCluster#name}.

---

##### `clusterPurpose`<sup>Optional</sup> <a name="clusterPurpose" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.clusterPurpose"></a>

```java
public java.lang.String getClusterPurpose();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#cluster_purpose MachineLearningInferenceCluster#cluster_purpose}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#description MachineLearningInferenceCluster#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#id MachineLearningInferenceCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.identity"></a>

```java
public MachineLearningInferenceClusterIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity">MachineLearningInferenceClusterIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#identity MachineLearningInferenceCluster#identity}

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.ssl"></a>

```java
public MachineLearningInferenceClusterSsl getSsl();
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl">MachineLearningInferenceClusterSsl</a>

ssl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#ssl MachineLearningInferenceCluster#ssl}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#tags MachineLearningInferenceCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.timeouts"></a>

```java
public MachineLearningInferenceClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts">MachineLearningInferenceClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#timeouts MachineLearningInferenceCluster#timeouts}

---

### MachineLearningInferenceClusterIdentity <a name="MachineLearningInferenceClusterIdentity" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.machine_learning_inference_cluster.MachineLearningInferenceClusterIdentity;

MachineLearningInferenceClusterIdentity.builder()
    .type(java.lang.String)
//  .identityIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#type MachineLearningInferenceCluster#type}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#identity_ids MachineLearningInferenceCluster#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#type MachineLearningInferenceCluster#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#identity_ids MachineLearningInferenceCluster#identity_ids}.

---

### MachineLearningInferenceClusterSsl <a name="MachineLearningInferenceClusterSsl" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.machine_learning_inference_cluster.MachineLearningInferenceClusterSsl;

MachineLearningInferenceClusterSsl.builder()
//  .cert(java.lang.String)
//  .cname(java.lang.String)
//  .key(java.lang.String)
//  .leafDomainLabel(java.lang.String)
//  .overwriteExistingDomain(java.lang.Boolean)
//  .overwriteExistingDomain(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl.property.cert">cert</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#cert MachineLearningInferenceCluster#cert}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl.property.cname">cname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#cname MachineLearningInferenceCluster#cname}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#key MachineLearningInferenceCluster#key}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl.property.leafDomainLabel">leafDomainLabel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#leaf_domain_label MachineLearningInferenceCluster#leaf_domain_label}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl.property.overwriteExistingDomain">overwriteExistingDomain</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#overwrite_existing_domain MachineLearningInferenceCluster#overwrite_existing_domain}. |

---

##### `cert`<sup>Optional</sup> <a name="cert" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl.property.cert"></a>

```java
public java.lang.String getCert();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#cert MachineLearningInferenceCluster#cert}.

---

##### `cname`<sup>Optional</sup> <a name="cname" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl.property.cname"></a>

```java
public java.lang.String getCname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#cname MachineLearningInferenceCluster#cname}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#key MachineLearningInferenceCluster#key}.

---

##### `leafDomainLabel`<sup>Optional</sup> <a name="leafDomainLabel" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl.property.leafDomainLabel"></a>

```java
public java.lang.String getLeafDomainLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#leaf_domain_label MachineLearningInferenceCluster#leaf_domain_label}.

---

##### `overwriteExistingDomain`<sup>Optional</sup> <a name="overwriteExistingDomain" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl.property.overwriteExistingDomain"></a>

```java
public java.lang.Object getOverwriteExistingDomain();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#overwrite_existing_domain MachineLearningInferenceCluster#overwrite_existing_domain}.

---

### MachineLearningInferenceClusterTimeouts <a name="MachineLearningInferenceClusterTimeouts" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.machine_learning_inference_cluster.MachineLearningInferenceClusterTimeouts;

MachineLearningInferenceClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#create MachineLearningInferenceCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#delete MachineLearningInferenceCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#read MachineLearningInferenceCluster#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#create MachineLearningInferenceCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#delete MachineLearningInferenceCluster#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/machine_learning_inference_cluster#read MachineLearningInferenceCluster#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### MachineLearningInferenceClusterIdentityOutputReference <a name="MachineLearningInferenceClusterIdentityOutputReference" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.machine_learning_inference_cluster.MachineLearningInferenceClusterIdentityOutputReference;

new MachineLearningInferenceClusterIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.resetIdentityIds"></a>

```java
public void resetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity">MachineLearningInferenceClusterIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.internalValue"></a>

```java
public MachineLearningInferenceClusterIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity">MachineLearningInferenceClusterIdentity</a>

---


### MachineLearningInferenceClusterSslOutputReference <a name="MachineLearningInferenceClusterSslOutputReference" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.machine_learning_inference_cluster.MachineLearningInferenceClusterSslOutputReference;

new MachineLearningInferenceClusterSslOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.resetCert">resetCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.resetCname">resetCname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.resetLeafDomainLabel">resetLeafDomainLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.resetOverwriteExistingDomain">resetOverwriteExistingDomain</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCert` <a name="resetCert" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.resetCert"></a>

```java
public void resetCert()
```

##### `resetCname` <a name="resetCname" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.resetCname"></a>

```java
public void resetCname()
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetLeafDomainLabel` <a name="resetLeafDomainLabel" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.resetLeafDomainLabel"></a>

```java
public void resetLeafDomainLabel()
```

##### `resetOverwriteExistingDomain` <a name="resetOverwriteExistingDomain" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.resetOverwriteExistingDomain"></a>

```java
public void resetOverwriteExistingDomain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.certInput">certInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.cnameInput">cnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.leafDomainLabelInput">leafDomainLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.overwriteExistingDomainInput">overwriteExistingDomainInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.cert">cert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.cname">cname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.leafDomainLabel">leafDomainLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.overwriteExistingDomain">overwriteExistingDomain</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl">MachineLearningInferenceClusterSsl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certInput`<sup>Optional</sup> <a name="certInput" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.certInput"></a>

```java
public java.lang.String getCertInput();
```

- *Type:* java.lang.String

---

##### `cnameInput`<sup>Optional</sup> <a name="cnameInput" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.cnameInput"></a>

```java
public java.lang.String getCnameInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `leafDomainLabelInput`<sup>Optional</sup> <a name="leafDomainLabelInput" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.leafDomainLabelInput"></a>

```java
public java.lang.String getLeafDomainLabelInput();
```

- *Type:* java.lang.String

---

##### `overwriteExistingDomainInput`<sup>Optional</sup> <a name="overwriteExistingDomainInput" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.overwriteExistingDomainInput"></a>

```java
public java.lang.Object getOverwriteExistingDomainInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.cert"></a>

```java
public java.lang.String getCert();
```

- *Type:* java.lang.String

---

##### `cname`<sup>Required</sup> <a name="cname" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.cname"></a>

```java
public java.lang.String getCname();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `leafDomainLabel`<sup>Required</sup> <a name="leafDomainLabel" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.leafDomainLabel"></a>

```java
public java.lang.String getLeafDomainLabel();
```

- *Type:* java.lang.String

---

##### `overwriteExistingDomain`<sup>Required</sup> <a name="overwriteExistingDomain" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.overwriteExistingDomain"></a>

```java
public java.lang.Object getOverwriteExistingDomain();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.internalValue"></a>

```java
public MachineLearningInferenceClusterSsl getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl">MachineLearningInferenceClusterSsl</a>

---


### MachineLearningInferenceClusterTimeoutsOutputReference <a name="MachineLearningInferenceClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.machine_learning_inference_cluster.MachineLearningInferenceClusterTimeoutsOutputReference;

new MachineLearningInferenceClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts">MachineLearningInferenceClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts">MachineLearningInferenceClusterTimeouts</a>

---



