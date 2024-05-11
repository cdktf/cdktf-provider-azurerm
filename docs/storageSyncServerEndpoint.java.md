# `storageSyncServerEndpoint` Submodule <a name="`storageSyncServerEndpoint` Submodule" id="@cdktf/provider-azurerm.storageSyncServerEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageSyncServerEndpoint <a name="StorageSyncServerEndpoint" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint azurerm_storage_sync_server_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_sync_server_endpoint.StorageSyncServerEndpoint;

StorageSyncServerEndpoint.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .registeredServerId(java.lang.String)
    .serverLocalPath(java.lang.String)
    .storageSyncGroupId(java.lang.String)
//  .cloudTieringEnabled(java.lang.Boolean)
//  .cloudTieringEnabled(IResolvable)
//  .id(java.lang.String)
//  .initialDownloadPolicy(java.lang.String)
//  .localCacheMode(java.lang.String)
//  .tierFilesOlderThanDays(java.lang.Number)
//  .timeouts(StorageSyncServerEndpointTimeouts)
//  .volumeFreeSpacePercent(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#name StorageSyncServerEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.registeredServerId">registeredServerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#registered_server_id StorageSyncServerEndpoint#registered_server_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.serverLocalPath">serverLocalPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#server_local_path StorageSyncServerEndpoint#server_local_path}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.storageSyncGroupId">storageSyncGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#storage_sync_group_id StorageSyncServerEndpoint#storage_sync_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.cloudTieringEnabled">cloudTieringEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#cloud_tiering_enabled StorageSyncServerEndpoint#cloud_tiering_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#id StorageSyncServerEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.initialDownloadPolicy">initialDownloadPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#initial_download_policy StorageSyncServerEndpoint#initial_download_policy}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.localCacheMode">localCacheMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#local_cache_mode StorageSyncServerEndpoint#local_cache_mode}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.tierFilesOlderThanDays">tierFilesOlderThanDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#tier_files_older_than_days StorageSyncServerEndpoint#tier_files_older_than_days}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts">StorageSyncServerEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.volumeFreeSpacePercent">volumeFreeSpacePercent</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#volume_free_space_percent StorageSyncServerEndpoint#volume_free_space_percent}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#name StorageSyncServerEndpoint#name}.

---

##### `registeredServerId`<sup>Required</sup> <a name="registeredServerId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.registeredServerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#registered_server_id StorageSyncServerEndpoint#registered_server_id}.

---

##### `serverLocalPath`<sup>Required</sup> <a name="serverLocalPath" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.serverLocalPath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#server_local_path StorageSyncServerEndpoint#server_local_path}.

---

##### `storageSyncGroupId`<sup>Required</sup> <a name="storageSyncGroupId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.storageSyncGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#storage_sync_group_id StorageSyncServerEndpoint#storage_sync_group_id}.

---

##### `cloudTieringEnabled`<sup>Optional</sup> <a name="cloudTieringEnabled" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.cloudTieringEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#cloud_tiering_enabled StorageSyncServerEndpoint#cloud_tiering_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#id StorageSyncServerEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialDownloadPolicy`<sup>Optional</sup> <a name="initialDownloadPolicy" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.initialDownloadPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#initial_download_policy StorageSyncServerEndpoint#initial_download_policy}.

---

##### `localCacheMode`<sup>Optional</sup> <a name="localCacheMode" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.localCacheMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#local_cache_mode StorageSyncServerEndpoint#local_cache_mode}.

---

##### `tierFilesOlderThanDays`<sup>Optional</sup> <a name="tierFilesOlderThanDays" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.tierFilesOlderThanDays"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#tier_files_older_than_days StorageSyncServerEndpoint#tier_files_older_than_days}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts">StorageSyncServerEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#timeouts StorageSyncServerEndpoint#timeouts}

---

