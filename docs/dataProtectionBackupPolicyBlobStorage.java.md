# `dataProtectionBackupPolicyBlobStorage` Submodule <a name="`dataProtectionBackupPolicyBlobStorage` Submodule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataProtectionBackupPolicyBlobStorage <a name="DataProtectionBackupPolicyBlobStorage" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage azurerm_data_protection_backup_policy_blob_storage}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_policy_blob_storage.DataProtectionBackupPolicyBlobStorage;

DataProtectionBackupPolicyBlobStorage.Builder.create(Construct scope, java.lang.String id)
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
    .vaultId(java.lang.String)
//  .backupRepeatingTimeIntervals(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .operationalDefaultRetentionDuration(java.lang.String)
//  .retentionRule(IResolvable)
//  .retentionRule(java.util.List<DataProtectionBackupPolicyBlobStorageRetentionRule>)
//  .timeouts(DataProtectionBackupPolicyBlobStorageTimeouts)
//  .timeZone(java.lang.String)
//  .vaultDefaultRetentionDuration(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#name DataProtectionBackupPolicyBlobStorage#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.vaultId">vaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#vault_id DataProtectionBackupPolicyBlobStorage#vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.backupRepeatingTimeIntervals">backupRepeatingTimeIntervals</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#backup_repeating_time_intervals DataProtectionBackupPolicyBlobStorage#backup_repeating_time_intervals}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#id DataProtectionBackupPolicyBlobStorage#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.operationalDefaultRetentionDuration">operationalDefaultRetentionDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#operational_default_retention_duration DataProtectionBackupPolicyBlobStorage#operational_default_retention_duration}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.retentionRule">retentionRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRule">DataProtectionBackupPolicyBlobStorageRetentionRule</a>></code> | retention_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeouts">DataProtectionBackupPolicyBlobStorageTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#time_zone DataProtectionBackupPolicyBlobStorage#time_zone}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.vaultDefaultRetentionDuration">vaultDefaultRetentionDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#vault_default_retention_duration DataProtectionBackupPolicyBlobStorage#vault_default_retention_duration}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#name DataProtectionBackupPolicyBlobStorage#name}.

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.vaultId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#vault_id DataProtectionBackupPolicyBlobStorage#vault_id}.

---

##### `backupRepeatingTimeIntervals`<sup>Optional</sup> <a name="backupRepeatingTimeIntervals" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.backupRepeatingTimeIntervals"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#backup_repeating_time_intervals DataProtectionBackupPolicyBlobStorage#backup_repeating_time_intervals}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#id DataProtectionBackupPolicyBlobStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `operationalDefaultRetentionDuration`<sup>Optional</sup> <a name="operationalDefaultRetentionDuration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.operationalDefaultRetentionDuration"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#operational_default_retention_duration DataProtectionBackupPolicyBlobStorage#operational_default_retention_duration}.

---

##### `retentionRule`<sup>Optional</sup> <a name="retentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.retentionRule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRule">DataProtectionBackupPolicyBlobStorageRetentionRule</a>>

retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#retention_rule DataProtectionBackupPolicyBlobStorage#retention_rule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeouts">DataProtectionBackupPolicyBlobStorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#timeouts DataProtectionBackupPolicyBlobStorage#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.timeZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#time_zone DataProtectionBackupPolicyBlobStorage#time_zone}.

---

##### `vaultDefaultRetentionDuration`<sup>Optional</sup> <a name="vaultDefaultRetentionDuration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.vaultDefaultRetentionDuration"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#vault_default_retention_duration DataProtectionBackupPolicyBlobStorage#vault_default_retention_duration}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.putRetentionRule">putRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.resetBackupRepeatingTimeIntervals">resetBackupRepeatingTimeIntervals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.resetOperationalDefaultRetentionDuration">resetOperationalDefaultRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.resetRetentionRule">resetRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.resetTimeZone">resetTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.resetVaultDefaultRetentionDuration">resetVaultDefaultRetentionDuration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRetentionRule` <a name="putRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.putRetentionRule"></a>

