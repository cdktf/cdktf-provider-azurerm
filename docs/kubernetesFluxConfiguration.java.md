# `kubernetesFluxConfiguration` Submodule <a name="`kubernetesFluxConfiguration` Submodule" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesFluxConfiguration <a name="KubernetesFluxConfiguration" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration azurerm_kubernetes_flux_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_flux_configuration.KubernetesFluxConfiguration;

KubernetesFluxConfiguration.Builder.create(Construct scope, java.lang.String id)
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
    .kustomizations(java.util.List<KubernetesFluxConfigurationKustomizations>)
    .name(java.lang.String)
    .namespace(java.lang.String)
//  .blobStorage(KubernetesFluxConfigurationBlobStorage)
//  .bucket(KubernetesFluxConfigurationBucket)
//  .continuousReconciliationEnabled(java.lang.Boolean)
//  .continuousReconciliationEnabled(IResolvable)
//  .gitRepository(KubernetesFluxConfigurationGitRepository)
//  .id(java.lang.String)
//  .scope(java.lang.String)
//  .timeouts(KubernetesFluxConfigurationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#cluster_id KubernetesFluxConfiguration#cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.kustomizations">kustomizations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations">KubernetesFluxConfigurationKustomizations</a>></code> | kustomizations block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#name KubernetesFluxConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#namespace KubernetesFluxConfiguration#namespace}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.blobStorage">blobStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage">KubernetesFluxConfigurationBlobStorage</a></code> | blob_storage block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.bucket">bucket</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket">KubernetesFluxConfigurationBucket</a></code> | bucket block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.continuousReconciliationEnabled">continuousReconciliationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#continuous_reconciliation_enabled KubernetesFluxConfiguration#continuous_reconciliation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.gitRepository">gitRepository</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository">KubernetesFluxConfigurationGitRepository</a></code> | git_repository block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#id KubernetesFluxConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.scope">scope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#scope KubernetesFluxConfiguration#scope}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts">KubernetesFluxConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#cluster_id KubernetesFluxConfiguration#cluster_id}.

---

##### `kustomizations`<sup>Required</sup> <a name="kustomizations" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.kustomizations"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations">KubernetesFluxConfigurationKustomizations</a>>

kustomizations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#kustomizations KubernetesFluxConfiguration#kustomizations}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#name KubernetesFluxConfiguration#name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#namespace KubernetesFluxConfiguration#namespace}.

---

##### `blobStorage`<sup>Optional</sup> <a name="blobStorage" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.blobStorage"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage">KubernetesFluxConfigurationBlobStorage</a>

blob_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#blob_storage KubernetesFluxConfiguration#blob_storage}

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.bucket"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket">KubernetesFluxConfigurationBucket</a>

bucket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#bucket KubernetesFluxConfiguration#bucket}

---

##### `continuousReconciliationEnabled`<sup>Optional</sup> <a name="continuousReconciliationEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.continuousReconciliationEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#continuous_reconciliation_enabled KubernetesFluxConfiguration#continuous_reconciliation_enabled}.

---

##### `gitRepository`<sup>Optional</sup> <a name="gitRepository" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.gitRepository"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository">KubernetesFluxConfigurationGitRepository</a>

git_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#git_repository KubernetesFluxConfiguration#git_repository}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#id KubernetesFluxConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.scope"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#scope KubernetesFluxConfiguration#scope}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts">KubernetesFluxConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#timeouts KubernetesFluxConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putBlobStorage">putBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putBucket">putBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putGitRepository">putGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putKustomizations">putKustomizations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetBlobStorage">resetBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetContinuousReconciliationEnabled">resetContinuousReconciliationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetGitRepository">resetGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBlobStorage` <a name="putBlobStorage" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putBlobStorage"></a>

