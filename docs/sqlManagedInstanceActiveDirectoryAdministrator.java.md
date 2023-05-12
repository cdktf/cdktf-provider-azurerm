# `azurerm_sql_managed_instance_active_directory_administrator`

Refer to the Terraform Registory for docs: [`azurerm_sql_managed_instance_active_directory_administrator`](https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/sql_managed_instance_active_directory_administrator).

# `sqlManagedInstanceActiveDirectoryAdministrator` Submodule <a name="`sqlManagedInstanceActiveDirectoryAdministrator` Submodule" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlManagedInstanceActiveDirectoryAdministrator <a name="SqlManagedInstanceActiveDirectoryAdministrator" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/sql_managed_instance_active_directory_administrator azurerm_sql_managed_instance_active_directory_administrator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_managed_instance_active_directory_administrator.SqlManagedInstanceActiveDirectoryAdministrator;

SqlManagedInstanceActiveDirectoryAdministrator.Builder.create(Construct scope, java.lang.String id)
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
    .managedInstanceName(java.lang.String)
    .objectId(java.lang.String)
    .resourceGroupName(java.lang.String)
    .tenantId(java.lang.String)
//  .azureadAuthenticationOnly(java.lang.Boolean)
//  .azureadAuthenticationOnly(IResolvable)
//  .id(java.lang.String)
//  .timeouts(SqlManagedInstanceActiveDirectoryAdministratorTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.login">login</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/sql_managed_instance_active_directory_administrator#login SqlManagedInstanceActiveDirectoryAdministrator#login}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.managedInstanceName">managedInstanceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/sql_managed_instance_active_directory_administrator#managed_instance_name SqlManagedInstanceActiveDirectoryAdministrator#managed_instance_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.objectId">objectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/sql_managed_instance_active_directory_administrator#object_id SqlManagedInstanceActiveDirectoryAdministrator#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/sql_managed_instance_active_directory_administrator#resource_group_name SqlManagedInstanceActiveDirectoryAdministrator#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/sql_managed_instance_active_directory_administrator#tenant_id SqlManagedInstanceActiveDirectoryAdministrator#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.azureadAuthenticationOnly">azureadAuthenticationOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/sql_managed_instance_active_directory_administrator#azuread_authentication_only SqlManagedInstanceActiveDirectoryAdministrator#azuread_authentication_only}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/sql_managed_instance_active_directory_administrator#id SqlManagedInstanceActiveDirectoryAdministrator#id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts">SqlManagedInstanceActiveDirectoryAdministratorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.login"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/sql_managed_instance_active_directory_administrator#login SqlManagedInstanceActiveDirectoryAdministrator#login}.

---

##### `managedInstanceName`<sup>Required</sup> <a name="managedInstanceName" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.managedInstanceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/sql_managed_instance_active_directory_administrator#managed_instance_name SqlManagedInstanceActiveDirectoryAdministrator#managed_instance_name}.

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.objectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/sql_managed_instance_active_directory_administrator#object_id SqlManagedInstanceActiveDirectoryAdministrator#object_id}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/sql_managed_instance_active_directory_administrator#resource_group_name SqlManagedInstanceActiveDirectoryAdministrator#resource_group_name}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.tenantId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/sql_managed_instance_active_directory_administrator#tenant_id SqlManagedInstanceActiveDirectoryAdministrator#tenant_id}.

---

##### `azureadAuthenticationOnly`<sup>Optional</sup> <a name="azureadAuthenticationOnly" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.azureadAuthenticationOnly"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/sql_managed_instance_active_directory_administrator#azuread_authentication_only SqlManagedInstanceActiveDirectoryAdministrator#azuread_authentication_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/sql_managed_instance_active_directory_administrator#id SqlManagedInstanceActiveDirectoryAdministrator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts">SqlManagedInstanceActiveDirectoryAdministratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/sql_managed_instance_active_directory_administrator#timeouts SqlManagedInstanceActiveDirectoryAdministrator#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.resetAzureadAuthenticationOnly">resetAzureadAuthenticationOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.putTimeouts"></a>

