# `dataAzurermDevCenterProjectEnvironmentType` Submodule <a name="`dataAzurermDevCenterProjectEnvironmentType` Submodule" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermDevCenterProjectEnvironmentType <a name="DataAzurermDevCenterProjectEnvironmentType" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/dev_center_project_environment_type azurerm_dev_center_project_environment_type}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_dev_center_project_environment_type.DataAzurermDevCenterProjectEnvironmentType;

DataAzurermDevCenterProjectEnvironmentType.Builder.create(Construct scope, java.lang.String id)
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
    .devCenterProjectId(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermDevCenterProjectEnvironmentTypeTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.Initializer.parameter.devCenterProjectId">devCenterProjectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/dev_center_project_environment_type#dev_center_project_id DataAzurermDevCenterProjectEnvironmentType#dev_center_project_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/dev_center_project_environment_type#name DataAzurermDevCenterProjectEnvironmentType#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/dev_center_project_environment_type#id DataAzurermDevCenterProjectEnvironmentType#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeouts">DataAzurermDevCenterProjectEnvironmentTypeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `devCenterProjectId`<sup>Required</sup> <a name="devCenterProjectId" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.Initializer.parameter.devCenterProjectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/dev_center_project_environment_type#dev_center_project_id DataAzurermDevCenterProjectEnvironmentType#dev_center_project_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/dev_center_project_environment_type#name DataAzurermDevCenterProjectEnvironmentType#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/dev_center_project_environment_type#id DataAzurermDevCenterProjectEnvironmentType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeouts">DataAzurermDevCenterProjectEnvironmentTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/dev_center_project_environment_type#timeouts DataAzurermDevCenterProjectEnvironmentType#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermDevCenterProjectEnvironmentTypeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeouts">DataAzurermDevCenterProjectEnvironmentTypeTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermDevCenterProjectEnvironmentType resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_dev_center_project_environment_type.DataAzurermDevCenterProjectEnvironmentType;

DataAzurermDevCenterProjectEnvironmentType.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_dev_center_project_environment_type.DataAzurermDevCenterProjectEnvironmentType;

DataAzurermDevCenterProjectEnvironmentType.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_dev_center_project_environment_type.DataAzurermDevCenterProjectEnvironmentType;

DataAzurermDevCenterProjectEnvironmentType.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_dev_center_project_environment_type.DataAzurermDevCenterProjectEnvironmentType;

DataAzurermDevCenterProjectEnvironmentType.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermDevCenterProjectEnvironmentType.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAzurermDevCenterProjectEnvironmentType resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermDevCenterProjectEnvironmentType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermDevCenterProjectEnvironmentType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/dev_center_project_environment_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermDevCenterProjectEnvironmentType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.creatorRoleAssignmentRoles">creatorRoleAssignmentRoles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.deploymentTargetId">deploymentTargetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList">DataAzurermDevCenterProjectEnvironmentTypeIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference">DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.userRoleAssignment">userRoleAssignment</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList">DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.devCenterProjectIdInput">devCenterProjectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeouts">DataAzurermDevCenterProjectEnvironmentTypeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.devCenterProjectId">devCenterProjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `creatorRoleAssignmentRoles`<sup>Required</sup> <a name="creatorRoleAssignmentRoles" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.creatorRoleAssignmentRoles"></a>

```java
public java.util.List<java.lang.String> getCreatorRoleAssignmentRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deploymentTargetId`<sup>Required</sup> <a name="deploymentTargetId" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.deploymentTargetId"></a>

```java
public java.lang.String getDeploymentTargetId();
```

- *Type:* java.lang.String

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.identity"></a>

```java
public DataAzurermDevCenterProjectEnvironmentTypeIdentityList getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList">DataAzurermDevCenterProjectEnvironmentTypeIdentityList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.timeouts"></a>

```java
public DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference">DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference</a>

---

##### `userRoleAssignment`<sup>Required</sup> <a name="userRoleAssignment" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.userRoleAssignment"></a>

```java
public DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList getUserRoleAssignment();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList">DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList</a>

---

##### `devCenterProjectIdInput`<sup>Optional</sup> <a name="devCenterProjectIdInput" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.devCenterProjectIdInput"></a>

```java
public java.lang.String getDevCenterProjectIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeouts">DataAzurermDevCenterProjectEnvironmentTypeTimeouts</a>

---

##### `devCenterProjectId`<sup>Required</sup> <a name="devCenterProjectId" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.devCenterProjectId"></a>

```java
public java.lang.String getDevCenterProjectId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermDevCenterProjectEnvironmentTypeConfig <a name="DataAzurermDevCenterProjectEnvironmentTypeConfig" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_dev_center_project_environment_type.DataAzurermDevCenterProjectEnvironmentTypeConfig;

DataAzurermDevCenterProjectEnvironmentTypeConfig.builder()
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
    .devCenterProjectId(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermDevCenterProjectEnvironmentTypeTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.devCenterProjectId">devCenterProjectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/dev_center_project_environment_type#dev_center_project_id DataAzurermDevCenterProjectEnvironmentType#dev_center_project_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/dev_center_project_environment_type#name DataAzurermDevCenterProjectEnvironmentType#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/dev_center_project_environment_type#id DataAzurermDevCenterProjectEnvironmentType#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeouts">DataAzurermDevCenterProjectEnvironmentTypeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `devCenterProjectId`<sup>Required</sup> <a name="devCenterProjectId" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.devCenterProjectId"></a>

```java
public java.lang.String getDevCenterProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/dev_center_project_environment_type#dev_center_project_id DataAzurermDevCenterProjectEnvironmentType#dev_center_project_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/dev_center_project_environment_type#name DataAzurermDevCenterProjectEnvironmentType#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/dev_center_project_environment_type#id DataAzurermDevCenterProjectEnvironmentType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.timeouts"></a>

```java
public DataAzurermDevCenterProjectEnvironmentTypeTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeouts">DataAzurermDevCenterProjectEnvironmentTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/dev_center_project_environment_type#timeouts DataAzurermDevCenterProjectEnvironmentType#timeouts}

---

### DataAzurermDevCenterProjectEnvironmentTypeIdentity <a name="DataAzurermDevCenterProjectEnvironmentTypeIdentity" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_dev_center_project_environment_type.DataAzurermDevCenterProjectEnvironmentTypeIdentity;

DataAzurermDevCenterProjectEnvironmentTypeIdentity.builder()
    .build();
```


### DataAzurermDevCenterProjectEnvironmentTypeTimeouts <a name="DataAzurermDevCenterProjectEnvironmentTypeTimeouts" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_dev_center_project_environment_type.DataAzurermDevCenterProjectEnvironmentTypeTimeouts;

DataAzurermDevCenterProjectEnvironmentTypeTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/dev_center_project_environment_type#read DataAzurermDevCenterProjectEnvironmentType#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/dev_center_project_environment_type#read DataAzurermDevCenterProjectEnvironmentType#read}.

---

### DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignment <a name="DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignment" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_dev_center_project_environment_type.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignment;

DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignment.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermDevCenterProjectEnvironmentTypeIdentityList <a name="DataAzurermDevCenterProjectEnvironmentTypeIdentityList" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_dev_center_project_environment_type.DataAzurermDevCenterProjectEnvironmentTypeIdentityList;

new DataAzurermDevCenterProjectEnvironmentTypeIdentityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.get"></a>

```java
public DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference <a name="DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_dev_center_project_environment_type.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference;

new DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentity">DataAzurermDevCenterProjectEnvironmentTypeIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.property.internalValue"></a>

```java
public DataAzurermDevCenterProjectEnvironmentTypeIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentity">DataAzurermDevCenterProjectEnvironmentTypeIdentity</a>

---


### DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference <a name="DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_dev_center_project_environment_type.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference;

new DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeouts">DataAzurermDevCenterProjectEnvironmentTypeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeouts">DataAzurermDevCenterProjectEnvironmentTypeTimeouts</a>

---


### DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList <a name="DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_dev_center_project_environment_type.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList;

new DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.get"></a>

```java
public DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference <a name="DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_dev_center_project_environment_type.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference;

new DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignment">DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.roles"></a>

```java
public java.util.List<java.lang.String> getRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.internalValue"></a>

```java
public DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignment getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignment">DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignment</a>

---



