# `azurerm_virtual_desktop_application`

Refer to the Terraform Registory for docs: [`azurerm_virtual_desktop_application`](https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application).

# `virtualDesktopApplication` Submodule <a name="`virtualDesktopApplication` Submodule" id="@cdktf/provider-azurerm.virtualDesktopApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualDesktopApplication <a name="VirtualDesktopApplication" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application azurerm_virtual_desktop_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_application.VirtualDesktopApplication;

VirtualDesktopApplication.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .applicationGroupId(java.lang.String)
    .commandLineArgumentPolicy(java.lang.String)
    .name(java.lang.String)
    .path(java.lang.String)
//  .commandLineArguments(java.lang.String)
//  .description(java.lang.String)
//  .friendlyName(java.lang.String)
//  .iconIndex(java.lang.Number)
//  .iconPath(java.lang.String)
//  .id(java.lang.String)
//  .showInPortal(java.lang.Boolean)
//  .showInPortal(IResolvable)
//  .timeouts(VirtualDesktopApplicationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.applicationGroupId">applicationGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#application_group_id VirtualDesktopApplication#application_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.commandLineArgumentPolicy">commandLineArgumentPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#command_line_argument_policy VirtualDesktopApplication#command_line_argument_policy}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#name VirtualDesktopApplication#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#path VirtualDesktopApplication#path}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.commandLineArguments">commandLineArguments</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#command_line_arguments VirtualDesktopApplication#command_line_arguments}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#description VirtualDesktopApplication#description}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.friendlyName">friendlyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#friendly_name VirtualDesktopApplication#friendly_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.iconIndex">iconIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#icon_index VirtualDesktopApplication#icon_index}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.iconPath">iconPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#icon_path VirtualDesktopApplication#icon_path}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#id VirtualDesktopApplication#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.showInPortal">showInPortal</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#show_in_portal VirtualDesktopApplication#show_in_portal}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeouts">VirtualDesktopApplicationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationGroupId`<sup>Required</sup> <a name="applicationGroupId" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.applicationGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#application_group_id VirtualDesktopApplication#application_group_id}.

---

##### `commandLineArgumentPolicy`<sup>Required</sup> <a name="commandLineArgumentPolicy" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.commandLineArgumentPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#command_line_argument_policy VirtualDesktopApplication#command_line_argument_policy}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#name VirtualDesktopApplication#name}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.path"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#path VirtualDesktopApplication#path}.

---

##### `commandLineArguments`<sup>Optional</sup> <a name="commandLineArguments" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.commandLineArguments"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#command_line_arguments VirtualDesktopApplication#command_line_arguments}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#description VirtualDesktopApplication#description}.

---

##### `friendlyName`<sup>Optional</sup> <a name="friendlyName" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.friendlyName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#friendly_name VirtualDesktopApplication#friendly_name}.

---

##### `iconIndex`<sup>Optional</sup> <a name="iconIndex" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.iconIndex"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#icon_index VirtualDesktopApplication#icon_index}.

---

##### `iconPath`<sup>Optional</sup> <a name="iconPath" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.iconPath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#icon_path VirtualDesktopApplication#icon_path}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#id VirtualDesktopApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `showInPortal`<sup>Optional</sup> <a name="showInPortal" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.showInPortal"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#show_in_portal VirtualDesktopApplication#show_in_portal}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeouts">VirtualDesktopApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#timeouts VirtualDesktopApplication#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.resetCommandLineArguments">resetCommandLineArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.resetFriendlyName">resetFriendlyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.resetIconIndex">resetIconIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.resetIconPath">resetIconPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.resetShowInPortal">resetShowInPortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.putTimeouts"></a>

```java
public void putTimeouts(VirtualDesktopApplicationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeouts">VirtualDesktopApplicationTimeouts</a>

---

##### `resetCommandLineArguments` <a name="resetCommandLineArguments" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.resetCommandLineArguments"></a>

```java
public void resetCommandLineArguments()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFriendlyName` <a name="resetFriendlyName" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.resetFriendlyName"></a>

```java
public void resetFriendlyName()
```

##### `resetIconIndex` <a name="resetIconIndex" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.resetIconIndex"></a>

```java
public void resetIconIndex()
```

##### `resetIconPath` <a name="resetIconPath" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.resetIconPath"></a>

```java
public void resetIconPath()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.resetId"></a>

```java
public void resetId()
```

