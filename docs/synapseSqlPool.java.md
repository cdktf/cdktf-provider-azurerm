# `synapseSqlPool` Submodule <a name="`synapseSqlPool` Submodule" id="@cdktf/provider-azurerm.synapseSqlPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynapseSqlPool <a name="SynapseSqlPool" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool azurerm_synapse_sql_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_sql_pool.SynapseSqlPool;

SynapseSqlPool.Builder.create(Construct scope, java.lang.String id)
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
    .skuName(java.lang.String)
    .storageAccountType(java.lang.String)
    .synapseWorkspaceId(java.lang.String)
//  .collation(java.lang.String)
//  .createMode(java.lang.String)
//  .dataEncrypted(java.lang.Boolean)
//  .dataEncrypted(IResolvable)
//  .geoBackupPolicyEnabled(java.lang.Boolean)
//  .geoBackupPolicyEnabled(IResolvable)
//  .id(java.lang.String)
//  .recoveryDatabaseId(java.lang.String)
//  .restore(SynapseSqlPoolRestore)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SynapseSqlPoolTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#name SynapseSqlPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.skuName">skuName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#sku_name SynapseSqlPool#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.storageAccountType">storageAccountType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#storage_account_type SynapseSqlPool#storage_account_type}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.synapseWorkspaceId">synapseWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#synapse_workspace_id SynapseSqlPool#synapse_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.collation">collation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#collation SynapseSqlPool#collation}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.createMode">createMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#create_mode SynapseSqlPool#create_mode}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.dataEncrypted">dataEncrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#data_encrypted SynapseSqlPool#data_encrypted}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.geoBackupPolicyEnabled">geoBackupPolicyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#geo_backup_policy_enabled SynapseSqlPool#geo_backup_policy_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#id SynapseSqlPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.recoveryDatabaseId">recoveryDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#recovery_database_id SynapseSqlPool#recovery_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.restore">restore</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestore">SynapseSqlPoolRestore</a></code> | restore block. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#tags SynapseSqlPool#tags}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeouts">SynapseSqlPoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#name SynapseSqlPool#name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.skuName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#sku_name SynapseSqlPool#sku_name}.

---

##### `storageAccountType`<sup>Required</sup> <a name="storageAccountType" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.storageAccountType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#storage_account_type SynapseSqlPool#storage_account_type}.

---

##### `synapseWorkspaceId`<sup>Required</sup> <a name="synapseWorkspaceId" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.synapseWorkspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#synapse_workspace_id SynapseSqlPool#synapse_workspace_id}.

---

##### `collation`<sup>Optional</sup> <a name="collation" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.collation"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#collation SynapseSqlPool#collation}.

---

##### `createMode`<sup>Optional</sup> <a name="createMode" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.createMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#create_mode SynapseSqlPool#create_mode}.

---

##### `dataEncrypted`<sup>Optional</sup> <a name="dataEncrypted" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.dataEncrypted"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#data_encrypted SynapseSqlPool#data_encrypted}.

---

##### `geoBackupPolicyEnabled`<sup>Optional</sup> <a name="geoBackupPolicyEnabled" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.geoBackupPolicyEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#geo_backup_policy_enabled SynapseSqlPool#geo_backup_policy_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#id SynapseSqlPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `recoveryDatabaseId`<sup>Optional</sup> <a name="recoveryDatabaseId" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.recoveryDatabaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#recovery_database_id SynapseSqlPool#recovery_database_id}.

---

##### `restore`<sup>Optional</sup> <a name="restore" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.restore"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestore">SynapseSqlPoolRestore</a>

restore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#restore SynapseSqlPool#restore}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#tags SynapseSqlPool#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeouts">SynapseSqlPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#timeouts SynapseSqlPool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.putRestore">putRestore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.resetCollation">resetCollation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.resetCreateMode">resetCreateMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.resetDataEncrypted">resetDataEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.resetGeoBackupPolicyEnabled">resetGeoBackupPolicyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.resetRecoveryDatabaseId">resetRecoveryDatabaseId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.resetRestore">resetRestore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRestore` <a name="putRestore" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.putRestore"></a>

