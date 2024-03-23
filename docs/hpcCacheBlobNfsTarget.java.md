# `hpcCacheBlobNfsTarget` Submodule <a name="`hpcCacheBlobNfsTarget` Submodule" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HpcCacheBlobNfsTarget <a name="HpcCacheBlobNfsTarget" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target azurerm_hpc_cache_blob_nfs_target}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hpc_cache_blob_nfs_target.HpcCacheBlobNfsTarget;

HpcCacheBlobNfsTarget.Builder.create(Construct scope, java.lang.String id)
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
    .cacheName(java.lang.String)
    .name(java.lang.String)
    .namespacePath(java.lang.String)
    .resourceGroupName(java.lang.String)
    .storageContainerId(java.lang.String)
    .usageModel(java.lang.String)
//  .accessPolicyName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(HpcCacheBlobNfsTargetTimeouts)
//  .verificationTimerInSeconds(java.lang.Number)
//  .writeBackTimerInSeconds(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.cacheName">cacheName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#cache_name HpcCacheBlobNfsTarget#cache_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#name HpcCacheBlobNfsTarget#name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.namespacePath">namespacePath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#namespace_path HpcCacheBlobNfsTarget#namespace_path}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#resource_group_name HpcCacheBlobNfsTarget#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.storageContainerId">storageContainerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#storage_container_id HpcCacheBlobNfsTarget#storage_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.usageModel">usageModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#usage_model HpcCacheBlobNfsTarget#usage_model}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.accessPolicyName">accessPolicyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#access_policy_name HpcCacheBlobNfsTarget#access_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#id HpcCacheBlobNfsTarget#id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts">HpcCacheBlobNfsTargetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.verificationTimerInSeconds">verificationTimerInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#verification_timer_in_seconds HpcCacheBlobNfsTarget#verification_timer_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.writeBackTimerInSeconds">writeBackTimerInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#write_back_timer_in_seconds HpcCacheBlobNfsTarget#write_back_timer_in_seconds}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cacheName`<sup>Required</sup> <a name="cacheName" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.cacheName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#cache_name HpcCacheBlobNfsTarget#cache_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#name HpcCacheBlobNfsTarget#name}.

---

##### `namespacePath`<sup>Required</sup> <a name="namespacePath" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.namespacePath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#namespace_path HpcCacheBlobNfsTarget#namespace_path}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#resource_group_name HpcCacheBlobNfsTarget#resource_group_name}.

---

##### `storageContainerId`<sup>Required</sup> <a name="storageContainerId" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.storageContainerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#storage_container_id HpcCacheBlobNfsTarget#storage_container_id}.

---

##### `usageModel`<sup>Required</sup> <a name="usageModel" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.usageModel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#usage_model HpcCacheBlobNfsTarget#usage_model}.

---

##### `accessPolicyName`<sup>Optional</sup> <a name="accessPolicyName" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.accessPolicyName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#access_policy_name HpcCacheBlobNfsTarget#access_policy_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#id HpcCacheBlobNfsTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts">HpcCacheBlobNfsTargetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#timeouts HpcCacheBlobNfsTarget#timeouts}

---

##### `verificationTimerInSeconds`<sup>Optional</sup> <a name="verificationTimerInSeconds" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.verificationTimerInSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#verification_timer_in_seconds HpcCacheBlobNfsTarget#verification_timer_in_seconds}.

---

##### `writeBackTimerInSeconds`<sup>Optional</sup> <a name="writeBackTimerInSeconds" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.writeBackTimerInSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#write_back_timer_in_seconds HpcCacheBlobNfsTarget#write_back_timer_in_seconds}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.resetAccessPolicyName">resetAccessPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.resetVerificationTimerInSeconds">resetVerificationTimerInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.resetWriteBackTimerInSeconds">resetWriteBackTimerInSeconds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.putTimeouts"></a>

```java
public void putTimeouts(HpcCacheBlobNfsTargetTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts">HpcCacheBlobNfsTargetTimeouts</a>

---

##### `resetAccessPolicyName` <a name="resetAccessPolicyName" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.resetAccessPolicyName"></a>

```java
public void resetAccessPolicyName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVerificationTimerInSeconds` <a name="resetVerificationTimerInSeconds" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.resetVerificationTimerInSeconds"></a>

```java
public void resetVerificationTimerInSeconds()
```

##### `resetWriteBackTimerInSeconds` <a name="resetWriteBackTimerInSeconds" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.resetWriteBackTimerInSeconds"></a>

```java
public void resetWriteBackTimerInSeconds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a HpcCacheBlobNfsTarget resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hpc_cache_blob_nfs_target.HpcCacheBlobNfsTarget;

