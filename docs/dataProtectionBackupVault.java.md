# `dataProtectionBackupVault` Submodule <a name="`dataProtectionBackupVault` Submodule" id="@cdktf/provider-azurerm.dataProtectionBackupVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataProtectionBackupVault <a name="DataProtectionBackupVault" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault azurerm_data_protection_backup_vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_vault.DataProtectionBackupVault;

DataProtectionBackupVault.Builder.create(Construct scope, java.lang.String id)
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
    .datastoreType(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .redundancy(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .crossRegionRestoreEnabled(java.lang.Boolean)
//  .crossRegionRestoreEnabled(IResolvable)
//  .id(java.lang.String)
//  .identity(DataProtectionBackupVaultIdentity)
//  .immutability(java.lang.String)
//  .retentionDurationInDays(java.lang.Number)
//  .softDelete(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DataProtectionBackupVaultTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.datastoreType">datastoreType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#datastore_type DataProtectionBackupVault#datastore_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#location DataProtectionBackupVault#location}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#name DataProtectionBackupVault#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.redundancy">redundancy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#redundancy DataProtectionBackupVault#redundancy}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#resource_group_name DataProtectionBackupVault#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.crossRegionRestoreEnabled">crossRegionRestoreEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#cross_region_restore_enabled DataProtectionBackupVault#cross_region_restore_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#id DataProtectionBackupVault#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentity">DataProtectionBackupVaultIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.immutability">immutability</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#immutability DataProtectionBackupVault#immutability}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.retentionDurationInDays">retentionDurationInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#retention_duration_in_days DataProtectionBackupVault#retention_duration_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.softDelete">softDelete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#soft_delete DataProtectionBackupVault#soft_delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#tags DataProtectionBackupVault#tags}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeouts">DataProtectionBackupVaultTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datastoreType`<sup>Required</sup> <a name="datastoreType" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.datastoreType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#datastore_type DataProtectionBackupVault#datastore_type}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#location DataProtectionBackupVault#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#name DataProtectionBackupVault#name}.

---

##### `redundancy`<sup>Required</sup> <a name="redundancy" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.redundancy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#redundancy DataProtectionBackupVault#redundancy}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#resource_group_name DataProtectionBackupVault#resource_group_name}.

---

##### `crossRegionRestoreEnabled`<sup>Optional</sup> <a name="crossRegionRestoreEnabled" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.crossRegionRestoreEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#cross_region_restore_enabled DataProtectionBackupVault#cross_region_restore_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#id DataProtectionBackupVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentity">DataProtectionBackupVaultIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#identity DataProtectionBackupVault#identity}

---

##### `immutability`<sup>Optional</sup> <a name="immutability" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.immutability"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#immutability DataProtectionBackupVault#immutability}.

---

##### `retentionDurationInDays`<sup>Optional</sup> <a name="retentionDurationInDays" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.retentionDurationInDays"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#retention_duration_in_days DataProtectionBackupVault#retention_duration_in_days}.

---

##### `softDelete`<sup>Optional</sup> <a name="softDelete" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.softDelete"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#soft_delete DataProtectionBackupVault#soft_delete}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#tags DataProtectionBackupVault#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeouts">DataProtectionBackupVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#timeouts DataProtectionBackupVault#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.resetCrossRegionRestoreEnabled">resetCrossRegionRestoreEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.resetImmutability">resetImmutability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.resetRetentionDurationInDays">resetRetentionDurationInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.resetSoftDelete">resetSoftDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.putIdentity"></a>

```java
public void putIdentity(DataProtectionBackupVaultIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentity">DataProtectionBackupVaultIdentity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.putTimeouts"></a>

```java
public void putTimeouts(DataProtectionBackupVaultTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeouts">DataProtectionBackupVaultTimeouts</a>

---

##### `resetCrossRegionRestoreEnabled` <a name="resetCrossRegionRestoreEnabled" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.resetCrossRegionRestoreEnabled"></a>

```java
public void resetCrossRegionRestoreEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetImmutability` <a name="resetImmutability" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.resetImmutability"></a>

```java
public void resetImmutability()
```

##### `resetRetentionDurationInDays` <a name="resetRetentionDurationInDays" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.resetRetentionDurationInDays"></a>

```java
public void resetRetentionDurationInDays()
```

##### `resetSoftDelete` <a name="resetSoftDelete" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.resetSoftDelete"></a>

```java
public void resetSoftDelete()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataProtectionBackupVault resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_vault.DataProtectionBackupVault;

DataProtectionBackupVault.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_vault.DataProtectionBackupVault;

DataProtectionBackupVault.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_vault.DataProtectionBackupVault;

DataProtectionBackupVault.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_vault.DataProtectionBackupVault;

DataProtectionBackupVault.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataProtectionBackupVault.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataProtectionBackupVault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataProtectionBackupVault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataProtectionBackupVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataProtectionBackupVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference">DataProtectionBackupVaultIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference">DataProtectionBackupVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.crossRegionRestoreEnabledInput">crossRegionRestoreEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.datastoreTypeInput">datastoreTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentity">DataProtectionBackupVaultIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.immutabilityInput">immutabilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.redundancyInput">redundancyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.retentionDurationInDaysInput">retentionDurationInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.softDeleteInput">softDeleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeouts">DataProtectionBackupVaultTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.crossRegionRestoreEnabled">crossRegionRestoreEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.datastoreType">datastoreType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.immutability">immutability</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.redundancy">redundancy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.retentionDurationInDays">retentionDurationInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.softDelete">softDelete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.identity"></a>

```java
public DataProtectionBackupVaultIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference">DataProtectionBackupVaultIdentityOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.timeouts"></a>

```java
public DataProtectionBackupVaultTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference">DataProtectionBackupVaultTimeoutsOutputReference</a>

---

##### `crossRegionRestoreEnabledInput`<sup>Optional</sup> <a name="crossRegionRestoreEnabledInput" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.crossRegionRestoreEnabledInput"></a>

```java
public java.lang.Object getCrossRegionRestoreEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `datastoreTypeInput`<sup>Optional</sup> <a name="datastoreTypeInput" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.datastoreTypeInput"></a>

```java
public java.lang.String getDatastoreTypeInput();
```

- *Type:* java.lang.String

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.identityInput"></a>

```java
public DataProtectionBackupVaultIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentity">DataProtectionBackupVaultIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `immutabilityInput`<sup>Optional</sup> <a name="immutabilityInput" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.immutabilityInput"></a>

```java
public java.lang.String getImmutabilityInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `redundancyInput`<sup>Optional</sup> <a name="redundancyInput" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.redundancyInput"></a>

```java
public java.lang.String getRedundancyInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `retentionDurationInDaysInput`<sup>Optional</sup> <a name="retentionDurationInDaysInput" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.retentionDurationInDaysInput"></a>

```java
public java.lang.Number getRetentionDurationInDaysInput();
```

- *Type:* java.lang.Number

---

##### `softDeleteInput`<sup>Optional</sup> <a name="softDeleteInput" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.softDeleteInput"></a>

```java
public java.lang.String getSoftDeleteInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeouts">DataProtectionBackupVaultTimeouts</a>

---

##### `crossRegionRestoreEnabled`<sup>Required</sup> <a name="crossRegionRestoreEnabled" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.crossRegionRestoreEnabled"></a>

```java
public java.lang.Object getCrossRegionRestoreEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `datastoreType`<sup>Required</sup> <a name="datastoreType" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.datastoreType"></a>

```java
public java.lang.String getDatastoreType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `immutability`<sup>Required</sup> <a name="immutability" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.immutability"></a>

```java
public java.lang.String getImmutability();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `redundancy`<sup>Required</sup> <a name="redundancy" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.redundancy"></a>

```java
public java.lang.String getRedundancy();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `retentionDurationInDays`<sup>Required</sup> <a name="retentionDurationInDays" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.retentionDurationInDays"></a>

```java
public java.lang.Number getRetentionDurationInDays();
```

- *Type:* java.lang.Number

---

##### `softDelete`<sup>Required</sup> <a name="softDelete" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.softDelete"></a>

```java
public java.lang.String getSoftDelete();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVault.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataProtectionBackupVaultConfig <a name="DataProtectionBackupVaultConfig" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_vault.DataProtectionBackupVaultConfig;

DataProtectionBackupVaultConfig.builder()
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
    .datastoreType(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .redundancy(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .crossRegionRestoreEnabled(java.lang.Boolean)
//  .crossRegionRestoreEnabled(IResolvable)
//  .id(java.lang.String)
//  .identity(DataProtectionBackupVaultIdentity)
//  .immutability(java.lang.String)
//  .retentionDurationInDays(java.lang.Number)
//  .softDelete(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DataProtectionBackupVaultTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.property.datastoreType">datastoreType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#datastore_type DataProtectionBackupVault#datastore_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#location DataProtectionBackupVault#location}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#name DataProtectionBackupVault#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.property.redundancy">redundancy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#redundancy DataProtectionBackupVault#redundancy}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#resource_group_name DataProtectionBackupVault#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.property.crossRegionRestoreEnabled">crossRegionRestoreEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#cross_region_restore_enabled DataProtectionBackupVault#cross_region_restore_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#id DataProtectionBackupVault#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentity">DataProtectionBackupVaultIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.property.immutability">immutability</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#immutability DataProtectionBackupVault#immutability}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.property.retentionDurationInDays">retentionDurationInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#retention_duration_in_days DataProtectionBackupVault#retention_duration_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.property.softDelete">softDelete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#soft_delete DataProtectionBackupVault#soft_delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#tags DataProtectionBackupVault#tags}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeouts">DataProtectionBackupVaultTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datastoreType`<sup>Required</sup> <a name="datastoreType" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.property.datastoreType"></a>

```java
public java.lang.String getDatastoreType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#datastore_type DataProtectionBackupVault#datastore_type}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#location DataProtectionBackupVault#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#name DataProtectionBackupVault#name}.

---

##### `redundancy`<sup>Required</sup> <a name="redundancy" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.property.redundancy"></a>

```java
public java.lang.String getRedundancy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#redundancy DataProtectionBackupVault#redundancy}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#resource_group_name DataProtectionBackupVault#resource_group_name}.

---

##### `crossRegionRestoreEnabled`<sup>Optional</sup> <a name="crossRegionRestoreEnabled" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.property.crossRegionRestoreEnabled"></a>

```java
public java.lang.Object getCrossRegionRestoreEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#cross_region_restore_enabled DataProtectionBackupVault#cross_region_restore_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#id DataProtectionBackupVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.property.identity"></a>

```java
public DataProtectionBackupVaultIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentity">DataProtectionBackupVaultIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#identity DataProtectionBackupVault#identity}

---

##### `immutability`<sup>Optional</sup> <a name="immutability" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.property.immutability"></a>

```java
public java.lang.String getImmutability();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#immutability DataProtectionBackupVault#immutability}.

---

##### `retentionDurationInDays`<sup>Optional</sup> <a name="retentionDurationInDays" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.property.retentionDurationInDays"></a>

```java
public java.lang.Number getRetentionDurationInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#retention_duration_in_days DataProtectionBackupVault#retention_duration_in_days}.

---

##### `softDelete`<sup>Optional</sup> <a name="softDelete" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.property.softDelete"></a>

```java
public java.lang.String getSoftDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#soft_delete DataProtectionBackupVault#soft_delete}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#tags DataProtectionBackupVault#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultConfig.property.timeouts"></a>

```java
public DataProtectionBackupVaultTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeouts">DataProtectionBackupVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#timeouts DataProtectionBackupVault#timeouts}

---

### DataProtectionBackupVaultIdentity <a name="DataProtectionBackupVaultIdentity" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_vault.DataProtectionBackupVaultIdentity;

DataProtectionBackupVaultIdentity.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#type DataProtectionBackupVault#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#type DataProtectionBackupVault#type}.

---

### DataProtectionBackupVaultTimeouts <a name="DataProtectionBackupVaultTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_vault.DataProtectionBackupVaultTimeouts;

DataProtectionBackupVaultTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#create DataProtectionBackupVault#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#delete DataProtectionBackupVault#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#read DataProtectionBackupVault#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#update DataProtectionBackupVault#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#create DataProtectionBackupVault#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#delete DataProtectionBackupVault#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#read DataProtectionBackupVault#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_vault#update DataProtectionBackupVault#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataProtectionBackupVaultIdentityOutputReference <a name="DataProtectionBackupVaultIdentityOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_vault.DataProtectionBackupVaultIdentityOutputReference;

new DataProtectionBackupVaultIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentity">DataProtectionBackupVaultIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentityOutputReference.property.internalValue"></a>

```java
public DataProtectionBackupVaultIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultIdentity">DataProtectionBackupVaultIdentity</a>

---


### DataProtectionBackupVaultTimeoutsOutputReference <a name="DataProtectionBackupVaultTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_vault.DataProtectionBackupVaultTimeoutsOutputReference;

new DataProtectionBackupVaultTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeouts">DataProtectionBackupVaultTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataProtectionBackupVault.DataProtectionBackupVaultTimeouts">DataProtectionBackupVaultTimeouts</a>

---



