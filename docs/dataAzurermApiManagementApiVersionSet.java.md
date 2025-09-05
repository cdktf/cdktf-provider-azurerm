# `dataAzurermApiManagementApiVersionSet` Submodule <a name="`dataAzurermApiManagementApiVersionSet` Submodule" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermApiManagementApiVersionSet <a name="DataAzurermApiManagementApiVersionSet" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/api_management_api_version_set azurerm_api_management_api_version_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_api_management_api_version_set.DataAzurermApiManagementApiVersionSet;

DataAzurermApiManagementApiVersionSet.Builder.create(Construct scope, java.lang.String id)
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
    .apiManagementName(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermApiManagementApiVersionSetTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.Initializer.parameter.apiManagementName">apiManagementName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/api_management_api_version_set#api_management_name DataAzurermApiManagementApiVersionSet#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/api_management_api_version_set#name DataAzurermApiManagementApiVersionSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/api_management_api_version_set#resource_group_name DataAzurermApiManagementApiVersionSet#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/api_management_api_version_set#id DataAzurermApiManagementApiVersionSet#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeouts">DataAzurermApiManagementApiVersionSetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiManagementName`<sup>Required</sup> <a name="apiManagementName" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.Initializer.parameter.apiManagementName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/api_management_api_version_set#api_management_name DataAzurermApiManagementApiVersionSet#api_management_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/api_management_api_version_set#name DataAzurermApiManagementApiVersionSet#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/api_management_api_version_set#resource_group_name DataAzurermApiManagementApiVersionSet#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/api_management_api_version_set#id DataAzurermApiManagementApiVersionSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeouts">DataAzurermApiManagementApiVersionSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/api_management_api_version_set#timeouts DataAzurermApiManagementApiVersionSet#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermApiManagementApiVersionSetTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeouts">DataAzurermApiManagementApiVersionSetTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermApiManagementApiVersionSet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_api_management_api_version_set.DataAzurermApiManagementApiVersionSet;

DataAzurermApiManagementApiVersionSet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_api_management_api_version_set.DataAzurermApiManagementApiVersionSet;

DataAzurermApiManagementApiVersionSet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_api_management_api_version_set.DataAzurermApiManagementApiVersionSet;

DataAzurermApiManagementApiVersionSet.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_api_management_api_version_set.DataAzurermApiManagementApiVersionSet;

DataAzurermApiManagementApiVersionSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermApiManagementApiVersionSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAzurermApiManagementApiVersionSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermApiManagementApiVersionSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermApiManagementApiVersionSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/api_management_api_version_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermApiManagementApiVersionSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference">DataAzurermApiManagementApiVersionSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.versionHeaderName">versionHeaderName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.versioningScheme">versioningScheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.versionQueryName">versionQueryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.apiManagementNameInput">apiManagementNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeouts">DataAzurermApiManagementApiVersionSetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.apiManagementName">apiManagementName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.timeouts"></a>

```java
public DataAzurermApiManagementApiVersionSetTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference">DataAzurermApiManagementApiVersionSetTimeoutsOutputReference</a>

---

##### `versionHeaderName`<sup>Required</sup> <a name="versionHeaderName" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.versionHeaderName"></a>

```java
public java.lang.String getVersionHeaderName();
```

- *Type:* java.lang.String

---

##### `versioningScheme`<sup>Required</sup> <a name="versioningScheme" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.versioningScheme"></a>

```java
public java.lang.String getVersioningScheme();
```

- *Type:* java.lang.String

---

##### `versionQueryName`<sup>Required</sup> <a name="versionQueryName" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.versionQueryName"></a>

```java
public java.lang.String getVersionQueryName();
```

- *Type:* java.lang.String

---

##### `apiManagementNameInput`<sup>Optional</sup> <a name="apiManagementNameInput" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.apiManagementNameInput"></a>

```java
public java.lang.String getApiManagementNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeouts">DataAzurermApiManagementApiVersionSetTimeouts</a>

---

##### `apiManagementName`<sup>Required</sup> <a name="apiManagementName" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.apiManagementName"></a>

```java
public java.lang.String getApiManagementName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermApiManagementApiVersionSetConfig <a name="DataAzurermApiManagementApiVersionSetConfig" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_api_management_api_version_set.DataAzurermApiManagementApiVersionSetConfig;

DataAzurermApiManagementApiVersionSetConfig.builder()
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
    .apiManagementName(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermApiManagementApiVersionSetTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetConfig.property.apiManagementName">apiManagementName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/api_management_api_version_set#api_management_name DataAzurermApiManagementApiVersionSet#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/api_management_api_version_set#name DataAzurermApiManagementApiVersionSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/api_management_api_version_set#resource_group_name DataAzurermApiManagementApiVersionSet#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/api_management_api_version_set#id DataAzurermApiManagementApiVersionSet#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeouts">DataAzurermApiManagementApiVersionSetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiManagementName`<sup>Required</sup> <a name="apiManagementName" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetConfig.property.apiManagementName"></a>

```java
public java.lang.String getApiManagementName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/api_management_api_version_set#api_management_name DataAzurermApiManagementApiVersionSet#api_management_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/api_management_api_version_set#name DataAzurermApiManagementApiVersionSet#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/api_management_api_version_set#resource_group_name DataAzurermApiManagementApiVersionSet#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/api_management_api_version_set#id DataAzurermApiManagementApiVersionSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetConfig.property.timeouts"></a>

```java
public DataAzurermApiManagementApiVersionSetTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeouts">DataAzurermApiManagementApiVersionSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/api_management_api_version_set#timeouts DataAzurermApiManagementApiVersionSet#timeouts}

---

### DataAzurermApiManagementApiVersionSetTimeouts <a name="DataAzurermApiManagementApiVersionSetTimeouts" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_api_management_api_version_set.DataAzurermApiManagementApiVersionSetTimeouts;

DataAzurermApiManagementApiVersionSetTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/api_management_api_version_set#read DataAzurermApiManagementApiVersionSet#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/api_management_api_version_set#read DataAzurermApiManagementApiVersionSet#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermApiManagementApiVersionSetTimeoutsOutputReference <a name="DataAzurermApiManagementApiVersionSetTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_api_management_api_version_set.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference;

new DataAzurermApiManagementApiVersionSetTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeouts">DataAzurermApiManagementApiVersionSetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermApiManagementApiVersionSet.DataAzurermApiManagementApiVersionSetTimeouts">DataAzurermApiManagementApiVersionSetTimeouts</a>

---



