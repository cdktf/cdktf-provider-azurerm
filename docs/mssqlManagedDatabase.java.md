# `mssqlManagedDatabase` Submodule <a name="`mssqlManagedDatabase` Submodule" id="@cdktf/provider-azurerm.mssqlManagedDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlManagedDatabase <a name="MssqlManagedDatabase" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_managed_database azurerm_mssql_managed_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_database.MssqlManagedDatabase;

MssqlManagedDatabase.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .managedInstanceId(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .longTermRetentionPolicy(MssqlManagedDatabaseLongTermRetentionPolicy)
//  .shortTermRetentionDays(java.lang.Number)
//  .timeouts(MssqlManagedDatabaseTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.managedInstanceId">managedInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_managed_database#managed_instance_id MssqlManagedDatabase#managed_instance_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_managed_database#name MssqlManagedDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_managed_database#id MssqlManagedDatabase#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.longTermRetentionPolicy">longTermRetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy">MssqlManagedDatabaseLongTermRetentionPolicy</a></code> | long_term_retention_policy block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.shortTermRetentionDays">shortTermRetentionDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_managed_database#short_term_retention_days MssqlManagedDatabase#short_term_retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts">MssqlManagedDatabaseTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.managedInstanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_managed_database#managed_instance_id MssqlManagedDatabase#managed_instance_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_managed_database#name MssqlManagedDatabase#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_managed_database#id MssqlManagedDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `longTermRetentionPolicy`<sup>Optional</sup> <a name="longTermRetentionPolicy" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.longTermRetentionPolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy">MssqlManagedDatabaseLongTermRetentionPolicy</a>

long_term_retention_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_managed_database#long_term_retention_policy MssqlManagedDatabase#long_term_retention_policy}

---

##### `shortTermRetentionDays`<sup>Optional</sup> <a name="shortTermRetentionDays" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.shortTermRetentionDays"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_managed_database#short_term_retention_days MssqlManagedDatabase#short_term_retention_days}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts">MssqlManagedDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_managed_database#timeouts MssqlManagedDatabase#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.putLongTermRetentionPolicy">putLongTermRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.resetLongTermRetentionPolicy">resetLongTermRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.resetShortTermRetentionDays">resetShortTermRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putLongTermRetentionPolicy` <a name="putLongTermRetentionPolicy" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.putLongTermRetentionPolicy"></a>

```java
public void putLongTermRetentionPolicy(MssqlManagedDatabaseLongTermRetentionPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.putLongTermRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy">MssqlManagedDatabaseLongTermRetentionPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.putTimeouts"></a>

```java
public void putTimeouts(MssqlManagedDatabaseTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts">MssqlManagedDatabaseTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.resetId"></a>

```java
public void resetId()
```

##### `resetLongTermRetentionPolicy` <a name="resetLongTermRetentionPolicy" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.resetLongTermRetentionPolicy"></a>

```java
public void resetLongTermRetentionPolicy()
```

##### `resetShortTermRetentionDays` <a name="resetShortTermRetentionDays" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.resetShortTermRetentionDays"></a>

```java
public void resetShortTermRetentionDays()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_database.MssqlManagedDatabase;

MssqlManagedDatabase.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_database.MssqlManagedDatabase;

MssqlManagedDatabase.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_database.MssqlManagedDatabase;

MssqlManagedDatabase.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.longTermRetentionPolicy">longTermRetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference">MssqlManagedDatabaseLongTermRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference">MssqlManagedDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.longTermRetentionPolicyInput">longTermRetentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy">MssqlManagedDatabaseLongTermRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.managedInstanceIdInput">managedInstanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.shortTermRetentionDaysInput">shortTermRetentionDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts">MssqlManagedDatabaseTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.managedInstanceId">managedInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.shortTermRetentionDays">shortTermRetentionDays</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `longTermRetentionPolicy`<sup>Required</sup> <a name="longTermRetentionPolicy" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.longTermRetentionPolicy"></a>

```java
public MssqlManagedDatabaseLongTermRetentionPolicyOutputReference getLongTermRetentionPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference">MssqlManagedDatabaseLongTermRetentionPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.timeouts"></a>

```java
public MssqlManagedDatabaseTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference">MssqlManagedDatabaseTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `longTermRetentionPolicyInput`<sup>Optional</sup> <a name="longTermRetentionPolicyInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.longTermRetentionPolicyInput"></a>

```java
public MssqlManagedDatabaseLongTermRetentionPolicy getLongTermRetentionPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy">MssqlManagedDatabaseLongTermRetentionPolicy</a>

---

##### `managedInstanceIdInput`<sup>Optional</sup> <a name="managedInstanceIdInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.managedInstanceIdInput"></a>

```java
public java.lang.String getManagedInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `shortTermRetentionDaysInput`<sup>Optional</sup> <a name="shortTermRetentionDaysInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.shortTermRetentionDaysInput"></a>

```java
public java.lang.Number getShortTermRetentionDaysInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts">MssqlManagedDatabaseTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.managedInstanceId"></a>

```java
public java.lang.String getManagedInstanceId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `shortTermRetentionDays`<sup>Required</sup> <a name="shortTermRetentionDays" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.shortTermRetentionDays"></a>

```java
public java.lang.Number getShortTermRetentionDays();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlManagedDatabaseConfig <a name="MssqlManagedDatabaseConfig" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_database.MssqlManagedDatabaseConfig;

MssqlManagedDatabaseConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .managedInstanceId(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .longTermRetentionPolicy(MssqlManagedDatabaseLongTermRetentionPolicy)
//  .shortTermRetentionDays(java.lang.Number)
//  .timeouts(MssqlManagedDatabaseTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.managedInstanceId">managedInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_managed_database#managed_instance_id MssqlManagedDatabase#managed_instance_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_managed_database#name MssqlManagedDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_managed_database#id MssqlManagedDatabase#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.longTermRetentionPolicy">longTermRetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy">MssqlManagedDatabaseLongTermRetentionPolicy</a></code> | long_term_retention_policy block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.shortTermRetentionDays">shortTermRetentionDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_managed_database#short_term_retention_days MssqlManagedDatabase#short_term_retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts">MssqlManagedDatabaseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.managedInstanceId"></a>

```java
public java.lang.String getManagedInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_managed_database#managed_instance_id MssqlManagedDatabase#managed_instance_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_managed_database#name MssqlManagedDatabase#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_managed_database#id MssqlManagedDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `longTermRetentionPolicy`<sup>Optional</sup> <a name="longTermRetentionPolicy" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.longTermRetentionPolicy"></a>

```java
public MssqlManagedDatabaseLongTermRetentionPolicy getLongTermRetentionPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy">MssqlManagedDatabaseLongTermRetentionPolicy</a>

long_term_retention_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_managed_database#long_term_retention_policy MssqlManagedDatabase#long_term_retention_policy}

---

##### `shortTermRetentionDays`<sup>Optional</sup> <a name="shortTermRetentionDays" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.shortTermRetentionDays"></a>

```java
public java.lang.Number getShortTermRetentionDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_managed_database#short_term_retention_days MssqlManagedDatabase#short_term_retention_days}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.timeouts"></a>

```java
public MssqlManagedDatabaseTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts">MssqlManagedDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_managed_database#timeouts MssqlManagedDatabase#timeouts}

---

### MssqlManagedDatabaseLongTermRetentionPolicy <a name="MssqlManagedDatabaseLongTermRetentionPolicy" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_database.MssqlManagedDatabaseLongTermRetentionPolicy;

MssqlManagedDatabaseLongTermRetentionPolicy.builder()
//  .monthlyRetention(java.lang.String)
//  .weeklyRetention(java.lang.String)
//  .weekOfYear(java.lang.Number)
//  .yearlyRetention(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy.property.monthlyRetention">monthlyRetention</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_managed_database#monthly_retention MssqlManagedDatabase#monthly_retention}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy.property.weeklyRetention">weeklyRetention</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_managed_database#weekly_retention MssqlManagedDatabase#weekly_retention}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy.property.weekOfYear">weekOfYear</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_managed_database#week_of_year MssqlManagedDatabase#week_of_year}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy.property.yearlyRetention">yearlyRetention</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_managed_database#yearly_retention MssqlManagedDatabase#yearly_retention}. |

---

##### `monthlyRetention`<sup>Optional</sup> <a name="monthlyRetention" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy.property.monthlyRetention"></a>

```java
public java.lang.String getMonthlyRetention();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_managed_database#monthly_retention MssqlManagedDatabase#monthly_retention}.

---

##### `weeklyRetention`<sup>Optional</sup> <a name="weeklyRetention" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy.property.weeklyRetention"></a>

```java
public java.lang.String getWeeklyRetention();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_managed_database#weekly_retention MssqlManagedDatabase#weekly_retention}.

---

##### `weekOfYear`<sup>Optional</sup> <a name="weekOfYear" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy.property.weekOfYear"></a>

```java
public java.lang.Number getWeekOfYear();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_managed_database#week_of_year MssqlManagedDatabase#week_of_year}.

---

##### `yearlyRetention`<sup>Optional</sup> <a name="yearlyRetention" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy.property.yearlyRetention"></a>

```java
public java.lang.String getYearlyRetention();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_managed_database#yearly_retention MssqlManagedDatabase#yearly_retention}.

---

### MssqlManagedDatabaseTimeouts <a name="MssqlManagedDatabaseTimeouts" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_database.MssqlManagedDatabaseTimeouts;

MssqlManagedDatabaseTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_managed_database#create MssqlManagedDatabase#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_managed_database#delete MssqlManagedDatabase#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_managed_database#read MssqlManagedDatabase#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_managed_database#update MssqlManagedDatabase#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_managed_database#create MssqlManagedDatabase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_managed_database#delete MssqlManagedDatabase#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_managed_database#read MssqlManagedDatabase#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_managed_database#update MssqlManagedDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlManagedDatabaseLongTermRetentionPolicyOutputReference <a name="MssqlManagedDatabaseLongTermRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_database.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference;

new MssqlManagedDatabaseLongTermRetentionPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resetMonthlyRetention">resetMonthlyRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resetWeeklyRetention">resetWeeklyRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resetWeekOfYear">resetWeekOfYear</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resetYearlyRetention">resetYearlyRetention</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMonthlyRetention` <a name="resetMonthlyRetention" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resetMonthlyRetention"></a>

```java
public void resetMonthlyRetention()
```

##### `resetWeeklyRetention` <a name="resetWeeklyRetention" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resetWeeklyRetention"></a>

```java
public void resetWeeklyRetention()
```

##### `resetWeekOfYear` <a name="resetWeekOfYear" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resetWeekOfYear"></a>

```java
public void resetWeekOfYear()
```

##### `resetYearlyRetention` <a name="resetYearlyRetention" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resetYearlyRetention"></a>

```java
public void resetYearlyRetention()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.monthlyRetentionInput">monthlyRetentionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.weeklyRetentionInput">weeklyRetentionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.weekOfYearInput">weekOfYearInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.yearlyRetentionInput">yearlyRetentionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.monthlyRetention">monthlyRetention</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.weeklyRetention">weeklyRetention</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.weekOfYear">weekOfYear</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.yearlyRetention">yearlyRetention</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy">MssqlManagedDatabaseLongTermRetentionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `monthlyRetentionInput`<sup>Optional</sup> <a name="monthlyRetentionInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.monthlyRetentionInput"></a>

```java
public java.lang.String getMonthlyRetentionInput();
```

- *Type:* java.lang.String

---

##### `weeklyRetentionInput`<sup>Optional</sup> <a name="weeklyRetentionInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.weeklyRetentionInput"></a>

```java
public java.lang.String getWeeklyRetentionInput();
```

- *Type:* java.lang.String

---

##### `weekOfYearInput`<sup>Optional</sup> <a name="weekOfYearInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.weekOfYearInput"></a>

```java
public java.lang.Number getWeekOfYearInput();
```

- *Type:* java.lang.Number

---

##### `yearlyRetentionInput`<sup>Optional</sup> <a name="yearlyRetentionInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.yearlyRetentionInput"></a>

```java
public java.lang.String getYearlyRetentionInput();
```

- *Type:* java.lang.String

---

##### `monthlyRetention`<sup>Required</sup> <a name="monthlyRetention" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.monthlyRetention"></a>

```java
public java.lang.String getMonthlyRetention();
```

- *Type:* java.lang.String

---

##### `weeklyRetention`<sup>Required</sup> <a name="weeklyRetention" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.weeklyRetention"></a>

```java
public java.lang.String getWeeklyRetention();
```

- *Type:* java.lang.String

---

##### `weekOfYear`<sup>Required</sup> <a name="weekOfYear" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.weekOfYear"></a>

```java
public java.lang.Number getWeekOfYear();
```

- *Type:* java.lang.Number

---

##### `yearlyRetention`<sup>Required</sup> <a name="yearlyRetention" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.yearlyRetention"></a>

```java
public java.lang.String getYearlyRetention();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.internalValue"></a>

```java
public MssqlManagedDatabaseLongTermRetentionPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy">MssqlManagedDatabaseLongTermRetentionPolicy</a>

---


### MssqlManagedDatabaseTimeoutsOutputReference <a name="MssqlManagedDatabaseTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_database.MssqlManagedDatabaseTimeoutsOutputReference;

new MssqlManagedDatabaseTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts">MssqlManagedDatabaseTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts">MssqlManagedDatabaseTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



