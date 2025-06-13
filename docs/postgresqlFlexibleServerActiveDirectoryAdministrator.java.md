# `postgresqlFlexibleServerActiveDirectoryAdministrator` Submodule <a name="`postgresqlFlexibleServerActiveDirectoryAdministrator` Submodule" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresqlFlexibleServerActiveDirectoryAdministrator <a name="PostgresqlFlexibleServerActiveDirectoryAdministrator" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/postgresql_flexible_server_active_directory_administrator azurerm_postgresql_flexible_server_active_directory_administrator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.postgresql_flexible_server_active_directory_administrator.PostgresqlFlexibleServerActiveDirectoryAdministrator;

PostgresqlFlexibleServerActiveDirectoryAdministrator.Builder.create(Construct scope, java.lang.String id)
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
    .objectId(java.lang.String)
    .principalName(java.lang.String)
    .principalType(java.lang.String)
    .resourceGroupName(java.lang.String)
    .serverName(java.lang.String)
    .tenantId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.objectId">objectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/postgresql_flexible_server_active_directory_administrator#object_id PostgresqlFlexibleServerActiveDirectoryAdministrator#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.principalName">principalName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/postgresql_flexible_server_active_directory_administrator#principal_name PostgresqlFlexibleServerActiveDirectoryAdministrator#principal_name}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.principalType">principalType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/postgresql_flexible_server_active_directory_administrator#principal_type PostgresqlFlexibleServerActiveDirectoryAdministrator#principal_type}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/postgresql_flexible_server_active_directory_administrator#resource_group_name PostgresqlFlexibleServerActiveDirectoryAdministrator#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.serverName">serverName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/postgresql_flexible_server_active_directory_administrator#server_name PostgresqlFlexibleServerActiveDirectoryAdministrator#server_name}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/postgresql_flexible_server_active_directory_administrator#tenant_id PostgresqlFlexibleServerActiveDirectoryAdministrator#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/postgresql_flexible_server_active_directory_administrator#id PostgresqlFlexibleServerActiveDirectoryAdministrator#id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts">PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.objectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/postgresql_flexible_server_active_directory_administrator#object_id PostgresqlFlexibleServerActiveDirectoryAdministrator#object_id}.

---

##### `principalName`<sup>Required</sup> <a name="principalName" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.principalName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/postgresql_flexible_server_active_directory_administrator#principal_name PostgresqlFlexibleServerActiveDirectoryAdministrator#principal_name}.

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.principalType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/postgresql_flexible_server_active_directory_administrator#principal_type PostgresqlFlexibleServerActiveDirectoryAdministrator#principal_type}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/postgresql_flexible_server_active_directory_administrator#resource_group_name PostgresqlFlexibleServerActiveDirectoryAdministrator#resource_group_name}.

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.serverName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/postgresql_flexible_server_active_directory_administrator#server_name PostgresqlFlexibleServerActiveDirectoryAdministrator#server_name}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.tenantId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/postgresql_flexible_server_active_directory_administrator#tenant_id PostgresqlFlexibleServerActiveDirectoryAdministrator#tenant_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/postgresql_flexible_server_active_directory_administrator#id PostgresqlFlexibleServerActiveDirectoryAdministrator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts">PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/postgresql_flexible_server_active_directory_administrator#timeouts PostgresqlFlexibleServerActiveDirectoryAdministrator#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.putTimeouts"></a>

```java
public void putTimeouts(PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts">PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PostgresqlFlexibleServerActiveDirectoryAdministrator resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.postgresql_flexible_server_active_directory_administrator.PostgresqlFlexibleServerActiveDirectoryAdministrator;

PostgresqlFlexibleServerActiveDirectoryAdministrator.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.postgresql_flexible_server_active_directory_administrator.PostgresqlFlexibleServerActiveDirectoryAdministrator;

PostgresqlFlexibleServerActiveDirectoryAdministrator.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.postgresql_flexible_server_active_directory_administrator.PostgresqlFlexibleServerActiveDirectoryAdministrator;

PostgresqlFlexibleServerActiveDirectoryAdministrator.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.postgresql_flexible_server_active_directory_administrator.PostgresqlFlexibleServerActiveDirectoryAdministrator;

PostgresqlFlexibleServerActiveDirectoryAdministrator.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PostgresqlFlexibleServerActiveDirectoryAdministrator.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PostgresqlFlexibleServerActiveDirectoryAdministrator resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PostgresqlFlexibleServerActiveDirectoryAdministrator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PostgresqlFlexibleServerActiveDirectoryAdministrator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/postgresql_flexible_server_active_directory_administrator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PostgresqlFlexibleServerActiveDirectoryAdministrator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference">PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.objectIdInput">objectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.principalNameInput">principalNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.principalTypeInput">principalTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.serverNameInput">serverNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts">PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.objectId">objectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.principalName">principalName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.principalType">principalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.serverName">serverName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.timeouts"></a>

```java
public PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference">PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.objectIdInput"></a>