```java
public void putRetentionRule(IResolvable OR java.util.List<DataProtectionBackupPolicyBlobStorageRetentionRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.putRetentionRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRule">DataProtectionBackupPolicyBlobStorageRetentionRule</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.putTimeouts"></a>

```java
public void putTimeouts(DataProtectionBackupPolicyBlobStorageTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeouts">DataProtectionBackupPolicyBlobStorageTimeouts</a>

---

##### `resetBackupRepeatingTimeIntervals` <a name="resetBackupRepeatingTimeIntervals" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.resetBackupRepeatingTimeIntervals"></a>

```java
public void resetBackupRepeatingTimeIntervals()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.resetId"></a>

```java
public void resetId()
```

##### `resetOperationalDefaultRetentionDuration` <a name="resetOperationalDefaultRetentionDuration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.resetOperationalDefaultRetentionDuration"></a>

```java
public void resetOperationalDefaultRetentionDuration()
```

##### `resetRetentionRule` <a name="resetRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.resetRetentionRule"></a>

```java
public void resetRetentionRule()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.resetTimeZone"></a>

```java
public void resetTimeZone()
```

##### `resetVaultDefaultRetentionDuration` <a name="resetVaultDefaultRetentionDuration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.resetVaultDefaultRetentionDuration"></a>

```java
public void resetVaultDefaultRetentionDuration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataProtectionBackupPolicyBlobStorage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_policy_blob_storage.DataProtectionBackupPolicyBlobStorage;

DataProtectionBackupPolicyBlobStorage.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_policy_blob_storage.DataProtectionBackupPolicyBlobStorage;

DataProtectionBackupPolicyBlobStorage.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_policy_blob_storage.DataProtectionBackupPolicyBlobStorage;

DataProtectionBackupPolicyBlobStorage.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_policy_blob_storage.DataProtectionBackupPolicyBlobStorage;

DataProtectionBackupPolicyBlobStorage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataProtectionBackupPolicyBlobStorage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataProtectionBackupPolicyBlobStorage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataProtectionBackupPolicyBlobStorage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataProtectionBackupPolicyBlobStorage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataProtectionBackupPolicyBlobStorage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.retentionRule">retentionRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList">DataProtectionBackupPolicyBlobStorageRetentionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference">DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.backupRepeatingTimeIntervalsInput">backupRepeatingTimeIntervalsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.operationalDefaultRetentionDurationInput">operationalDefaultRetentionDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.retentionRuleInput">retentionRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRule">DataProtectionBackupPolicyBlobStorageRetentionRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeouts">DataProtectionBackupPolicyBlobStorageTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.vaultDefaultRetentionDurationInput">vaultDefaultRetentionDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.vaultIdInput">vaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.backupRepeatingTimeIntervals">backupRepeatingTimeIntervals</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.operationalDefaultRetentionDuration">operationalDefaultRetentionDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.vaultDefaultRetentionDuration">vaultDefaultRetentionDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `retentionRule`<sup>Required</sup> <a name="retentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.retentionRule"></a>

```java
public DataProtectionBackupPolicyBlobStorageRetentionRuleList getRetentionRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList">DataProtectionBackupPolicyBlobStorageRetentionRuleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.timeouts"></a>

```java
public DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference">DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference</a>

---

##### `backupRepeatingTimeIntervalsInput`<sup>Optional</sup> <a name="backupRepeatingTimeIntervalsInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.backupRepeatingTimeIntervalsInput"></a>

```java
public java.util.List<java.lang.String> getBackupRepeatingTimeIntervalsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `operationalDefaultRetentionDurationInput`<sup>Optional</sup> <a name="operationalDefaultRetentionDurationInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.operationalDefaultRetentionDurationInput"></a>

```java
public java.lang.String getOperationalDefaultRetentionDurationInput();
```

- *Type:* java.lang.String

---

##### `retentionRuleInput`<sup>Optional</sup> <a name="retentionRuleInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.retentionRuleInput"></a>

```java
public java.lang.Object getRetentionRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRule">DataProtectionBackupPolicyBlobStorageRetentionRule</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeouts">DataProtectionBackupPolicyBlobStorageTimeouts</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `vaultDefaultRetentionDurationInput`<sup>Optional</sup> <a name="vaultDefaultRetentionDurationInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.vaultDefaultRetentionDurationInput"></a>

```java
public java.lang.String getVaultDefaultRetentionDurationInput();
```

- *Type:* java.lang.String

---

##### `vaultIdInput`<sup>Optional</sup> <a name="vaultIdInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.vaultIdInput"></a>

```java
public java.lang.String getVaultIdInput();
```

- *Type:* java.lang.String

---

##### `backupRepeatingTimeIntervals`<sup>Required</sup> <a name="backupRepeatingTimeIntervals" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.backupRepeatingTimeIntervals"></a>

```java
public java.util.List<java.lang.String> getBackupRepeatingTimeIntervals();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `operationalDefaultRetentionDuration`<sup>Required</sup> <a name="operationalDefaultRetentionDuration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.operationalDefaultRetentionDuration"></a>

```java
public java.lang.String getOperationalDefaultRetentionDuration();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `vaultDefaultRetentionDuration`<sup>Required</sup> <a name="vaultDefaultRetentionDuration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.vaultDefaultRetentionDuration"></a>

```java
public java.lang.String getVaultDefaultRetentionDuration();
```

- *Type:* java.lang.String

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataProtectionBackupPolicyBlobStorageConfig <a name="DataProtectionBackupPolicyBlobStorageConfig" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_policy_blob_storage.DataProtectionBackupPolicyBlobStorageConfig;

DataProtectionBackupPolicyBlobStorageConfig.builder()
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
    .vaultId(java.lang.String)
//  .backupRepeatingTimeIntervals(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .operationalDefaultRetentionDuration(java.lang.String)
//  .retentionRule(IResolvable)
//  .retentionRule(java.util.List<DataProtectionBackupPolicyBlobStorageRetentionRule>)
//  .timeouts(DataProtectionBackupPolicyBlobStorageTimeouts)
//  .timeZone(java.lang.String)
//  .vaultDefaultRetentionDuration(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#name DataProtectionBackupPolicyBlobStorage#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#vault_id DataProtectionBackupPolicyBlobStorage#vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.backupRepeatingTimeIntervals">backupRepeatingTimeIntervals</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#backup_repeating_time_intervals DataProtectionBackupPolicyBlobStorage#backup_repeating_time_intervals}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#id DataProtectionBackupPolicyBlobStorage#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.operationalDefaultRetentionDuration">operationalDefaultRetentionDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#operational_default_retention_duration DataProtectionBackupPolicyBlobStorage#operational_default_retention_duration}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.retentionRule">retentionRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRule">DataProtectionBackupPolicyBlobStorageRetentionRule</a>></code> | retention_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeouts">DataProtectionBackupPolicyBlobStorageTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#time_zone DataProtectionBackupPolicyBlobStorage#time_zone}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.vaultDefaultRetentionDuration">vaultDefaultRetentionDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#vault_default_retention_duration DataProtectionBackupPolicyBlobStorage#vault_default_retention_duration}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#name DataProtectionBackupPolicyBlobStorage#name}.

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#vault_id DataProtectionBackupPolicyBlobStorage#vault_id}.

---

##### `backupRepeatingTimeIntervals`<sup>Optional</sup> <a name="backupRepeatingTimeIntervals" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.backupRepeatingTimeIntervals"></a>

```java
public java.util.List<java.lang.String> getBackupRepeatingTimeIntervals();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#backup_repeating_time_intervals DataProtectionBackupPolicyBlobStorage#backup_repeating_time_intervals}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#id DataProtectionBackupPolicyBlobStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `operationalDefaultRetentionDuration`<sup>Optional</sup> <a name="operationalDefaultRetentionDuration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.operationalDefaultRetentionDuration"></a>

```java
public java.lang.String getOperationalDefaultRetentionDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#operational_default_retention_duration DataProtectionBackupPolicyBlobStorage#operational_default_retention_duration}.

---

##### `retentionRule`<sup>Optional</sup> <a name="retentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.retentionRule"></a>

```java
public java.lang.Object getRetentionRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRule">DataProtectionBackupPolicyBlobStorageRetentionRule</a>>

retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#retention_rule DataProtectionBackupPolicyBlobStorage#retention_rule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.timeouts"></a>

```java
public DataProtectionBackupPolicyBlobStorageTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeouts">DataProtectionBackupPolicyBlobStorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#timeouts DataProtectionBackupPolicyBlobStorage#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#time_zone DataProtectionBackupPolicyBlobStorage#time_zone}.

---

##### `vaultDefaultRetentionDuration`<sup>Optional</sup> <a name="vaultDefaultRetentionDuration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.vaultDefaultRetentionDuration"></a>

```java
public java.lang.String getVaultDefaultRetentionDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#vault_default_retention_duration DataProtectionBackupPolicyBlobStorage#vault_default_retention_duration}.

---

### DataProtectionBackupPolicyBlobStorageRetentionRule <a name="DataProtectionBackupPolicyBlobStorageRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_policy_blob_storage.DataProtectionBackupPolicyBlobStorageRetentionRule;

DataProtectionBackupPolicyBlobStorageRetentionRule.builder()
    .criteria(DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria)
    .lifeCycle(DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle)
    .name(java.lang.String)
    .priority(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRule.property.criteria">criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria">DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria</a></code> | criteria block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRule.property.lifeCycle">lifeCycle</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle">DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle</a></code> | life_cycle block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRule.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#name DataProtectionBackupPolicyBlobStorage#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRule.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#priority DataProtectionBackupPolicyBlobStorage#priority}. |

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRule.property.criteria"></a>

```java
public DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria getCriteria();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria">DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#criteria DataProtectionBackupPolicyBlobStorage#criteria}

---

##### `lifeCycle`<sup>Required</sup> <a name="lifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRule.property.lifeCycle"></a>

```java
public DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle getLifeCycle();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle">DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle</a>

life_cycle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#life_cycle DataProtectionBackupPolicyBlobStorage#life_cycle}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#name DataProtectionBackupPolicyBlobStorage#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRule.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#priority DataProtectionBackupPolicyBlobStorage#priority}.

---

### DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria <a name="DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_policy_blob_storage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria;

DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria.builder()
//  .absoluteCriteria(java.lang.String)
//  .daysOfMonth(java.util.List<java.lang.Number>)
//  .daysOfWeek(java.util.List<java.lang.String>)
//  .monthsOfYear(java.util.List<java.lang.String>)
//  .scheduledBackupTimes(java.util.List<java.lang.String>)
//  .weeksOfMonth(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria.property.absoluteCriteria">absoluteCriteria</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#absolute_criteria DataProtectionBackupPolicyBlobStorage#absolute_criteria}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria.property.daysOfMonth">daysOfMonth</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#days_of_month DataProtectionBackupPolicyBlobStorage#days_of_month}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria.property.daysOfWeek">daysOfWeek</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#days_of_week DataProtectionBackupPolicyBlobStorage#days_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria.property.monthsOfYear">monthsOfYear</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#months_of_year DataProtectionBackupPolicyBlobStorage#months_of_year}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria.property.scheduledBackupTimes">scheduledBackupTimes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#scheduled_backup_times DataProtectionBackupPolicyBlobStorage#scheduled_backup_times}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria.property.weeksOfMonth">weeksOfMonth</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#weeks_of_month DataProtectionBackupPolicyBlobStorage#weeks_of_month}. |

---

##### `absoluteCriteria`<sup>Optional</sup> <a name="absoluteCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria.property.absoluteCriteria"></a>

```java
public java.lang.String getAbsoluteCriteria();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#absolute_criteria DataProtectionBackupPolicyBlobStorage#absolute_criteria}.

---

##### `daysOfMonth`<sup>Optional</sup> <a name="daysOfMonth" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria.property.daysOfMonth"></a>

```java
public java.util.List<java.lang.Number> getDaysOfMonth();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#days_of_month DataProtectionBackupPolicyBlobStorage#days_of_month}.

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria.property.daysOfWeek"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeek();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#days_of_week DataProtectionBackupPolicyBlobStorage#days_of_week}.

---

##### `monthsOfYear`<sup>Optional</sup> <a name="monthsOfYear" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria.property.monthsOfYear"></a>

```java
public java.util.List<java.lang.String> getMonthsOfYear();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#months_of_year DataProtectionBackupPolicyBlobStorage#months_of_year}.

---

##### `scheduledBackupTimes`<sup>Optional</sup> <a name="scheduledBackupTimes" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria.property.scheduledBackupTimes"></a>

```java
public java.util.List<java.lang.String> getScheduledBackupTimes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#scheduled_backup_times DataProtectionBackupPolicyBlobStorage#scheduled_backup_times}.

---

##### `weeksOfMonth`<sup>Optional</sup> <a name="weeksOfMonth" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria.property.weeksOfMonth"></a>

```java
public java.util.List<java.lang.String> getWeeksOfMonth();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#weeks_of_month DataProtectionBackupPolicyBlobStorage#weeks_of_month}.

---

### DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle <a name="DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_policy_blob_storage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle;

DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle.builder()
    .dataStoreType(java.lang.String)
    .duration(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle.property.dataStoreType">dataStoreType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#data_store_type DataProtectionBackupPolicyBlobStorage#data_store_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle.property.duration">duration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#duration DataProtectionBackupPolicyBlobStorage#duration}. |

---

##### `dataStoreType`<sup>Required</sup> <a name="dataStoreType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle.property.dataStoreType"></a>

```java
public java.lang.String getDataStoreType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#data_store_type DataProtectionBackupPolicyBlobStorage#data_store_type}.

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#duration DataProtectionBackupPolicyBlobStorage#duration}.

---

### DataProtectionBackupPolicyBlobStorageTimeouts <a name="DataProtectionBackupPolicyBlobStorageTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_policy_blob_storage.DataProtectionBackupPolicyBlobStorageTimeouts;

DataProtectionBackupPolicyBlobStorageTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#create DataProtectionBackupPolicyBlobStorage#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#delete DataProtectionBackupPolicyBlobStorage#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#read DataProtectionBackupPolicyBlobStorage#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#create DataProtectionBackupPolicyBlobStorage#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#delete DataProtectionBackupPolicyBlobStorage#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/data_protection_backup_policy_blob_storage#read DataProtectionBackupPolicyBlobStorage#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference <a name="DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_policy_blob_storage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference;

new DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.resetAbsoluteCriteria">resetAbsoluteCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.resetDaysOfMonth">resetDaysOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.resetMonthsOfYear">resetMonthsOfYear</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.resetScheduledBackupTimes">resetScheduledBackupTimes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.resetWeeksOfMonth">resetWeeksOfMonth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAbsoluteCriteria` <a name="resetAbsoluteCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.resetAbsoluteCriteria"></a>

```java
public void resetAbsoluteCriteria()
```

##### `resetDaysOfMonth` <a name="resetDaysOfMonth" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.resetDaysOfMonth"></a>

```java
public void resetDaysOfMonth()
```

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.resetDaysOfWeek"></a>

```java
public void resetDaysOfWeek()
```

##### `resetMonthsOfYear` <a name="resetMonthsOfYear" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.resetMonthsOfYear"></a>

```java
public void resetMonthsOfYear()
```

##### `resetScheduledBackupTimes` <a name="resetScheduledBackupTimes" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.resetScheduledBackupTimes"></a>

```java
public void resetScheduledBackupTimes()
```

##### `resetWeeksOfMonth` <a name="resetWeeksOfMonth" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.resetWeeksOfMonth"></a>

```java
public void resetWeeksOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.absoluteCriteriaInput">absoluteCriteriaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.daysOfMonthInput">daysOfMonthInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.monthsOfYearInput">monthsOfYearInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.scheduledBackupTimesInput">scheduledBackupTimesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.weeksOfMonthInput">weeksOfMonthInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.absoluteCriteria">absoluteCriteria</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.daysOfMonth">daysOfMonth</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.monthsOfYear">monthsOfYear</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.scheduledBackupTimes">scheduledBackupTimes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.weeksOfMonth">weeksOfMonth</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria">DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `absoluteCriteriaInput`<sup>Optional</sup> <a name="absoluteCriteriaInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.absoluteCriteriaInput"></a>

```java
public java.lang.String getAbsoluteCriteriaInput();
```

- *Type:* java.lang.String

---

##### `daysOfMonthInput`<sup>Optional</sup> <a name="daysOfMonthInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.daysOfMonthInput"></a>

```java
public java.util.List<java.lang.Number> getDaysOfMonthInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.daysOfWeekInput"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeekInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `monthsOfYearInput`<sup>Optional</sup> <a name="monthsOfYearInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.monthsOfYearInput"></a>

```java
public java.util.List<java.lang.String> getMonthsOfYearInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scheduledBackupTimesInput`<sup>Optional</sup> <a name="scheduledBackupTimesInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.scheduledBackupTimesInput"></a>

```java
public java.util.List<java.lang.String> getScheduledBackupTimesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `weeksOfMonthInput`<sup>Optional</sup> <a name="weeksOfMonthInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.weeksOfMonthInput"></a>

```java
public java.util.List<java.lang.String> getWeeksOfMonthInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `absoluteCriteria`<sup>Required</sup> <a name="absoluteCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.absoluteCriteria"></a>

```java
public java.lang.String getAbsoluteCriteria();
```

- *Type:* java.lang.String

---

##### `daysOfMonth`<sup>Required</sup> <a name="daysOfMonth" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.daysOfMonth"></a>

```java
public java.util.List<java.lang.Number> getDaysOfMonth();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.daysOfWeek"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeek();
```

- *Type:* java.util.List<java.lang.String>

---

##### `monthsOfYear`<sup>Required</sup> <a name="monthsOfYear" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.monthsOfYear"></a>

```java
public java.util.List<java.lang.String> getMonthsOfYear();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scheduledBackupTimes`<sup>Required</sup> <a name="scheduledBackupTimes" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.scheduledBackupTimes"></a>

```java
public java.util.List<java.lang.String> getScheduledBackupTimes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.weeksOfMonth"></a>

```java
public java.util.List<java.lang.String> getWeeksOfMonth();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.internalValue"></a>

```java
public DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria">DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria</a>

---


### DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference <a name="DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_policy_blob_storage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference;

new DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput">dataStoreTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.property.durationInput">durationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.property.dataStoreType">dataStoreType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle">DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataStoreTypeInput`<sup>Optional</sup> <a name="dataStoreTypeInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput"></a>

```java
public java.lang.String getDataStoreTypeInput();
```

- *Type:* java.lang.String

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.property.durationInput"></a>

```java
public java.lang.String getDurationInput();
```

- *Type:* java.lang.String

---

##### `dataStoreType`<sup>Required</sup> <a name="dataStoreType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.property.dataStoreType"></a>

```java
public java.lang.String getDataStoreType();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.property.internalValue"></a>

```java
public DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle">DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle</a>

---


### DataProtectionBackupPolicyBlobStorageRetentionRuleList <a name="DataProtectionBackupPolicyBlobStorageRetentionRuleList" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_policy_blob_storage.DataProtectionBackupPolicyBlobStorageRetentionRuleList;

new DataProtectionBackupPolicyBlobStorageRetentionRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.get"></a>

```java
public DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRule">DataProtectionBackupPolicyBlobStorageRetentionRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRule">DataProtectionBackupPolicyBlobStorageRetentionRule</a>>

---


### DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference <a name="DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_policy_blob_storage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference;

new DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.putCriteria">putCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.putLifeCycle">putLifeCycle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCriteria` <a name="putCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.putCriteria"></a>

```java
public void putCriteria(DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.putCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria">DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria</a>

---

##### `putLifeCycle` <a name="putLifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.putLifeCycle"></a>

```java
public void putLifeCycle(DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.putLifeCycle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle">DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.criteria">criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference">DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.lifeCycle">lifeCycle</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference">DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.criteriaInput">criteriaInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria">DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.lifeCycleInput">lifeCycleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle">DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRule">DataProtectionBackupPolicyBlobStorageRetentionRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.criteria"></a>

```java
public DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference getCriteria();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference">DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference</a>

---

##### `lifeCycle`<sup>Required</sup> <a name="lifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.lifeCycle"></a>

```java
public DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference getLifeCycle();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference">DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference</a>

---

##### `criteriaInput`<sup>Optional</sup> <a name="criteriaInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.criteriaInput"></a>

```java
public DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria getCriteriaInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria">DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria</a>

---

##### `lifeCycleInput`<sup>Optional</sup> <a name="lifeCycleInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.lifeCycleInput"></a>

```java
public DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle getLifeCycleInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle">DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRule">DataProtectionBackupPolicyBlobStorageRetentionRule</a>

---


### DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference <a name="DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_policy_blob_storage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference;

new DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeouts">DataProtectionBackupPolicyBlobStorageTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeouts">DataProtectionBackupPolicyBlobStorageTimeouts</a>

---



