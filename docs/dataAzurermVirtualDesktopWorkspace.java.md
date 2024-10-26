# `dataAzurermVirtualDesktopWorkspace` Submodule <a name="`dataAzurermVirtualDesktopWorkspace` Submodule" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermVirtualDesktopWorkspace <a name="DataAzurermVirtualDesktopWorkspace" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/data-sources/virtual_desktop_workspace azurerm_virtual_desktop_workspace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_virtual_desktop_workspace.DataAzurermVirtualDesktopWorkspace;

DataAzurermVirtualDesktopWorkspace.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermVirtualDesktopWorkspaceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/data-sources/virtual_desktop_workspace#name DataAzurermVirtualDesktopWorkspace#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/data-sources/virtual_desktop_workspace#resource_group_name DataAzurermVirtualDesktopWorkspace#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/data-sources/virtual_desktop_workspace#id DataAzurermVirtualDesktopWorkspace#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeouts">DataAzurermVirtualDesktopWorkspaceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/data-sources/virtual_desktop_workspace#name DataAzurermVirtualDesktopWorkspace#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/data-sources/virtual_desktop_workspace#resource_group_name DataAzurermVirtualDesktopWorkspace#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/data-sources/virtual_desktop_workspace#id DataAzurermVirtualDesktopWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeouts">DataAzurermVirtualDesktopWorkspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/data-sources/virtual_desktop_workspace#timeouts DataAzurermVirtualDesktopWorkspace#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermVirtualDesktopWorkspaceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeouts">DataAzurermVirtualDesktopWorkspaceTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermVirtualDesktopWorkspace resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_virtual_desktop_workspace.DataAzurermVirtualDesktopWorkspace;

DataAzurermVirtualDesktopWorkspace.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_virtual_desktop_workspace.DataAzurermVirtualDesktopWorkspace;

DataAzurermVirtualDesktopWorkspace.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_virtual_desktop_workspace.DataAzurermVirtualDesktopWorkspace;

DataAzurermVirtualDesktopWorkspace.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_virtual_desktop_workspace.DataAzurermVirtualDesktopWorkspace;

DataAzurermVirtualDesktopWorkspace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermVirtualDesktopWorkspace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAzurermVirtualDesktopWorkspace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermVirtualDesktopWorkspace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermVirtualDesktopWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/data-sources/virtual_desktop_workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermVirtualDesktopWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.friendlyName">friendlyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference">DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeouts">DataAzurermVirtualDesktopWorkspaceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `friendlyName`<sup>Required</sup> <a name="friendlyName" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.friendlyName"></a>

```java
public java.lang.String getFriendlyName();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.publicNetworkAccessEnabled"></a>

```java
public IResolvable getPublicNetworkAccessEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.timeouts"></a>

```java
public DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference">DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeouts">DataAzurermVirtualDesktopWorkspaceTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspace.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermVirtualDesktopWorkspaceConfig <a name="DataAzurermVirtualDesktopWorkspaceConfig" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_virtual_desktop_workspace.DataAzurermVirtualDesktopWorkspaceConfig;

DataAzurermVirtualDesktopWorkspaceConfig.builder()
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
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermVirtualDesktopWorkspaceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/data-sources/virtual_desktop_workspace#name DataAzurermVirtualDesktopWorkspace#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/data-sources/virtual_desktop_workspace#resource_group_name DataAzurermVirtualDesktopWorkspace#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/data-sources/virtual_desktop_workspace#id DataAzurermVirtualDesktopWorkspace#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeouts">DataAzurermVirtualDesktopWorkspaceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/data-sources/virtual_desktop_workspace#name DataAzurermVirtualDesktopWorkspace#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/data-sources/virtual_desktop_workspace#resource_group_name DataAzurermVirtualDesktopWorkspace#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/data-sources/virtual_desktop_workspace#id DataAzurermVirtualDesktopWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceConfig.property.timeouts"></a>

```java
public DataAzurermVirtualDesktopWorkspaceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeouts">DataAzurermVirtualDesktopWorkspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/data-sources/virtual_desktop_workspace#timeouts DataAzurermVirtualDesktopWorkspace#timeouts}

---

### DataAzurermVirtualDesktopWorkspaceTimeouts <a name="DataAzurermVirtualDesktopWorkspaceTimeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_virtual_desktop_workspace.DataAzurermVirtualDesktopWorkspaceTimeouts;

DataAzurermVirtualDesktopWorkspaceTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/data-sources/virtual_desktop_workspace#read DataAzurermVirtualDesktopWorkspace#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/data-sources/virtual_desktop_workspace#read DataAzurermVirtualDesktopWorkspace#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference <a name="DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_virtual_desktop_workspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference;

new DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeouts">DataAzurermVirtualDesktopWorkspaceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopWorkspace.DataAzurermVirtualDesktopWorkspaceTimeouts">DataAzurermVirtualDesktopWorkspaceTimeouts</a>

---