##### `resetShowInPortal` <a name="resetShowInPortal" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.resetShowInPortal"></a>

```java
public void resetShowInPortal()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_application.VirtualDesktopApplication;

VirtualDesktopApplication.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_application.VirtualDesktopApplication;

VirtualDesktopApplication.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_application.VirtualDesktopApplication;

VirtualDesktopApplication.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference">VirtualDesktopApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.applicationGroupIdInput">applicationGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.commandLineArgumentPolicyInput">commandLineArgumentPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.commandLineArgumentsInput">commandLineArgumentsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.friendlyNameInput">friendlyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.iconIndexInput">iconIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.iconPathInput">iconPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.showInPortalInput">showInPortalInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeouts">VirtualDesktopApplicationTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.applicationGroupId">applicationGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.commandLineArgumentPolicy">commandLineArgumentPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.commandLineArguments">commandLineArguments</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.friendlyName">friendlyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.iconIndex">iconIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.iconPath">iconPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.showInPortal">showInPortal</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.timeouts"></a>

```java
public VirtualDesktopApplicationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference">VirtualDesktopApplicationTimeoutsOutputReference</a>

---

##### `applicationGroupIdInput`<sup>Optional</sup> <a name="applicationGroupIdInput" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.applicationGroupIdInput"></a>

```java
public java.lang.String getApplicationGroupIdInput();
```

- *Type:* java.lang.String

---

##### `commandLineArgumentPolicyInput`<sup>Optional</sup> <a name="commandLineArgumentPolicyInput" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.commandLineArgumentPolicyInput"></a>

```java
public java.lang.String getCommandLineArgumentPolicyInput();
```

- *Type:* java.lang.String

---

##### `commandLineArgumentsInput`<sup>Optional</sup> <a name="commandLineArgumentsInput" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.commandLineArgumentsInput"></a>

```java
public java.lang.String getCommandLineArgumentsInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `friendlyNameInput`<sup>Optional</sup> <a name="friendlyNameInput" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.friendlyNameInput"></a>

```java
public java.lang.String getFriendlyNameInput();
```

- *Type:* java.lang.String

---

##### `iconIndexInput`<sup>Optional</sup> <a name="iconIndexInput" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.iconIndexInput"></a>

```java
public java.lang.Number getIconIndexInput();
```

- *Type:* java.lang.Number

---

##### `iconPathInput`<sup>Optional</sup> <a name="iconPathInput" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.iconPathInput"></a>

```java
public java.lang.String getIconPathInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `showInPortalInput`<sup>Optional</sup> <a name="showInPortalInput" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.showInPortalInput"></a>

```java
public java.lang.Object getShowInPortalInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeouts">VirtualDesktopApplicationTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `applicationGroupId`<sup>Required</sup> <a name="applicationGroupId" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.applicationGroupId"></a>

```java
public java.lang.String getApplicationGroupId();
```

- *Type:* java.lang.String

---

##### `commandLineArgumentPolicy`<sup>Required</sup> <a name="commandLineArgumentPolicy" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.commandLineArgumentPolicy"></a>

```java
public java.lang.String getCommandLineArgumentPolicy();
```

- *Type:* java.lang.String

---

##### `commandLineArguments`<sup>Required</sup> <a name="commandLineArguments" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.commandLineArguments"></a>

```java
public java.lang.String getCommandLineArguments();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `friendlyName`<sup>Required</sup> <a name="friendlyName" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.friendlyName"></a>

```java
public java.lang.String getFriendlyName();
```

- *Type:* java.lang.String

---

##### `iconIndex`<sup>Required</sup> <a name="iconIndex" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.iconIndex"></a>

```java
public java.lang.Number getIconIndex();
```

- *Type:* java.lang.Number

---

##### `iconPath`<sup>Required</sup> <a name="iconPath" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.iconPath"></a>

```java
public java.lang.String getIconPath();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `showInPortal`<sup>Required</sup> <a name="showInPortal" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.showInPortal"></a>

```java
public java.lang.Object getShowInPortal();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplication.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualDesktopApplicationConfig <a name="VirtualDesktopApplicationConfig" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_application.VirtualDesktopApplicationConfig;

VirtualDesktopApplicationConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .applicationGroupId(java.lang.String)
    .commandLineArgumentPolicy(java.lang.String)
    .name(java.lang.String)
    .path(java.lang.String)
