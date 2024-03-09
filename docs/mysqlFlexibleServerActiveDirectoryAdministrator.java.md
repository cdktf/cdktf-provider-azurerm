# `mysqlFlexibleServerActiveDirectoryAdministrator` Submodule <a name="`mysqlFlexibleServerActiveDirectoryAdministrator` Submodule" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MysqlFlexibleServerActiveDirectoryAdministrator <a name="MysqlFlexibleServerActiveDirectoryAdministrator" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/mysql_flexible_server_active_directory_administrator azurerm_mysql_flexible_server_active_directory_administrator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mysql_flexible_server_active_directory_administrator.MysqlFlexibleServerActiveDirectoryAdministrator;

MysqlFlexibleServerActiveDirectoryAdministrator.Builder.create(Construct scope, java.lang.String id)
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
    .identityId(java.lang.String)
    .login(java.lang.String)
    .objectId(java.lang.String)
    .serverId(java.lang.String)
    .tenantId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(MysqlFlexibleServerActiveDirectoryAdministratorTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.identityId">identityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/mysql_flexible_server_active_directory_administrator#identity_id MysqlFlexibleServerActiveDirectoryAdministrator#identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.login">login</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/mysql_flexible_server_active_directory_administrator#login MysqlFlexibleServerActiveDirectoryAdministrator#login}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.objectId">objectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/mysql_flexible_server_active_directory_administrator#object_id MysqlFlexibleServerActiveDirectoryAdministrator#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.serverId">serverId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/mysql_flexible_server_active_directory_administrator#server_id MysqlFlexibleServerActiveDirectoryAdministrator#server_id}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/mysql_flexible_server_active_directory_administrator#tenant_id MysqlFlexibleServerActiveDirectoryAdministrator#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/mysql_flexible_server_active_directory_administrator#id MysqlFlexibleServerActiveDirectoryAdministrator#id}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeouts">MysqlFlexibleServerActiveDirectoryAdministratorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `identityId`<sup>Required</sup> <a name="identityId" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.identityId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/mysql_flexible_server_active_directory_administrator#identity_id MysqlFlexibleServerActiveDirectoryAdministrator#identity_id}.

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.login"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/mysql_flexible_server_active_directory_administrator#login MysqlFlexibleServerActiveDirectoryAdministrator#login}.

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.objectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/mysql_flexible_server_active_directory_administrator#object_id MysqlFlexibleServerActiveDirectoryAdministrator#object_id}.

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.serverId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/mysql_flexible_server_active_directory_administrator#server_id MysqlFlexibleServerActiveDirectoryAdministrator#server_id}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.tenantId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/mysql_flexible_server_active_directory_administrator#tenant_id MysqlFlexibleServerActiveDirectoryAdministrator#tenant_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/mysql_flexible_server_active_directory_administrator#id MysqlFlexibleServerActiveDirectoryAdministrator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeouts">MysqlFlexibleServerActiveDirectoryAdministratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/mysql_flexible_server_active_directory_administrator#timeouts MysqlFlexibleServerActiveDirectoryAdministrator#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.putTimeouts"></a>

```java
public void putTimeouts(MysqlFlexibleServerActiveDirectoryAdministratorTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeouts">MysqlFlexibleServerActiveDirectoryAdministratorTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MysqlFlexibleServerActiveDirectoryAdministrator resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mysql_flexible_server_active_directory_administrator.MysqlFlexibleServerActiveDirectoryAdministrator;

MysqlFlexibleServerActiveDirectoryAdministrator.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mysql_flexible_server_active_directory_administrator.MysqlFlexibleServerActiveDirectoryAdministrator;

MysqlFlexibleServerActiveDirectoryAdministrator.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mysql_flexible_server_active_directory_administrator.MysqlFlexibleServerActiveDirectoryAdministrator;

MysqlFlexibleServerActiveDirectoryAdministrator.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mysql_flexible_server_active_directory_administrator.MysqlFlexibleServerActiveDirectoryAdministrator;

MysqlFlexibleServerActiveDirectoryAdministrator.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MysqlFlexibleServerActiveDirectoryAdministrator.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MysqlFlexibleServerActiveDirectoryAdministrator resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MysqlFlexibleServerActiveDirectoryAdministrator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MysqlFlexibleServerActiveDirectoryAdministrator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/mysql_flexible_server_active_directory_administrator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MysqlFlexibleServerActiveDirectoryAdministrator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference">MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.identityIdInput">identityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.loginInput">loginInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.objectIdInput">objectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.serverIdInput">serverIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeouts">MysqlFlexibleServerActiveDirectoryAdministratorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.identityId">identityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.login">login</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.objectId">objectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.serverId">serverId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.timeouts"></a>

```java
public MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference">MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference</a>

---

##### `identityIdInput`<sup>Optional</sup> <a name="identityIdInput" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.identityIdInput"></a>

```java
public java.lang.String getIdentityIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `loginInput`<sup>Optional</sup> <a name="loginInput" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.loginInput"></a>

```java
public java.lang.String getLoginInput();
```

- *Type:* java.lang.String

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.objectIdInput"></a>

```java
public java.lang.String getObjectIdInput();
```

- *Type:* java.lang.String

---

##### `serverIdInput`<sup>Optional</sup> <a name="serverIdInput" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.serverIdInput"></a>

```java
public java.lang.String getServerIdInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeouts">MysqlFlexibleServerActiveDirectoryAdministratorTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityId`<sup>Required</sup> <a name="identityId" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.identityId"></a>

```java
public java.lang.String getIdentityId();
```

- *Type:* java.lang.String

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.login"></a>

```java
public java.lang.String getLogin();
```

- *Type:* java.lang.String

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.serverId"></a>

```java
public java.lang.String getServerId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MysqlFlexibleServerActiveDirectoryAdministratorConfig <a name="MysqlFlexibleServerActiveDirectoryAdministratorConfig" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mysql_flexible_server_active_directory_administrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig;

MysqlFlexibleServerActiveDirectoryAdministratorConfig.builder()
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
    .identityId(java.lang.String)
    .login(java.lang.String)
    .objectId(java.lang.String)
    .serverId(java.lang.String)
    .tenantId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(MysqlFlexibleServerActiveDirectoryAdministratorTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.identityId">identityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/mysql_flexible_server_active_directory_administrator#identity_id MysqlFlexibleServerActiveDirectoryAdministrator#identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.login">login</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/mysql_flexible_server_active_directory_administrator#login MysqlFlexibleServerActiveDirectoryAdministrator#login}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.objectId">objectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/mysql_flexible_server_active_directory_administrator#object_id MysqlFlexibleServerActiveDirectoryAdministrator#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.serverId">serverId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/mysql_flexible_server_active_directory_administrator#server_id MysqlFlexibleServerActiveDirectoryAdministrator#server_id}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/mysql_flexible_server_active_directory_administrator#tenant_id MysqlFlexibleServerActiveDirectoryAdministrator#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/mysql_flexible_server_active_directory_administrator#id MysqlFlexibleServerActiveDirectoryAdministrator#id}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeouts">MysqlFlexibleServerActiveDirectoryAdministratorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `identityId`<sup>Required</sup> <a name="identityId" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.identityId"></a>

```java
public java.lang.String getIdentityId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/mysql_flexible_server_active_directory_administrator#identity_id MysqlFlexibleServerActiveDirectoryAdministrator#identity_id}.

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.login"></a>

```java
public java.lang.String getLogin();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/mysql_flexible_server_active_directory_administrator#login MysqlFlexibleServerActiveDirectoryAdministrator#login}.

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/mysql_flexible_server_active_directory_administrator#object_id MysqlFlexibleServerActiveDirectoryAdministrator#object_id}.

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.serverId"></a>

```java
public java.lang.String getServerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/mysql_flexible_server_active_directory_administrator#server_id MysqlFlexibleServerActiveDirectoryAdministrator#server_id}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/mysql_flexible_server_active_directory_administrator#tenant_id MysqlFlexibleServerActiveDirectoryAdministrator#tenant_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/mysql_flexible_server_active_directory_administrator#id MysqlFlexibleServerActiveDirectoryAdministrator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.timeouts"></a>

```java
public MysqlFlexibleServerActiveDirectoryAdministratorTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeouts">MysqlFlexibleServerActiveDirectoryAdministratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/mysql_flexible_server_active_directory_administrator#timeouts MysqlFlexibleServerActiveDirectoryAdministrator#timeouts}

---

### MysqlFlexibleServerActiveDirectoryAdministratorTimeouts <a name="MysqlFlexibleServerActiveDirectoryAdministratorTimeouts" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mysql_flexible_server_active_directory_administrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeouts;

MysqlFlexibleServerActiveDirectoryAdministratorTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/mysql_flexible_server_active_directory_administrator#create MysqlFlexibleServerActiveDirectoryAdministrator#create}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/mysql_flexible_server_active_directory_administrator#delete MysqlFlexibleServerActiveDirectoryAdministrator#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/mysql_flexible_server_active_directory_administrator#read MysqlFlexibleServerActiveDirectoryAdministrator#read}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/mysql_flexible_server_active_directory_administrator#update MysqlFlexibleServerActiveDirectoryAdministrator#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/mysql_flexible_server_active_directory_administrator#create MysqlFlexibleServerActiveDirectoryAdministrator#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/mysql_flexible_server_active_directory_administrator#delete MysqlFlexibleServerActiveDirectoryAdministrator#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/mysql_flexible_server_active_directory_administrator#read MysqlFlexibleServerActiveDirectoryAdministrator#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/mysql_flexible_server_active_directory_administrator#update MysqlFlexibleServerActiveDirectoryAdministrator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference <a name="MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mysql_flexible_server_active_directory_administrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference;

new MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeouts">MysqlFlexibleServerActiveDirectoryAdministratorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeouts">MysqlFlexibleServerActiveDirectoryAdministratorTimeouts</a>

---