```java
public void putTimeouts(SqlManagedInstanceActiveDirectoryAdministratorTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts">SqlManagedInstanceActiveDirectoryAdministratorTimeouts</a>

---

##### `resetAzureadAuthenticationOnly` <a name="resetAzureadAuthenticationOnly" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.resetAzureadAuthenticationOnly"></a>

```java
public void resetAzureadAuthenticationOnly()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_managed_instance_active_directory_administrator.SqlManagedInstanceActiveDirectoryAdministrator;

SqlManagedInstanceActiveDirectoryAdministrator.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_managed_instance_active_directory_administrator.SqlManagedInstanceActiveDirectoryAdministrator;

SqlManagedInstanceActiveDirectoryAdministrator.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_managed_instance_active_directory_administrator.SqlManagedInstanceActiveDirectoryAdministrator;

SqlManagedInstanceActiveDirectoryAdministrator.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference">SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.azureadAuthenticationOnlyInput">azureadAuthenticationOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.loginInput">loginInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.managedInstanceNameInput">managedInstanceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.objectIdInput">objectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts">SqlManagedInstanceActiveDirectoryAdministratorTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.azureadAuthenticationOnly">azureadAuthenticationOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.login">login</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.managedInstanceName">managedInstanceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.objectId">objectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.timeouts"></a>

```java
public SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference">SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference</a>

---

##### `azureadAuthenticationOnlyInput`<sup>Optional</sup> <a name="azureadAuthenticationOnlyInput" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.azureadAuthenticationOnlyInput"></a>

```java
public java.lang.Object getAzureadAuthenticationOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `loginInput`<sup>Optional</sup> <a name="loginInput" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.loginInput"></a>

```java
public java.lang.String getLoginInput();
```

- *Type:* java.lang.String

---

##### `managedInstanceNameInput`<sup>Optional</sup> <a name="managedInstanceNameInput" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.managedInstanceNameInput"></a>

```java
public java.lang.String getManagedInstanceNameInput();
```

- *Type:* java.lang.String

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.objectIdInput"></a>

```java
public java.lang.String getObjectIdInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts">SqlManagedInstanceActiveDirectoryAdministratorTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `azureadAuthenticationOnly`<sup>Required</sup> <a name="azureadAuthenticationOnly" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.azureadAuthenticationOnly"></a>

```java
public java.lang.Object getAzureadAuthenticationOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.login"></a>

```java
public java.lang.String getLogin();
```

- *Type:* java.lang.String

---

##### `managedInstanceName`<sup>Required</sup> <a name="managedInstanceName" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.managedInstanceName"></a>

```java
public java.lang.String getManagedInstanceName();
```

- *Type:* java.lang.String

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SqlManagedInstanceActiveDirectoryAdministratorConfig <a name="SqlManagedInstanceActiveDirectoryAdministratorConfig" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_managed_instance_active_directory_administrator.SqlManagedInstanceActiveDirectoryAdministratorConfig;

SqlManagedInstanceActiveDirectoryAdministratorConfig.builder()
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
    .managedInstanceName(java.lang.String)
    .objectId(java.lang.String)
    .resourceGroupName(java.lang.String)
    .tenantId(java.lang.String)
