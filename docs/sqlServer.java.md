# `azurerm_sql_server`

Refer to the Terraform Registory for docs: [`azurerm_sql_server`](https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server).

# `sqlServer` Submodule <a name="`sqlServer` Submodule" id="@cdktf/provider-azurerm.sqlServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlServer <a name="SqlServer" id="@cdktf/provider-azurerm.sqlServer.SqlServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server azurerm_sql_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_server.SqlServer;

SqlServer.Builder.create(Construct scope, java.lang.String id)
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
    .administratorLogin(java.lang.String)
    .administratorLoginPassword(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .version(java.lang.String)
//  .connectionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .identity(SqlServerIdentity)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .threatDetectionPolicy(SqlServerThreatDetectionPolicy)
//  .timeouts(SqlServerTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.administratorLogin">administratorLogin</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#administrator_login SqlServer#administrator_login}. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.administratorLoginPassword">administratorLoginPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#administrator_login_password SqlServer#administrator_login_password}. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#location SqlServer#location}. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#name SqlServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#resource_group_name SqlServer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#version SqlServer#version}. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.connectionPolicy">connectionPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#connection_policy SqlServer#connection_policy}. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#id SqlServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerIdentity">SqlServerIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#tags SqlServer#tags}. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.threatDetectionPolicy">threatDetectionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicy">SqlServerThreatDetectionPolicy</a></code> | threat_detection_policy block. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeouts">SqlServerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `administratorLogin`<sup>Required</sup> <a name="administratorLogin" id="@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.administratorLogin"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#administrator_login SqlServer#administrator_login}.

---

##### `administratorLoginPassword`<sup>Required</sup> <a name="administratorLoginPassword" id="@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.administratorLoginPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#administrator_login_password SqlServer#administrator_login_password}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#location SqlServer#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#name SqlServer#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#resource_group_name SqlServer#resource_group_name}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.version"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#version SqlServer#version}.

---

##### `connectionPolicy`<sup>Optional</sup> <a name="connectionPolicy" id="@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.connectionPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#connection_policy SqlServer#connection_policy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#id SqlServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlServer.SqlServerIdentity">SqlServerIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#identity SqlServer#identity}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#tags SqlServer#tags}.

---

##### `threatDetectionPolicy`<sup>Optional</sup> <a name="threatDetectionPolicy" id="@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.threatDetectionPolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicy">SqlServerThreatDetectionPolicy</a>

threat_detection_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#threat_detection_policy SqlServer#threat_detection_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sqlServer.SqlServer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeouts">SqlServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#timeouts SqlServer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.putThreatDetectionPolicy">putThreatDetectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.resetConnectionPolicy">resetConnectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.resetThreatDetectionPolicy">resetThreatDetectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sqlServer.SqlServer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.sqlServer.SqlServer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sqlServer.SqlServer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlServer.SqlServer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.sqlServer.SqlServer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sqlServer.SqlServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.sqlServer.SqlServer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.sqlServer.SqlServer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.sqlServer.SqlServer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.sqlServer.SqlServer.putIdentity"></a>

```java
public void putIdentity(SqlServerIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlServer.SqlServer.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlServer.SqlServerIdentity">SqlServerIdentity</a>

---

##### `putThreatDetectionPolicy` <a name="putThreatDetectionPolicy" id="@cdktf/provider-azurerm.sqlServer.SqlServer.putThreatDetectionPolicy"></a>

```java
public void putThreatDetectionPolicy(SqlServerThreatDetectionPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlServer.SqlServer.putThreatDetectionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicy">SqlServerThreatDetectionPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.sqlServer.SqlServer.putTimeouts"></a>

```java
public void putTimeouts(SqlServerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlServer.SqlServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeouts">SqlServerTimeouts</a>

---

##### `resetConnectionPolicy` <a name="resetConnectionPolicy" id="@cdktf/provider-azurerm.sqlServer.SqlServer.resetConnectionPolicy"></a>

```java
public void resetConnectionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.sqlServer.SqlServer.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.sqlServer.SqlServer.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.sqlServer.SqlServer.resetTags"></a>

```java
public void resetTags()
```

##### `resetThreatDetectionPolicy` <a name="resetThreatDetectionPolicy" id="@cdktf/provider-azurerm.sqlServer.SqlServer.resetThreatDetectionPolicy"></a>

```java
public void resetThreatDetectionPolicy()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.sqlServer.SqlServer.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.sqlServer.SqlServer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_server.SqlServer;

SqlServer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlServer.SqlServer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.sqlServer.SqlServer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_server.SqlServer;

SqlServer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlServer.SqlServer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.sqlServer.SqlServer.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_server.SqlServer;

SqlServer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlServer.SqlServer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.property.fullyQualifiedDomainName">fullyQualifiedDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference">SqlServerIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.property.threatDetectionPolicy">threatDetectionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference">SqlServerThreatDetectionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference">SqlServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.property.administratorLoginInput">administratorLoginInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.property.administratorLoginPasswordInput">administratorLoginPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.property.connectionPolicyInput">connectionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerIdentity">SqlServerIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.property.threatDetectionPolicyInput">threatDetectionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicy">SqlServerThreatDetectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeouts">SqlServerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.property.administratorLogin">administratorLogin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.property.administratorLoginPassword">administratorLoginPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.property.connectionPolicy">connectionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sqlServer.SqlServer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.sqlServer.SqlServer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlServer.SqlServer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.sqlServer.SqlServer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.sqlServer.SqlServer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.sqlServer.SqlServer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.sqlServer.SqlServer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sqlServer.SqlServer.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sqlServer.SqlServer.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sqlServer.SqlServer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sqlServer.SqlServer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sqlServer.SqlServer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlServer.SqlServer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sqlServer.SqlServer.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fullyQualifiedDomainName`<sup>Required</sup> <a name="fullyQualifiedDomainName" id="@cdktf/provider-azurerm.sqlServer.SqlServer.property.fullyQualifiedDomainName"></a>

```java
public java.lang.String getFullyQualifiedDomainName();
```

- *Type:* java.lang.String

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.sqlServer.SqlServer.property.identity"></a>

```java
public SqlServerIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference">SqlServerIdentityOutputReference</a>

---

##### `threatDetectionPolicy`<sup>Required</sup> <a name="threatDetectionPolicy" id="@cdktf/provider-azurerm.sqlServer.SqlServer.property.threatDetectionPolicy"></a>

```java
public SqlServerThreatDetectionPolicyOutputReference getThreatDetectionPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference">SqlServerThreatDetectionPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sqlServer.SqlServer.property.timeouts"></a>

```java
public SqlServerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference">SqlServerTimeoutsOutputReference</a>

---

##### `administratorLoginInput`<sup>Optional</sup> <a name="administratorLoginInput" id="@cdktf/provider-azurerm.sqlServer.SqlServer.property.administratorLoginInput"></a>

```java
public java.lang.String getAdministratorLoginInput();
```

- *Type:* java.lang.String

---

##### `administratorLoginPasswordInput`<sup>Optional</sup> <a name="administratorLoginPasswordInput" id="@cdktf/provider-azurerm.sqlServer.SqlServer.property.administratorLoginPasswordInput"></a>

```java
public java.lang.String getAdministratorLoginPasswordInput();
```

- *Type:* java.lang.String

---

##### `connectionPolicyInput`<sup>Optional</sup> <a name="connectionPolicyInput" id="@cdktf/provider-azurerm.sqlServer.SqlServer.property.connectionPolicyInput"></a>

```java
public java.lang.String getConnectionPolicyInput();
```

- *Type:* java.lang.String

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.sqlServer.SqlServer.property.identityInput"></a>

```java
public SqlServerIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlServer.SqlServerIdentity">SqlServerIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.sqlServer.SqlServer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.sqlServer.SqlServer.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sqlServer.SqlServer.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.sqlServer.SqlServer.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.sqlServer.SqlServer.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `threatDetectionPolicyInput`<sup>Optional</sup> <a name="threatDetectionPolicyInput" id="@cdktf/provider-azurerm.sqlServer.SqlServer.property.threatDetectionPolicyInput"></a>

```java
public SqlServerThreatDetectionPolicy getThreatDetectionPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicy">SqlServerThreatDetectionPolicy</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.sqlServer.SqlServer.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeouts">SqlServerTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.sqlServer.SqlServer.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `administratorLogin`<sup>Required</sup> <a name="administratorLogin" id="@cdktf/provider-azurerm.sqlServer.SqlServer.property.administratorLogin"></a>

```java
public java.lang.String getAdministratorLogin();
```

- *Type:* java.lang.String

---

##### `administratorLoginPassword`<sup>Required</sup> <a name="administratorLoginPassword" id="@cdktf/provider-azurerm.sqlServer.SqlServer.property.administratorLoginPassword"></a>

```java
public java.lang.String getAdministratorLoginPassword();
```

- *Type:* java.lang.String

---

##### `connectionPolicy`<sup>Required</sup> <a name="connectionPolicy" id="@cdktf/provider-azurerm.sqlServer.SqlServer.property.connectionPolicy"></a>

```java
public java.lang.String getConnectionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlServer.SqlServer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.sqlServer.SqlServer.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sqlServer.SqlServer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sqlServer.SqlServer.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.sqlServer.SqlServer.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.sqlServer.SqlServer.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sqlServer.SqlServer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SqlServerConfig <a name="SqlServerConfig" id="@cdktf/provider-azurerm.sqlServer.SqlServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlServer.SqlServerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_server.SqlServerConfig;

SqlServerConfig.builder()
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
    .administratorLogin(java.lang.String)
    .administratorLoginPassword(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .version(java.lang.String)
//  .connectionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .identity(SqlServerIdentity)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .threatDetectionPolicy(SqlServerThreatDetectionPolicy)
//  .timeouts(SqlServerTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerConfig.property.administratorLogin">administratorLogin</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#administrator_login SqlServer#administrator_login}. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerConfig.property.administratorLoginPassword">administratorLoginPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#administrator_login_password SqlServer#administrator_login_password}. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#location SqlServer#location}. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#name SqlServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#resource_group_name SqlServer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerConfig.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#version SqlServer#version}. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerConfig.property.connectionPolicy">connectionPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#connection_policy SqlServer#connection_policy}. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#id SqlServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerIdentity">SqlServerIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#tags SqlServer#tags}. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerConfig.property.threatDetectionPolicy">threatDetectionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicy">SqlServerThreatDetectionPolicy</a></code> | threat_detection_policy block. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeouts">SqlServerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sqlServer.SqlServerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sqlServer.SqlServerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sqlServer.SqlServerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sqlServer.SqlServerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sqlServer.SqlServerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlServer.SqlServerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sqlServer.SqlServerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `administratorLogin`<sup>Required</sup> <a name="administratorLogin" id="@cdktf/provider-azurerm.sqlServer.SqlServerConfig.property.administratorLogin"></a>

```java
public java.lang.String getAdministratorLogin();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#administrator_login SqlServer#administrator_login}.

---

##### `administratorLoginPassword`<sup>Required</sup> <a name="administratorLoginPassword" id="@cdktf/provider-azurerm.sqlServer.SqlServerConfig.property.administratorLoginPassword"></a>

```java
public java.lang.String getAdministratorLoginPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#administrator_login_password SqlServer#administrator_login_password}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.sqlServer.SqlServerConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#location SqlServer#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sqlServer.SqlServerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#name SqlServer#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sqlServer.SqlServerConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#resource_group_name SqlServer#resource_group_name}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.sqlServer.SqlServerConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#version SqlServer#version}.

---

##### `connectionPolicy`<sup>Optional</sup> <a name="connectionPolicy" id="@cdktf/provider-azurerm.sqlServer.SqlServerConfig.property.connectionPolicy"></a>

```java
public java.lang.String getConnectionPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#connection_policy SqlServer#connection_policy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sqlServer.SqlServerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#id SqlServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.sqlServer.SqlServerConfig.property.identity"></a>

```java
public SqlServerIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlServer.SqlServerIdentity">SqlServerIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#identity SqlServer#identity}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.sqlServer.SqlServerConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#tags SqlServer#tags}.

---

##### `threatDetectionPolicy`<sup>Optional</sup> <a name="threatDetectionPolicy" id="@cdktf/provider-azurerm.sqlServer.SqlServerConfig.property.threatDetectionPolicy"></a>

```java
public SqlServerThreatDetectionPolicy getThreatDetectionPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicy">SqlServerThreatDetectionPolicy</a>

threat_detection_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#threat_detection_policy SqlServer#threat_detection_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sqlServer.SqlServerConfig.property.timeouts"></a>

```java
public SqlServerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeouts">SqlServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#timeouts SqlServer#timeouts}

---

### SqlServerIdentity <a name="SqlServerIdentity" id="@cdktf/provider-azurerm.sqlServer.SqlServerIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlServer.SqlServerIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_server.SqlServerIdentity;

SqlServerIdentity.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#type SqlServer#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.sqlServer.SqlServerIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#type SqlServer#type}.

---

### SqlServerThreatDetectionPolicy <a name="SqlServerThreatDetectionPolicy" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_server.SqlServerThreatDetectionPolicy;

SqlServerThreatDetectionPolicy.builder()
//  .disabledAlerts(java.util.List<java.lang.String>)
//  .emailAccountAdmins(java.lang.Boolean)
//  .emailAccountAdmins(IResolvable)
//  .emailAddresses(java.util.List<java.lang.String>)
//  .retentionDays(java.lang.Number)
//  .state(java.lang.String)
//  .storageAccountAccessKey(java.lang.String)
//  .storageEndpoint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicy.property.disabledAlerts">disabledAlerts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#disabled_alerts SqlServer#disabled_alerts}. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicy.property.emailAccountAdmins">emailAccountAdmins</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#email_account_admins SqlServer#email_account_admins}. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicy.property.emailAddresses">emailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#email_addresses SqlServer#email_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicy.property.retentionDays">retentionDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#retention_days SqlServer#retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicy.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#state SqlServer#state}. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicy.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#storage_account_access_key SqlServer#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicy.property.storageEndpoint">storageEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#storage_endpoint SqlServer#storage_endpoint}. |

---

##### `disabledAlerts`<sup>Optional</sup> <a name="disabledAlerts" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicy.property.disabledAlerts"></a>

```java
public java.util.List<java.lang.String> getDisabledAlerts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#disabled_alerts SqlServer#disabled_alerts}.

---

##### `emailAccountAdmins`<sup>Optional</sup> <a name="emailAccountAdmins" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicy.property.emailAccountAdmins"></a>

```java
public java.lang.Object getEmailAccountAdmins();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#email_account_admins SqlServer#email_account_admins}.

---

##### `emailAddresses`<sup>Optional</sup> <a name="emailAddresses" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicy.property.emailAddresses"></a>

```java
public java.util.List<java.lang.String> getEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#email_addresses SqlServer#email_addresses}.

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicy.property.retentionDays"></a>

```java
public java.lang.Number getRetentionDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#retention_days SqlServer#retention_days}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicy.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#state SqlServer#state}.

---

##### `storageAccountAccessKey`<sup>Optional</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicy.property.storageAccountAccessKey"></a>

```java
public java.lang.String getStorageAccountAccessKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#storage_account_access_key SqlServer#storage_account_access_key}.

---

##### `storageEndpoint`<sup>Optional</sup> <a name="storageEndpoint" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicy.property.storageEndpoint"></a>

```java
public java.lang.String getStorageEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#storage_endpoint SqlServer#storage_endpoint}.

---

### SqlServerTimeouts <a name="SqlServerTimeouts" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_server.SqlServerTimeouts;

SqlServerTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#create SqlServer#create}. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#delete SqlServer#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#read SqlServer#read}. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#update SqlServer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#create SqlServer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#delete SqlServer#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#read SqlServer#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sql_server#update SqlServer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlServerIdentityOutputReference <a name="SqlServerIdentityOutputReference" id="@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_server.SqlServerIdentityOutputReference;

new SqlServerIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerIdentity">SqlServerIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sqlServer.SqlServerIdentityOutputReference.property.internalValue"></a>

```java
public SqlServerIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlServer.SqlServerIdentity">SqlServerIdentity</a>

---


### SqlServerThreatDetectionPolicyOutputReference <a name="SqlServerThreatDetectionPolicyOutputReference" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_server.SqlServerThreatDetectionPolicyOutputReference;

new SqlServerThreatDetectionPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.resetDisabledAlerts">resetDisabledAlerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.resetEmailAccountAdmins">resetEmailAccountAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.resetEmailAddresses">resetEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.resetRetentionDays">resetRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.resetStorageAccountAccessKey">resetStorageAccountAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.resetStorageEndpoint">resetStorageEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisabledAlerts` <a name="resetDisabledAlerts" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.resetDisabledAlerts"></a>

```java
public void resetDisabledAlerts()
```

##### `resetEmailAccountAdmins` <a name="resetEmailAccountAdmins" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.resetEmailAccountAdmins"></a>

```java
public void resetEmailAccountAdmins()
```

##### `resetEmailAddresses` <a name="resetEmailAddresses" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.resetEmailAddresses"></a>

```java
public void resetEmailAddresses()
```

##### `resetRetentionDays` <a name="resetRetentionDays" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.resetRetentionDays"></a>

```java
public void resetRetentionDays()
```

##### `resetState` <a name="resetState" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.resetState"></a>

```java
public void resetState()
```

##### `resetStorageAccountAccessKey` <a name="resetStorageAccountAccessKey" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.resetStorageAccountAccessKey"></a>

```java
public void resetStorageAccountAccessKey()
```

##### `resetStorageEndpoint` <a name="resetStorageEndpoint" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.resetStorageEndpoint"></a>

```java
public void resetStorageEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.property.disabledAlertsInput">disabledAlertsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.property.emailAccountAdminsInput">emailAccountAdminsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.property.emailAddressesInput">emailAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.property.retentionDaysInput">retentionDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.property.storageAccountAccessKeyInput">storageAccountAccessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.property.storageEndpointInput">storageEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.property.disabledAlerts">disabledAlerts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.property.emailAccountAdmins">emailAccountAdmins</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.property.emailAddresses">emailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.property.retentionDays">retentionDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.property.storageEndpoint">storageEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicy">SqlServerThreatDetectionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disabledAlertsInput`<sup>Optional</sup> <a name="disabledAlertsInput" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.property.disabledAlertsInput"></a>

```java
public java.util.List<java.lang.String> getDisabledAlertsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailAccountAdminsInput`<sup>Optional</sup> <a name="emailAccountAdminsInput" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.property.emailAccountAdminsInput"></a>

```java
public java.lang.Object getEmailAccountAdminsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `emailAddressesInput`<sup>Optional</sup> <a name="emailAddressesInput" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.property.emailAddressesInput"></a>

```java
public java.util.List<java.lang.String> getEmailAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.property.retentionDaysInput"></a>

```java
public java.lang.Number getRetentionDaysInput();
```

- *Type:* java.lang.Number

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `storageAccountAccessKeyInput`<sup>Optional</sup> <a name="storageAccountAccessKeyInput" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.property.storageAccountAccessKeyInput"></a>

```java
public java.lang.String getStorageAccountAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `storageEndpointInput`<sup>Optional</sup> <a name="storageEndpointInput" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.property.storageEndpointInput"></a>

```java
public java.lang.String getStorageEndpointInput();
```

- *Type:* java.lang.String

---

##### `disabledAlerts`<sup>Required</sup> <a name="disabledAlerts" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.property.disabledAlerts"></a>

```java
public java.util.List<java.lang.String> getDisabledAlerts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailAccountAdmins`<sup>Required</sup> <a name="emailAccountAdmins" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.property.emailAccountAdmins"></a>

```java
public java.lang.Object getEmailAccountAdmins();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `emailAddresses`<sup>Required</sup> <a name="emailAddresses" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.property.emailAddresses"></a>

```java
public java.util.List<java.lang.String> getEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.property.retentionDays"></a>

```java
public java.lang.Number getRetentionDays();
```

- *Type:* java.lang.Number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `storageAccountAccessKey`<sup>Required</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.property.storageAccountAccessKey"></a>

```java
public java.lang.String getStorageAccountAccessKey();
```

- *Type:* java.lang.String

---

##### `storageEndpoint`<sup>Required</sup> <a name="storageEndpoint" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.property.storageEndpoint"></a>

```java
public java.lang.String getStorageEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicyOutputReference.property.internalValue"></a>

```java
public SqlServerThreatDetectionPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlServer.SqlServerThreatDetectionPolicy">SqlServerThreatDetectionPolicy</a>

---


### SqlServerTimeoutsOutputReference <a name="SqlServerTimeoutsOutputReference" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_server.SqlServerTimeoutsOutputReference;

new SqlServerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeouts">SqlServerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sqlServer.SqlServerTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sqlServer.SqlServerTimeouts">SqlServerTimeouts</a>

---