```java
public void putBlobStorage(KubernetesFluxConfigurationBlobStorage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putBlobStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage">KubernetesFluxConfigurationBlobStorage</a>

---

##### `putBucket` <a name="putBucket" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putBucket"></a>

```java
public void putBucket(KubernetesFluxConfigurationBucket value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putBucket.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket">KubernetesFluxConfigurationBucket</a>

---

##### `putGitRepository` <a name="putGitRepository" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putGitRepository"></a>

```java
public void putGitRepository(KubernetesFluxConfigurationGitRepository value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putGitRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository">KubernetesFluxConfigurationGitRepository</a>

---

##### `putKustomizations` <a name="putKustomizations" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putKustomizations"></a>

```java
public void putKustomizations(IResolvable OR java.util.List<KubernetesFluxConfigurationKustomizations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putKustomizations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations">KubernetesFluxConfigurationKustomizations</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putTimeouts"></a>

```java
public void putTimeouts(KubernetesFluxConfigurationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts">KubernetesFluxConfigurationTimeouts</a>

---

##### `resetBlobStorage` <a name="resetBlobStorage" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetBlobStorage"></a>

```java
public void resetBlobStorage()
```

##### `resetBucket` <a name="resetBucket" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetContinuousReconciliationEnabled` <a name="resetContinuousReconciliationEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetContinuousReconciliationEnabled"></a>

```java
public void resetContinuousReconciliationEnabled()
```

##### `resetGitRepository` <a name="resetGitRepository" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetGitRepository"></a>

```java
public void resetGitRepository()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetId"></a>

```java
public void resetId()
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetScope"></a>

```java
public void resetScope()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KubernetesFluxConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_flux_configuration.KubernetesFluxConfiguration;

KubernetesFluxConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_flux_configuration.KubernetesFluxConfiguration;

KubernetesFluxConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_flux_configuration.KubernetesFluxConfiguration;

KubernetesFluxConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_flux_configuration.KubernetesFluxConfiguration;

KubernetesFluxConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KubernetesFluxConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a KubernetesFluxConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KubernetesFluxConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KubernetesFluxConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the KubernetesFluxConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.blobStorage">blobStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference">KubernetesFluxConfigurationBlobStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.bucket">bucket</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference">KubernetesFluxConfigurationBucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.gitRepository">gitRepository</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference">KubernetesFluxConfigurationGitRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.kustomizations">kustomizations</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList">KubernetesFluxConfigurationKustomizationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference">KubernetesFluxConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.blobStorageInput">blobStorageInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage">KubernetesFluxConfigurationBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.bucketInput">bucketInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket">KubernetesFluxConfigurationBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.continuousReconciliationEnabledInput">continuousReconciliationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.gitRepositoryInput">gitRepositoryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository">KubernetesFluxConfigurationGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.kustomizationsInput">kustomizationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations">KubernetesFluxConfigurationKustomizations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts">KubernetesFluxConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.continuousReconciliationEnabled">continuousReconciliationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `blobStorage`<sup>Required</sup> <a name="blobStorage" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.blobStorage"></a>

```java
public KubernetesFluxConfigurationBlobStorageOutputReference getBlobStorage();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference">KubernetesFluxConfigurationBlobStorageOutputReference</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.bucket"></a>

```java
public KubernetesFluxConfigurationBucketOutputReference getBucket();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference">KubernetesFluxConfigurationBucketOutputReference</a>

---

##### `gitRepository`<sup>Required</sup> <a name="gitRepository" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.gitRepository"></a>

```java
public KubernetesFluxConfigurationGitRepositoryOutputReference getGitRepository();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference">KubernetesFluxConfigurationGitRepositoryOutputReference</a>

---

##### `kustomizations`<sup>Required</sup> <a name="kustomizations" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.kustomizations"></a>

```java
public KubernetesFluxConfigurationKustomizationsList getKustomizations();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList">KubernetesFluxConfigurationKustomizationsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.timeouts"></a>

```java
public KubernetesFluxConfigurationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference">KubernetesFluxConfigurationTimeoutsOutputReference</a>

---

##### `blobStorageInput`<sup>Optional</sup> <a name="blobStorageInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.blobStorageInput"></a>

```java
public KubernetesFluxConfigurationBlobStorage getBlobStorageInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage">KubernetesFluxConfigurationBlobStorage</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.bucketInput"></a>

```java
public KubernetesFluxConfigurationBucket getBucketInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket">KubernetesFluxConfigurationBucket</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `continuousReconciliationEnabledInput`<sup>Optional</sup> <a name="continuousReconciliationEnabledInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.continuousReconciliationEnabledInput"></a>

```java
public java.lang.Object getContinuousReconciliationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `gitRepositoryInput`<sup>Optional</sup> <a name="gitRepositoryInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.gitRepositoryInput"></a>

```java
public KubernetesFluxConfigurationGitRepository getGitRepositoryInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository">KubernetesFluxConfigurationGitRepository</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kustomizationsInput`<sup>Optional</sup> <a name="kustomizationsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.kustomizationsInput"></a>

```java
public java.lang.Object getKustomizationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations">KubernetesFluxConfigurationKustomizations</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts">KubernetesFluxConfigurationTimeouts</a>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `continuousReconciliationEnabled`<sup>Required</sup> <a name="continuousReconciliationEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.continuousReconciliationEnabled"></a>

```java
public java.lang.Object getContinuousReconciliationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesFluxConfigurationBlobStorage <a name="KubernetesFluxConfigurationBlobStorage" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_flux_configuration.KubernetesFluxConfigurationBlobStorage;

KubernetesFluxConfigurationBlobStorage.builder()
    .containerId(java.lang.String)
//  .accountKey(java.lang.String)
//  .localAuthReference(java.lang.String)
//  .managedIdentity(KubernetesFluxConfigurationBlobStorageManagedIdentity)
//  .sasToken(java.lang.String)
//  .servicePrincipal(KubernetesFluxConfigurationBlobStorageServicePrincipal)
//  .syncIntervalInSeconds(java.lang.Number)
//  .timeoutInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.containerId">containerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#container_id KubernetesFluxConfiguration#container_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.accountKey">accountKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#account_key KubernetesFluxConfiguration#account_key}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.localAuthReference">localAuthReference</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#local_auth_reference KubernetesFluxConfiguration#local_auth_reference}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.managedIdentity">managedIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity">KubernetesFluxConfigurationBlobStorageManagedIdentity</a></code> | managed_identity block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.sasToken">sasToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#sas_token KubernetesFluxConfiguration#sas_token}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.servicePrincipal">servicePrincipal</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal">KubernetesFluxConfigurationBlobStorageServicePrincipal</a></code> | service_principal block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.syncIntervalInSeconds">syncIntervalInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#sync_interval_in_seconds KubernetesFluxConfiguration#sync_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#timeout_in_seconds KubernetesFluxConfiguration#timeout_in_seconds}. |

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.containerId"></a>

```java
public java.lang.String getContainerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#container_id KubernetesFluxConfiguration#container_id}.

---

##### `accountKey`<sup>Optional</sup> <a name="accountKey" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.accountKey"></a>

```java
public java.lang.String getAccountKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#account_key KubernetesFluxConfiguration#account_key}.

---

##### `localAuthReference`<sup>Optional</sup> <a name="localAuthReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.localAuthReference"></a>

```java
public java.lang.String getLocalAuthReference();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#local_auth_reference KubernetesFluxConfiguration#local_auth_reference}.

---

##### `managedIdentity`<sup>Optional</sup> <a name="managedIdentity" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.managedIdentity"></a>

```java
public KubernetesFluxConfigurationBlobStorageManagedIdentity getManagedIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity">KubernetesFluxConfigurationBlobStorageManagedIdentity</a>

managed_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#managed_identity KubernetesFluxConfiguration#managed_identity}

---

##### `sasToken`<sup>Optional</sup> <a name="sasToken" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.sasToken"></a>

```java
public java.lang.String getSasToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#sas_token KubernetesFluxConfiguration#sas_token}.

---

##### `servicePrincipal`<sup>Optional</sup> <a name="servicePrincipal" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.servicePrincipal"></a>

```java
public KubernetesFluxConfigurationBlobStorageServicePrincipal getServicePrincipal();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal">KubernetesFluxConfigurationBlobStorageServicePrincipal</a>

service_principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#service_principal KubernetesFluxConfiguration#service_principal}

---

##### `syncIntervalInSeconds`<sup>Optional</sup> <a name="syncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.syncIntervalInSeconds"></a>

```java
public java.lang.Number getSyncIntervalInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#sync_interval_in_seconds KubernetesFluxConfiguration#sync_interval_in_seconds}.

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#timeout_in_seconds KubernetesFluxConfiguration#timeout_in_seconds}.

---

### KubernetesFluxConfigurationBlobStorageManagedIdentity <a name="KubernetesFluxConfigurationBlobStorageManagedIdentity" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_flux_configuration.KubernetesFluxConfigurationBlobStorageManagedIdentity;

KubernetesFluxConfigurationBlobStorageManagedIdentity.builder()
    .clientId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#client_id KubernetesFluxConfiguration#client_id}. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#client_id KubernetesFluxConfiguration#client_id}.

---

### KubernetesFluxConfigurationBlobStorageServicePrincipal <a name="KubernetesFluxConfigurationBlobStorageServicePrincipal" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_flux_configuration.KubernetesFluxConfigurationBlobStorageServicePrincipal;

KubernetesFluxConfigurationBlobStorageServicePrincipal.builder()
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
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#client_id KubernetesFluxConfiguration#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#tenant_id KubernetesFluxConfiguration#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificateBase64">clientCertificateBase64</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#client_certificate_base64 KubernetesFluxConfiguration#client_certificate_base64}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificatePassword">clientCertificatePassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#client_certificate_password KubernetesFluxConfiguration#client_certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificateSendChain">clientCertificateSendChain</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#client_certificate_send_chain KubernetesFluxConfiguration#client_certificate_send_chain}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#client_secret KubernetesFluxConfiguration#client_secret}. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#client_id KubernetesFluxConfiguration#client_id}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#tenant_id KubernetesFluxConfiguration#tenant_id}.

---

##### `clientCertificateBase64`<sup>Optional</sup> <a name="clientCertificateBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificateBase64"></a>

```java
public java.lang.String getClientCertificateBase64();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#client_certificate_base64 KubernetesFluxConfiguration#client_certificate_base64}.

---

##### `clientCertificatePassword`<sup>Optional</sup> <a name="clientCertificatePassword" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificatePassword"></a>

```java
public java.lang.String getClientCertificatePassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#client_certificate_password KubernetesFluxConfiguration#client_certificate_password}.

---

##### `clientCertificateSendChain`<sup>Optional</sup> <a name="clientCertificateSendChain" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificateSendChain"></a>

```java
public java.lang.Object getClientCertificateSendChain();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#client_certificate_send_chain KubernetesFluxConfiguration#client_certificate_send_chain}.

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#client_secret KubernetesFluxConfiguration#client_secret}.

---

### KubernetesFluxConfigurationBucket <a name="KubernetesFluxConfigurationBucket" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_flux_configuration.KubernetesFluxConfigurationBucket;

KubernetesFluxConfigurationBucket.builder()
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
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#bucket_name KubernetesFluxConfiguration#bucket_name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#url KubernetesFluxConfiguration#url}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.accessKey">accessKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#access_key KubernetesFluxConfiguration#access_key}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.localAuthReference">localAuthReference</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#local_auth_reference KubernetesFluxConfiguration#local_auth_reference}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.secretKeyBase64">secretKeyBase64</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#secret_key_base64 KubernetesFluxConfiguration#secret_key_base64}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.syncIntervalInSeconds">syncIntervalInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#sync_interval_in_seconds KubernetesFluxConfiguration#sync_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#timeout_in_seconds KubernetesFluxConfiguration#timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.tlsEnabled">tlsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#tls_enabled KubernetesFluxConfiguration#tls_enabled}. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#bucket_name KubernetesFluxConfiguration#bucket_name}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#url KubernetesFluxConfiguration#url}.

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.accessKey"></a>

```java
public java.lang.String getAccessKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#access_key KubernetesFluxConfiguration#access_key}.

---

##### `localAuthReference`<sup>Optional</sup> <a name="localAuthReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.localAuthReference"></a>

```java
public java.lang.String getLocalAuthReference();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#local_auth_reference KubernetesFluxConfiguration#local_auth_reference}.

---

##### `secretKeyBase64`<sup>Optional</sup> <a name="secretKeyBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.secretKeyBase64"></a>

```java
public java.lang.String getSecretKeyBase64();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#secret_key_base64 KubernetesFluxConfiguration#secret_key_base64}.

---

##### `syncIntervalInSeconds`<sup>Optional</sup> <a name="syncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.syncIntervalInSeconds"></a>

```java
public java.lang.Number getSyncIntervalInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#sync_interval_in_seconds KubernetesFluxConfiguration#sync_interval_in_seconds}.

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#timeout_in_seconds KubernetesFluxConfiguration#timeout_in_seconds}.

---

##### `tlsEnabled`<sup>Optional</sup> <a name="tlsEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.tlsEnabled"></a>

```java
public java.lang.Object getTlsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#tls_enabled KubernetesFluxConfiguration#tls_enabled}.

---

### KubernetesFluxConfigurationConfig <a name="KubernetesFluxConfigurationConfig" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_flux_configuration.KubernetesFluxConfigurationConfig;

KubernetesFluxConfigurationConfig.builder()
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
    .kustomizations(java.util.List<KubernetesFluxConfigurationKustomizations>)
    .name(java.lang.String)
    .namespace(java.lang.String)
//  .blobStorage(KubernetesFluxConfigurationBlobStorage)
//  .bucket(KubernetesFluxConfigurationBucket)
//  .continuousReconciliationEnabled(java.lang.Boolean)
//  .continuousReconciliationEnabled(IResolvable)
//  .gitRepository(KubernetesFluxConfigurationGitRepository)
//  .id(java.lang.String)
//  .scope(java.lang.String)
//  .timeouts(KubernetesFluxConfigurationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#cluster_id KubernetesFluxConfiguration#cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.kustomizations">kustomizations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations">KubernetesFluxConfigurationKustomizations</a>></code> | kustomizations block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#name KubernetesFluxConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#namespace KubernetesFluxConfiguration#namespace}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.blobStorage">blobStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage">KubernetesFluxConfigurationBlobStorage</a></code> | blob_storage block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.bucket">bucket</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket">KubernetesFluxConfigurationBucket</a></code> | bucket block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.continuousReconciliationEnabled">continuousReconciliationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#continuous_reconciliation_enabled KubernetesFluxConfiguration#continuous_reconciliation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.gitRepository">gitRepository</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository">KubernetesFluxConfigurationGitRepository</a></code> | git_repository block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#id KubernetesFluxConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.scope">scope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#scope KubernetesFluxConfiguration#scope}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts">KubernetesFluxConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#cluster_id KubernetesFluxConfiguration#cluster_id}.

---

##### `kustomizations`<sup>Required</sup> <a name="kustomizations" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.kustomizations"></a>

```java
public java.lang.Object getKustomizations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations">KubernetesFluxConfigurationKustomizations</a>>

kustomizations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#kustomizations KubernetesFluxConfiguration#kustomizations}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#name KubernetesFluxConfiguration#name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#namespace KubernetesFluxConfiguration#namespace}.

---

##### `blobStorage`<sup>Optional</sup> <a name="blobStorage" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.blobStorage"></a>

```java
public KubernetesFluxConfigurationBlobStorage getBlobStorage();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage">KubernetesFluxConfigurationBlobStorage</a>

blob_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#blob_storage KubernetesFluxConfiguration#blob_storage}

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.bucket"></a>

```java
public KubernetesFluxConfigurationBucket getBucket();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket">KubernetesFluxConfigurationBucket</a>

bucket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#bucket KubernetesFluxConfiguration#bucket}

---

##### `continuousReconciliationEnabled`<sup>Optional</sup> <a name="continuousReconciliationEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.continuousReconciliationEnabled"></a>

```java
public java.lang.Object getContinuousReconciliationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#continuous_reconciliation_enabled KubernetesFluxConfiguration#continuous_reconciliation_enabled}.

---

##### `gitRepository`<sup>Optional</sup> <a name="gitRepository" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.gitRepository"></a>

```java
public KubernetesFluxConfigurationGitRepository getGitRepository();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository">KubernetesFluxConfigurationGitRepository</a>

git_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#git_repository KubernetesFluxConfiguration#git_repository}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#id KubernetesFluxConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#scope KubernetesFluxConfiguration#scope}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.timeouts"></a>

```java
public KubernetesFluxConfigurationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts">KubernetesFluxConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#timeouts KubernetesFluxConfiguration#timeouts}

---

### KubernetesFluxConfigurationGitRepository <a name="KubernetesFluxConfigurationGitRepository" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_flux_configuration.KubernetesFluxConfigurationGitRepository;

KubernetesFluxConfigurationGitRepository.builder()
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
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.referenceType">referenceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#reference_type KubernetesFluxConfiguration#reference_type}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.referenceValue">referenceValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#reference_value KubernetesFluxConfiguration#reference_value}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#url KubernetesFluxConfiguration#url}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.httpsCaCertBase64">httpsCaCertBase64</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#https_ca_cert_base64 KubernetesFluxConfiguration#https_ca_cert_base64}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.httpsKeyBase64">httpsKeyBase64</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#https_key_base64 KubernetesFluxConfiguration#https_key_base64}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.httpsUser">httpsUser</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#https_user KubernetesFluxConfiguration#https_user}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.localAuthReference">localAuthReference</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#local_auth_reference KubernetesFluxConfiguration#local_auth_reference}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.sshKnownHostsBase64">sshKnownHostsBase64</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#ssh_known_hosts_base64 KubernetesFluxConfiguration#ssh_known_hosts_base64}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.sshPrivateKeyBase64">sshPrivateKeyBase64</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#ssh_private_key_base64 KubernetesFluxConfiguration#ssh_private_key_base64}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.syncIntervalInSeconds">syncIntervalInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#sync_interval_in_seconds KubernetesFluxConfiguration#sync_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#timeout_in_seconds KubernetesFluxConfiguration#timeout_in_seconds}. |

---

##### `referenceType`<sup>Required</sup> <a name="referenceType" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.referenceType"></a>

```java
public java.lang.String getReferenceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#reference_type KubernetesFluxConfiguration#reference_type}.

---

##### `referenceValue`<sup>Required</sup> <a name="referenceValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.referenceValue"></a>

```java
public java.lang.String getReferenceValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#reference_value KubernetesFluxConfiguration#reference_value}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#url KubernetesFluxConfiguration#url}.

---

##### `httpsCaCertBase64`<sup>Optional</sup> <a name="httpsCaCertBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.httpsCaCertBase64"></a>

```java
public java.lang.String getHttpsCaCertBase64();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#https_ca_cert_base64 KubernetesFluxConfiguration#https_ca_cert_base64}.

---

##### `httpsKeyBase64`<sup>Optional</sup> <a name="httpsKeyBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.httpsKeyBase64"></a>

```java
public java.lang.String getHttpsKeyBase64();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#https_key_base64 KubernetesFluxConfiguration#https_key_base64}.

---

##### `httpsUser`<sup>Optional</sup> <a name="httpsUser" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.httpsUser"></a>

```java
public java.lang.String getHttpsUser();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#https_user KubernetesFluxConfiguration#https_user}.

---

##### `localAuthReference`<sup>Optional</sup> <a name="localAuthReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.localAuthReference"></a>

```java
public java.lang.String getLocalAuthReference();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#local_auth_reference KubernetesFluxConfiguration#local_auth_reference}.

---

##### `sshKnownHostsBase64`<sup>Optional</sup> <a name="sshKnownHostsBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.sshKnownHostsBase64"></a>

```java
public java.lang.String getSshKnownHostsBase64();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#ssh_known_hosts_base64 KubernetesFluxConfiguration#ssh_known_hosts_base64}.

---

##### `sshPrivateKeyBase64`<sup>Optional</sup> <a name="sshPrivateKeyBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.sshPrivateKeyBase64"></a>

```java
public java.lang.String getSshPrivateKeyBase64();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#ssh_private_key_base64 KubernetesFluxConfiguration#ssh_private_key_base64}.

---

##### `syncIntervalInSeconds`<sup>Optional</sup> <a name="syncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.syncIntervalInSeconds"></a>

```java
public java.lang.Number getSyncIntervalInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#sync_interval_in_seconds KubernetesFluxConfiguration#sync_interval_in_seconds}.

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#timeout_in_seconds KubernetesFluxConfiguration#timeout_in_seconds}.

---

### KubernetesFluxConfigurationKustomizations <a name="KubernetesFluxConfigurationKustomizations" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_flux_configuration.KubernetesFluxConfigurationKustomizations;

KubernetesFluxConfigurationKustomizations.builder()
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
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#name KubernetesFluxConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#depends_on KubernetesFluxConfiguration#depends_on}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.garbageCollectionEnabled">garbageCollectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#garbage_collection_enabled KubernetesFluxConfiguration#garbage_collection_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#path KubernetesFluxConfiguration#path}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.recreatingEnabled">recreatingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#recreating_enabled KubernetesFluxConfiguration#recreating_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.retryIntervalInSeconds">retryIntervalInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#retry_interval_in_seconds KubernetesFluxConfiguration#retry_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.syncIntervalInSeconds">syncIntervalInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#sync_interval_in_seconds KubernetesFluxConfiguration#sync_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#timeout_in_seconds KubernetesFluxConfiguration#timeout_in_seconds}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#name KubernetesFluxConfiguration#name}.

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#depends_on KubernetesFluxConfiguration#depends_on}.

---

##### `garbageCollectionEnabled`<sup>Optional</sup> <a name="garbageCollectionEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.garbageCollectionEnabled"></a>

```java
public java.lang.Object getGarbageCollectionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#garbage_collection_enabled KubernetesFluxConfiguration#garbage_collection_enabled}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#path KubernetesFluxConfiguration#path}.

---

##### `recreatingEnabled`<sup>Optional</sup> <a name="recreatingEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.recreatingEnabled"></a>

```java
public java.lang.Object getRecreatingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#recreating_enabled KubernetesFluxConfiguration#recreating_enabled}.

---

##### `retryIntervalInSeconds`<sup>Optional</sup> <a name="retryIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.retryIntervalInSeconds"></a>

```java
public java.lang.Number getRetryIntervalInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#retry_interval_in_seconds KubernetesFluxConfiguration#retry_interval_in_seconds}.

---

##### `syncIntervalInSeconds`<sup>Optional</sup> <a name="syncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.syncIntervalInSeconds"></a>

```java
public java.lang.Number getSyncIntervalInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#sync_interval_in_seconds KubernetesFluxConfiguration#sync_interval_in_seconds}.

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#timeout_in_seconds KubernetesFluxConfiguration#timeout_in_seconds}.

---

### KubernetesFluxConfigurationTimeouts <a name="KubernetesFluxConfigurationTimeouts" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_flux_configuration.KubernetesFluxConfigurationTimeouts;

KubernetesFluxConfigurationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#create KubernetesFluxConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#delete KubernetesFluxConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#read KubernetesFluxConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#update KubernetesFluxConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#create KubernetesFluxConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#delete KubernetesFluxConfiguration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#read KubernetesFluxConfiguration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kubernetes_flux_configuration#update KubernetesFluxConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference <a name="KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_flux_configuration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference;

new KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity">KubernetesFluxConfigurationBlobStorageManagedIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.property.internalValue"></a>

```java
public KubernetesFluxConfigurationBlobStorageManagedIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity">KubernetesFluxConfigurationBlobStorageManagedIdentity</a>

---


### KubernetesFluxConfigurationBlobStorageOutputReference <a name="KubernetesFluxConfigurationBlobStorageOutputReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_flux_configuration.KubernetesFluxConfigurationBlobStorageOutputReference;

new KubernetesFluxConfigurationBlobStorageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.putManagedIdentity">putManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.putServicePrincipal">putServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetAccountKey">resetAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetLocalAuthReference">resetLocalAuthReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetManagedIdentity">resetManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetSasToken">resetSasToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetServicePrincipal">resetServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetSyncIntervalInSeconds">resetSyncIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetTimeoutInSeconds">resetTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putManagedIdentity` <a name="putManagedIdentity" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.putManagedIdentity"></a>

```java
public void putManagedIdentity(KubernetesFluxConfigurationBlobStorageManagedIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.putManagedIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity">KubernetesFluxConfigurationBlobStorageManagedIdentity</a>

---

##### `putServicePrincipal` <a name="putServicePrincipal" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.putServicePrincipal"></a>

```java
public void putServicePrincipal(KubernetesFluxConfigurationBlobStorageServicePrincipal value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.putServicePrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal">KubernetesFluxConfigurationBlobStorageServicePrincipal</a>

---

##### `resetAccountKey` <a name="resetAccountKey" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetAccountKey"></a>

```java
public void resetAccountKey()
```

##### `resetLocalAuthReference` <a name="resetLocalAuthReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetLocalAuthReference"></a>

```java
public void resetLocalAuthReference()
```

##### `resetManagedIdentity` <a name="resetManagedIdentity" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetManagedIdentity"></a>

```java
public void resetManagedIdentity()
```

##### `resetSasToken` <a name="resetSasToken" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetSasToken"></a>

```java
public void resetSasToken()
```

##### `resetServicePrincipal` <a name="resetServicePrincipal" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetServicePrincipal"></a>

```java
public void resetServicePrincipal()
```

##### `resetSyncIntervalInSeconds` <a name="resetSyncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetSyncIntervalInSeconds"></a>

```java
public void resetSyncIntervalInSeconds()
```

##### `resetTimeoutInSeconds` <a name="resetTimeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetTimeoutInSeconds"></a>

```java
public void resetTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.managedIdentity">managedIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference">KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.servicePrincipal">servicePrincipal</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference">KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.accountKeyInput">accountKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.containerIdInput">containerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.localAuthReferenceInput">localAuthReferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.managedIdentityInput">managedIdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity">KubernetesFluxConfigurationBlobStorageManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.sasTokenInput">sasTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.servicePrincipalInput">servicePrincipalInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal">KubernetesFluxConfigurationBlobStorageServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.syncIntervalInSecondsInput">syncIntervalInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.timeoutInSecondsInput">timeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.accountKey">accountKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.containerId">containerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.localAuthReference">localAuthReference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.sasToken">sasToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.syncIntervalInSeconds">syncIntervalInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage">KubernetesFluxConfigurationBlobStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managedIdentity`<sup>Required</sup> <a name="managedIdentity" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.managedIdentity"></a>

```java
public KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference getManagedIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference">KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference</a>

---

##### `servicePrincipal`<sup>Required</sup> <a name="servicePrincipal" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.servicePrincipal"></a>

```java
public KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference getServicePrincipal();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference">KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference</a>

---

##### `accountKeyInput`<sup>Optional</sup> <a name="accountKeyInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.accountKeyInput"></a>

```java
public java.lang.String getAccountKeyInput();
```

- *Type:* java.lang.String

---

##### `containerIdInput`<sup>Optional</sup> <a name="containerIdInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.containerIdInput"></a>

```java
public java.lang.String getContainerIdInput();
```

- *Type:* java.lang.String

---

##### `localAuthReferenceInput`<sup>Optional</sup> <a name="localAuthReferenceInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.localAuthReferenceInput"></a>

```java
public java.lang.String getLocalAuthReferenceInput();
```

- *Type:* java.lang.String

---

##### `managedIdentityInput`<sup>Optional</sup> <a name="managedIdentityInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.managedIdentityInput"></a>

```java
public KubernetesFluxConfigurationBlobStorageManagedIdentity getManagedIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity">KubernetesFluxConfigurationBlobStorageManagedIdentity</a>

---

##### `sasTokenInput`<sup>Optional</sup> <a name="sasTokenInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.sasTokenInput"></a>

```java
public java.lang.String getSasTokenInput();
```

- *Type:* java.lang.String

---

##### `servicePrincipalInput`<sup>Optional</sup> <a name="servicePrincipalInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.servicePrincipalInput"></a>

```java
public KubernetesFluxConfigurationBlobStorageServicePrincipal getServicePrincipalInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal">KubernetesFluxConfigurationBlobStorageServicePrincipal</a>

---

##### `syncIntervalInSecondsInput`<sup>Optional</sup> <a name="syncIntervalInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.syncIntervalInSecondsInput"></a>

```java
public java.lang.Number getSyncIntervalInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `timeoutInSecondsInput`<sup>Optional</sup> <a name="timeoutInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.timeoutInSecondsInput"></a>

```java
public java.lang.Number getTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `accountKey`<sup>Required</sup> <a name="accountKey" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.accountKey"></a>

```java
public java.lang.String getAccountKey();
```

- *Type:* java.lang.String

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.containerId"></a>

```java
public java.lang.String getContainerId();
```

- *Type:* java.lang.String

---

##### `localAuthReference`<sup>Required</sup> <a name="localAuthReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.localAuthReference"></a>

```java
public java.lang.String getLocalAuthReference();
```

- *Type:* java.lang.String

---

##### `sasToken`<sup>Required</sup> <a name="sasToken" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.sasToken"></a>

```java
public java.lang.String getSasToken();
```

- *Type:* java.lang.String

---

##### `syncIntervalInSeconds`<sup>Required</sup> <a name="syncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.syncIntervalInSeconds"></a>

```java
public java.lang.Number getSyncIntervalInSeconds();
```

- *Type:* java.lang.Number

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.internalValue"></a>

```java
public KubernetesFluxConfigurationBlobStorage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage">KubernetesFluxConfigurationBlobStorage</a>

---


### KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference <a name="KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_flux_configuration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference;

new KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificateBase64">resetClientCertificateBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificatePassword">resetClientCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificateSendChain">resetClientCertificateSendChain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientCertificateBase64` <a name="resetClientCertificateBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificateBase64"></a>

```java
public void resetClientCertificateBase64()
```

##### `resetClientCertificatePassword` <a name="resetClientCertificatePassword" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificatePassword"></a>

```java
public void resetClientCertificatePassword()
```

##### `resetClientCertificateSendChain` <a name="resetClientCertificateSendChain" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificateSendChain"></a>

```java
public void resetClientCertificateSendChain()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientSecret"></a>

```java
public void resetClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateBase64Input">clientCertificateBase64Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificatePasswordInput">clientCertificatePasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateSendChainInput">clientCertificateSendChainInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateBase64">clientCertificateBase64</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificatePassword">clientCertificatePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateSendChain">clientCertificateSendChain</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal">KubernetesFluxConfigurationBlobStorageServicePrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientCertificateBase64Input`<sup>Optional</sup> <a name="clientCertificateBase64Input" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateBase64Input"></a>

```java
public java.lang.String getClientCertificateBase64Input();
```

- *Type:* java.lang.String

---

##### `clientCertificatePasswordInput`<sup>Optional</sup> <a name="clientCertificatePasswordInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificatePasswordInput"></a>

```java
public java.lang.String getClientCertificatePasswordInput();
```

- *Type:* java.lang.String

---

##### `clientCertificateSendChainInput`<sup>Optional</sup> <a name="clientCertificateSendChainInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateSendChainInput"></a>

```java
public java.lang.Object getClientCertificateSendChainInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `clientCertificateBase64`<sup>Required</sup> <a name="clientCertificateBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateBase64"></a>

```java
public java.lang.String getClientCertificateBase64();
```

- *Type:* java.lang.String

---

##### `clientCertificatePassword`<sup>Required</sup> <a name="clientCertificatePassword" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificatePassword"></a>

```java
public java.lang.String getClientCertificatePassword();
```

- *Type:* java.lang.String

---

##### `clientCertificateSendChain`<sup>Required</sup> <a name="clientCertificateSendChain" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateSendChain"></a>

```java
public java.lang.Object getClientCertificateSendChain();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.internalValue"></a>

```java
public KubernetesFluxConfigurationBlobStorageServicePrincipal getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal">KubernetesFluxConfigurationBlobStorageServicePrincipal</a>

---


### KubernetesFluxConfigurationBucketOutputReference <a name="KubernetesFluxConfigurationBucketOutputReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_flux_configuration.KubernetesFluxConfigurationBucketOutputReference;

new KubernetesFluxConfigurationBucketOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetAccessKey">resetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetLocalAuthReference">resetLocalAuthReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetSecretKeyBase64">resetSecretKeyBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetSyncIntervalInSeconds">resetSyncIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetTimeoutInSeconds">resetTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetTlsEnabled">resetTlsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessKey` <a name="resetAccessKey" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetAccessKey"></a>

```java
public void resetAccessKey()
```

##### `resetLocalAuthReference` <a name="resetLocalAuthReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetLocalAuthReference"></a>

```java
public void resetLocalAuthReference()
```

##### `resetSecretKeyBase64` <a name="resetSecretKeyBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetSecretKeyBase64"></a>

```java
public void resetSecretKeyBase64()
```

##### `resetSyncIntervalInSeconds` <a name="resetSyncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetSyncIntervalInSeconds"></a>

```java
public void resetSyncIntervalInSeconds()
```

##### `resetTimeoutInSeconds` <a name="resetTimeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetTimeoutInSeconds"></a>

```java
public void resetTimeoutInSeconds()
```

##### `resetTlsEnabled` <a name="resetTlsEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetTlsEnabled"></a>

```java
public void resetTlsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.accessKeyInput">accessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.localAuthReferenceInput">localAuthReferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.secretKeyBase64Input">secretKeyBase64Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.syncIntervalInSecondsInput">syncIntervalInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.timeoutInSecondsInput">timeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.tlsEnabledInput">tlsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.accessKey">accessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.localAuthReference">localAuthReference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.secretKeyBase64">secretKeyBase64</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.syncIntervalInSeconds">syncIntervalInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.tlsEnabled">tlsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket">KubernetesFluxConfigurationBucket</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessKeyInput`<sup>Optional</sup> <a name="accessKeyInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.accessKeyInput"></a>

```java
public java.lang.String getAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `localAuthReferenceInput`<sup>Optional</sup> <a name="localAuthReferenceInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.localAuthReferenceInput"></a>

```java
public java.lang.String getLocalAuthReferenceInput();
```

- *Type:* java.lang.String

---

##### `secretKeyBase64Input`<sup>Optional</sup> <a name="secretKeyBase64Input" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.secretKeyBase64Input"></a>

```java
public java.lang.String getSecretKeyBase64Input();
```

- *Type:* java.lang.String

---

##### `syncIntervalInSecondsInput`<sup>Optional</sup> <a name="syncIntervalInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.syncIntervalInSecondsInput"></a>

```java
public java.lang.Number getSyncIntervalInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `timeoutInSecondsInput`<sup>Optional</sup> <a name="timeoutInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.timeoutInSecondsInput"></a>

```java
public java.lang.Number getTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `tlsEnabledInput`<sup>Optional</sup> <a name="tlsEnabledInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.tlsEnabledInput"></a>

```java
public java.lang.Object getTlsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.accessKey"></a>

```java
public java.lang.String getAccessKey();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `localAuthReference`<sup>Required</sup> <a name="localAuthReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.localAuthReference"></a>

```java
public java.lang.String getLocalAuthReference();
```

- *Type:* java.lang.String

---

##### `secretKeyBase64`<sup>Required</sup> <a name="secretKeyBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.secretKeyBase64"></a>

```java
public java.lang.String getSecretKeyBase64();
```

- *Type:* java.lang.String

---

##### `syncIntervalInSeconds`<sup>Required</sup> <a name="syncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.syncIntervalInSeconds"></a>

```java
public java.lang.Number getSyncIntervalInSeconds();
```

- *Type:* java.lang.Number

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `tlsEnabled`<sup>Required</sup> <a name="tlsEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.tlsEnabled"></a>

```java
public java.lang.Object getTlsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.internalValue"></a>

```java
public KubernetesFluxConfigurationBucket getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket">KubernetesFluxConfigurationBucket</a>

---


### KubernetesFluxConfigurationGitRepositoryOutputReference <a name="KubernetesFluxConfigurationGitRepositoryOutputReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_flux_configuration.KubernetesFluxConfigurationGitRepositoryOutputReference;

new KubernetesFluxConfigurationGitRepositoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsCaCertBase64">resetHttpsCaCertBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsKeyBase64">resetHttpsKeyBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsUser">resetHttpsUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetLocalAuthReference">resetLocalAuthReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetSshKnownHostsBase64">resetSshKnownHostsBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetSshPrivateKeyBase64">resetSshPrivateKeyBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetSyncIntervalInSeconds">resetSyncIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetTimeoutInSeconds">resetTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHttpsCaCertBase64` <a name="resetHttpsCaCertBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsCaCertBase64"></a>

```java
public void resetHttpsCaCertBase64()
```

##### `resetHttpsKeyBase64` <a name="resetHttpsKeyBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsKeyBase64"></a>

```java
public void resetHttpsKeyBase64()
```

##### `resetHttpsUser` <a name="resetHttpsUser" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsUser"></a>

```java
public void resetHttpsUser()
```

##### `resetLocalAuthReference` <a name="resetLocalAuthReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetLocalAuthReference"></a>

```java
public void resetLocalAuthReference()
```

##### `resetSshKnownHostsBase64` <a name="resetSshKnownHostsBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetSshKnownHostsBase64"></a>

```java
public void resetSshKnownHostsBase64()
```

##### `resetSshPrivateKeyBase64` <a name="resetSshPrivateKeyBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetSshPrivateKeyBase64"></a>

```java
public void resetSshPrivateKeyBase64()
```

##### `resetSyncIntervalInSeconds` <a name="resetSyncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetSyncIntervalInSeconds"></a>

```java
public void resetSyncIntervalInSeconds()
```

##### `resetTimeoutInSeconds` <a name="resetTimeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetTimeoutInSeconds"></a>

```java
public void resetTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsCaCertBase64Input">httpsCaCertBase64Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsKeyBase64Input">httpsKeyBase64Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsUserInput">httpsUserInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.localAuthReferenceInput">localAuthReferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceTypeInput">referenceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceValueInput">referenceValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.sshKnownHostsBase64Input">sshKnownHostsBase64Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.sshPrivateKeyBase64Input">sshPrivateKeyBase64Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.syncIntervalInSecondsInput">syncIntervalInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.timeoutInSecondsInput">timeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsCaCertBase64">httpsCaCertBase64</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsKeyBase64">httpsKeyBase64</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsUser">httpsUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.localAuthReference">localAuthReference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceType">referenceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceValue">referenceValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.sshKnownHostsBase64">sshKnownHostsBase64</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.sshPrivateKeyBase64">sshPrivateKeyBase64</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.syncIntervalInSeconds">syncIntervalInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository">KubernetesFluxConfigurationGitRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `httpsCaCertBase64Input`<sup>Optional</sup> <a name="httpsCaCertBase64Input" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsCaCertBase64Input"></a>

```java
public java.lang.String getHttpsCaCertBase64Input();
```

- *Type:* java.lang.String

---

##### `httpsKeyBase64Input`<sup>Optional</sup> <a name="httpsKeyBase64Input" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsKeyBase64Input"></a>

```java
public java.lang.String getHttpsKeyBase64Input();
```

- *Type:* java.lang.String

---

##### `httpsUserInput`<sup>Optional</sup> <a name="httpsUserInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsUserInput"></a>

```java
public java.lang.String getHttpsUserInput();
```

- *Type:* java.lang.String

---

##### `localAuthReferenceInput`<sup>Optional</sup> <a name="localAuthReferenceInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.localAuthReferenceInput"></a>

```java
public java.lang.String getLocalAuthReferenceInput();
```

- *Type:* java.lang.String

---

##### `referenceTypeInput`<sup>Optional</sup> <a name="referenceTypeInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceTypeInput"></a>

```java
public java.lang.String getReferenceTypeInput();
```

- *Type:* java.lang.String

---

##### `referenceValueInput`<sup>Optional</sup> <a name="referenceValueInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceValueInput"></a>

```java
public java.lang.String getReferenceValueInput();
```

- *Type:* java.lang.String

---

##### `sshKnownHostsBase64Input`<sup>Optional</sup> <a name="sshKnownHostsBase64Input" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.sshKnownHostsBase64Input"></a>

```java
public java.lang.String getSshKnownHostsBase64Input();
```

- *Type:* java.lang.String

---

##### `sshPrivateKeyBase64Input`<sup>Optional</sup> <a name="sshPrivateKeyBase64Input" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.sshPrivateKeyBase64Input"></a>

```java
public java.lang.String getSshPrivateKeyBase64Input();
```

- *Type:* java.lang.String

---

##### `syncIntervalInSecondsInput`<sup>Optional</sup> <a name="syncIntervalInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.syncIntervalInSecondsInput"></a>

```java
public java.lang.Number getSyncIntervalInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `timeoutInSecondsInput`<sup>Optional</sup> <a name="timeoutInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.timeoutInSecondsInput"></a>

```java
public java.lang.Number getTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `httpsCaCertBase64`<sup>Required</sup> <a name="httpsCaCertBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsCaCertBase64"></a>

```java
public java.lang.String getHttpsCaCertBase64();
```

- *Type:* java.lang.String

---

##### `httpsKeyBase64`<sup>Required</sup> <a name="httpsKeyBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsKeyBase64"></a>

```java
public java.lang.String getHttpsKeyBase64();
```

- *Type:* java.lang.String

---

##### `httpsUser`<sup>Required</sup> <a name="httpsUser" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsUser"></a>

```java
public java.lang.String getHttpsUser();
```

- *Type:* java.lang.String

---

##### `localAuthReference`<sup>Required</sup> <a name="localAuthReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.localAuthReference"></a>

```java
public java.lang.String getLocalAuthReference();
```

- *Type:* java.lang.String

---

##### `referenceType`<sup>Required</sup> <a name="referenceType" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceType"></a>

```java
public java.lang.String getReferenceType();
```

- *Type:* java.lang.String

---

##### `referenceValue`<sup>Required</sup> <a name="referenceValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceValue"></a>

```java
public java.lang.String getReferenceValue();
```

- *Type:* java.lang.String

---

##### `sshKnownHostsBase64`<sup>Required</sup> <a name="sshKnownHostsBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.sshKnownHostsBase64"></a>

```java
public java.lang.String getSshKnownHostsBase64();
```

- *Type:* java.lang.String

---

##### `sshPrivateKeyBase64`<sup>Required</sup> <a name="sshPrivateKeyBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.sshPrivateKeyBase64"></a>

```java
public java.lang.String getSshPrivateKeyBase64();
```

- *Type:* java.lang.String

---

##### `syncIntervalInSeconds`<sup>Required</sup> <a name="syncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.syncIntervalInSeconds"></a>

```java
public java.lang.Number getSyncIntervalInSeconds();
```

- *Type:* java.lang.Number

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.internalValue"></a>

```java
public KubernetesFluxConfigurationGitRepository getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository">KubernetesFluxConfigurationGitRepository</a>

---


### KubernetesFluxConfigurationKustomizationsList <a name="KubernetesFluxConfigurationKustomizationsList" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_flux_configuration.KubernetesFluxConfigurationKustomizationsList;

new KubernetesFluxConfigurationKustomizationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.get"></a>

```java
public KubernetesFluxConfigurationKustomizationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations">KubernetesFluxConfigurationKustomizations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations">KubernetesFluxConfigurationKustomizations</a>>

---


### KubernetesFluxConfigurationKustomizationsOutputReference <a name="KubernetesFluxConfigurationKustomizationsOutputReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_flux_configuration.KubernetesFluxConfigurationKustomizationsOutputReference;

new KubernetesFluxConfigurationKustomizationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetDependsOn">resetDependsOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetGarbageCollectionEnabled">resetGarbageCollectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetRecreatingEnabled">resetRecreatingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetRetryIntervalInSeconds">resetRetryIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetSyncIntervalInSeconds">resetSyncIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetTimeoutInSeconds">resetTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDependsOn` <a name="resetDependsOn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetDependsOn"></a>

```java
public void resetDependsOn()
```

##### `resetGarbageCollectionEnabled` <a name="resetGarbageCollectionEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetGarbageCollectionEnabled"></a>

```java
public void resetGarbageCollectionEnabled()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetRecreatingEnabled` <a name="resetRecreatingEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetRecreatingEnabled"></a>

```java
public void resetRecreatingEnabled()
```

##### `resetRetryIntervalInSeconds` <a name="resetRetryIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetRetryIntervalInSeconds"></a>

```java
public void resetRetryIntervalInSeconds()
```

##### `resetSyncIntervalInSeconds` <a name="resetSyncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetSyncIntervalInSeconds"></a>

```java
public void resetSyncIntervalInSeconds()
```

##### `resetTimeoutInSeconds` <a name="resetTimeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetTimeoutInSeconds"></a>

```java
public void resetTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.dependsOnInput">dependsOnInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.garbageCollectionEnabledInput">garbageCollectionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.recreatingEnabledInput">recreatingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.retryIntervalInSecondsInput">retryIntervalInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.syncIntervalInSecondsInput">syncIntervalInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.timeoutInSecondsInput">timeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.garbageCollectionEnabled">garbageCollectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.recreatingEnabled">recreatingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.retryIntervalInSeconds">retryIntervalInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.syncIntervalInSeconds">syncIntervalInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations">KubernetesFluxConfigurationKustomizations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dependsOnInput`<sup>Optional</sup> <a name="dependsOnInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.dependsOnInput"></a>

```java
public java.util.List<java.lang.String> getDependsOnInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `garbageCollectionEnabledInput`<sup>Optional</sup> <a name="garbageCollectionEnabledInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.garbageCollectionEnabledInput"></a>

```java
public java.lang.Object getGarbageCollectionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `recreatingEnabledInput`<sup>Optional</sup> <a name="recreatingEnabledInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.recreatingEnabledInput"></a>

```java
public java.lang.Object getRecreatingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retryIntervalInSecondsInput`<sup>Optional</sup> <a name="retryIntervalInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.retryIntervalInSecondsInput"></a>

```java
public java.lang.Number getRetryIntervalInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `syncIntervalInSecondsInput`<sup>Optional</sup> <a name="syncIntervalInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.syncIntervalInSecondsInput"></a>

```java
public java.lang.Number getSyncIntervalInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `timeoutInSecondsInput`<sup>Optional</sup> <a name="timeoutInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.timeoutInSecondsInput"></a>

```java
public java.lang.Number getTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Required</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `garbageCollectionEnabled`<sup>Required</sup> <a name="garbageCollectionEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.garbageCollectionEnabled"></a>

```java
public java.lang.Object getGarbageCollectionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `recreatingEnabled`<sup>Required</sup> <a name="recreatingEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.recreatingEnabled"></a>

```java
public java.lang.Object getRecreatingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retryIntervalInSeconds`<sup>Required</sup> <a name="retryIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.retryIntervalInSeconds"></a>

```java
public java.lang.Number getRetryIntervalInSeconds();
```

- *Type:* java.lang.Number

---

##### `syncIntervalInSeconds`<sup>Required</sup> <a name="syncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.syncIntervalInSeconds"></a>

```java
public java.lang.Number getSyncIntervalInSeconds();
```

- *Type:* java.lang.Number

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations">KubernetesFluxConfigurationKustomizations</a>

---


### KubernetesFluxConfigurationTimeoutsOutputReference <a name="KubernetesFluxConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_flux_configuration.KubernetesFluxConfigurationTimeoutsOutputReference;

new KubernetesFluxConfigurationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts">KubernetesFluxConfigurationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts">KubernetesFluxConfigurationTimeouts</a>

---