//  .azureadAuthenticationOnly(java.lang.Boolean)
//  .azureadAuthenticationOnly(IResolvable)
//  .id(java.lang.String)
//  .timeouts(SqlManagedInstanceActiveDirectoryAdministratorTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.login">login</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/sql_managed_instance_active_directory_administrator#login SqlManagedInstanceActiveDirectoryAdministrator#login}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.managedInstanceName">managedInstanceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/sql_managed_instance_active_directory_administrator#managed_instance_name SqlManagedInstanceActiveDirectoryAdministrator#managed_instance_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.objectId">objectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/sql_managed_instance_active_directory_administrator#object_id SqlManagedInstanceActiveDirectoryAdministrator#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/sql_managed_instance_active_directory_administrator#resource_group_name SqlManagedInstanceActiveDirectoryAdministrator#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/sql_managed_instance_active_directory_administrator#tenant_id SqlManagedInstanceActiveDirectoryAdministrator#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.azureadAuthenticationOnly">azureadAuthenticationOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/sql_managed_instance_active_directory_administrator#azuread_authentication_only SqlManagedInstanceActiveDirectoryAdministrator#azuread_authentication_only}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/sql_managed_instance_active_directory_administrator#id SqlManagedInstanceActiveDirectoryAdministrator#id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts">SqlManagedInstanceActiveDirectoryAdministratorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.login"></a>

```java
public java.lang.String getLogin();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/sql_managed_instance_active_directory_administrator#login SqlManagedInstanceActiveDirectoryAdministrator#login}.

---

##### `managedInstanceName`<sup>Required</sup> <a name="managedInstanceName" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.managedInstanceName"></a>

```java
public java.lang.String getManagedInstanceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/sql_managed_instance_active_directory_administrator#managed_instance_name SqlManagedInstanceActiveDirectoryAdministrator#managed_instance_name}.

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/sql_managed_instance_active_directory_administrator#object_id SqlManagedInstanceActiveDirectoryAdministrator#object_id}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/sql_managed_instance_active_directory_administrator#resource_group_name SqlManagedInstanceActiveDirectoryAdministrator#resource_group_name}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/sql_managed_instance_active_directory_administrator#tenant_id SqlManagedInstanceActiveDirectoryAdministrator#tenant_id}.

---

##### `azureadAuthenticationOnly`<sup>Optional</sup> <a name="azureadAuthenticationOnly" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.azureadAuthenticationOnly"></a>

```java
public java.lang.Object getAzureadAuthenticationOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/sql_managed_instance_active_directory_administrator#azuread_authentication_only SqlManagedInstanceActiveDirectoryAdministrator#azuread_authentication_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/sql_managed_instance_active_directory_administrator#id SqlManagedInstanceActiveDirectoryAdministrator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.timeouts"></a>

```java
public SqlManagedInstanceActiveDirectoryAdministratorTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts">SqlManagedInstanceActiveDirectoryAdministratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/sql_managed_instance_active_directory_administrator#timeouts SqlManagedInstanceActiveDirectoryAdministrator#timeouts}

---

### SqlManagedInstanceActiveDirectoryAdministratorTimeouts <a name="SqlManagedInstanceActiveDirectoryAdministratorTimeouts" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_managed_instance_active_directory_administrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts;

SqlManagedInstanceActiveDirectoryAdministratorTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/sql_managed_instance_active_directory_administrator#create SqlManagedInstanceActiveDirectoryAdministrator#create}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/sql_managed_instance_active_directory_administrator#delete SqlManagedInstanceActiveDirectoryAdministrator#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/sql_managed_instance_active_directory_administrator#read SqlManagedInstanceActiveDirectoryAdministrator#read}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/sql_managed_instance_active_directory_administrator#update SqlManagedInstanceActiveDirectoryAdministrator#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/sql_managed_instance_active_directory_administrator#create SqlManagedInstanceActiveDirectoryAdministrator#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/sql_managed_instance_active_directory_administrator#delete SqlManagedInstanceActiveDirectoryAdministrator#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/sql_managed_instance_active_directory_administrator#read SqlManagedInstanceActiveDirectoryAdministrator#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/sql_managed_instance_active_directory_administrator#update SqlManagedInstanceActiveDirectoryAdministrator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference <a name="SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_managed_instance_active_directory_administrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference;

new SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts">SqlManagedInstanceActiveDirectoryAdministratorTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts">SqlManagedInstanceActiveDirectoryAdministratorTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



