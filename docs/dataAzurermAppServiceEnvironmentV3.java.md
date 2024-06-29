# `dataAzurermAppServiceEnvironmentV3` Submodule <a name="`dataAzurermAppServiceEnvironmentV3` Submodule" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermAppServiceEnvironmentV3 <a name="DataAzurermAppServiceEnvironmentV3" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/data-sources/app_service_environment_v3 azurerm_app_service_environment_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_app_service_environment_v3.DataAzurermAppServiceEnvironmentV3;

DataAzurermAppServiceEnvironmentV3.Builder.create(Construct scope, java.lang.String id)
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
//  .timeouts(DataAzurermAppServiceEnvironmentV3Timeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/data-sources/app_service_environment_v3#name DataAzurermAppServiceEnvironmentV3#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/data-sources/app_service_environment_v3#resource_group_name DataAzurermAppServiceEnvironmentV3#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/data-sources/app_service_environment_v3#id DataAzurermAppServiceEnvironmentV3#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts">DataAzurermAppServiceEnvironmentV3Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/data-sources/app_service_environment_v3#name DataAzurermAppServiceEnvironmentV3#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/data-sources/app_service_environment_v3#resource_group_name DataAzurermAppServiceEnvironmentV3#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/data-sources/app_service_environment_v3#id DataAzurermAppServiceEnvironmentV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts">DataAzurermAppServiceEnvironmentV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/data-sources/app_service_environment_v3#timeouts DataAzurermAppServiceEnvironmentV3#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermAppServiceEnvironmentV3Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts">DataAzurermAppServiceEnvironmentV3Timeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermAppServiceEnvironmentV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_app_service_environment_v3.DataAzurermAppServiceEnvironmentV3;

DataAzurermAppServiceEnvironmentV3.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_app_service_environment_v3.DataAzurermAppServiceEnvironmentV3;

DataAzurermAppServiceEnvironmentV3.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_app_service_environment_v3.DataAzurermAppServiceEnvironmentV3;

DataAzurermAppServiceEnvironmentV3.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_app_service_environment_v3.DataAzurermAppServiceEnvironmentV3;

DataAzurermAppServiceEnvironmentV3.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermAppServiceEnvironmentV3.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAzurermAppServiceEnvironmentV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermAppServiceEnvironmentV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermAppServiceEnvironmentV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/data-sources/app_service_environment_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermAppServiceEnvironmentV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.allowNewPrivateEndpointConnections">allowNewPrivateEndpointConnections</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.clusterSetting">clusterSetting</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList">DataAzurermAppServiceEnvironmentV3ClusterSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.dedicatedHostCount">dedicatedHostCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.dnsSuffix">dnsSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.externalInboundIpAddresses">externalInboundIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.inboundNetworkDependencies">inboundNetworkDependencies</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList">DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.internalInboundIpAddresses">internalInboundIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.internalLoadBalancingMode">internalLoadBalancingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.ipSslAddressCount">ipSslAddressCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.linuxOutboundIpAddresses">linuxOutboundIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.pricingTier">pricingTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.remoteDebuggingEnabled">remoteDebuggingEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference">DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.windowsOutboundIpAddresses">windowsOutboundIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.zoneRedundant">zoneRedundant</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts">DataAzurermAppServiceEnvironmentV3Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `allowNewPrivateEndpointConnections`<sup>Required</sup> <a name="allowNewPrivateEndpointConnections" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.allowNewPrivateEndpointConnections"></a>

```java
public IResolvable getAllowNewPrivateEndpointConnections();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `clusterSetting`<sup>Required</sup> <a name="clusterSetting" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.clusterSetting"></a>

```java
public DataAzurermAppServiceEnvironmentV3ClusterSettingList getClusterSetting();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList">DataAzurermAppServiceEnvironmentV3ClusterSettingList</a>

---

##### `dedicatedHostCount`<sup>Required</sup> <a name="dedicatedHostCount" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.dedicatedHostCount"></a>

```java
public java.lang.Number getDedicatedHostCount();
```

- *Type:* java.lang.Number

---

##### `dnsSuffix`<sup>Required</sup> <a name="dnsSuffix" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.dnsSuffix"></a>

```java
public java.lang.String getDnsSuffix();
```

- *Type:* java.lang.String

---

##### `externalInboundIpAddresses`<sup>Required</sup> <a name="externalInboundIpAddresses" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.externalInboundIpAddresses"></a>

```java
public java.util.List<java.lang.String> getExternalInboundIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `inboundNetworkDependencies`<sup>Required</sup> <a name="inboundNetworkDependencies" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.inboundNetworkDependencies"></a>

```java
public DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList getInboundNetworkDependencies();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList">DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList</a>

---

##### `internalInboundIpAddresses`<sup>Required</sup> <a name="internalInboundIpAddresses" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.internalInboundIpAddresses"></a>

```java
public java.util.List<java.lang.String> getInternalInboundIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalLoadBalancingMode`<sup>Required</sup> <a name="internalLoadBalancingMode" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.internalLoadBalancingMode"></a>