##### `volumeFreeSpacePercent`<sup>Optional</sup> <a name="volumeFreeSpacePercent" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.volumeFreeSpacePercent"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#volume_free_space_percent StorageSyncServerEndpoint#volume_free_space_percent}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetCloudTieringEnabled">resetCloudTieringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetInitialDownloadPolicy">resetInitialDownloadPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetLocalCacheMode">resetLocalCacheMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetTierFilesOlderThanDays">resetTierFilesOlderThanDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetVolumeFreeSpacePercent">resetVolumeFreeSpacePercent</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.putTimeouts"></a>

```java
public void putTimeouts(StorageSyncServerEndpointTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts">StorageSyncServerEndpointTimeouts</a>

---

##### `resetCloudTieringEnabled` <a name="resetCloudTieringEnabled" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetCloudTieringEnabled"></a>

```java
public void resetCloudTieringEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetId"></a>

```java
public void resetId()
```

##### `resetInitialDownloadPolicy` <a name="resetInitialDownloadPolicy" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetInitialDownloadPolicy"></a>

```java
public void resetInitialDownloadPolicy()
```

##### `resetLocalCacheMode` <a name="resetLocalCacheMode" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetLocalCacheMode"></a>

```java
public void resetLocalCacheMode()
```

##### `resetTierFilesOlderThanDays` <a name="resetTierFilesOlderThanDays" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetTierFilesOlderThanDays"></a>

```java
public void resetTierFilesOlderThanDays()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVolumeFreeSpacePercent` <a name="resetVolumeFreeSpacePercent" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetVolumeFreeSpacePercent"></a>

```java
public void resetVolumeFreeSpacePercent()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StorageSyncServerEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_sync_server_endpoint.StorageSyncServerEndpoint;

StorageSyncServerEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_sync_server_endpoint.StorageSyncServerEndpoint;

StorageSyncServerEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_sync_server_endpoint.StorageSyncServerEndpoint;

StorageSyncServerEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_sync_server_endpoint.StorageSyncServerEndpoint;

StorageSyncServerEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StorageSyncServerEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a StorageSyncServerEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StorageSyncServerEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StorageSyncServerEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the StorageSyncServerEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference">StorageSyncServerEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.cloudTieringEnabledInput">cloudTieringEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.initialDownloadPolicyInput">initialDownloadPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.localCacheModeInput">localCacheModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.registeredServerIdInput">registeredServerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.serverLocalPathInput">serverLocalPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.storageSyncGroupIdInput">storageSyncGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.tierFilesOlderThanDaysInput">tierFilesOlderThanDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts">StorageSyncServerEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.volumeFreeSpacePercentInput">volumeFreeSpacePercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.cloudTieringEnabled">cloudTieringEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.initialDownloadPolicy">initialDownloadPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.localCacheMode">localCacheMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.registeredServerId">registeredServerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.serverLocalPath">serverLocalPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.storageSyncGroupId">storageSyncGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.tierFilesOlderThanDays">tierFilesOlderThanDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.volumeFreeSpacePercent">volumeFreeSpacePercent</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.timeouts"></a>

```java
public StorageSyncServerEndpointTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference">StorageSyncServerEndpointTimeoutsOutputReference</a>

---

##### `cloudTieringEnabledInput`<sup>Optional</sup> <a name="cloudTieringEnabledInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.cloudTieringEnabledInput"></a>

```java
public java.lang.Object getCloudTieringEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `initialDownloadPolicyInput`<sup>Optional</sup> <a name="initialDownloadPolicyInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.initialDownloadPolicyInput"></a>

```java
public java.lang.String getInitialDownloadPolicyInput();
```

- *Type:* java.lang.String

---

##### `localCacheModeInput`<sup>Optional</sup> <a name="localCacheModeInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.localCacheModeInput"></a>

```java
public java.lang.String getLocalCacheModeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `registeredServerIdInput`<sup>Optional</sup> <a name="registeredServerIdInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.registeredServerIdInput"></a>

```java
public java.lang.String getRegisteredServerIdInput();
```

- *Type:* java.lang.String

---

##### `serverLocalPathInput`<sup>Optional</sup> <a name="serverLocalPathInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.serverLocalPathInput"></a>

