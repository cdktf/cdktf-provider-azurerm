# `azurerm_mysql_active_directory_administrator`

Refer to the Terraform Registory for docs: [`azurerm_mysql_active_directory_administrator`](https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/mysql_active_directory_administrator).

# `mysqlActiveDirectoryAdministrator` Submodule <a name="`mysqlActiveDirectoryAdministrator` Submodule" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MysqlActiveDirectoryAdministrator <a name="MysqlActiveDirectoryAdministrator" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/mysql_active_directory_administrator azurerm_mysql_active_directory_administrator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mysql_active_directory_administrator.MysqlActiveDirectoryAdministrator;

MysqlActiveDirectoryAdministrator.Builder.create(Construct scope, java.lang.String id)
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
    .login(java.lang.String)
    .objectId(java.lang.String)
    .resourceGroupName(java.lang.String)
    .serverName(java.lang.String)
    .tenantId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(MysqlActiveDirectoryAdministratorTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.Initializer.parameter.login">login</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/mysql_active_directory_administrator#login MysqlActiveDirectoryAdministrator#login}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.Initializer.parameter.objectId">objectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/mysql_active_directory_administrator#object_id MysqlActiveDirectoryAdministrator#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/mysql_active_directory_administrator#resource_group_name MysqlActiveDirectoryAdministrator#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.Initializer.parameter.serverName">serverName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/mysql_active_directory_administrator#server_name MysqlActiveDirectoryAdministrator#server_name}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.Initializer.parameter.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/mysql_active_directory_administrator#tenant_id MysqlActiveDirectoryAdministrator#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/mysql_active_directory_administrator#id MysqlActiveDirectoryAdministrator#id}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeouts">MysqlActiveDirectoryAdministratorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.Initializer.parameter.login"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/mysql_active_directory_administrator#login MysqlActiveDirectoryAdministrator#login}.

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.Initializer.parameter.objectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/mysql_active_directory_administrator#object_id MysqlActiveDirectoryAdministrator#object_id}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/mysql_active_directory_administrator#resource_group_name MysqlActiveDirectoryAdministrator#resource_group_name}.

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.Initializer.parameter.serverName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/mysql_active_directory_administrator#server_name MysqlActiveDirectoryAdministrator#server_name}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.Initializer.parameter.tenantId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/mysql_active_directory_administrator#tenant_id MysqlActiveDirectoryAdministrator#tenant_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/mysql_active_directory_administrator#id MysqlActiveDirectoryAdministrator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeouts">MysqlActiveDirectoryAdministratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/mysql_active_directory_administrator#timeouts MysqlActiveDirectoryAdministrator#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.putTimeouts"></a>

```java
public void putTimeouts(MysqlActiveDirectoryAdministratorTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeouts">MysqlActiveDirectoryAdministratorTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mysql_active_directory_administrator.MysqlActiveDirectoryAdministrator;

MysqlActiveDirectoryAdministrator.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mysql_active_directory_administrator.MysqlActiveDirectoryAdministrator;

MysqlActiveDirectoryAdministrator.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mysql_active_directory_administrator.MysqlActiveDirectoryAdministrator;

MysqlActiveDirectoryAdministrator.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference">MysqlActiveDirectoryAdministratorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.loginInput">loginInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.objectIdInput">objectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.serverNameInput">serverNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeouts">MysqlActiveDirectoryAdministratorTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.login">login</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.objectId">objectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.serverName">serverName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.timeouts"></a>

```java
public MysqlActiveDirectoryAdministratorTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference">MysqlActiveDirectoryAdministratorTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `loginInput`<sup>Optional</sup> <a name="loginInput" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.loginInput"></a>

```java
public java.lang.String getLoginInput();
```

- *Type:* java.lang.String

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.objectIdInput"></a>

```java
public java.lang.String getObjectIdInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.serverNameInput"></a>

```java
public java.lang.String getServerNameInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeouts">MysqlActiveDirectoryAdministratorTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.login"></a>

```java
public java.lang.String getLogin();
```

- *Type:* java.lang.String

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MysqlActiveDirectoryAdministratorConfig <a name="MysqlActiveDirectoryAdministratorConfig" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mysql_active_directory_administrator.MysqlActiveDirectoryAdministratorConfig;

MysqlActiveDirectoryAdministratorConfig.builder()
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
    .login(java.lang.String)
    .objectId(java.lang.String)
    .resourceGroupName(java.lang.String)
    .serverName(java.lang.String)
    .tenantId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(MysqlActiveDirectoryAdministratorTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.login">login</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/mysql_active_directory_administrator#login MysqlActiveDirectoryAdministrator#login}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.objectId">objectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/mysql_active_directory_administrator#object_id MysqlActiveDirectoryAdministrator#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/mysql_active_directory_administrator#resource_group_name MysqlActiveDirectoryAdministrator#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.serverName">serverName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/mysql_active_directory_administrator#server_name MysqlActiveDirectoryAdministrator#server_name}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/mysql_active_directory_administrator#tenant_id MysqlActiveDirectoryAdministrator#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/mysql_active_directory_administrator#id MysqlActiveDirectoryAdministrator#id}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeouts">MysqlActiveDirectoryAdministratorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.login"></a>

```java
public java.lang.String getLogin();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/mysql_active_directory_administrator#login MysqlActiveDirectoryAdministrator#login}.

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/mysql_active_directory_administrator#object_id MysqlActiveDirectoryAdministrator#object_id}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/mysql_active_directory_administrator#resource_group_name MysqlActiveDirectoryAdministrator#resource_group_name}.

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/mysql_active_directory_administrator#server_name MysqlActiveDirectoryAdministrator#server_name}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/mysql_active_directory_administrator#tenant_id MysqlActiveDirectoryAdministrator#tenant_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/mysql_active_directory_administrator#id MysqlActiveDirectoryAdministrator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.timeouts"></a>

```java
public MysqlActiveDirectoryAdministratorTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeouts">MysqlActiveDirectoryAdministratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/mysql_active_directory_administrator#timeouts MysqlActiveDirectoryAdministrator#timeouts}

---

### MysqlActiveDirectoryAdministratorTimeouts <a name="MysqlActiveDirectoryAdministratorTimeouts" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mysql_active_directory_administrator.MysqlActiveDirectoryAdministratorTimeouts;

MysqlActiveDirectoryAdministratorTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/mysql_active_directory_administrator#create MysqlActiveDirectoryAdministrator#create}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/mysql_active_directory_administrator#delete MysqlActiveDirectoryAdministrator#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/mysql_active_directory_administrator#read MysqlActiveDirectoryAdministrator#read}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/mysql_active_directory_administrator#update MysqlActiveDirectoryAdministrator#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/mysql_active_directory_administrator#create MysqlActiveDirectoryAdministrator#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/mysql_active_directory_administrator#delete MysqlActiveDirectoryAdministrator#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/mysql_active_directory_administrator#read MysqlActiveDirectoryAdministrator#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/mysql_active_directory_administrator#update MysqlActiveDirectoryAdministrator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MysqlActiveDirectoryAdministratorTimeoutsOutputReference <a name="MysqlActiveDirectoryAdministratorTimeoutsOutputReference" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mysql_active_directory_administrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference;

new MysqlActiveDirectoryAdministratorTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeouts">MysqlActiveDirectoryAdministratorTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeouts">MysqlActiveDirectoryAdministratorTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