```java
public java.lang.String getInternalLoadBalancingMode();
```

- *Type:* java.lang.String

---

##### `ipSslAddressCount`<sup>Required</sup> <a name="ipSslAddressCount" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.ipSslAddressCount"></a>

```java
public java.lang.Number getIpSslAddressCount();
```

- *Type:* java.lang.Number

---

##### `linuxOutboundIpAddresses`<sup>Required</sup> <a name="linuxOutboundIpAddresses" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.linuxOutboundIpAddresses"></a>

```java
public java.util.List<java.lang.String> getLinuxOutboundIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `pricingTier`<sup>Required</sup> <a name="pricingTier" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.pricingTier"></a>

```java
public java.lang.String getPricingTier();
```

- *Type:* java.lang.String

---

##### `remoteDebuggingEnabled`<sup>Required</sup> <a name="remoteDebuggingEnabled" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.remoteDebuggingEnabled"></a>

```java
public IResolvable getRemoteDebuggingEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.timeouts"></a>

```java
public DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference">DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference</a>

---

##### `windowsOutboundIpAddresses`<sup>Required</sup> <a name="windowsOutboundIpAddresses" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.windowsOutboundIpAddresses"></a>

```java
public java.util.List<java.lang.String> getWindowsOutboundIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `zoneRedundant`<sup>Required</sup> <a name="zoneRedundant" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.zoneRedundant"></a>

```java
public IResolvable getZoneRedundant();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts">DataAzurermAppServiceEnvironmentV3Timeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermAppServiceEnvironmentV3ClusterSetting <a name="DataAzurermAppServiceEnvironmentV3ClusterSetting" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSetting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_app_service_environment_v3.DataAzurermAppServiceEnvironmentV3ClusterSetting;

DataAzurermAppServiceEnvironmentV3ClusterSetting.builder()
    .build();
```


### DataAzurermAppServiceEnvironmentV3Config <a name="DataAzurermAppServiceEnvironmentV3Config" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_app_service_environment_v3.DataAzurermAppServiceEnvironmentV3Config;

DataAzurermAppServiceEnvironmentV3Config.builder()
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
//  .timeouts(DataAzurermAppServiceEnvironmentV3Timeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/data-sources/app_service_environment_v3#name DataAzurermAppServiceEnvironmentV3#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/data-sources/app_service_environment_v3#resource_group_name DataAzurermAppServiceEnvironmentV3#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/data-sources/app_service_environment_v3#id DataAzurermAppServiceEnvironmentV3#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts">DataAzurermAppServiceEnvironmentV3Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/data-sources/app_service_environment_v3#name DataAzurermAppServiceEnvironmentV3#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/data-sources/app_service_environment_v3#resource_group_name DataAzurermAppServiceEnvironmentV3#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/data-sources/app_service_environment_v3#id DataAzurermAppServiceEnvironmentV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.timeouts"></a>

```java
public DataAzurermAppServiceEnvironmentV3Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts">DataAzurermAppServiceEnvironmentV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/data-sources/app_service_environment_v3#timeouts DataAzurermAppServiceEnvironmentV3#timeouts}

---

### DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies <a name="DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_app_service_environment_v3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies;

DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies.builder()
    .build();
```


### DataAzurermAppServiceEnvironmentV3Timeouts <a name="DataAzurermAppServiceEnvironmentV3Timeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_app_service_environment_v3.DataAzurermAppServiceEnvironmentV3Timeouts;

DataAzurermAppServiceEnvironmentV3Timeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/data-sources/app_service_environment_v3#read DataAzurermAppServiceEnvironmentV3#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/data-sources/app_service_environment_v3#read DataAzurermAppServiceEnvironmentV3#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermAppServiceEnvironmentV3ClusterSettingList <a name="DataAzurermAppServiceEnvironmentV3ClusterSettingList" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_app_service_environment_v3.DataAzurermAppServiceEnvironmentV3ClusterSettingList;

new DataAzurermAppServiceEnvironmentV3ClusterSettingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.get"></a>

```java
public DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference <a name="DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_app_service_environment_v3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference;

new DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSetting">DataAzurermAppServiceEnvironmentV3ClusterSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.internalValue"></a>

```java
public DataAzurermAppServiceEnvironmentV3ClusterSetting getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSetting">DataAzurermAppServiceEnvironmentV3ClusterSetting</a>

---


### DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList <a name="DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_app_service_environment_v3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList;

new DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.get"></a>

```java
public DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference <a name="DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_app_service_environment_v3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference;

new DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.ipAddresses">ipAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.ports">ports</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies">DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.ipAddresses"></a>

```java
public java.util.List<java.lang.String> getIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.ports"></a>

```java
public java.util.List<java.lang.String> getPorts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.internalValue"></a>

```java
public DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies">DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies</a>

---


### DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference <a name="DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_app_service_environment_v3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference;

new DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts">DataAzurermAppServiceEnvironmentV3Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts">DataAzurermAppServiceEnvironmentV3Timeouts</a>

---



