# `oracleAutonomousDatabaseBackup` Submodule <a name="`oracleAutonomousDatabaseBackup` Submodule" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleAutonomousDatabaseBackup <a name="OracleAutonomousDatabaseBackup" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup azurerm_oracle_autonomous_database_backup}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_autonomous_database_backup.OracleAutonomousDatabaseBackup;

OracleAutonomousDatabaseBackup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .autonomousDatabaseId(java.lang.String)
    .name(java.lang.String)
    .retentionPeriodInDays(java.lang.Number)
//  .id(java.lang.String)
//  .timeouts(OracleAutonomousDatabaseBackupTimeouts)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#autonomous_database_id OracleAutonomousDatabaseBackup#autonomous_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#name OracleAutonomousDatabaseBackup#name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.retentionPeriodInDays">retentionPeriodInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#retention_period_in_days OracleAutonomousDatabaseBackup#retention_period_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#id OracleAutonomousDatabaseBackup#id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts">OracleAutonomousDatabaseBackupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#type OracleAutonomousDatabaseBackup#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autonomousDatabaseId`<sup>Required</sup> <a name="autonomousDatabaseId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.autonomousDatabaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#autonomous_database_id OracleAutonomousDatabaseBackup#autonomous_database_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#name OracleAutonomousDatabaseBackup#name}.

---

##### `retentionPeriodInDays`<sup>Required</sup> <a name="retentionPeriodInDays" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.retentionPeriodInDays"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#retention_period_in_days OracleAutonomousDatabaseBackup#retention_period_in_days}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#id OracleAutonomousDatabaseBackup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts">OracleAutonomousDatabaseBackupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#timeouts OracleAutonomousDatabaseBackup#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#type OracleAutonomousDatabaseBackup#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.putTimeouts"></a>

```java
public void putTimeouts(OracleAutonomousDatabaseBackupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts">OracleAutonomousDatabaseBackupTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OracleAutonomousDatabaseBackup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_autonomous_database_backup.OracleAutonomousDatabaseBackup;

OracleAutonomousDatabaseBackup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_autonomous_database_backup.OracleAutonomousDatabaseBackup;

OracleAutonomousDatabaseBackup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_autonomous_database_backup.OracleAutonomousDatabaseBackup;

OracleAutonomousDatabaseBackup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_autonomous_database_backup.OracleAutonomousDatabaseBackup;

OracleAutonomousDatabaseBackup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OracleAutonomousDatabaseBackup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OracleAutonomousDatabaseBackup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OracleAutonomousDatabaseBackup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OracleAutonomousDatabaseBackup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OracleAutonomousDatabaseBackup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference">OracleAutonomousDatabaseBackupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.autonomousDatabaseIdInput">autonomousDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.retentionPeriodInDaysInput">retentionPeriodInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts">OracleAutonomousDatabaseBackupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.retentionPeriodInDays">retentionPeriodInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.timeouts"></a>

```java
public OracleAutonomousDatabaseBackupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference">OracleAutonomousDatabaseBackupTimeoutsOutputReference</a>

---

##### `autonomousDatabaseIdInput`<sup>Optional</sup> <a name="autonomousDatabaseIdInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.autonomousDatabaseIdInput"></a>

```java
public java.lang.String getAutonomousDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `retentionPeriodInDaysInput`<sup>Optional</sup> <a name="retentionPeriodInDaysInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.retentionPeriodInDaysInput"></a>

```java
public java.lang.Number getRetentionPeriodInDaysInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.timeoutsInput"></a>

```java
public IResolvable|OracleAutonomousDatabaseBackupTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts">OracleAutonomousDatabaseBackupTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `autonomousDatabaseId`<sup>Required</sup> <a name="autonomousDatabaseId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.autonomousDatabaseId"></a>

```java
public java.lang.String getAutonomousDatabaseId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `retentionPeriodInDays`<sup>Required</sup> <a name="retentionPeriodInDays" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.retentionPeriodInDays"></a>

```java
public java.lang.Number getRetentionPeriodInDays();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OracleAutonomousDatabaseBackupConfig <a name="OracleAutonomousDatabaseBackupConfig" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_autonomous_database_backup.OracleAutonomousDatabaseBackupConfig;

OracleAutonomousDatabaseBackupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .autonomousDatabaseId(java.lang.String)
    .name(java.lang.String)
    .retentionPeriodInDays(java.lang.Number)
//  .id(java.lang.String)
//  .timeouts(OracleAutonomousDatabaseBackupTimeouts)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#autonomous_database_id OracleAutonomousDatabaseBackup#autonomous_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#name OracleAutonomousDatabaseBackup#name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.retentionPeriodInDays">retentionPeriodInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#retention_period_in_days OracleAutonomousDatabaseBackup#retention_period_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#id OracleAutonomousDatabaseBackup#id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts">OracleAutonomousDatabaseBackupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#type OracleAutonomousDatabaseBackup#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autonomousDatabaseId`<sup>Required</sup> <a name="autonomousDatabaseId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.autonomousDatabaseId"></a>

```java
public java.lang.String getAutonomousDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#autonomous_database_id OracleAutonomousDatabaseBackup#autonomous_database_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#name OracleAutonomousDatabaseBackup#name}.

---

##### `retentionPeriodInDays`<sup>Required</sup> <a name="retentionPeriodInDays" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.retentionPeriodInDays"></a>

```java
public java.lang.Number getRetentionPeriodInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#retention_period_in_days OracleAutonomousDatabaseBackup#retention_period_in_days}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#id OracleAutonomousDatabaseBackup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.timeouts"></a>

```java
public OracleAutonomousDatabaseBackupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts">OracleAutonomousDatabaseBackupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#timeouts OracleAutonomousDatabaseBackup#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#type OracleAutonomousDatabaseBackup#type}.

---

### OracleAutonomousDatabaseBackupTimeouts <a name="OracleAutonomousDatabaseBackupTimeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_autonomous_database_backup.OracleAutonomousDatabaseBackupTimeouts;

OracleAutonomousDatabaseBackupTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#create OracleAutonomousDatabaseBackup#create}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#delete OracleAutonomousDatabaseBackup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#read OracleAutonomousDatabaseBackup#read}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#update OracleAutonomousDatabaseBackup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#create OracleAutonomousDatabaseBackup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#delete OracleAutonomousDatabaseBackup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#read OracleAutonomousDatabaseBackup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#update OracleAutonomousDatabaseBackup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleAutonomousDatabaseBackupTimeoutsOutputReference <a name="OracleAutonomousDatabaseBackupTimeoutsOutputReference" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_autonomous_database_backup.OracleAutonomousDatabaseBackupTimeoutsOutputReference;

new OracleAutonomousDatabaseBackupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts">OracleAutonomousDatabaseBackupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|OracleAutonomousDatabaseBackupTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts">OracleAutonomousDatabaseBackupTimeouts</a>

---



