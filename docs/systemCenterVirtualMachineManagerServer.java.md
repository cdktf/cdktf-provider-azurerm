# `systemCenterVirtualMachineManagerServer` Submodule <a name="`systemCenterVirtualMachineManagerServer` Submodule" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SystemCenterVirtualMachineManagerServer <a name="SystemCenterVirtualMachineManagerServer" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server azurerm_system_center_virtual_machine_manager_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.system_center_virtual_machine_manager_server.SystemCenterVirtualMachineManagerServer;

SystemCenterVirtualMachineManagerServer.Builder.create(Construct scope, java.lang.String id)
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
    .customLocationId(java.lang.String)
    .fqdn(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .password(java.lang.String)
    .resourceGroupName(java.lang.String)
    .username(java.lang.String)
//  .id(java.lang.String)
//  .port(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SystemCenterVirtualMachineManagerServerTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.customLocationId">customLocationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#custom_location_id SystemCenterVirtualMachineManagerServer#custom_location_id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.fqdn">fqdn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#fqdn SystemCenterVirtualMachineManagerServer#fqdn}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#location SystemCenterVirtualMachineManagerServer#location}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#name SystemCenterVirtualMachineManagerServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#password SystemCenterVirtualMachineManagerServer#password}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#resource_group_name SystemCenterVirtualMachineManagerServer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#username SystemCenterVirtualMachineManagerServer#username}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#id SystemCenterVirtualMachineManagerServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#port SystemCenterVirtualMachineManagerServer#port}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#tags SystemCenterVirtualMachineManagerServer#tags}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts">SystemCenterVirtualMachineManagerServerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customLocationId`<sup>Required</sup> <a name="customLocationId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.customLocationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#custom_location_id SystemCenterVirtualMachineManagerServer#custom_location_id}.

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.fqdn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#fqdn SystemCenterVirtualMachineManagerServer#fqdn}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#location SystemCenterVirtualMachineManagerServer#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#name SystemCenterVirtualMachineManagerServer#name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#password SystemCenterVirtualMachineManagerServer#password}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#resource_group_name SystemCenterVirtualMachineManagerServer#resource_group_name}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.username"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#username SystemCenterVirtualMachineManagerServer#username}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#id SystemCenterVirtualMachineManagerServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#port SystemCenterVirtualMachineManagerServer#port}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#tags SystemCenterVirtualMachineManagerServer#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts">SystemCenterVirtualMachineManagerServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#timeouts SystemCenterVirtualMachineManagerServer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.putTimeouts"></a>

```java
public void putTimeouts(SystemCenterVirtualMachineManagerServerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts">SystemCenterVirtualMachineManagerServerTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.resetId"></a>

```java
public void resetId()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.resetPort"></a>

```java
public void resetPort()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SystemCenterVirtualMachineManagerServer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.system_center_virtual_machine_manager_server.SystemCenterVirtualMachineManagerServer;

SystemCenterVirtualMachineManagerServer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.system_center_virtual_machine_manager_server.SystemCenterVirtualMachineManagerServer;

SystemCenterVirtualMachineManagerServer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.system_center_virtual_machine_manager_server.SystemCenterVirtualMachineManagerServer;

SystemCenterVirtualMachineManagerServer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.system_center_virtual_machine_manager_server.SystemCenterVirtualMachineManagerServer;

SystemCenterVirtualMachineManagerServer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SystemCenterVirtualMachineManagerServer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SystemCenterVirtualMachineManagerServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SystemCenterVirtualMachineManagerServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SystemCenterVirtualMachineManagerServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SystemCenterVirtualMachineManagerServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference">SystemCenterVirtualMachineManagerServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.customLocationIdInput">customLocationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.fqdnInput">fqdnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts">SystemCenterVirtualMachineManagerServerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.customLocationId">customLocationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.timeouts"></a>

```java
public SystemCenterVirtualMachineManagerServerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference">SystemCenterVirtualMachineManagerServerTimeoutsOutputReference</a>

---

##### `customLocationIdInput`<sup>Optional</sup> <a name="customLocationIdInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.customLocationIdInput"></a>

```java
public java.lang.String getCustomLocationIdInput();
```

- *Type:* java.lang.String

---

##### `fqdnInput`<sup>Optional</sup> <a name="fqdnInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.fqdnInput"></a>

```java
public java.lang.String getFqdnInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts">SystemCenterVirtualMachineManagerServerTimeouts</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `customLocationId`<sup>Required</sup> <a name="customLocationId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.customLocationId"></a>

```java
public java.lang.String getCustomLocationId();
```

- *Type:* java.lang.String

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SystemCenterVirtualMachineManagerServerConfig <a name="SystemCenterVirtualMachineManagerServerConfig" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.system_center_virtual_machine_manager_server.SystemCenterVirtualMachineManagerServerConfig;

SystemCenterVirtualMachineManagerServerConfig.builder()
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
    .customLocationId(java.lang.String)
    .fqdn(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .password(java.lang.String)
    .resourceGroupName(java.lang.String)
    .username(java.lang.String)
//  .id(java.lang.String)
//  .port(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SystemCenterVirtualMachineManagerServerTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.customLocationId">customLocationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#custom_location_id SystemCenterVirtualMachineManagerServer#custom_location_id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#fqdn SystemCenterVirtualMachineManagerServer#fqdn}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#location SystemCenterVirtualMachineManagerServer#location}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#name SystemCenterVirtualMachineManagerServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#password SystemCenterVirtualMachineManagerServer#password}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#resource_group_name SystemCenterVirtualMachineManagerServer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#username SystemCenterVirtualMachineManagerServer#username}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#id SystemCenterVirtualMachineManagerServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#port SystemCenterVirtualMachineManagerServer#port}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#tags SystemCenterVirtualMachineManagerServer#tags}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts">SystemCenterVirtualMachineManagerServerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customLocationId`<sup>Required</sup> <a name="customLocationId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.customLocationId"></a>

```java
public java.lang.String getCustomLocationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#custom_location_id SystemCenterVirtualMachineManagerServer#custom_location_id}.

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#fqdn SystemCenterVirtualMachineManagerServer#fqdn}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#location SystemCenterVirtualMachineManagerServer#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#name SystemCenterVirtualMachineManagerServer#name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#password SystemCenterVirtualMachineManagerServer#password}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#resource_group_name SystemCenterVirtualMachineManagerServer#resource_group_name}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#username SystemCenterVirtualMachineManagerServer#username}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#id SystemCenterVirtualMachineManagerServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#port SystemCenterVirtualMachineManagerServer#port}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#tags SystemCenterVirtualMachineManagerServer#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.timeouts"></a>

```java
public SystemCenterVirtualMachineManagerServerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts">SystemCenterVirtualMachineManagerServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#timeouts SystemCenterVirtualMachineManagerServer#timeouts}

---

### SystemCenterVirtualMachineManagerServerTimeouts <a name="SystemCenterVirtualMachineManagerServerTimeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.system_center_virtual_machine_manager_server.SystemCenterVirtualMachineManagerServerTimeouts;

SystemCenterVirtualMachineManagerServerTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#create SystemCenterVirtualMachineManagerServer#create}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#delete SystemCenterVirtualMachineManagerServer#delete}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#read SystemCenterVirtualMachineManagerServer#read}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#update SystemCenterVirtualMachineManagerServer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#create SystemCenterVirtualMachineManagerServer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#delete SystemCenterVirtualMachineManagerServer#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#read SystemCenterVirtualMachineManagerServer#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/system_center_virtual_machine_manager_server#update SystemCenterVirtualMachineManagerServer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SystemCenterVirtualMachineManagerServerTimeoutsOutputReference <a name="SystemCenterVirtualMachineManagerServerTimeoutsOutputReference" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.system_center_virtual_machine_manager_server.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference;

new SystemCenterVirtualMachineManagerServerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts">SystemCenterVirtualMachineManagerServerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts">SystemCenterVirtualMachineManagerServerTimeouts</a>

---