//  .commandLineArguments(java.lang.String)
//  .description(java.lang.String)
//  .friendlyName(java.lang.String)
//  .iconIndex(java.lang.Number)
//  .iconPath(java.lang.String)
//  .id(java.lang.String)
//  .showInPortal(java.lang.Boolean)
//  .showInPortal(IResolvable)
//  .timeouts(VirtualDesktopApplicationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationConfig.property.applicationGroupId">applicationGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#application_group_id VirtualDesktopApplication#application_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationConfig.property.commandLineArgumentPolicy">commandLineArgumentPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#command_line_argument_policy VirtualDesktopApplication#command_line_argument_policy}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#name VirtualDesktopApplication#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationConfig.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#path VirtualDesktopApplication#path}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationConfig.property.commandLineArguments">commandLineArguments</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#command_line_arguments VirtualDesktopApplication#command_line_arguments}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#description VirtualDesktopApplication#description}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationConfig.property.friendlyName">friendlyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#friendly_name VirtualDesktopApplication#friendly_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationConfig.property.iconIndex">iconIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#icon_index VirtualDesktopApplication#icon_index}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationConfig.property.iconPath">iconPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#icon_path VirtualDesktopApplication#icon_path}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#id VirtualDesktopApplication#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationConfig.property.showInPortal">showInPortal</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#show_in_portal VirtualDesktopApplication#show_in_portal}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeouts">VirtualDesktopApplicationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationGroupId`<sup>Required</sup> <a name="applicationGroupId" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationConfig.property.applicationGroupId"></a>

```java
public java.lang.String getApplicationGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#application_group_id VirtualDesktopApplication#application_group_id}.

---

##### `commandLineArgumentPolicy`<sup>Required</sup> <a name="commandLineArgumentPolicy" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationConfig.property.commandLineArgumentPolicy"></a>

```java
public java.lang.String getCommandLineArgumentPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#command_line_argument_policy VirtualDesktopApplication#command_line_argument_policy}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#name VirtualDesktopApplication#name}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#path VirtualDesktopApplication#path}.

---

##### `commandLineArguments`<sup>Optional</sup> <a name="commandLineArguments" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationConfig.property.commandLineArguments"></a>

```java
public java.lang.String getCommandLineArguments();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#command_line_arguments VirtualDesktopApplication#command_line_arguments}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#description VirtualDesktopApplication#description}.

---

##### `friendlyName`<sup>Optional</sup> <a name="friendlyName" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationConfig.property.friendlyName"></a>

```java
public java.lang.String getFriendlyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#friendly_name VirtualDesktopApplication#friendly_name}.

---

##### `iconIndex`<sup>Optional</sup> <a name="iconIndex" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationConfig.property.iconIndex"></a>

```java
public java.lang.Number getIconIndex();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#icon_index VirtualDesktopApplication#icon_index}.

---

##### `iconPath`<sup>Optional</sup> <a name="iconPath" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationConfig.property.iconPath"></a>

```java
public java.lang.String getIconPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#icon_path VirtualDesktopApplication#icon_path}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#id VirtualDesktopApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `showInPortal`<sup>Optional</sup> <a name="showInPortal" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationConfig.property.showInPortal"></a>

```java
public java.lang.Object getShowInPortal();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#show_in_portal VirtualDesktopApplication#show_in_portal}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationConfig.property.timeouts"></a>

```java
public VirtualDesktopApplicationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeouts">VirtualDesktopApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#timeouts VirtualDesktopApplication#timeouts}

---

### VirtualDesktopApplicationTimeouts <a name="VirtualDesktopApplicationTimeouts" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_application.VirtualDesktopApplicationTimeouts;

VirtualDesktopApplicationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#create VirtualDesktopApplication#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#delete VirtualDesktopApplication#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#read VirtualDesktopApplication#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#update VirtualDesktopApplication#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#create VirtualDesktopApplication#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#delete VirtualDesktopApplication#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#read VirtualDesktopApplication#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application#update VirtualDesktopApplication#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualDesktopApplicationTimeoutsOutputReference <a name="VirtualDesktopApplicationTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_application.VirtualDesktopApplicationTimeoutsOutputReference;

new VirtualDesktopApplicationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeouts">VirtualDesktopApplicationTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopApplication.VirtualDesktopApplicationTimeouts">VirtualDesktopApplicationTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