```java
public java.lang.String getObjectIdInput();
```

- *Type:* java.lang.String

---

##### `principalNameInput`<sup>Optional</sup> <a name="principalNameInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.principalNameInput"></a>

```java
public java.lang.String getPrincipalNameInput();
```

- *Type:* java.lang.String

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.principalTypeInput"></a>

```java
public java.lang.String getPrincipalTypeInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.serverNameInput"></a>

```java
public java.lang.String getServerNameInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts">PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

---

##### `principalName`<sup>Required</sup> <a name="principalName" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.principalName"></a>

```java
public java.lang.String getPrincipalName();
```

- *Type:* java.lang.String

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresqlFlexibleServerActiveDirectoryAdministratorConfig <a name="PostgresqlFlexibleServerActiveDirectoryAdministratorConfig" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.postgresql_flexible_server_active_directory_administrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig;

PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.builder()
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
    .objectId(java.lang.String)
    .principalName(java.lang.String)
    .principalType(java.lang.String)
    .resourceGroupName(java.lang.String)
    .serverName(java.lang.String)
    .tenantId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.objectId">objectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/postgresql_flexible_server_active_directory_administrator#object_id PostgresqlFlexibleServerActiveDirectoryAdministrator#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.principalName">principalName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/postgresql_flexible_server_active_directory_administrator#principal_name PostgresqlFlexibleServerActiveDirectoryAdministrator#principal_name}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.principalType">principalType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/postgresql_flexible_server_active_directory_administrator#principal_type PostgresqlFlexibleServerActiveDirectoryAdministrator#principal_type}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/postgresql_flexible_server_active_directory_administrator#resource_group_name PostgresqlFlexibleServerActiveDirectoryAdministrator#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.serverName">serverName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/postgresql_flexible_server_active_directory_administrator#server_name PostgresqlFlexibleServerActiveDirectoryAdministrator#server_name}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/postgresql_flexible_server_active_directory_administrator#tenant_id PostgresqlFlexibleServerActiveDirectoryAdministrator#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/postgresql_flexible_server_active_directory_administrator#id PostgresqlFlexibleServerActiveDirectoryAdministrator#id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts">PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/postgresql_flexible_server_active_directory_administrator#object_id PostgresqlFlexibleServerActiveDirectoryAdministrator#object_id}.

---

##### `principalName`<sup>Required</sup> <a name="principalName" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.principalName"></a>

```java
public java.lang.String getPrincipalName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/postgresql_flexible_server_active_directory_administrator#principal_name PostgresqlFlexibleServerActiveDirectoryAdministrator#principal_name}.

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/postgresql_flexible_server_active_directory_administrator#principal_type PostgresqlFlexibleServerActiveDirectoryAdministrator#principal_type}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/postgresql_flexible_server_active_directory_administrator#resource_group_name PostgresqlFlexibleServerActiveDirectoryAdministrator#resource_group_name}.

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/postgresql_flexible_server_active_directory_administrator#server_name PostgresqlFlexibleServerActiveDirectoryAdministrator#server_name}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/postgresql_flexible_server_active_directory_administrator#tenant_id PostgresqlFlexibleServerActiveDirectoryAdministrator#tenant_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/postgresql_flexible_server_active_directory_administrator#id PostgresqlFlexibleServerActiveDirectoryAdministrator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.timeouts"></a>

```java
public PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts">PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/postgresql_flexible_server_active_directory_administrator#timeouts PostgresqlFlexibleServerActiveDirectoryAdministrator#timeouts}

---

### PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts <a name="PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.postgresql_flexible_server_active_directory_administrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts;

PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/postgresql_flexible_server_active_directory_administrator#create PostgresqlFlexibleServerActiveDirectoryAdministrator#create}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/postgresql_flexible_server_active_directory_administrator#delete PostgresqlFlexibleServerActiveDirectoryAdministrator#delete}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/postgresql_flexible_server_active_directory_administrator#read PostgresqlFlexibleServerActiveDirectoryAdministrator#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/postgresql_flexible_server_active_directory_administrator#create PostgresqlFlexibleServerActiveDirectoryAdministrator#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/postgresql_flexible_server_active_directory_administrator#delete PostgresqlFlexibleServerActiveDirectoryAdministrator#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/postgresql_flexible_server_active_directory_administrator#read PostgresqlFlexibleServerActiveDirectoryAdministrator#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference <a name="PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.postgresql_flexible_server_active_directory_administrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference;

new PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts">PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts">PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts</a>

---