HpcCacheBlobNfsTarget.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hpc_cache_blob_nfs_target.HpcCacheBlobNfsTarget;

HpcCacheBlobNfsTarget.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hpc_cache_blob_nfs_target.HpcCacheBlobNfsTarget;

HpcCacheBlobNfsTarget.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hpc_cache_blob_nfs_target.HpcCacheBlobNfsTarget;

HpcCacheBlobNfsTarget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),HpcCacheBlobNfsTarget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a HpcCacheBlobNfsTarget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the HpcCacheBlobNfsTarget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing HpcCacheBlobNfsTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the HpcCacheBlobNfsTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference">HpcCacheBlobNfsTargetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.accessPolicyNameInput">accessPolicyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.cacheNameInput">cacheNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.namespacePathInput">namespacePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.storageContainerIdInput">storageContainerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts">HpcCacheBlobNfsTargetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.usageModelInput">usageModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.verificationTimerInSecondsInput">verificationTimerInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.writeBackTimerInSecondsInput">writeBackTimerInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.accessPolicyName">accessPolicyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.cacheName">cacheName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.namespacePath">namespacePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.storageContainerId">storageContainerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.usageModel">usageModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.verificationTimerInSeconds">verificationTimerInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.writeBackTimerInSeconds">writeBackTimerInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.timeouts"></a>

```java
public HpcCacheBlobNfsTargetTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference">HpcCacheBlobNfsTargetTimeoutsOutputReference</a>

---

##### `accessPolicyNameInput`<sup>Optional</sup> <a name="accessPolicyNameInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.accessPolicyNameInput"></a>

```java
public java.lang.String getAccessPolicyNameInput();
```

- *Type:* java.lang.String

---

##### `cacheNameInput`<sup>Optional</sup> <a name="cacheNameInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.cacheNameInput"></a>

```java
public java.lang.String getCacheNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespacePathInput`<sup>Optional</sup> <a name="namespacePathInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.namespacePathInput"></a>

```java
public java.lang.String getNamespacePathInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `storageContainerIdInput`<sup>Optional</sup> <a name="storageContainerIdInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.storageContainerIdInput"></a>

```java
public java.lang.String getStorageContainerIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts">HpcCacheBlobNfsTargetTimeouts</a>

---

##### `usageModelInput`<sup>Optional</sup> <a name="usageModelInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.usageModelInput"></a>

```java
public java.lang.String getUsageModelInput();
```

- *Type:* java.lang.String

---

##### `verificationTimerInSecondsInput`<sup>Optional</sup> <a name="verificationTimerInSecondsInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.verificationTimerInSecondsInput"></a>

```java
public java.lang.Number getVerificationTimerInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `writeBackTimerInSecondsInput`<sup>Optional</sup> <a name="writeBackTimerInSecondsInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.writeBackTimerInSecondsInput"></a>

```java
public java.lang.Number getWriteBackTimerInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `accessPolicyName`<sup>Required</sup> <a name="accessPolicyName" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.accessPolicyName"></a>

```java
public java.lang.String getAccessPolicyName();
```

- *Type:* java.lang.String

---

##### `cacheName`<sup>Required</sup> <a name="cacheName" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.cacheName"></a>

```java
public java.lang.String getCacheName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespacePath`<sup>Required</sup> <a name="namespacePath" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.namespacePath"></a>

```java
public java.lang.String getNamespacePath();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `storageContainerId`<sup>Required</sup> <a name="storageContainerId" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.storageContainerId"></a>

```java
public java.lang.String getStorageContainerId();
```

- *Type:* java.lang.String

---

##### `usageModel`<sup>Required</sup> <a name="usageModel" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.usageModel"></a>

```java
public java.lang.String getUsageModel();
```

- *Type:* java.lang.String

---

##### `verificationTimerInSeconds`<sup>Required</sup> <a name="verificationTimerInSeconds" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.verificationTimerInSeconds"></a>

```java
public java.lang.Number getVerificationTimerInSeconds();
```

- *Type:* java.lang.Number

---

##### `writeBackTimerInSeconds`<sup>Required</sup> <a name="writeBackTimerInSeconds" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.writeBackTimerInSeconds"></a>

