# `arcKubernetesFluxConfiguration` Submodule <a name="`arcKubernetesFluxConfiguration` Submodule" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArcKubernetesFluxConfiguration <a name="ArcKubernetesFluxConfiguration" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration azurerm_arc_kubernetes_flux_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.arc_kubernetes_flux_configuration.ArcKubernetesFluxConfiguration;

ArcKubernetesFluxConfiguration.Builder.create(Construct scope, java.lang.String id)
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
    .clusterId(java.lang.String)
    .kustomizations(IResolvable)
    .kustomizations(java.util.List<ArcKubernetesFluxConfigurationKustomizations>)
    .name(java.lang.String)
    .namespace(java.lang.String)
//  .blobStorage(ArcKubernetesFluxConfigurationBlobStorage)
//  .bucket(ArcKubernetesFluxConfigurationBucket)
//  .continuousReconciliationEnabled(java.lang.Boolean)
//  .continuousReconciliationEnabled(IResolvable)
//  .gitRepository(ArcKubernetesFluxConfigurationGitRepository)
//  .id(java.lang.String)
//  .scope(java.lang.String)
//  .timeouts(ArcKubernetesFluxConfigurationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#cluster_id ArcKubernetesFluxConfiguration#cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.kustomizations">kustomizations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations">ArcKubernetesFluxConfigurationKustomizations</a>></code> | kustomizations block. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#name ArcKubernetesFluxConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#namespace ArcKubernetesFluxConfiguration#namespace}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.blobStorage">blobStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage">ArcKubernetesFluxConfigurationBlobStorage</a></code> | blob_storage block. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.bucket">bucket</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket">ArcKubernetesFluxConfigurationBucket</a></code> | bucket block. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.continuousReconciliationEnabled">continuousReconciliationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#continuous_reconciliation_enabled ArcKubernetesFluxConfiguration#continuous_reconciliation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.gitRepository">gitRepository</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository">ArcKubernetesFluxConfigurationGitRepository</a></code> | git_repository block. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#id ArcKubernetesFluxConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.scope">scope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#scope ArcKubernetesFluxConfiguration#scope}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts">ArcKubernetesFluxConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#cluster_id ArcKubernetesFluxConfiguration#cluster_id}.

---

##### `kustomizations`<sup>Required</sup> <a name="kustomizations" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.kustomizations"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations">ArcKubernetesFluxConfigurationKustomizations</a>>

kustomizations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#kustomizations ArcKubernetesFluxConfiguration#kustomizations}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#name ArcKubernetesFluxConfiguration#name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#namespace ArcKubernetesFluxConfiguration#namespace}.

---

##### `blobStorage`<sup>Optional</sup> <a name="blobStorage" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.blobStorage"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage">ArcKubernetesFluxConfigurationBlobStorage</a>

blob_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#blob_storage ArcKubernetesFluxConfiguration#blob_storage}

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.bucket"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket">ArcKubernetesFluxConfigurationBucket</a>

bucket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#bucket ArcKubernetesFluxConfiguration#bucket}

---

##### `continuousReconciliationEnabled`<sup>Optional</sup> <a name="continuousReconciliationEnabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.continuousReconciliationEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#continuous_reconciliation_enabled ArcKubernetesFluxConfiguration#continuous_reconciliation_enabled}.

---

##### `gitRepository`<sup>Optional</sup> <a name="gitRepository" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.gitRepository"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository">ArcKubernetesFluxConfigurationGitRepository</a>

git_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#git_repository ArcKubernetesFluxConfiguration#git_repository}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#id ArcKubernetesFluxConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.scope"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#scope ArcKubernetesFluxConfiguration#scope}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts">ArcKubernetesFluxConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#timeouts ArcKubernetesFluxConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putBlobStorage">putBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putBucket">putBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putGitRepository">putGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putKustomizations">putKustomizations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetBlobStorage">resetBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetContinuousReconciliationEnabled">resetContinuousReconciliationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetGitRepository">resetGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBlobStorage` <a name="putBlobStorage" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putBlobStorage"></a>