```java
public java.lang.String getServerLocalPathInput();
```

- *Type:* java.lang.String

---

##### `storageSyncGroupIdInput`<sup>Optional</sup> <a name="storageSyncGroupIdInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.storageSyncGroupIdInput"></a>

```java
public java.lang.String getStorageSyncGroupIdInput();
```

- *Type:* java.lang.String

---

##### `tierFilesOlderThanDaysInput`<sup>Optional</sup> <a name="tierFilesOlderThanDaysInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.tierFilesOlderThanDaysInput"></a>

```java
public java.lang.Number getTierFilesOlderThanDaysInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts">StorageSyncServerEndpointTimeouts</a>

---

##### `volumeFreeSpacePercentInput`<sup>Optional</sup> <a name="volumeFreeSpacePercentInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.volumeFreeSpacePercentInput"></a>

```java
public java.lang.Number getVolumeFreeSpacePercentInput();
```

- *Type:* java.lang.Number

---

##### `cloudTieringEnabled`<sup>Required</sup> <a name="cloudTieringEnabled" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.cloudTieringEnabled"></a>

```java
public java.lang.Object getCloudTieringEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `initialDownloadPolicy`<sup>Required</sup> <a name="initialDownloadPolicy" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.initialDownloadPolicy"></a>

```java
public java.lang.String getInitialDownloadPolicy();
```

- *Type:* java.lang.String

---

##### `localCacheMode`<sup>Required</sup> <a name="localCacheMode" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.localCacheMode"></a>

```java
public java.lang.String getLocalCacheMode();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `registeredServerId`<sup>Required</sup> <a name="registeredServerId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.registeredServerId"></a>

```java
public java.lang.String getRegisteredServerId();
```

- *Type:* java.lang.String

---

##### `serverLocalPath`<sup>Required</sup> <a name="serverLocalPath" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.serverLocalPath"></a>

```java
public java.lang.String getServerLocalPath();
```

- *Type:* java.lang.String

---

##### `storageSyncGroupId`<sup>Required</sup> <a name="storageSyncGroupId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.storageSyncGroupId"></a>

```java
public java.lang.String getStorageSyncGroupId();
```

- *Type:* java.lang.String

---

##### `tierFilesOlderThanDays`<sup>Required</sup> <a name="tierFilesOlderThanDays" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.tierFilesOlderThanDays"></a>

```java
public java.lang.Number getTierFilesOlderThanDays();
```

- *Type:* java.lang.Number

---

##### `volumeFreeSpacePercent`<sup>Required</sup> <a name="volumeFreeSpacePercent" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.volumeFreeSpacePercent"></a>

```java
public java.lang.Number getVolumeFreeSpacePercent();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StorageSyncServerEndpointConfig <a name="StorageSyncServerEndpointConfig" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_sync_server_endpoint.StorageSyncServerEndpointConfig;

StorageSyncServerEndpointConfig.builder()
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
    .name(java.lang.String)
    .registeredServerId(java.lang.String)
    .serverLocalPath(java.lang.String)
    .storageSyncGroupId(java.lang.String)
//  .cloudTieringEnabled(java.lang.Boolean)
//  .cloudTieringEnabled(IResolvable)
//  .id(java.lang.String)
//  .initialDownloadPolicy(java.lang.String)
//  .localCacheMode(java.lang.String)
//  .tierFilesOlderThanDays(java.lang.Number)
//  .timeouts(StorageSyncServerEndpointTimeouts)
//  .volumeFreeSpacePercent(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#name StorageSyncServerEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.registeredServerId">registeredServerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#registered_server_id StorageSyncServerEndpoint#registered_server_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.serverLocalPath">serverLocalPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#server_local_path StorageSyncServerEndpoint#server_local_path}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.storageSyncGroupId">storageSyncGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#storage_sync_group_id StorageSyncServerEndpoint#storage_sync_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.cloudTieringEnabled">cloudTieringEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#cloud_tiering_enabled StorageSyncServerEndpoint#cloud_tiering_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#id StorageSyncServerEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.initialDownloadPolicy">initialDownloadPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#initial_download_policy StorageSyncServerEndpoint#initial_download_policy}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.localCacheMode">localCacheMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#local_cache_mode StorageSyncServerEndpoint#local_cache_mode}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.tierFilesOlderThanDays">tierFilesOlderThanDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#tier_files_older_than_days StorageSyncServerEndpoint#tier_files_older_than_days}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts">StorageSyncServerEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.volumeFreeSpacePercent">volumeFreeSpacePercent</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#volume_free_space_percent StorageSyncServerEndpoint#volume_free_space_percent}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#name StorageSyncServerEndpoint#name}.

