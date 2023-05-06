# `azurerm_data_protection_backup_policy_postgresql`

Refer to the Terraform Registory for docs: [`azurerm_data_protection_backup_policy_postgresql`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql).

# `dataProtectionBackupPolicyPostgresql` Submodule <a name="`dataProtectionBackupPolicyPostgresql` Submodule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataProtectionBackupPolicyPostgresql <a name="DataProtectionBackupPolicyPostgresql" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql azurerm_data_protection_backup_policy_postgresql}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_policy_postgresql.DataProtectionBackupPolicyPostgresql;

DataProtectionBackupPolicyPostgresql.Builder.create(Construct scope, java.lang.String id)
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
    .backupRepeatingTimeIntervals(java.util.List<java.lang.String>)
    .defaultRetentionDuration(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .vaultName(java.lang.String)
//  .id(java.lang.String)
//  .retentionRule(IResolvable)
//  .retentionRule(java.util.List<DataProtectionBackupPolicyPostgresqlRetentionRule>)
//  .timeouts(DataProtectionBackupPolicyPostgresqlTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer.parameter.backupRepeatingTimeIntervals">backupRepeatingTimeIntervals</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#backup_repeating_time_intervals DataProtectionBackupPolicyPostgresql#backup_repeating_time_intervals}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer.parameter.defaultRetentionDuration">defaultRetentionDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#default_retention_duration DataProtectionBackupPolicyPostgresql#default_retention_duration}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#name DataProtectionBackupPolicyPostgresql#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#resource_group_name DataProtectionBackupPolicyPostgresql#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer.parameter.vaultName">vaultName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#vault_name DataProtectionBackupPolicyPostgresql#vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#id DataProtectionBackupPolicyPostgresql#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer.parameter.retentionRule">retentionRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRule">DataProtectionBackupPolicyPostgresqlRetentionRule</a>></code> | retention_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeouts">DataProtectionBackupPolicyPostgresqlTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backupRepeatingTimeIntervals`<sup>Required</sup> <a name="backupRepeatingTimeIntervals" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer.parameter.backupRepeatingTimeIntervals"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#backup_repeating_time_intervals DataProtectionBackupPolicyPostgresql#backup_repeating_time_intervals}.

---

##### `defaultRetentionDuration`<sup>Required</sup> <a name="defaultRetentionDuration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer.parameter.defaultRetentionDuration"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#default_retention_duration DataProtectionBackupPolicyPostgresql#default_retention_duration}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#name DataProtectionBackupPolicyPostgresql#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#resource_group_name DataProtectionBackupPolicyPostgresql#resource_group_name}.

---

##### `vaultName`<sup>Required</sup> <a name="vaultName" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer.parameter.vaultName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#vault_name DataProtectionBackupPolicyPostgresql#vault_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#id DataProtectionBackupPolicyPostgresql#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retentionRule`<sup>Optional</sup> <a name="retentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer.parameter.retentionRule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRule">DataProtectionBackupPolicyPostgresqlRetentionRule</a>>

retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#retention_rule DataProtectionBackupPolicyPostgresql#retention_rule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeouts">DataProtectionBackupPolicyPostgresqlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#timeouts DataProtectionBackupPolicyPostgresql#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.putRetentionRule">putRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.resetRetentionRule">resetRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putRetentionRule` <a name="putRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.putRetentionRule"></a>

```java
public void putRetentionRule(IResolvable OR java.util.List<DataProtectionBackupPolicyPostgresqlRetentionRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.putRetentionRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRule">DataProtectionBackupPolicyPostgresqlRetentionRule</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.putTimeouts"></a>

```java
public void putTimeouts(DataProtectionBackupPolicyPostgresqlTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeouts">DataProtectionBackupPolicyPostgresqlTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.resetId"></a>

```java
public void resetId()
```

##### `resetRetentionRule` <a name="resetRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.resetRetentionRule"></a>

```java
public void resetRetentionRule()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_policy_postgresql.DataProtectionBackupPolicyPostgresql;

DataProtectionBackupPolicyPostgresql.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_policy_postgresql.DataProtectionBackupPolicyPostgresql;

DataProtectionBackupPolicyPostgresql.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_policy_postgresql.DataProtectionBackupPolicyPostgresql;

DataProtectionBackupPolicyPostgresql.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.retentionRule">retentionRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList">DataProtectionBackupPolicyPostgresqlRetentionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference">DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.backupRepeatingTimeIntervalsInput">backupRepeatingTimeIntervalsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.defaultRetentionDurationInput">defaultRetentionDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.retentionRuleInput">retentionRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRule">DataProtectionBackupPolicyPostgresqlRetentionRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeouts">DataProtectionBackupPolicyPostgresqlTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.vaultNameInput">vaultNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.backupRepeatingTimeIntervals">backupRepeatingTimeIntervals</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.defaultRetentionDuration">defaultRetentionDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.vaultName">vaultName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `retentionRule`<sup>Required</sup> <a name="retentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.retentionRule"></a>

```java
public DataProtectionBackupPolicyPostgresqlRetentionRuleList getRetentionRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList">DataProtectionBackupPolicyPostgresqlRetentionRuleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.timeouts"></a>

```java
public DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference">DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference</a>

---

##### `backupRepeatingTimeIntervalsInput`<sup>Optional</sup> <a name="backupRepeatingTimeIntervalsInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.backupRepeatingTimeIntervalsInput"></a>

```java
public java.util.List<java.lang.String> getBackupRepeatingTimeIntervalsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultRetentionDurationInput`<sup>Optional</sup> <a name="defaultRetentionDurationInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.defaultRetentionDurationInput"></a>

```java
public java.lang.String getDefaultRetentionDurationInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `retentionRuleInput`<sup>Optional</sup> <a name="retentionRuleInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.retentionRuleInput"></a>

```java
public java.lang.Object getRetentionRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRule">DataProtectionBackupPolicyPostgresqlRetentionRule</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeouts">DataProtectionBackupPolicyPostgresqlTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `vaultNameInput`<sup>Optional</sup> <a name="vaultNameInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.vaultNameInput"></a>

```java
public java.lang.String getVaultNameInput();
```

- *Type:* java.lang.String

---

##### `backupRepeatingTimeIntervals`<sup>Required</sup> <a name="backupRepeatingTimeIntervals" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.backupRepeatingTimeIntervals"></a>

```java
public java.util.List<java.lang.String> getBackupRepeatingTimeIntervals();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultRetentionDuration`<sup>Required</sup> <a name="defaultRetentionDuration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.defaultRetentionDuration"></a>

```java
public java.lang.String getDefaultRetentionDuration();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `vaultName`<sup>Required</sup> <a name="vaultName" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.vaultName"></a>

```java
public java.lang.String getVaultName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataProtectionBackupPolicyPostgresqlConfig <a name="DataProtectionBackupPolicyPostgresqlConfig" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_policy_postgresql.DataProtectionBackupPolicyPostgresqlConfig;

DataProtectionBackupPolicyPostgresqlConfig.builder()
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
    .backupRepeatingTimeIntervals(java.util.List<java.lang.String>)
    .defaultRetentionDuration(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .vaultName(java.lang.String)
//  .id(java.lang.String)
//  .retentionRule(IResolvable)
//  .retentionRule(java.util.List<DataProtectionBackupPolicyPostgresqlRetentionRule>)
//  .timeouts(DataProtectionBackupPolicyPostgresqlTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.backupRepeatingTimeIntervals">backupRepeatingTimeIntervals</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#backup_repeating_time_intervals DataProtectionBackupPolicyPostgresql#backup_repeating_time_intervals}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.defaultRetentionDuration">defaultRetentionDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#default_retention_duration DataProtectionBackupPolicyPostgresql#default_retention_duration}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#name DataProtectionBackupPolicyPostgresql#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#resource_group_name DataProtectionBackupPolicyPostgresql#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.vaultName">vaultName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#vault_name DataProtectionBackupPolicyPostgresql#vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#id DataProtectionBackupPolicyPostgresql#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.retentionRule">retentionRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRule">DataProtectionBackupPolicyPostgresqlRetentionRule</a>></code> | retention_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeouts">DataProtectionBackupPolicyPostgresqlTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backupRepeatingTimeIntervals`<sup>Required</sup> <a name="backupRepeatingTimeIntervals" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.backupRepeatingTimeIntervals"></a>

```java
public java.util.List<java.lang.String> getBackupRepeatingTimeIntervals();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#backup_repeating_time_intervals DataProtectionBackupPolicyPostgresql#backup_repeating_time_intervals}.

---

##### `defaultRetentionDuration`<sup>Required</sup> <a name="defaultRetentionDuration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.defaultRetentionDuration"></a>

```java
public java.lang.String getDefaultRetentionDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#default_retention_duration DataProtectionBackupPolicyPostgresql#default_retention_duration}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#name DataProtectionBackupPolicyPostgresql#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#resource_group_name DataProtectionBackupPolicyPostgresql#resource_group_name}.

---

##### `vaultName`<sup>Required</sup> <a name="vaultName" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.vaultName"></a>

```java
public java.lang.String getVaultName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#vault_name DataProtectionBackupPolicyPostgresql#vault_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#id DataProtectionBackupPolicyPostgresql#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retentionRule`<sup>Optional</sup> <a name="retentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.retentionRule"></a>

```java
public java.lang.Object getRetentionRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRule">DataProtectionBackupPolicyPostgresqlRetentionRule</a>>

retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#retention_rule DataProtectionBackupPolicyPostgresql#retention_rule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.timeouts"></a>

```java
public DataProtectionBackupPolicyPostgresqlTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeouts">DataProtectionBackupPolicyPostgresqlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#timeouts DataProtectionBackupPolicyPostgresql#timeouts}

---

### DataProtectionBackupPolicyPostgresqlRetentionRule <a name="DataProtectionBackupPolicyPostgresqlRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_policy_postgresql.DataProtectionBackupPolicyPostgresqlRetentionRule;

DataProtectionBackupPolicyPostgresqlRetentionRule.builder()
    .criteria(DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria)
    .duration(java.lang.String)
    .name(java.lang.String)
    .priority(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRule.property.criteria">criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria</a></code> | criteria block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRule.property.duration">duration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#duration DataProtectionBackupPolicyPostgresql#duration}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRule.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#name DataProtectionBackupPolicyPostgresql#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRule.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#priority DataProtectionBackupPolicyPostgresql#priority}. |

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRule.property.criteria"></a>

```java
public DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria getCriteria();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#criteria DataProtectionBackupPolicyPostgresql#criteria}

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRule.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#duration DataProtectionBackupPolicyPostgresql#duration}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#name DataProtectionBackupPolicyPostgresql#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRule.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#priority DataProtectionBackupPolicyPostgresql#priority}.

---

### DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria <a name="DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_policy_postgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria;

DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria.builder()
//  .absoluteCriteria(java.lang.String)
//  .daysOfWeek(java.util.List<java.lang.String>)
//  .monthsOfYear(java.util.List<java.lang.String>)
//  .scheduledBackupTimes(java.util.List<java.lang.String>)
//  .weeksOfMonth(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria.property.absoluteCriteria">absoluteCriteria</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#absolute_criteria DataProtectionBackupPolicyPostgresql#absolute_criteria}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria.property.daysOfWeek">daysOfWeek</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#days_of_week DataProtectionBackupPolicyPostgresql#days_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria.property.monthsOfYear">monthsOfYear</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#months_of_year DataProtectionBackupPolicyPostgresql#months_of_year}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria.property.scheduledBackupTimes">scheduledBackupTimes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#scheduled_backup_times DataProtectionBackupPolicyPostgresql#scheduled_backup_times}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria.property.weeksOfMonth">weeksOfMonth</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#weeks_of_month DataProtectionBackupPolicyPostgresql#weeks_of_month}. |

---

##### `absoluteCriteria`<sup>Optional</sup> <a name="absoluteCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria.property.absoluteCriteria"></a>

```java
public java.lang.String getAbsoluteCriteria();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#absolute_criteria DataProtectionBackupPolicyPostgresql#absolute_criteria}.

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria.property.daysOfWeek"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeek();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#days_of_week DataProtectionBackupPolicyPostgresql#days_of_week}.

---

##### `monthsOfYear`<sup>Optional</sup> <a name="monthsOfYear" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria.property.monthsOfYear"></a>

```java
public java.util.List<java.lang.String> getMonthsOfYear();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#months_of_year DataProtectionBackupPolicyPostgresql#months_of_year}.

---

##### `scheduledBackupTimes`<sup>Optional</sup> <a name="scheduledBackupTimes" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria.property.scheduledBackupTimes"></a>

```java
public java.util.List<java.lang.String> getScheduledBackupTimes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#scheduled_backup_times DataProtectionBackupPolicyPostgresql#scheduled_backup_times}.

---

##### `weeksOfMonth`<sup>Optional</sup> <a name="weeksOfMonth" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria.property.weeksOfMonth"></a>

```java
public java.util.List<java.lang.String> getWeeksOfMonth();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#weeks_of_month DataProtectionBackupPolicyPostgresql#weeks_of_month}.

---

### DataProtectionBackupPolicyPostgresqlTimeouts <a name="DataProtectionBackupPolicyPostgresqlTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_policy_postgresql.DataProtectionBackupPolicyPostgresqlTimeouts;

DataProtectionBackupPolicyPostgresqlTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#create DataProtectionBackupPolicyPostgresql#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#delete DataProtectionBackupPolicyPostgresql#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#read DataProtectionBackupPolicyPostgresql#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#update DataProtectionBackupPolicyPostgresql#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#create DataProtectionBackupPolicyPostgresql#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#delete DataProtectionBackupPolicyPostgresql#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#read DataProtectionBackupPolicyPostgresql#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_policy_postgresql#update DataProtectionBackupPolicyPostgresql#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference <a name="DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_policy_postgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference;

new DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.resetAbsoluteCriteria">resetAbsoluteCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.resetMonthsOfYear">resetMonthsOfYear</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.resetScheduledBackupTimes">resetScheduledBackupTimes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.resetWeeksOfMonth">resetWeeksOfMonth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAbsoluteCriteria` <a name="resetAbsoluteCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.resetAbsoluteCriteria"></a>

```java
public void resetAbsoluteCriteria()
```

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.resetDaysOfWeek"></a>

```java
public void resetDaysOfWeek()
```

##### `resetMonthsOfYear` <a name="resetMonthsOfYear" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.resetMonthsOfYear"></a>

```java
public void resetMonthsOfYear()
```

##### `resetScheduledBackupTimes` <a name="resetScheduledBackupTimes" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.resetScheduledBackupTimes"></a>

```java
public void resetScheduledBackupTimes()
```

##### `resetWeeksOfMonth` <a name="resetWeeksOfMonth" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.resetWeeksOfMonth"></a>

```java
public void resetWeeksOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.absoluteCriteriaInput">absoluteCriteriaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.monthsOfYearInput">monthsOfYearInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.scheduledBackupTimesInput">scheduledBackupTimesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.weeksOfMonthInput">weeksOfMonthInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.absoluteCriteria">absoluteCriteria</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.monthsOfYear">monthsOfYear</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.scheduledBackupTimes">scheduledBackupTimes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.weeksOfMonth">weeksOfMonth</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `absoluteCriteriaInput`<sup>Optional</sup> <a name="absoluteCriteriaInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.absoluteCriteriaInput"></a>

```java
public java.lang.String getAbsoluteCriteriaInput();
```

- *Type:* java.lang.String

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.daysOfWeekInput"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeekInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `monthsOfYearInput`<sup>Optional</sup> <a name="monthsOfYearInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.monthsOfYearInput"></a>

```java
public java.util.List<java.lang.String> getMonthsOfYearInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scheduledBackupTimesInput`<sup>Optional</sup> <a name="scheduledBackupTimesInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.scheduledBackupTimesInput"></a>

```java
public java.util.List<java.lang.String> getScheduledBackupTimesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `weeksOfMonthInput`<sup>Optional</sup> <a name="weeksOfMonthInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.weeksOfMonthInput"></a>

```java
public java.util.List<java.lang.String> getWeeksOfMonthInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `absoluteCriteria`<sup>Required</sup> <a name="absoluteCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.absoluteCriteria"></a>

```java
public java.lang.String getAbsoluteCriteria();
```

- *Type:* java.lang.String

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.daysOfWeek"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeek();
```

- *Type:* java.util.List<java.lang.String>

---

##### `monthsOfYear`<sup>Required</sup> <a name="monthsOfYear" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.monthsOfYear"></a>

```java
public java.util.List<java.lang.String> getMonthsOfYear();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scheduledBackupTimes`<sup>Required</sup> <a name="scheduledBackupTimes" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.scheduledBackupTimes"></a>

```java
public java.util.List<java.lang.String> getScheduledBackupTimes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.weeksOfMonth"></a>

```java
public java.util.List<java.lang.String> getWeeksOfMonth();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.internalValue"></a>

```java
public DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria</a>

---


### DataProtectionBackupPolicyPostgresqlRetentionRuleList <a name="DataProtectionBackupPolicyPostgresqlRetentionRuleList" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_policy_postgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList;

new DataProtectionBackupPolicyPostgresqlRetentionRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.get"></a>

```java
public DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRule">DataProtectionBackupPolicyPostgresqlRetentionRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRule">DataProtectionBackupPolicyPostgresqlRetentionRule</a>>

---


### DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference <a name="DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_policy_postgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference;

new DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.putCriteria">putCriteria</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCriteria` <a name="putCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.putCriteria"></a>

```java
public void putCriteria(DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.putCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.criteria">criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference">DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.criteriaInput">criteriaInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.durationInput">durationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRule">DataProtectionBackupPolicyPostgresqlRetentionRule</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.criteria"></a>

```java
public DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference getCriteria();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference">DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference</a>

---

##### `criteriaInput`<sup>Optional</sup> <a name="criteriaInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.criteriaInput"></a>

```java
public DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria getCriteriaInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria</a>

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.durationInput"></a>

```java
public java.lang.String getDurationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRule">DataProtectionBackupPolicyPostgresqlRetentionRule</a> OR com.hashicorp.cdktf.IResolvable

---


### DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference <a name="DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_policy_postgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference;

new DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeouts">DataProtectionBackupPolicyPostgresqlTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeouts">DataProtectionBackupPolicyPostgresqlTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