```java
public java.lang.Number getWriteBackTimerInSeconds();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### HpcCacheBlobNfsTargetConfig <a name="HpcCacheBlobNfsTargetConfig" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hpc_cache_blob_nfs_target.HpcCacheBlobNfsTargetConfig;

HpcCacheBlobNfsTargetConfig.builder()
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
    .cacheName(java.lang.String)
    .name(java.lang.String)
    .namespacePath(java.lang.String)
    .resourceGroupName(java.lang.String)
    .storageContainerId(java.lang.String)
    .usageModel(java.lang.String)
//  .accessPolicyName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(HpcCacheBlobNfsTargetTimeouts)
//  .verificationTimerInSeconds(java.lang.Number)
//  .writeBackTimerInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.cacheName">cacheName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#cache_name HpcCacheBlobNfsTarget#cache_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#name HpcCacheBlobNfsTarget#name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.namespacePath">namespacePath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#namespace_path HpcCacheBlobNfsTarget#namespace_path}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#resource_group_name HpcCacheBlobNfsTarget#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.storageContainerId">storageContainerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#storage_container_id HpcCacheBlobNfsTarget#storage_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.usageModel">usageModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#usage_model HpcCacheBlobNfsTarget#usage_model}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.accessPolicyName">accessPolicyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#access_policy_name HpcCacheBlobNfsTarget#access_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#id HpcCacheBlobNfsTarget#id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts">HpcCacheBlobNfsTargetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.verificationTimerInSeconds">verificationTimerInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#verification_timer_in_seconds HpcCacheBlobNfsTarget#verification_timer_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.writeBackTimerInSeconds">writeBackTimerInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#write_back_timer_in_seconds HpcCacheBlobNfsTarget#write_back_timer_in_seconds}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cacheName`<sup>Required</sup> <a name="cacheName" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.cacheName"></a>

```java
public java.lang.String getCacheName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#cache_name HpcCacheBlobNfsTarget#cache_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#name HpcCacheBlobNfsTarget#name}.

---

##### `namespacePath`<sup>Required</sup> <a name="namespacePath" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.namespacePath"></a>

```java
public java.lang.String getNamespacePath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#namespace_path HpcCacheBlobNfsTarget#namespace_path}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#resource_group_name HpcCacheBlobNfsTarget#resource_group_name}.

---

##### `storageContainerId`<sup>Required</sup> <a name="storageContainerId" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.storageContainerId"></a>

```java
public java.lang.String getStorageContainerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#storage_container_id HpcCacheBlobNfsTarget#storage_container_id}.

---

##### `usageModel`<sup>Required</sup> <a name="usageModel" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.usageModel"></a>

```java
public java.lang.String getUsageModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#usage_model HpcCacheBlobNfsTarget#usage_model}.

---

##### `accessPolicyName`<sup>Optional</sup> <a name="accessPolicyName" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.accessPolicyName"></a>

```java
public java.lang.String getAccessPolicyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#access_policy_name HpcCacheBlobNfsTarget#access_policy_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#id HpcCacheBlobNfsTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.timeouts"></a>

```java
public HpcCacheBlobNfsTargetTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts">HpcCacheBlobNfsTargetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#timeouts HpcCacheBlobNfsTarget#timeouts}

---

##### `verificationTimerInSeconds`<sup>Optional</sup> <a name="verificationTimerInSeconds" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.verificationTimerInSeconds"></a>

```java
public java.lang.Number getVerificationTimerInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#verification_timer_in_seconds HpcCacheBlobNfsTarget#verification_timer_in_seconds}.

---

##### `writeBackTimerInSeconds`<sup>Optional</sup> <a name="writeBackTimerInSeconds" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.writeBackTimerInSeconds"></a>

```java
public java.lang.Number getWriteBackTimerInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#write_back_timer_in_seconds HpcCacheBlobNfsTarget#write_back_timer_in_seconds}.

---

### HpcCacheBlobNfsTargetTimeouts <a name="HpcCacheBlobNfsTargetTimeouts" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hpc_cache_blob_nfs_target.HpcCacheBlobNfsTargetTimeouts;

HpcCacheBlobNfsTargetTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#create HpcCacheBlobNfsTarget#create}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#delete HpcCacheBlobNfsTarget#delete}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#read HpcCacheBlobNfsTarget#read}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#update HpcCacheBlobNfsTarget#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#create HpcCacheBlobNfsTarget#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#delete HpcCacheBlobNfsTarget#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#read HpcCacheBlobNfsTarget#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/hpc_cache_blob_nfs_target#update HpcCacheBlobNfsTarget#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HpcCacheBlobNfsTargetTimeoutsOutputReference <a name="HpcCacheBlobNfsTargetTimeoutsOutputReference" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hpc_cache_blob_nfs_target.HpcCacheBlobNfsTargetTimeoutsOutputReference;

new HpcCacheBlobNfsTargetTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts">HpcCacheBlobNfsTargetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts">HpcCacheBlobNfsTargetTimeouts</a>

---