---

##### `registeredServerId`<sup>Required</sup> <a name="registeredServerId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.registeredServerId"></a>

```java
public java.lang.String getRegisteredServerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#registered_server_id StorageSyncServerEndpoint#registered_server_id}.

---

##### `serverLocalPath`<sup>Required</sup> <a name="serverLocalPath" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.serverLocalPath"></a>

```java
public java.lang.String getServerLocalPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#server_local_path StorageSyncServerEndpoint#server_local_path}.

---

##### `storageSyncGroupId`<sup>Required</sup> <a name="storageSyncGroupId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.storageSyncGroupId"></a>

```java
public java.lang.String getStorageSyncGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#storage_sync_group_id StorageSyncServerEndpoint#storage_sync_group_id}.

---

##### `cloudTieringEnabled`<sup>Optional</sup> <a name="cloudTieringEnabled" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.cloudTieringEnabled"></a>

```java
public java.lang.Object getCloudTieringEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#cloud_tiering_enabled StorageSyncServerEndpoint#cloud_tiering_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#id StorageSyncServerEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialDownloadPolicy`<sup>Optional</sup> <a name="initialDownloadPolicy" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.initialDownloadPolicy"></a>

```java
public java.lang.String getInitialDownloadPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#initial_download_policy StorageSyncServerEndpoint#initial_download_policy}.

---

##### `localCacheMode`<sup>Optional</sup> <a name="localCacheMode" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.localCacheMode"></a>

```java
public java.lang.String getLocalCacheMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#local_cache_mode StorageSyncServerEndpoint#local_cache_mode}.

---

##### `tierFilesOlderThanDays`<sup>Optional</sup> <a name="tierFilesOlderThanDays" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.tierFilesOlderThanDays"></a>

```java
public java.lang.Number getTierFilesOlderThanDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#tier_files_older_than_days StorageSyncServerEndpoint#tier_files_older_than_days}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.timeouts"></a>

```java
public StorageSyncServerEndpointTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts">StorageSyncServerEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#timeouts StorageSyncServerEndpoint#timeouts}

---

##### `volumeFreeSpacePercent`<sup>Optional</sup> <a name="volumeFreeSpacePercent" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.volumeFreeSpacePercent"></a>

```java
public java.lang.Number getVolumeFreeSpacePercent();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#volume_free_space_percent StorageSyncServerEndpoint#volume_free_space_percent}.

---

### StorageSyncServerEndpointTimeouts <a name="StorageSyncServerEndpointTimeouts" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_sync_server_endpoint.StorageSyncServerEndpointTimeouts;

StorageSyncServerEndpointTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#create StorageSyncServerEndpoint#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#delete StorageSyncServerEndpoint#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#read StorageSyncServerEndpoint#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#update StorageSyncServerEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#create StorageSyncServerEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#delete StorageSyncServerEndpoint#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#read StorageSyncServerEndpoint#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/storage_sync_server_endpoint#update StorageSyncServerEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageSyncServerEndpointTimeoutsOutputReference <a name="StorageSyncServerEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_sync_server_endpoint.StorageSyncServerEndpointTimeoutsOutputReference;

new StorageSyncServerEndpointTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts">StorageSyncServerEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts">StorageSyncServerEndpointTimeouts</a>

---



