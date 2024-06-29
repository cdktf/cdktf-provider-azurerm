# `mssqlDatabaseExtendedAuditingPolicy` Submodule <a name="`mssqlDatabaseExtendedAuditingPolicy` Submodule" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlDatabaseExtendedAuditingPolicy <a name="MssqlDatabaseExtendedAuditingPolicy" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy azurerm_mssql_database_extended_auditing_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_database_extended_auditing_policy.MssqlDatabaseExtendedAuditingPolicy;

MssqlDatabaseExtendedAuditingPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .databaseId(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .logMonitoringEnabled(java.lang.Boolean)
//  .logMonitoringEnabled(IResolvable)
//  .retentionInDays(java.lang.Number)
//  .storageAccountAccessKey(java.lang.String)
//  .storageAccountAccessKeyIsSecondary(java.lang.Boolean)
//  .storageAccountAccessKeyIsSecondary(IResolvable)
//  .storageEndpoint(java.lang.String)
//  .timeouts(MssqlDatabaseExtendedAuditingPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.databaseId">databaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#database_id MssqlDatabaseExtendedAuditingPolicy#database_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#enabled MssqlDatabaseExtendedAuditingPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#id MssqlDatabaseExtendedAuditingPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.logMonitoringEnabled">logMonitoringEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#log_monitoring_enabled MssqlDatabaseExtendedAuditingPolicy#log_monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.retentionInDays">retentionInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#retention_in_days MssqlDatabaseExtendedAuditingPolicy#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#storage_account_access_key MssqlDatabaseExtendedAuditingPolicy#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.storageAccountAccessKeyIsSecondary">storageAccountAccessKeyIsSecondary</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#storage_account_access_key_is_secondary MssqlDatabaseExtendedAuditingPolicy#storage_account_access_key_is_secondary}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.storageEndpoint">storageEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#storage_endpoint MssqlDatabaseExtendedAuditingPolicy#storage_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts">MssqlDatabaseExtendedAuditingPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.databaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#database_id MssqlDatabaseExtendedAuditingPolicy#database_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#enabled MssqlDatabaseExtendedAuditingPolicy#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#id MssqlDatabaseExtendedAuditingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logMonitoringEnabled`<sup>Optional</sup> <a name="logMonitoringEnabled" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.logMonitoringEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#log_monitoring_enabled MssqlDatabaseExtendedAuditingPolicy#log_monitoring_enabled}.

---

##### `retentionInDays`<sup>Optional</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.retentionInDays"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#retention_in_days MssqlDatabaseExtendedAuditingPolicy#retention_in_days}.

---

##### `storageAccountAccessKey`<sup>Optional</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.storageAccountAccessKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#storage_account_access_key MssqlDatabaseExtendedAuditingPolicy#storage_account_access_key}.

---

##### `storageAccountAccessKeyIsSecondary`<sup>Optional</sup> <a name="storageAccountAccessKeyIsSecondary" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.storageAccountAccessKeyIsSecondary"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#storage_account_access_key_is_secondary MssqlDatabaseExtendedAuditingPolicy#storage_account_access_key_is_secondary}.

---

##### `storageEndpoint`<sup>Optional</sup> <a name="storageEndpoint" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.storageEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#storage_endpoint MssqlDatabaseExtendedAuditingPolicy#storage_endpoint}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts">MssqlDatabaseExtendedAuditingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#timeouts MssqlDatabaseExtendedAuditingPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetLogMonitoringEnabled">resetLogMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetRetentionInDays">resetRetentionInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetStorageAccountAccessKey">resetStorageAccountAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetStorageAccountAccessKeyIsSecondary">resetStorageAccountAccessKeyIsSecondary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetStorageEndpoint">resetStorageEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.putTimeouts"></a>

```java
public void putTimeouts(MssqlDatabaseExtendedAuditingPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts">MssqlDatabaseExtendedAuditingPolicyTimeouts</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetLogMonitoringEnabled` <a name="resetLogMonitoringEnabled" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetLogMonitoringEnabled"></a>

```java
public void resetLogMonitoringEnabled()
```

##### `resetRetentionInDays` <a name="resetRetentionInDays" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetRetentionInDays"></a>

```java
public void resetRetentionInDays()
```

##### `resetStorageAccountAccessKey` <a name="resetStorageAccountAccessKey" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetStorageAccountAccessKey"></a>

```java
public void resetStorageAccountAccessKey()
```

##### `resetStorageAccountAccessKeyIsSecondary` <a name="resetStorageAccountAccessKeyIsSecondary" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetStorageAccountAccessKeyIsSecondary"></a>

```java
public void resetStorageAccountAccessKeyIsSecondary()
```

##### `resetStorageEndpoint` <a name="resetStorageEndpoint" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetStorageEndpoint"></a>

```java
public void resetStorageEndpoint()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MssqlDatabaseExtendedAuditingPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_database_extended_auditing_policy.MssqlDatabaseExtendedAuditingPolicy;

MssqlDatabaseExtendedAuditingPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_database_extended_auditing_policy.MssqlDatabaseExtendedAuditingPolicy;

MssqlDatabaseExtendedAuditingPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_database_extended_auditing_policy.MssqlDatabaseExtendedAuditingPolicy;

MssqlDatabaseExtendedAuditingPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_database_extended_auditing_policy.MssqlDatabaseExtendedAuditingPolicy;

MssqlDatabaseExtendedAuditingPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MssqlDatabaseExtendedAuditingPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MssqlDatabaseExtendedAuditingPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MssqlDatabaseExtendedAuditingPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MssqlDatabaseExtendedAuditingPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MssqlDatabaseExtendedAuditingPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference">MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.databaseIdInput">databaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.logMonitoringEnabledInput">logMonitoringEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.retentionInDaysInput">retentionInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.storageAccountAccessKeyInput">storageAccountAccessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondaryInput">storageAccountAccessKeyIsSecondaryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.storageEndpointInput">storageEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts">MssqlDatabaseExtendedAuditingPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.databaseId">databaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.logMonitoringEnabled">logMonitoringEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.retentionInDays">retentionInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondary">storageAccountAccessKeyIsSecondary</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.storageEndpoint">storageEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.timeouts"></a>

```java
public MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference">MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference</a>

---

##### `databaseIdInput`<sup>Optional</sup> <a name="databaseIdInput" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.databaseIdInput"></a>

```java
public java.lang.String getDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logMonitoringEnabledInput`<sup>Optional</sup> <a name="logMonitoringEnabledInput" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.logMonitoringEnabledInput"></a>

```java
public java.lang.Object getLogMonitoringEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retentionInDaysInput`<sup>Optional</sup> <a name="retentionInDaysInput" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.retentionInDaysInput"></a>

```java
public java.lang.Number getRetentionInDaysInput();
```

- *Type:* java.lang.Number

---

##### `storageAccountAccessKeyInput`<sup>Optional</sup> <a name="storageAccountAccessKeyInput" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.storageAccountAccessKeyInput"></a>

```java
public java.lang.String getStorageAccountAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `storageAccountAccessKeyIsSecondaryInput`<sup>Optional</sup> <a name="storageAccountAccessKeyIsSecondaryInput" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondaryInput"></a>

```java
public java.lang.Object getStorageAccountAccessKeyIsSecondaryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `storageEndpointInput`<sup>Optional</sup> <a name="storageEndpointInput" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.storageEndpointInput"></a>

```java
public java.lang.String getStorageEndpointInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts">MssqlDatabaseExtendedAuditingPolicyTimeouts</a>

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.databaseId"></a>

```java
public java.lang.String getDatabaseId();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logMonitoringEnabled`<sup>Required</sup> <a name="logMonitoringEnabled" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.logMonitoringEnabled"></a>

```java
public java.lang.Object getLogMonitoringEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.retentionInDays"></a>

```java
public java.lang.Number getRetentionInDays();
```

- *Type:* java.lang.Number

---

##### `storageAccountAccessKey`<sup>Required</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.storageAccountAccessKey"></a>

```java
public java.lang.String getStorageAccountAccessKey();
```

- *Type:* java.lang.String

---

##### `storageAccountAccessKeyIsSecondary`<sup>Required</sup> <a name="storageAccountAccessKeyIsSecondary" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondary"></a>

```java
public java.lang.Object getStorageAccountAccessKeyIsSecondary();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `storageEndpoint`<sup>Required</sup> <a name="storageEndpoint" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.storageEndpoint"></a>

```java
public java.lang.String getStorageEndpoint();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlDatabaseExtendedAuditingPolicyConfig <a name="MssqlDatabaseExtendedAuditingPolicyConfig" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_database_extended_auditing_policy.MssqlDatabaseExtendedAuditingPolicyConfig;

MssqlDatabaseExtendedAuditingPolicyConfig.builder()
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
    .databaseId(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .logMonitoringEnabled(java.lang.Boolean)
//  .logMonitoringEnabled(IResolvable)
//  .retentionInDays(java.lang.Number)
//  .storageAccountAccessKey(java.lang.String)
//  .storageAccountAccessKeyIsSecondary(java.lang.Boolean)
//  .storageAccountAccessKeyIsSecondary(IResolvable)
//  .storageEndpoint(java.lang.String)
//  .timeouts(MssqlDatabaseExtendedAuditingPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.databaseId">databaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#database_id MssqlDatabaseExtendedAuditingPolicy#database_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#enabled MssqlDatabaseExtendedAuditingPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#id MssqlDatabaseExtendedAuditingPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.logMonitoringEnabled">logMonitoringEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#log_monitoring_enabled MssqlDatabaseExtendedAuditingPolicy#log_monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.retentionInDays">retentionInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#retention_in_days MssqlDatabaseExtendedAuditingPolicy#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#storage_account_access_key MssqlDatabaseExtendedAuditingPolicy#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.storageAccountAccessKeyIsSecondary">storageAccountAccessKeyIsSecondary</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#storage_account_access_key_is_secondary MssqlDatabaseExtendedAuditingPolicy#storage_account_access_key_is_secondary}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.storageEndpoint">storageEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#storage_endpoint MssqlDatabaseExtendedAuditingPolicy#storage_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts">MssqlDatabaseExtendedAuditingPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.databaseId"></a>

```java
public java.lang.String getDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#database_id MssqlDatabaseExtendedAuditingPolicy#database_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#enabled MssqlDatabaseExtendedAuditingPolicy#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#id MssqlDatabaseExtendedAuditingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logMonitoringEnabled`<sup>Optional</sup> <a name="logMonitoringEnabled" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.logMonitoringEnabled"></a>

```java
public java.lang.Object getLogMonitoringEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#log_monitoring_enabled MssqlDatabaseExtendedAuditingPolicy#log_monitoring_enabled}.

---

##### `retentionInDays`<sup>Optional</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.retentionInDays"></a>

```java
public java.lang.Number getRetentionInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#retention_in_days MssqlDatabaseExtendedAuditingPolicy#retention_in_days}.

---

##### `storageAccountAccessKey`<sup>Optional</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.storageAccountAccessKey"></a>

```java
public java.lang.String getStorageAccountAccessKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#storage_account_access_key MssqlDatabaseExtendedAuditingPolicy#storage_account_access_key}.

---

##### `storageAccountAccessKeyIsSecondary`<sup>Optional</sup> <a name="storageAccountAccessKeyIsSecondary" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.storageAccountAccessKeyIsSecondary"></a>

```java
public java.lang.Object getStorageAccountAccessKeyIsSecondary();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#storage_account_access_key_is_secondary MssqlDatabaseExtendedAuditingPolicy#storage_account_access_key_is_secondary}.

---

##### `storageEndpoint`<sup>Optional</sup> <a name="storageEndpoint" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.storageEndpoint"></a>

```java
public java.lang.String getStorageEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#storage_endpoint MssqlDatabaseExtendedAuditingPolicy#storage_endpoint}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.timeouts"></a>

```java
public MssqlDatabaseExtendedAuditingPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts">MssqlDatabaseExtendedAuditingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#timeouts MssqlDatabaseExtendedAuditingPolicy#timeouts}

---

### MssqlDatabaseExtendedAuditingPolicyTimeouts <a name="MssqlDatabaseExtendedAuditingPolicyTimeouts" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_database_extended_auditing_policy.MssqlDatabaseExtendedAuditingPolicyTimeouts;

MssqlDatabaseExtendedAuditingPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#create MssqlDatabaseExtendedAuditingPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#delete MssqlDatabaseExtendedAuditingPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#read MssqlDatabaseExtendedAuditingPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#update MssqlDatabaseExtendedAuditingPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#create MssqlDatabaseExtendedAuditingPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#delete MssqlDatabaseExtendedAuditingPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#read MssqlDatabaseExtendedAuditingPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/mssql_database_extended_auditing_policy#update MssqlDatabaseExtendedAuditingPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference <a name="MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_database_extended_auditing_policy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference;

new MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts">MssqlDatabaseExtendedAuditingPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts">MssqlDatabaseExtendedAuditingPolicyTimeouts</a>

---