```java
public void putRestore(SynapseSqlPoolRestore value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.putRestore.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestore">SynapseSqlPoolRestore</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.putTimeouts"></a>

```java
public void putTimeouts(SynapseSqlPoolTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeouts">SynapseSqlPoolTimeouts</a>

---

##### `resetCollation` <a name="resetCollation" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.resetCollation"></a>

```java
public void resetCollation()
```

##### `resetCreateMode` <a name="resetCreateMode" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.resetCreateMode"></a>

```java
public void resetCreateMode()
```

##### `resetDataEncrypted` <a name="resetDataEncrypted" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.resetDataEncrypted"></a>

```java
public void resetDataEncrypted()
```

##### `resetGeoBackupPolicyEnabled` <a name="resetGeoBackupPolicyEnabled" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.resetGeoBackupPolicyEnabled"></a>

```java
public void resetGeoBackupPolicyEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.resetId"></a>

```java
public void resetId()
```

##### `resetRecoveryDatabaseId` <a name="resetRecoveryDatabaseId" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.resetRecoveryDatabaseId"></a>

```java
public void resetRecoveryDatabaseId()
```

##### `resetRestore` <a name="resetRestore" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.resetRestore"></a>

```java
public void resetRestore()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SynapseSqlPool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_sql_pool.SynapseSqlPool;

SynapseSqlPool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_sql_pool.SynapseSqlPool;

SynapseSqlPool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_sql_pool.SynapseSqlPool;

SynapseSqlPool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_sql_pool.SynapseSqlPool;

SynapseSqlPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SynapseSqlPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SynapseSqlPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SynapseSqlPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SynapseSqlPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SynapseSqlPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.restore">restore</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference">SynapseSqlPoolRestoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference">SynapseSqlPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.collationInput">collationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.createModeInput">createModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.dataEncryptedInput">dataEncryptedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.geoBackupPolicyEnabledInput">geoBackupPolicyEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.recoveryDatabaseIdInput">recoveryDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.restoreInput">restoreInput</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestore">SynapseSqlPoolRestore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.skuNameInput">skuNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.storageAccountTypeInput">storageAccountTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.synapseWorkspaceIdInput">synapseWorkspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeouts">SynapseSqlPoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.collation">collation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.createMode">createMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.dataEncrypted">dataEncrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.geoBackupPolicyEnabled">geoBackupPolicyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.recoveryDatabaseId">recoveryDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.skuName">skuName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.storageAccountType">storageAccountType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.synapseWorkspaceId">synapseWorkspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `restore`<sup>Required</sup> <a name="restore" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.restore"></a>

```java
public SynapseSqlPoolRestoreOutputReference getRestore();
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference">SynapseSqlPoolRestoreOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.timeouts"></a>

```java
public SynapseSqlPoolTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference">SynapseSqlPoolTimeoutsOutputReference</a>

---

##### `collationInput`<sup>Optional</sup> <a name="collationInput" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.collationInput"></a>

```java
public java.lang.String getCollationInput();
```

- *Type:* java.lang.String

---

##### `createModeInput`<sup>Optional</sup> <a name="createModeInput" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.createModeInput"></a>

```java
public java.lang.String getCreateModeInput();
```

- *Type:* java.lang.String

---

##### `dataEncryptedInput`<sup>Optional</sup> <a name="dataEncryptedInput" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.dataEncryptedInput"></a>

```java
public java.lang.Object getDataEncryptedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `geoBackupPolicyEnabledInput`<sup>Optional</sup> <a name="geoBackupPolicyEnabledInput" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.geoBackupPolicyEnabledInput"></a>

```java
public java.lang.Object getGeoBackupPolicyEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `recoveryDatabaseIdInput`<sup>Optional</sup> <a name="recoveryDatabaseIdInput" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.recoveryDatabaseIdInput"></a>

```java
public java.lang.String getRecoveryDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `restoreInput`<sup>Optional</sup> <a name="restoreInput" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.restoreInput"></a>

```java
public SynapseSqlPoolRestore getRestoreInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestore">SynapseSqlPoolRestore</a>

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.skuNameInput"></a>

```java
public java.lang.String getSkuNameInput();
```

- *Type:* java.lang.String

---

##### `storageAccountTypeInput`<sup>Optional</sup> <a name="storageAccountTypeInput" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.storageAccountTypeInput"></a>

```java
public java.lang.String getStorageAccountTypeInput();
```

- *Type:* java.lang.String

---

##### `synapseWorkspaceIdInput`<sup>Optional</sup> <a name="synapseWorkspaceIdInput" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.synapseWorkspaceIdInput"></a>

```java
public java.lang.String getSynapseWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeouts">SynapseSqlPoolTimeouts</a>

---

##### `collation`<sup>Required</sup> <a name="collation" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.collation"></a>

```java
public java.lang.String getCollation();
```

- *Type:* java.lang.String

---

##### `createMode`<sup>Required</sup> <a name="createMode" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.createMode"></a>

```java
public java.lang.String getCreateMode();
```

- *Type:* java.lang.String

---

##### `dataEncrypted`<sup>Required</sup> <a name="dataEncrypted" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.dataEncrypted"></a>

```java
public java.lang.Object getDataEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `geoBackupPolicyEnabled`<sup>Required</sup> <a name="geoBackupPolicyEnabled" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.geoBackupPolicyEnabled"></a>

```java
public java.lang.Object getGeoBackupPolicyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `recoveryDatabaseId`<sup>Required</sup> <a name="recoveryDatabaseId" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.recoveryDatabaseId"></a>

```java
public java.lang.String getRecoveryDatabaseId();
```

- *Type:* java.lang.String

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

---

##### `storageAccountType`<sup>Required</sup> <a name="storageAccountType" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.storageAccountType"></a>

```java
public java.lang.String getStorageAccountType();
```

- *Type:* java.lang.String

---

##### `synapseWorkspaceId`<sup>Required</sup> <a name="synapseWorkspaceId" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.synapseWorkspaceId"></a>

```java
public java.lang.String getSynapseWorkspaceId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SynapseSqlPoolConfig <a name="SynapseSqlPoolConfig" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_sql_pool.SynapseSqlPoolConfig;

SynapseSqlPoolConfig.builder()
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
    .skuName(java.lang.String)
    .storageAccountType(java.lang.String)
    .synapseWorkspaceId(java.lang.String)
//  .collation(java.lang.String)
//  .createMode(java.lang.String)
//  .dataEncrypted(java.lang.Boolean)
//  .dataEncrypted(IResolvable)
//  .geoBackupPolicyEnabled(java.lang.Boolean)
//  .geoBackupPolicyEnabled(IResolvable)
//  .id(java.lang.String)
//  .recoveryDatabaseId(java.lang.String)
//  .restore(SynapseSqlPoolRestore)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SynapseSqlPoolTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#name SynapseSqlPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.skuName">skuName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#sku_name SynapseSqlPool#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.storageAccountType">storageAccountType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#storage_account_type SynapseSqlPool#storage_account_type}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.synapseWorkspaceId">synapseWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#synapse_workspace_id SynapseSqlPool#synapse_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.collation">collation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#collation SynapseSqlPool#collation}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.createMode">createMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#create_mode SynapseSqlPool#create_mode}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.dataEncrypted">dataEncrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#data_encrypted SynapseSqlPool#data_encrypted}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.geoBackupPolicyEnabled">geoBackupPolicyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#geo_backup_policy_enabled SynapseSqlPool#geo_backup_policy_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#id SynapseSqlPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.recoveryDatabaseId">recoveryDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#recovery_database_id SynapseSqlPool#recovery_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.restore">restore</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestore">SynapseSqlPoolRestore</a></code> | restore block. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#tags SynapseSqlPool#tags}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeouts">SynapseSqlPoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#name SynapseSqlPool#name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#sku_name SynapseSqlPool#sku_name}.

---

##### `storageAccountType`<sup>Required</sup> <a name="storageAccountType" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.storageAccountType"></a>

```java
public java.lang.String getStorageAccountType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#storage_account_type SynapseSqlPool#storage_account_type}.

---

##### `synapseWorkspaceId`<sup>Required</sup> <a name="synapseWorkspaceId" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.synapseWorkspaceId"></a>

```java
public java.lang.String getSynapseWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#synapse_workspace_id SynapseSqlPool#synapse_workspace_id}.

---

##### `collation`<sup>Optional</sup> <a name="collation" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.collation"></a>

```java
public java.lang.String getCollation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#collation SynapseSqlPool#collation}.

---

##### `createMode`<sup>Optional</sup> <a name="createMode" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.createMode"></a>

```java
public java.lang.String getCreateMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#create_mode SynapseSqlPool#create_mode}.

---

##### `dataEncrypted`<sup>Optional</sup> <a name="dataEncrypted" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.dataEncrypted"></a>

```java
public java.lang.Object getDataEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#data_encrypted SynapseSqlPool#data_encrypted}.

---

##### `geoBackupPolicyEnabled`<sup>Optional</sup> <a name="geoBackupPolicyEnabled" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.geoBackupPolicyEnabled"></a>

```java
public java.lang.Object getGeoBackupPolicyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#geo_backup_policy_enabled SynapseSqlPool#geo_backup_policy_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#id SynapseSqlPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `recoveryDatabaseId`<sup>Optional</sup> <a name="recoveryDatabaseId" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.recoveryDatabaseId"></a>

```java
public java.lang.String getRecoveryDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#recovery_database_id SynapseSqlPool#recovery_database_id}.

---

##### `restore`<sup>Optional</sup> <a name="restore" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.restore"></a>

```java
public SynapseSqlPoolRestore getRestore();
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestore">SynapseSqlPoolRestore</a>

restore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#restore SynapseSqlPool#restore}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#tags SynapseSqlPool#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.timeouts"></a>

```java
public SynapseSqlPoolTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeouts">SynapseSqlPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#timeouts SynapseSqlPool#timeouts}

---

### SynapseSqlPoolRestore <a name="SynapseSqlPoolRestore" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestore.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_sql_pool.SynapseSqlPoolRestore;

SynapseSqlPoolRestore.builder()
    .pointInTime(java.lang.String)
    .sourceDatabaseId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestore.property.pointInTime">pointInTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#point_in_time SynapseSqlPool#point_in_time}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestore.property.sourceDatabaseId">sourceDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#source_database_id SynapseSqlPool#source_database_id}. |

---

##### `pointInTime`<sup>Required</sup> <a name="pointInTime" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestore.property.pointInTime"></a>

```java
public java.lang.String getPointInTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#point_in_time SynapseSqlPool#point_in_time}.

---

##### `sourceDatabaseId`<sup>Required</sup> <a name="sourceDatabaseId" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestore.property.sourceDatabaseId"></a>

```java
public java.lang.String getSourceDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#source_database_id SynapseSqlPool#source_database_id}.

---

### SynapseSqlPoolTimeouts <a name="SynapseSqlPoolTimeouts" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_sql_pool.SynapseSqlPoolTimeouts;

SynapseSqlPoolTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#create SynapseSqlPool#create}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#delete SynapseSqlPool#delete}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#read SynapseSqlPool#read}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#update SynapseSqlPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#create SynapseSqlPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#delete SynapseSqlPool#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#read SynapseSqlPool#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/synapse_sql_pool#update SynapseSqlPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynapseSqlPoolRestoreOutputReference <a name="SynapseSqlPoolRestoreOutputReference" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_sql_pool.SynapseSqlPoolRestoreOutputReference;

new SynapseSqlPoolRestoreOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.property.pointInTimeInput">pointInTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.property.sourceDatabaseIdInput">sourceDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.property.pointInTime">pointInTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.property.sourceDatabaseId">sourceDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestore">SynapseSqlPoolRestore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pointInTimeInput`<sup>Optional</sup> <a name="pointInTimeInput" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.property.pointInTimeInput"></a>

```java
public java.lang.String getPointInTimeInput();
```

- *Type:* java.lang.String

---

##### `sourceDatabaseIdInput`<sup>Optional</sup> <a name="sourceDatabaseIdInput" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.property.sourceDatabaseIdInput"></a>

```java
public java.lang.String getSourceDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `pointInTime`<sup>Required</sup> <a name="pointInTime" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.property.pointInTime"></a>

```java
public java.lang.String getPointInTime();
```

- *Type:* java.lang.String

---

##### `sourceDatabaseId`<sup>Required</sup> <a name="sourceDatabaseId" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.property.sourceDatabaseId"></a>

```java
public java.lang.String getSourceDatabaseId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.property.internalValue"></a>

```java
public SynapseSqlPoolRestore getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestore">SynapseSqlPoolRestore</a>

---


### SynapseSqlPoolTimeoutsOutputReference <a name="SynapseSqlPoolTimeoutsOutputReference" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_sql_pool.SynapseSqlPoolTimeoutsOutputReference;

new SynapseSqlPoolTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeouts">SynapseSqlPoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeouts">SynapseSqlPoolTimeouts</a>

---