```java
public void putBlobStorage(ArcKubernetesFluxConfigurationBlobStorage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putBlobStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage">ArcKubernetesFluxConfigurationBlobStorage</a>

---

##### `putBucket` <a name="putBucket" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putBucket"></a>

```java
public void putBucket(ArcKubernetesFluxConfigurationBucket value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putBucket.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket">ArcKubernetesFluxConfigurationBucket</a>

---

##### `putGitRepository` <a name="putGitRepository" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putGitRepository"></a>

```java
public void putGitRepository(ArcKubernetesFluxConfigurationGitRepository value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putGitRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository">ArcKubernetesFluxConfigurationGitRepository</a>

---

##### `putKustomizations` <a name="putKustomizations" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putKustomizations"></a>

```java
public void putKustomizations(IResolvable OR java.util.List<ArcKubernetesFluxConfigurationKustomizations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putKustomizations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations">ArcKubernetesFluxConfigurationKustomizations</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putTimeouts"></a>

```java
public void putTimeouts(ArcKubernetesFluxConfigurationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts">ArcKubernetesFluxConfigurationTimeouts</a>

---

##### `resetBlobStorage` <a name="resetBlobStorage" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetBlobStorage"></a>

```java
public void resetBlobStorage()
```

##### `resetBucket` <a name="resetBucket" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetContinuousReconciliationEnabled` <a name="resetContinuousReconciliationEnabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetContinuousReconciliationEnabled"></a>

```java
public void resetContinuousReconciliationEnabled()
```

##### `resetGitRepository` <a name="resetGitRepository" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetGitRepository"></a>

```java
public void resetGitRepository()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetId"></a>

```java
public void resetId()
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetScope"></a>

```java
public void resetScope()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ArcKubernetesFluxConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.arc_kubernetes_flux_configuration.ArcKubernetesFluxConfiguration;

ArcKubernetesFluxConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.arc_kubernetes_flux_configuration.ArcKubernetesFluxConfiguration;

ArcKubernetesFluxConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.arc_kubernetes_flux_configuration.ArcKubernetesFluxConfiguration;

ArcKubernetesFluxConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.arc_kubernetes_flux_configuration.ArcKubernetesFluxConfiguration;

ArcKubernetesFluxConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ArcKubernetesFluxConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ArcKubernetesFluxConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ArcKubernetesFluxConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ArcKubernetesFluxConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ArcKubernetesFluxConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.blobStorage">blobStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference">ArcKubernetesFluxConfigurationBlobStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.bucket">bucket</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference">ArcKubernetesFluxConfigurationBucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.gitRepository">gitRepository</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference">ArcKubernetesFluxConfigurationGitRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.kustomizations">kustomizations</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList">ArcKubernetesFluxConfigurationKustomizationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference">ArcKubernetesFluxConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.blobStorageInput">blobStorageInput</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage">ArcKubernetesFluxConfigurationBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.bucketInput">bucketInput</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket">ArcKubernetesFluxConfigurationBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.continuousReconciliationEnabledInput">continuousReconciliationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.gitRepositoryInput">gitRepositoryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository">ArcKubernetesFluxConfigurationGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.kustomizationsInput">kustomizationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations">ArcKubernetesFluxConfigurationKustomizations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts">ArcKubernetesFluxConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.continuousReconciliationEnabled">continuousReconciliationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `blobStorage`<sup>Required</sup> <a name="blobStorage" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.blobStorage"></a>

```java
public ArcKubernetesFluxConfigurationBlobStorageOutputReference getBlobStorage();
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference">ArcKubernetesFluxConfigurationBlobStorageOutputReference</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.bucket"></a>

```java
public ArcKubernetesFluxConfigurationBucketOutputReference getBucket();
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference">ArcKubernetesFluxConfigurationBucketOutputReference</a>

---

##### `gitRepository`<sup>Required</sup> <a name="gitRepository" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.gitRepository"></a>

```java
public ArcKubernetesFluxConfigurationGitRepositoryOutputReference getGitRepository();
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference">ArcKubernetesFluxConfigurationGitRepositoryOutputReference</a>

---

##### `kustomizations`<sup>Required</sup> <a name="kustomizations" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.kustomizations"></a>

```java
public ArcKubernetesFluxConfigurationKustomizationsList getKustomizations();
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList">ArcKubernetesFluxConfigurationKustomizationsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.timeouts"></a>

```java
public ArcKubernetesFluxConfigurationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference">ArcKubernetesFluxConfigurationTimeoutsOutputReference</a>

---

##### `blobStorageInput`<sup>Optional</sup> <a name="blobStorageInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.blobStorageInput"></a>

```java
public ArcKubernetesFluxConfigurationBlobStorage getBlobStorageInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage">ArcKubernetesFluxConfigurationBlobStorage</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.bucketInput"></a>

```java
public ArcKubernetesFluxConfigurationBucket getBucketInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket">ArcKubernetesFluxConfigurationBucket</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `continuousReconciliationEnabledInput`<sup>Optional</sup> <a name="continuousReconciliationEnabledInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.continuousReconciliationEnabledInput"></a>

```java
public java.lang.Object getContinuousReconciliationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `gitRepositoryInput`<sup>Optional</sup> <a name="gitRepositoryInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.gitRepositoryInput"></a>

```java
public ArcKubernetesFluxConfigurationGitRepository getGitRepositoryInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository">ArcKubernetesFluxConfigurationGitRepository</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kustomizationsInput`<sup>Optional</sup> <a name="kustomizationsInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.kustomizationsInput"></a>

```java
public java.lang.Object getKustomizationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations">ArcKubernetesFluxConfigurationKustomizations</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts">ArcKubernetesFluxConfigurationTimeouts</a>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `continuousReconciliationEnabled`<sup>Required</sup> <a name="continuousReconciliationEnabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.continuousReconciliationEnabled"></a>

```java
public java.lang.Object getContinuousReconciliationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ArcKubernetesFluxConfigurationBlobStorage <a name="ArcKubernetesFluxConfigurationBlobStorage" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.arc_kubernetes_flux_configuration.ArcKubernetesFluxConfigurationBlobStorage;

ArcKubernetesFluxConfigurationBlobStorage.builder()
    .containerId(java.lang.String)
//  .accountKey(java.lang.String)
//  .localAuthReference(java.lang.String)
//  .sasToken(java.lang.String)
//  .servicePrincipal(ArcKubernetesFluxConfigurationBlobStorageServicePrincipal)
//  .syncIntervalInSeconds(java.lang.Number)
//  .timeoutInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.containerId">containerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#container_id ArcKubernetesFluxConfiguration#container_id}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.accountKey">accountKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#account_key ArcKubernetesFluxConfiguration#account_key}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.localAuthReference">localAuthReference</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#local_auth_reference ArcKubernetesFluxConfiguration#local_auth_reference}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.sasToken">sasToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#sas_token ArcKubernetesFluxConfiguration#sas_token}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.servicePrincipal">servicePrincipal</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal">ArcKubernetesFluxConfigurationBlobStorageServicePrincipal</a></code> | service_principal block. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.syncIntervalInSeconds">syncIntervalInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#sync_interval_in_seconds ArcKubernetesFluxConfiguration#sync_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#timeout_in_seconds ArcKubernetesFluxConfiguration#timeout_in_seconds}. |

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.containerId"></a>

```java
public java.lang.String getContainerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#container_id ArcKubernetesFluxConfiguration#container_id}.

---

##### `accountKey`<sup>Optional</sup> <a name="accountKey" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.accountKey"></a>

```java
public java.lang.String getAccountKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#account_key ArcKubernetesFluxConfiguration#account_key}.

---

##### `localAuthReference`<sup>Optional</sup> <a name="localAuthReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.localAuthReference"></a>

```java
public java.lang.String getLocalAuthReference();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#local_auth_reference ArcKubernetesFluxConfiguration#local_auth_reference}.

---

##### `sasToken`<sup>Optional</sup> <a name="sasToken" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.sasToken"></a>

```java
public java.lang.String getSasToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#sas_token ArcKubernetesFluxConfiguration#sas_token}.

---

##### `servicePrincipal`<sup>Optional</sup> <a name="servicePrincipal" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.servicePrincipal"></a>

```java
public ArcKubernetesFluxConfigurationBlobStorageServicePrincipal getServicePrincipal();
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal">ArcKubernetesFluxConfigurationBlobStorageServicePrincipal</a>

service_principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#service_principal ArcKubernetesFluxConfiguration#service_principal}

---

##### `syncIntervalInSeconds`<sup>Optional</sup> <a name="syncIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.syncIntervalInSeconds"></a>

```java
public java.lang.Number getSyncIntervalInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#sync_interval_in_seconds ArcKubernetesFluxConfiguration#sync_interval_in_seconds}.

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#timeout_in_seconds ArcKubernetesFluxConfiguration#timeout_in_seconds}.

---

### ArcKubernetesFluxConfigurationBlobStorageServicePrincipal <a name="ArcKubernetesFluxConfigurationBlobStorageServicePrincipal" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.arc_kubernetes_flux_configuration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal;

ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.builder()
    .clientId(java.lang.String)
    .tenantId(java.lang.String)
//  .clientCertificateBase64(java.lang.String)
//  .clientCertificatePassword(java.lang.String)
//  .clientCertificateSendChain(java.lang.Boolean)
//  .clientCertificateSendChain(IResolvable)
//  .clientSecret(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#client_id ArcKubernetesFluxConfiguration#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#tenant_id ArcKubernetesFluxConfiguration#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificateBase64">clientCertificateBase64</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#client_certificate_base64 ArcKubernetesFluxConfiguration#client_certificate_base64}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificatePassword">clientCertificatePassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#client_certificate_password ArcKubernetesFluxConfiguration#client_certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificateSendChain">clientCertificateSendChain</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#client_certificate_send_chain ArcKubernetesFluxConfiguration#client_certificate_send_chain}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#client_secret ArcKubernetesFluxConfiguration#client_secret}. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#client_id ArcKubernetesFluxConfiguration#client_id}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#tenant_id ArcKubernetesFluxConfiguration#tenant_id}.

---

##### `clientCertificateBase64`<sup>Optional</sup> <a name="clientCertificateBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificateBase64"></a>

```java
public java.lang.String getClientCertificateBase64();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#client_certificate_base64 ArcKubernetesFluxConfiguration#client_certificate_base64}.

---

##### `clientCertificatePassword`<sup>Optional</sup> <a name="clientCertificatePassword" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificatePassword"></a>

```java
public java.lang.String getClientCertificatePassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#client_certificate_password ArcKubernetesFluxConfiguration#client_certificate_password}.

---

##### `clientCertificateSendChain`<sup>Optional</sup> <a name="clientCertificateSendChain" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificateSendChain"></a>

```java
public java.lang.Object getClientCertificateSendChain();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#client_certificate_send_chain ArcKubernetesFluxConfiguration#client_certificate_send_chain}.

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#client_secret ArcKubernetesFluxConfiguration#client_secret}.

---

### ArcKubernetesFluxConfigurationBucket <a name="ArcKubernetesFluxConfigurationBucket" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.arc_kubernetes_flux_configuration.ArcKubernetesFluxConfigurationBucket;

ArcKubernetesFluxConfigurationBucket.builder()
    .bucketName(java.lang.String)
    .url(java.lang.String)
//  .accessKey(java.lang.String)
//  .localAuthReference(java.lang.String)
//  .secretKeyBase64(java.lang.String)
//  .syncIntervalInSeconds(java.lang.Number)
//  .timeoutInSeconds(java.lang.Number)
//  .tlsEnabled(java.lang.Boolean)
//  .tlsEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#bucket_name ArcKubernetesFluxConfiguration#bucket_name}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#url ArcKubernetesFluxConfiguration#url}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.accessKey">accessKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#access_key ArcKubernetesFluxConfiguration#access_key}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.localAuthReference">localAuthReference</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#local_auth_reference ArcKubernetesFluxConfiguration#local_auth_reference}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.secretKeyBase64">secretKeyBase64</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#secret_key_base64 ArcKubernetesFluxConfiguration#secret_key_base64}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.syncIntervalInSeconds">syncIntervalInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#sync_interval_in_seconds ArcKubernetesFluxConfiguration#sync_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#timeout_in_seconds ArcKubernetesFluxConfiguration#timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.tlsEnabled">tlsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#tls_enabled ArcKubernetesFluxConfiguration#tls_enabled}. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#bucket_name ArcKubernetesFluxConfiguration#bucket_name}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#url ArcKubernetesFluxConfiguration#url}.

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.accessKey"></a>

```java
public java.lang.String getAccessKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#access_key ArcKubernetesFluxConfiguration#access_key}.

---

##### `localAuthReference`<sup>Optional</sup> <a name="localAuthReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.localAuthReference"></a>

```java
public java.lang.String getLocalAuthReference();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#local_auth_reference ArcKubernetesFluxConfiguration#local_auth_reference}.

---

##### `secretKeyBase64`<sup>Optional</sup> <a name="secretKeyBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.secretKeyBase64"></a>

```java
public java.lang.String getSecretKeyBase64();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#secret_key_base64 ArcKubernetesFluxConfiguration#secret_key_base64}.

---

##### `syncIntervalInSeconds`<sup>Optional</sup> <a name="syncIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.syncIntervalInSeconds"></a>

```java
public java.lang.Number getSyncIntervalInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#sync_interval_in_seconds ArcKubernetesFluxConfiguration#sync_interval_in_seconds}.

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#timeout_in_seconds ArcKubernetesFluxConfiguration#timeout_in_seconds}.

---

##### `tlsEnabled`<sup>Optional</sup> <a name="tlsEnabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.tlsEnabled"></a>

```java
public java.lang.Object getTlsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#tls_enabled ArcKubernetesFluxConfiguration#tls_enabled}.

---

### ArcKubernetesFluxConfigurationConfig <a name="ArcKubernetesFluxConfigurationConfig" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.arc_kubernetes_flux_configuration.ArcKubernetesFluxConfigurationConfig;

ArcKubernetesFluxConfigurationConfig.builder()
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
    .clusterId(java.lang.String)
    .kustomizations(IResolvable)
    .kustomizations(java.util.List<ArcKubernetesFluxConfigurationKustomizations>)
    .name(java.lang.String)
    .namespace(java.lang.String)
//  .blobStorage(ArcKubernetesFluxConfigurationBlobStorage)
//  .bucket(ArcKubernetesFluxConfigurationBucket)
//  .continuousReconciliationEnabled(java.lang.Boolean)
//  .continuousReconciliationEnabled(IResolvable)
//  .gitRepository(ArcKubernetesFluxConfigurationGitRepository)
//  .id(java.lang.String)
//  .scope(java.lang.String)
//  .timeouts(ArcKubernetesFluxConfigurationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#cluster_id ArcKubernetesFluxConfiguration#cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.kustomizations">kustomizations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations">ArcKubernetesFluxConfigurationKustomizations</a>></code> | kustomizations block. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#name ArcKubernetesFluxConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#namespace ArcKubernetesFluxConfiguration#namespace}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.blobStorage">blobStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage">ArcKubernetesFluxConfigurationBlobStorage</a></code> | blob_storage block. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.bucket">bucket</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket">ArcKubernetesFluxConfigurationBucket</a></code> | bucket block. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.continuousReconciliationEnabled">continuousReconciliationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#continuous_reconciliation_enabled ArcKubernetesFluxConfiguration#continuous_reconciliation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.gitRepository">gitRepository</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository">ArcKubernetesFluxConfigurationGitRepository</a></code> | git_repository block. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#id ArcKubernetesFluxConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.scope">scope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#scope ArcKubernetesFluxConfiguration#scope}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts">ArcKubernetesFluxConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#cluster_id ArcKubernetesFluxConfiguration#cluster_id}.

---

##### `kustomizations`<sup>Required</sup> <a name="kustomizations" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.kustomizations"></a>

```java
public java.lang.Object getKustomizations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations">ArcKubernetesFluxConfigurationKustomizations</a>>

kustomizations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#kustomizations ArcKubernetesFluxConfiguration#kustomizations}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#name ArcKubernetesFluxConfiguration#name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#namespace ArcKubernetesFluxConfiguration#namespace}.

---

##### `blobStorage`<sup>Optional</sup> <a name="blobStorage" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.blobStorage"></a>

```java
public ArcKubernetesFluxConfigurationBlobStorage getBlobStorage();
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage">ArcKubernetesFluxConfigurationBlobStorage</a>

blob_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#blob_storage ArcKubernetesFluxConfiguration#blob_storage}

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.bucket"></a>

```java
public ArcKubernetesFluxConfigurationBucket getBucket();
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket">ArcKubernetesFluxConfigurationBucket</a>

bucket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#bucket ArcKubernetesFluxConfiguration#bucket}

---

##### `continuousReconciliationEnabled`<sup>Optional</sup> <a name="continuousReconciliationEnabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.continuousReconciliationEnabled"></a>

```java
public java.lang.Object getContinuousReconciliationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#continuous_reconciliation_enabled ArcKubernetesFluxConfiguration#continuous_reconciliation_enabled}.

---

##### `gitRepository`<sup>Optional</sup> <a name="gitRepository" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.gitRepository"></a>

```java
public ArcKubernetesFluxConfigurationGitRepository getGitRepository();
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository">ArcKubernetesFluxConfigurationGitRepository</a>

git_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#git_repository ArcKubernetesFluxConfiguration#git_repository}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#id ArcKubernetesFluxConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#scope ArcKubernetesFluxConfiguration#scope}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.timeouts"></a>

```java
public ArcKubernetesFluxConfigurationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts">ArcKubernetesFluxConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#timeouts ArcKubernetesFluxConfiguration#timeouts}

---

### ArcKubernetesFluxConfigurationGitRepository <a name="ArcKubernetesFluxConfigurationGitRepository" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.arc_kubernetes_flux_configuration.ArcKubernetesFluxConfigurationGitRepository;

ArcKubernetesFluxConfigurationGitRepository.builder()
    .referenceType(java.lang.String)
    .referenceValue(java.lang.String)
    .url(java.lang.String)
//  .httpsCaCertBase64(java.lang.String)
//  .httpsKeyBase64(java.lang.String)
//  .httpsUser(java.lang.String)
//  .localAuthReference(java.lang.String)
//  .sshKnownHostsBase64(java.lang.String)
//  .sshPrivateKeyBase64(java.lang.String)
//  .syncIntervalInSeconds(java.lang.Number)
//  .timeoutInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.referenceType">referenceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#reference_type ArcKubernetesFluxConfiguration#reference_type}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.referenceValue">referenceValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#reference_value ArcKubernetesFluxConfiguration#reference_value}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#url ArcKubernetesFluxConfiguration#url}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.httpsCaCertBase64">httpsCaCertBase64</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#https_ca_cert_base64 ArcKubernetesFluxConfiguration#https_ca_cert_base64}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.httpsKeyBase64">httpsKeyBase64</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#https_key_base64 ArcKubernetesFluxConfiguration#https_key_base64}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.httpsUser">httpsUser</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#https_user ArcKubernetesFluxConfiguration#https_user}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.localAuthReference">localAuthReference</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#local_auth_reference ArcKubernetesFluxConfiguration#local_auth_reference}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.sshKnownHostsBase64">sshKnownHostsBase64</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#ssh_known_hosts_base64 ArcKubernetesFluxConfiguration#ssh_known_hosts_base64}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.sshPrivateKeyBase64">sshPrivateKeyBase64</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#ssh_private_key_base64 ArcKubernetesFluxConfiguration#ssh_private_key_base64}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.syncIntervalInSeconds">syncIntervalInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#sync_interval_in_seconds ArcKubernetesFluxConfiguration#sync_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#timeout_in_seconds ArcKubernetesFluxConfiguration#timeout_in_seconds}. |

---

##### `referenceType`<sup>Required</sup> <a name="referenceType" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.referenceType"></a>

```java
public java.lang.String getReferenceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#reference_type ArcKubernetesFluxConfiguration#reference_type}.

---

##### `referenceValue`<sup>Required</sup> <a name="referenceValue" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.referenceValue"></a>

```java
public java.lang.String getReferenceValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#reference_value ArcKubernetesFluxConfiguration#reference_value}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#url ArcKubernetesFluxConfiguration#url}.

---

##### `httpsCaCertBase64`<sup>Optional</sup> <a name="httpsCaCertBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.httpsCaCertBase64"></a>

```java
public java.lang.String getHttpsCaCertBase64();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#https_ca_cert_base64 ArcKubernetesFluxConfiguration#https_ca_cert_base64}.

---

##### `httpsKeyBase64`<sup>Optional</sup> <a name="httpsKeyBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.httpsKeyBase64"></a>

```java
public java.lang.String getHttpsKeyBase64();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#https_key_base64 ArcKubernetesFluxConfiguration#https_key_base64}.

---

##### `httpsUser`<sup>Optional</sup> <a name="httpsUser" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.httpsUser"></a>

```java
public java.lang.String getHttpsUser();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#https_user ArcKubernetesFluxConfiguration#https_user}.

---

##### `localAuthReference`<sup>Optional</sup> <a name="localAuthReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.localAuthReference"></a>

```java
public java.lang.String getLocalAuthReference();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#local_auth_reference ArcKubernetesFluxConfiguration#local_auth_reference}.

---

##### `sshKnownHostsBase64`<sup>Optional</sup> <a name="sshKnownHostsBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.sshKnownHostsBase64"></a>

```java
public java.lang.String getSshKnownHostsBase64();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#ssh_known_hosts_base64 ArcKubernetesFluxConfiguration#ssh_known_hosts_base64}.

---

##### `sshPrivateKeyBase64`<sup>Optional</sup> <a name="sshPrivateKeyBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.sshPrivateKeyBase64"></a>

```java
public java.lang.String getSshPrivateKeyBase64();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#ssh_private_key_base64 ArcKubernetesFluxConfiguration#ssh_private_key_base64}.

---

##### `syncIntervalInSeconds`<sup>Optional</sup> <a name="syncIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.syncIntervalInSeconds"></a>

```java
public java.lang.Number getSyncIntervalInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#sync_interval_in_seconds ArcKubernetesFluxConfiguration#sync_interval_in_seconds}.

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#timeout_in_seconds ArcKubernetesFluxConfiguration#timeout_in_seconds}.

---

### ArcKubernetesFluxConfigurationKustomizations <a name="ArcKubernetesFluxConfigurationKustomizations" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.arc_kubernetes_flux_configuration.ArcKubernetesFluxConfigurationKustomizations;

ArcKubernetesFluxConfigurationKustomizations.builder()
    .name(java.lang.String)
//  .dependsOn(java.util.List<java.lang.String>)
//  .garbageCollectionEnabled(java.lang.Boolean)
//  .garbageCollectionEnabled(IResolvable)
//  .path(java.lang.String)
//  .recreatingEnabled(java.lang.Boolean)
//  .recreatingEnabled(IResolvable)
//  .retryIntervalInSeconds(java.lang.Number)
//  .syncIntervalInSeconds(java.lang.Number)
//  .timeoutInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#name ArcKubernetesFluxConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#depends_on ArcKubernetesFluxConfiguration#depends_on}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.garbageCollectionEnabled">garbageCollectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#garbage_collection_enabled ArcKubernetesFluxConfiguration#garbage_collection_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#path ArcKubernetesFluxConfiguration#path}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.recreatingEnabled">recreatingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#recreating_enabled ArcKubernetesFluxConfiguration#recreating_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.retryIntervalInSeconds">retryIntervalInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#retry_interval_in_seconds ArcKubernetesFluxConfiguration#retry_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.syncIntervalInSeconds">syncIntervalInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#sync_interval_in_seconds ArcKubernetesFluxConfiguration#sync_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#timeout_in_seconds ArcKubernetesFluxConfiguration#timeout_in_seconds}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#name ArcKubernetesFluxConfiguration#name}.

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#depends_on ArcKubernetesFluxConfiguration#depends_on}.

---

##### `garbageCollectionEnabled`<sup>Optional</sup> <a name="garbageCollectionEnabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.garbageCollectionEnabled"></a>

```java
public java.lang.Object getGarbageCollectionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#garbage_collection_enabled ArcKubernetesFluxConfiguration#garbage_collection_enabled}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#path ArcKubernetesFluxConfiguration#path}.

---

##### `recreatingEnabled`<sup>Optional</sup> <a name="recreatingEnabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.recreatingEnabled"></a>

```java
public java.lang.Object getRecreatingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#recreating_enabled ArcKubernetesFluxConfiguration#recreating_enabled}.

---

##### `retryIntervalInSeconds`<sup>Optional</sup> <a name="retryIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.retryIntervalInSeconds"></a>

```java
public java.lang.Number getRetryIntervalInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#retry_interval_in_seconds ArcKubernetesFluxConfiguration#retry_interval_in_seconds}.

---

##### `syncIntervalInSeconds`<sup>Optional</sup> <a name="syncIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.syncIntervalInSeconds"></a>

```java
public java.lang.Number getSyncIntervalInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#sync_interval_in_seconds ArcKubernetesFluxConfiguration#sync_interval_in_seconds}.

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#timeout_in_seconds ArcKubernetesFluxConfiguration#timeout_in_seconds}.

---

### ArcKubernetesFluxConfigurationTimeouts <a name="ArcKubernetesFluxConfigurationTimeouts" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.arc_kubernetes_flux_configuration.ArcKubernetesFluxConfigurationTimeouts;

ArcKubernetesFluxConfigurationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#create ArcKubernetesFluxConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#delete ArcKubernetesFluxConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#read ArcKubernetesFluxConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#update ArcKubernetesFluxConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#create ArcKubernetesFluxConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#delete ArcKubernetesFluxConfiguration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#read ArcKubernetesFluxConfiguration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/arc_kubernetes_flux_configuration#update ArcKubernetesFluxConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ArcKubernetesFluxConfigurationBlobStorageOutputReference <a name="ArcKubernetesFluxConfigurationBlobStorageOutputReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.arc_kubernetes_flux_configuration.ArcKubernetesFluxConfigurationBlobStorageOutputReference;

new ArcKubernetesFluxConfigurationBlobStorageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.putServicePrincipal">putServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetAccountKey">resetAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetLocalAuthReference">resetLocalAuthReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetSasToken">resetSasToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetServicePrincipal">resetServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetSyncIntervalInSeconds">resetSyncIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetTimeoutInSeconds">resetTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putServicePrincipal` <a name="putServicePrincipal" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.putServicePrincipal"></a>

```java
public void putServicePrincipal(ArcKubernetesFluxConfigurationBlobStorageServicePrincipal value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.putServicePrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal">ArcKubernetesFluxConfigurationBlobStorageServicePrincipal</a>

---

##### `resetAccountKey` <a name="resetAccountKey" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetAccountKey"></a>

```java
public void resetAccountKey()
```

##### `resetLocalAuthReference` <a name="resetLocalAuthReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetLocalAuthReference"></a>

```java
public void resetLocalAuthReference()
```

##### `resetSasToken` <a name="resetSasToken" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetSasToken"></a>

```java
public void resetSasToken()
```

##### `resetServicePrincipal` <a name="resetServicePrincipal" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetServicePrincipal"></a>

```java
public void resetServicePrincipal()
```

##### `resetSyncIntervalInSeconds` <a name="resetSyncIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetSyncIntervalInSeconds"></a>

```java
public void resetSyncIntervalInSeconds()
```

##### `resetTimeoutInSeconds` <a name="resetTimeoutInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetTimeoutInSeconds"></a>

```java
public void resetTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.servicePrincipal">servicePrincipal</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference">ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.accountKeyInput">accountKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.containerIdInput">containerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.localAuthReferenceInput">localAuthReferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.sasTokenInput">sasTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.servicePrincipalInput">servicePrincipalInput</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal">ArcKubernetesFluxConfigurationBlobStorageServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.syncIntervalInSecondsInput">syncIntervalInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.timeoutInSecondsInput">timeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.accountKey">accountKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.containerId">containerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.localAuthReference">localAuthReference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.sasToken">sasToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.syncIntervalInSeconds">syncIntervalInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage">ArcKubernetesFluxConfigurationBlobStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `servicePrincipal`<sup>Required</sup> <a name="servicePrincipal" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.servicePrincipal"></a>

```java
public ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference getServicePrincipal();
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference">ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference</a>

---

##### `accountKeyInput`<sup>Optional</sup> <a name="accountKeyInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.accountKeyInput"></a>

```java
public java.lang.String getAccountKeyInput();
```

- *Type:* java.lang.String

---

##### `containerIdInput`<sup>Optional</sup> <a name="containerIdInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.containerIdInput"></a>

```java
public java.lang.String getContainerIdInput();
```

- *Type:* java.lang.String

---

##### `localAuthReferenceInput`<sup>Optional</sup> <a name="localAuthReferenceInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.localAuthReferenceInput"></a>

```java
public java.lang.String getLocalAuthReferenceInput();
```

- *Type:* java.lang.String

---

##### `sasTokenInput`<sup>Optional</sup> <a name="sasTokenInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.sasTokenInput"></a>

```java
public java.lang.String getSasTokenInput();
```

- *Type:* java.lang.String

---

##### `servicePrincipalInput`<sup>Optional</sup> <a name="servicePrincipalInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.servicePrincipalInput"></a>

```java
public ArcKubernetesFluxConfigurationBlobStorageServicePrincipal getServicePrincipalInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal">ArcKubernetesFluxConfigurationBlobStorageServicePrincipal</a>

---

##### `syncIntervalInSecondsInput`<sup>Optional</sup> <a name="syncIntervalInSecondsInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.syncIntervalInSecondsInput"></a>

```java
public java.lang.Number getSyncIntervalInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `timeoutInSecondsInput`<sup>Optional</sup> <a name="timeoutInSecondsInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.timeoutInSecondsInput"></a>

```java
public java.lang.Number getTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `accountKey`<sup>Required</sup> <a name="accountKey" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.accountKey"></a>

```java
public java.lang.String getAccountKey();
```

- *Type:* java.lang.String

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.containerId"></a>

```java
public java.lang.String getContainerId();
```

- *Type:* java.lang.String

---

##### `localAuthReference`<sup>Required</sup> <a name="localAuthReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.localAuthReference"></a>

```java
public java.lang.String getLocalAuthReference();
```

- *Type:* java.lang.String

---

##### `sasToken`<sup>Required</sup> <a name="sasToken" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.sasToken"></a>

```java
public java.lang.String getSasToken();
```

- *Type:* java.lang.String

---

##### `syncIntervalInSeconds`<sup>Required</sup> <a name="syncIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.syncIntervalInSeconds"></a>

```java
public java.lang.Number getSyncIntervalInSeconds();
```

- *Type:* java.lang.Number

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.internalValue"></a>

```java
public ArcKubernetesFluxConfigurationBlobStorage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage">ArcKubernetesFluxConfigurationBlobStorage</a>

---


### ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference <a name="ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.arc_kubernetes_flux_configuration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference;

new ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificateBase64">resetClientCertificateBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificatePassword">resetClientCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificateSendChain">resetClientCertificateSendChain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientCertificateBase64` <a name="resetClientCertificateBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificateBase64"></a>

```java
public void resetClientCertificateBase64()
```

##### `resetClientCertificatePassword` <a name="resetClientCertificatePassword" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificatePassword"></a>

```java
public void resetClientCertificatePassword()
```

##### `resetClientCertificateSendChain` <a name="resetClientCertificateSendChain" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificateSendChain"></a>

```java
public void resetClientCertificateSendChain()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientSecret"></a>

```java
public void resetClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateBase64Input">clientCertificateBase64Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificatePasswordInput">clientCertificatePasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateSendChainInput">clientCertificateSendChainInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateBase64">clientCertificateBase64</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificatePassword">clientCertificatePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateSendChain">clientCertificateSendChain</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal">ArcKubernetesFluxConfigurationBlobStorageServicePrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientCertificateBase64Input`<sup>Optional</sup> <a name="clientCertificateBase64Input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateBase64Input"></a>

```java
public java.lang.String getClientCertificateBase64Input();
```

- *Type:* java.lang.String

---

##### `clientCertificatePasswordInput`<sup>Optional</sup> <a name="clientCertificatePasswordInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificatePasswordInput"></a>

```java
public java.lang.String getClientCertificatePasswordInput();
```

- *Type:* java.lang.String

---

##### `clientCertificateSendChainInput`<sup>Optional</sup> <a name="clientCertificateSendChainInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateSendChainInput"></a>

```java
public java.lang.Object getClientCertificateSendChainInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `clientCertificateBase64`<sup>Required</sup> <a name="clientCertificateBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateBase64"></a>

```java
public java.lang.String getClientCertificateBase64();
```

- *Type:* java.lang.String

---

##### `clientCertificatePassword`<sup>Required</sup> <a name="clientCertificatePassword" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificatePassword"></a>

```java
public java.lang.String getClientCertificatePassword();
```

- *Type:* java.lang.String

---

##### `clientCertificateSendChain`<sup>Required</sup> <a name="clientCertificateSendChain" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateSendChain"></a>

```java
public java.lang.Object getClientCertificateSendChain();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.internalValue"></a>

```java
public ArcKubernetesFluxConfigurationBlobStorageServicePrincipal getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal">ArcKubernetesFluxConfigurationBlobStorageServicePrincipal</a>

---


### ArcKubernetesFluxConfigurationBucketOutputReference <a name="ArcKubernetesFluxConfigurationBucketOutputReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.arc_kubernetes_flux_configuration.ArcKubernetesFluxConfigurationBucketOutputReference;

new ArcKubernetesFluxConfigurationBucketOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetAccessKey">resetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetLocalAuthReference">resetLocalAuthReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetSecretKeyBase64">resetSecretKeyBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetSyncIntervalInSeconds">resetSyncIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetTimeoutInSeconds">resetTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetTlsEnabled">resetTlsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessKey` <a name="resetAccessKey" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetAccessKey"></a>

```java
public void resetAccessKey()
```

##### `resetLocalAuthReference` <a name="resetLocalAuthReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetLocalAuthReference"></a>

```java
public void resetLocalAuthReference()
```

##### `resetSecretKeyBase64` <a name="resetSecretKeyBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetSecretKeyBase64"></a>

```java
public void resetSecretKeyBase64()
```

##### `resetSyncIntervalInSeconds` <a name="resetSyncIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetSyncIntervalInSeconds"></a>

```java
public void resetSyncIntervalInSeconds()
```

##### `resetTimeoutInSeconds` <a name="resetTimeoutInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetTimeoutInSeconds"></a>

```java
public void resetTimeoutInSeconds()
```

##### `resetTlsEnabled` <a name="resetTlsEnabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetTlsEnabled"></a>

```java
public void resetTlsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.accessKeyInput">accessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.localAuthReferenceInput">localAuthReferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.secretKeyBase64Input">secretKeyBase64Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.syncIntervalInSecondsInput">syncIntervalInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.timeoutInSecondsInput">timeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.tlsEnabledInput">tlsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.accessKey">accessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.localAuthReference">localAuthReference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.secretKeyBase64">secretKeyBase64</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.syncIntervalInSeconds">syncIntervalInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.tlsEnabled">tlsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket">ArcKubernetesFluxConfigurationBucket</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessKeyInput`<sup>Optional</sup> <a name="accessKeyInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.accessKeyInput"></a>

```java
public java.lang.String getAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `localAuthReferenceInput`<sup>Optional</sup> <a name="localAuthReferenceInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.localAuthReferenceInput"></a>

```java
public java.lang.String getLocalAuthReferenceInput();
```

- *Type:* java.lang.String

---

##### `secretKeyBase64Input`<sup>Optional</sup> <a name="secretKeyBase64Input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.secretKeyBase64Input"></a>

```java
public java.lang.String getSecretKeyBase64Input();
```

- *Type:* java.lang.String

---

##### `syncIntervalInSecondsInput`<sup>Optional</sup> <a name="syncIntervalInSecondsInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.syncIntervalInSecondsInput"></a>

```java
public java.lang.Number getSyncIntervalInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `timeoutInSecondsInput`<sup>Optional</sup> <a name="timeoutInSecondsInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.timeoutInSecondsInput"></a>

```java
public java.lang.Number getTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `tlsEnabledInput`<sup>Optional</sup> <a name="tlsEnabledInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.tlsEnabledInput"></a>

```java
public java.lang.Object getTlsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.accessKey"></a>

```java
public java.lang.String getAccessKey();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `localAuthReference`<sup>Required</sup> <a name="localAuthReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.localAuthReference"></a>

```java
public java.lang.String getLocalAuthReference();
```

- *Type:* java.lang.String

---

##### `secretKeyBase64`<sup>Required</sup> <a name="secretKeyBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.secretKeyBase64"></a>

```java
public java.lang.String getSecretKeyBase64();
```

- *Type:* java.lang.String

---

##### `syncIntervalInSeconds`<sup>Required</sup> <a name="syncIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.syncIntervalInSeconds"></a>

```java
public java.lang.Number getSyncIntervalInSeconds();
```

- *Type:* java.lang.Number

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `tlsEnabled`<sup>Required</sup> <a name="tlsEnabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.tlsEnabled"></a>

```java
public java.lang.Object getTlsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.internalValue"></a>

```java
public ArcKubernetesFluxConfigurationBucket getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket">ArcKubernetesFluxConfigurationBucket</a>

---


### ArcKubernetesFluxConfigurationGitRepositoryOutputReference <a name="ArcKubernetesFluxConfigurationGitRepositoryOutputReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.arc_kubernetes_flux_configuration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference;

new ArcKubernetesFluxConfigurationGitRepositoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsCaCertBase64">resetHttpsCaCertBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsKeyBase64">resetHttpsKeyBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsUser">resetHttpsUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetLocalAuthReference">resetLocalAuthReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetSshKnownHostsBase64">resetSshKnownHostsBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetSshPrivateKeyBase64">resetSshPrivateKeyBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetSyncIntervalInSeconds">resetSyncIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetTimeoutInSeconds">resetTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHttpsCaCertBase64` <a name="resetHttpsCaCertBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsCaCertBase64"></a>

```java
public void resetHttpsCaCertBase64()
```

##### `resetHttpsKeyBase64` <a name="resetHttpsKeyBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsKeyBase64"></a>

```java
public void resetHttpsKeyBase64()
```

##### `resetHttpsUser` <a name="resetHttpsUser" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsUser"></a>

```java
public void resetHttpsUser()
```

##### `resetLocalAuthReference` <a name="resetLocalAuthReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetLocalAuthReference"></a>

```java
public void resetLocalAuthReference()
```

##### `resetSshKnownHostsBase64` <a name="resetSshKnownHostsBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetSshKnownHostsBase64"></a>

```java
public void resetSshKnownHostsBase64()
```

##### `resetSshPrivateKeyBase64` <a name="resetSshPrivateKeyBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetSshPrivateKeyBase64"></a>

```java
public void resetSshPrivateKeyBase64()
```

##### `resetSyncIntervalInSeconds` <a name="resetSyncIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetSyncIntervalInSeconds"></a>

```java
public void resetSyncIntervalInSeconds()
```

##### `resetTimeoutInSeconds` <a name="resetTimeoutInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetTimeoutInSeconds"></a>

```java
public void resetTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsCaCertBase64Input">httpsCaCertBase64Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsKeyBase64Input">httpsKeyBase64Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsUserInput">httpsUserInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.localAuthReferenceInput">localAuthReferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceTypeInput">referenceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceValueInput">referenceValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.sshKnownHostsBase64Input">sshKnownHostsBase64Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.sshPrivateKeyBase64Input">sshPrivateKeyBase64Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.syncIntervalInSecondsInput">syncIntervalInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.timeoutInSecondsInput">timeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsCaCertBase64">httpsCaCertBase64</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsKeyBase64">httpsKeyBase64</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsUser">httpsUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.localAuthReference">localAuthReference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceType">referenceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceValue">referenceValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.sshKnownHostsBase64">sshKnownHostsBase64</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.sshPrivateKeyBase64">sshPrivateKeyBase64</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.syncIntervalInSeconds">syncIntervalInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository">ArcKubernetesFluxConfigurationGitRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `httpsCaCertBase64Input`<sup>Optional</sup> <a name="httpsCaCertBase64Input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsCaCertBase64Input"></a>

```java
public java.lang.String getHttpsCaCertBase64Input();
```

- *Type:* java.lang.String

---

##### `httpsKeyBase64Input`<sup>Optional</sup> <a name="httpsKeyBase64Input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsKeyBase64Input"></a>

```java
public java.lang.String getHttpsKeyBase64Input();
```

- *Type:* java.lang.String

---

##### `httpsUserInput`<sup>Optional</sup> <a name="httpsUserInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsUserInput"></a>

```java
public java.lang.String getHttpsUserInput();
```

- *Type:* java.lang.String

---

##### `localAuthReferenceInput`<sup>Optional</sup> <a name="localAuthReferenceInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.localAuthReferenceInput"></a>

```java
public java.lang.String getLocalAuthReferenceInput();
```

- *Type:* java.lang.String

---

##### `referenceTypeInput`<sup>Optional</sup> <a name="referenceTypeInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceTypeInput"></a>

```java
public java.lang.String getReferenceTypeInput();
```

- *Type:* java.lang.String

---

##### `referenceValueInput`<sup>Optional</sup> <a name="referenceValueInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceValueInput"></a>

```java
public java.lang.String getReferenceValueInput();
```

- *Type:* java.lang.String

---

##### `sshKnownHostsBase64Input`<sup>Optional</sup> <a name="sshKnownHostsBase64Input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.sshKnownHostsBase64Input"></a>

```java
public java.lang.String getSshKnownHostsBase64Input();
```

- *Type:* java.lang.String

---

##### `sshPrivateKeyBase64Input`<sup>Optional</sup> <a name="sshPrivateKeyBase64Input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.sshPrivateKeyBase64Input"></a>

```java
public java.lang.String getSshPrivateKeyBase64Input();
```

- *Type:* java.lang.String

---

##### `syncIntervalInSecondsInput`<sup>Optional</sup> <a name="syncIntervalInSecondsInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.syncIntervalInSecondsInput"></a>

```java
public java.lang.Number getSyncIntervalInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `timeoutInSecondsInput`<sup>Optional</sup> <a name="timeoutInSecondsInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.timeoutInSecondsInput"></a>

```java
public java.lang.Number getTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `httpsCaCertBase64`<sup>Required</sup> <a name="httpsCaCertBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsCaCertBase64"></a>

```java
public java.lang.String getHttpsCaCertBase64();
```

- *Type:* java.lang.String

---

##### `httpsKeyBase64`<sup>Required</sup> <a name="httpsKeyBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsKeyBase64"></a>

```java
public java.lang.String getHttpsKeyBase64();
```

- *Type:* java.lang.String

---

##### `httpsUser`<sup>Required</sup> <a name="httpsUser" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsUser"></a>

```java
public java.lang.String getHttpsUser();
```

- *Type:* java.lang.String

---

##### `localAuthReference`<sup>Required</sup> <a name="localAuthReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.localAuthReference"></a>

```java
public java.lang.String getLocalAuthReference();
```

- *Type:* java.lang.String

---

##### `referenceType`<sup>Required</sup> <a name="referenceType" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceType"></a>

```java
public java.lang.String getReferenceType();
```

- *Type:* java.lang.String

---

##### `referenceValue`<sup>Required</sup> <a name="referenceValue" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceValue"></a>

```java
public java.lang.String getReferenceValue();
```

- *Type:* java.lang.String

---

##### `sshKnownHostsBase64`<sup>Required</sup> <a name="sshKnownHostsBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.sshKnownHostsBase64"></a>

```java
public java.lang.String getSshKnownHostsBase64();
```

- *Type:* java.lang.String

---

##### `sshPrivateKeyBase64`<sup>Required</sup> <a name="sshPrivateKeyBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.sshPrivateKeyBase64"></a>

```java
public java.lang.String getSshPrivateKeyBase64();
```

- *Type:* java.lang.String

---

##### `syncIntervalInSeconds`<sup>Required</sup> <a name="syncIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.syncIntervalInSeconds"></a>

```java
public java.lang.Number getSyncIntervalInSeconds();
```

- *Type:* java.lang.Number

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.internalValue"></a>

```java
public ArcKubernetesFluxConfigurationGitRepository getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository">ArcKubernetesFluxConfigurationGitRepository</a>

---


### ArcKubernetesFluxConfigurationKustomizationsList <a name="ArcKubernetesFluxConfigurationKustomizationsList" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.arc_kubernetes_flux_configuration.ArcKubernetesFluxConfigurationKustomizationsList;

new ArcKubernetesFluxConfigurationKustomizationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.get"></a>

```java
public ArcKubernetesFluxConfigurationKustomizationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations">ArcKubernetesFluxConfigurationKustomizations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations">ArcKubernetesFluxConfigurationKustomizations</a>>

---


### ArcKubernetesFluxConfigurationKustomizationsOutputReference <a name="ArcKubernetesFluxConfigurationKustomizationsOutputReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.arc_kubernetes_flux_configuration.ArcKubernetesFluxConfigurationKustomizationsOutputReference;

new ArcKubernetesFluxConfigurationKustomizationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetDependsOn">resetDependsOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetGarbageCollectionEnabled">resetGarbageCollectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetRecreatingEnabled">resetRecreatingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetRetryIntervalInSeconds">resetRetryIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetSyncIntervalInSeconds">resetSyncIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetTimeoutInSeconds">resetTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDependsOn` <a name="resetDependsOn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetDependsOn"></a>

```java
public void resetDependsOn()
```

##### `resetGarbageCollectionEnabled` <a name="resetGarbageCollectionEnabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetGarbageCollectionEnabled"></a>

```java
public void resetGarbageCollectionEnabled()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetRecreatingEnabled` <a name="resetRecreatingEnabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetRecreatingEnabled"></a>

```java
public void resetRecreatingEnabled()
```

##### `resetRetryIntervalInSeconds` <a name="resetRetryIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetRetryIntervalInSeconds"></a>

```java
public void resetRetryIntervalInSeconds()
```

##### `resetSyncIntervalInSeconds` <a name="resetSyncIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetSyncIntervalInSeconds"></a>

```java
public void resetSyncIntervalInSeconds()
```

##### `resetTimeoutInSeconds` <a name="resetTimeoutInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetTimeoutInSeconds"></a>

```java
public void resetTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.dependsOnInput">dependsOnInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.garbageCollectionEnabledInput">garbageCollectionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.recreatingEnabledInput">recreatingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.retryIntervalInSecondsInput">retryIntervalInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.syncIntervalInSecondsInput">syncIntervalInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.timeoutInSecondsInput">timeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.garbageCollectionEnabled">garbageCollectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.recreatingEnabled">recreatingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.retryIntervalInSeconds">retryIntervalInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.syncIntervalInSeconds">syncIntervalInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations">ArcKubernetesFluxConfigurationKustomizations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dependsOnInput`<sup>Optional</sup> <a name="dependsOnInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.dependsOnInput"></a>

```java
public java.util.List<java.lang.String> getDependsOnInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `garbageCollectionEnabledInput`<sup>Optional</sup> <a name="garbageCollectionEnabledInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.garbageCollectionEnabledInput"></a>

```java
public java.lang.Object getGarbageCollectionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `recreatingEnabledInput`<sup>Optional</sup> <a name="recreatingEnabledInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.recreatingEnabledInput"></a>

```java
public java.lang.Object getRecreatingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retryIntervalInSecondsInput`<sup>Optional</sup> <a name="retryIntervalInSecondsInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.retryIntervalInSecondsInput"></a>

```java
public java.lang.Number getRetryIntervalInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `syncIntervalInSecondsInput`<sup>Optional</sup> <a name="syncIntervalInSecondsInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.syncIntervalInSecondsInput"></a>

```java
public java.lang.Number getSyncIntervalInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `timeoutInSecondsInput`<sup>Optional</sup> <a name="timeoutInSecondsInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.timeoutInSecondsInput"></a>

```java
public java.lang.Number getTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Required</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `garbageCollectionEnabled`<sup>Required</sup> <a name="garbageCollectionEnabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.garbageCollectionEnabled"></a>

```java
public java.lang.Object getGarbageCollectionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `recreatingEnabled`<sup>Required</sup> <a name="recreatingEnabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.recreatingEnabled"></a>

```java
public java.lang.Object getRecreatingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retryIntervalInSeconds`<sup>Required</sup> <a name="retryIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.retryIntervalInSeconds"></a>

```java
public java.lang.Number getRetryIntervalInSeconds();
```

- *Type:* java.lang.Number

---

##### `syncIntervalInSeconds`<sup>Required</sup> <a name="syncIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.syncIntervalInSeconds"></a>

```java
public java.lang.Number getSyncIntervalInSeconds();
```

- *Type:* java.lang.Number

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations">ArcKubernetesFluxConfigurationKustomizations</a>

---


### ArcKubernetesFluxConfigurationTimeoutsOutputReference <a name="ArcKubernetesFluxConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.arc_kubernetes_flux_configuration.ArcKubernetesFluxConfigurationTimeoutsOutputReference;

new ArcKubernetesFluxConfigurationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts">ArcKubernetesFluxConfigurationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts">ArcKubernetesFluxConfigurationTimeouts</a>

---



