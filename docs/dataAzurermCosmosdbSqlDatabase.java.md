# `dataAzurermCosmosdbSqlDatabase` Submodule <a name="`dataAzurermCosmosdbSqlDatabase` Submodule" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermCosmosdbSqlDatabase <a name="DataAzurermCosmosdbSqlDatabase" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/cosmosdb_sql_database azurerm_cosmosdb_sql_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_cosmosdb_sql_database.DataAzurermCosmosdbSqlDatabase;

DataAzurermCosmosdbSqlDatabase.Builder.create(Construct scope, java.lang.String id)
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
    .accountName(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermCosmosdbSqlDatabaseTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.Initializer.parameter.accountName">accountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/cosmosdb_sql_database#account_name DataAzurermCosmosdbSqlDatabase#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/cosmosdb_sql_database#name DataAzurermCosmosdbSqlDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/cosmosdb_sql_database#resource_group_name DataAzurermCosmosdbSqlDatabase#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/cosmosdb_sql_database#id DataAzurermCosmosdbSqlDatabase#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeouts">DataAzurermCosmosdbSqlDatabaseTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.Initializer.parameter.accountName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/cosmosdb_sql_database#account_name DataAzurermCosmosdbSqlDatabase#account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/cosmosdb_sql_database#name DataAzurermCosmosdbSqlDatabase#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/cosmosdb_sql_database#resource_group_name DataAzurermCosmosdbSqlDatabase#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/cosmosdb_sql_database#id DataAzurermCosmosdbSqlDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeouts">DataAzurermCosmosdbSqlDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/cosmosdb_sql_database#timeouts DataAzurermCosmosdbSqlDatabase#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermCosmosdbSqlDatabaseTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeouts">DataAzurermCosmosdbSqlDatabaseTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermCosmosdbSqlDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_cosmosdb_sql_database.DataAzurermCosmosdbSqlDatabase;

DataAzurermCosmosdbSqlDatabase.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_cosmosdb_sql_database.DataAzurermCosmosdbSqlDatabase;

DataAzurermCosmosdbSqlDatabase.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_cosmosdb_sql_database.DataAzurermCosmosdbSqlDatabase;

DataAzurermCosmosdbSqlDatabase.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_cosmosdb_sql_database.DataAzurermCosmosdbSqlDatabase;

DataAzurermCosmosdbSqlDatabase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermCosmosdbSqlDatabase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAzurermCosmosdbSqlDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermCosmosdbSqlDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermCosmosdbSqlDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/cosmosdb_sql_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermCosmosdbSqlDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.autoscaleSettings">autoscaleSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsList">DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference">DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.accountNameInput">accountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeouts">DataAzurermCosmosdbSqlDatabaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.accountName">accountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `autoscaleSettings`<sup>Required</sup> <a name="autoscaleSettings" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.autoscaleSettings"></a>

```java
public DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsList getAutoscaleSettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsList">DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsList</a>

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.timeouts"></a>

```java
public DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference">DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference</a>

---

##### `accountNameInput`<sup>Optional</sup> <a name="accountNameInput" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.accountNameInput"></a>

```java
public java.lang.String getAccountNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeouts">DataAzurermCosmosdbSqlDatabaseTimeouts</a>

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabase.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermCosmosdbSqlDatabaseAutoscaleSettings <a name="DataAzurermCosmosdbSqlDatabaseAutoscaleSettings" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_cosmosdb_sql_database.DataAzurermCosmosdbSqlDatabaseAutoscaleSettings;

DataAzurermCosmosdbSqlDatabaseAutoscaleSettings.builder()
    .build();
```


### DataAzurermCosmosdbSqlDatabaseConfig <a name="DataAzurermCosmosdbSqlDatabaseConfig" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_cosmosdb_sql_database.DataAzurermCosmosdbSqlDatabaseConfig;

DataAzurermCosmosdbSqlDatabaseConfig.builder()
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
    .accountName(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermCosmosdbSqlDatabaseTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseConfig.property.accountName">accountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/cosmosdb_sql_database#account_name DataAzurermCosmosdbSqlDatabase#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/cosmosdb_sql_database#name DataAzurermCosmosdbSqlDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/cosmosdb_sql_database#resource_group_name DataAzurermCosmosdbSqlDatabase#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/cosmosdb_sql_database#id DataAzurermCosmosdbSqlDatabase#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeouts">DataAzurermCosmosdbSqlDatabaseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseConfig.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/cosmosdb_sql_database#account_name DataAzurermCosmosdbSqlDatabase#account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/cosmosdb_sql_database#name DataAzurermCosmosdbSqlDatabase#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/cosmosdb_sql_database#resource_group_name DataAzurermCosmosdbSqlDatabase#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/cosmosdb_sql_database#id DataAzurermCosmosdbSqlDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseConfig.property.timeouts"></a>

```java
public DataAzurermCosmosdbSqlDatabaseTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeouts">DataAzurermCosmosdbSqlDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/cosmosdb_sql_database#timeouts DataAzurermCosmosdbSqlDatabase#timeouts}

---

### DataAzurermCosmosdbSqlDatabaseTimeouts <a name="DataAzurermCosmosdbSqlDatabaseTimeouts" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_cosmosdb_sql_database.DataAzurermCosmosdbSqlDatabaseTimeouts;

DataAzurermCosmosdbSqlDatabaseTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/cosmosdb_sql_database#read DataAzurermCosmosdbSqlDatabase#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/cosmosdb_sql_database#read DataAzurermCosmosdbSqlDatabase#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsList <a name="DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsList" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_cosmosdb_sql_database.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsList;

new DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsList.get"></a>

```java
public DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference <a name="DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_cosmosdb_sql_database.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference;

new DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.property.maxThroughput">maxThroughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettings">DataAzurermCosmosdbSqlDatabaseAutoscaleSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxThroughput`<sup>Required</sup> <a name="maxThroughput" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.property.maxThroughput"></a>

```java
public java.lang.Number getMaxThroughput();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettingsOutputReference.property.internalValue"></a>

```java
public DataAzurermCosmosdbSqlDatabaseAutoscaleSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseAutoscaleSettings">DataAzurermCosmosdbSqlDatabaseAutoscaleSettings</a>

---


### DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference <a name="DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_cosmosdb_sql_database.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference;

new DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeouts">DataAzurermCosmosdbSqlDatabaseTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlDatabase.DataAzurermCosmosdbSqlDatabaseTimeouts">DataAzurermCosmosdbSqlDatabaseTimeouts</a>

---



