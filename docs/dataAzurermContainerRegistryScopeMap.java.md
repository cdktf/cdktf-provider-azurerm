# `data_azurerm_container_registry_scope_map`

Refer to the Terraform Registory for docs: [`data_azurerm_container_registry_scope_map`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/container_registry_scope_map).

# `dataAzurermContainerRegistryScopeMap` Submodule <a name="`dataAzurermContainerRegistryScopeMap` Submodule" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermContainerRegistryScopeMap <a name="DataAzurermContainerRegistryScopeMap" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/container_registry_scope_map azurerm_container_registry_scope_map}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_container_registry_scope_map.DataAzurermContainerRegistryScopeMap;

DataAzurermContainerRegistryScopeMap.Builder.create(Construct scope, java.lang.String id)
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
    .containerRegistryName(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermContainerRegistryScopeMapTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer.parameter.containerRegistryName">containerRegistryName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/container_registry_scope_map#container_registry_name DataAzurermContainerRegistryScopeMap#container_registry_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/container_registry_scope_map#name DataAzurermContainerRegistryScopeMap#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/container_registry_scope_map#resource_group_name DataAzurermContainerRegistryScopeMap#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/container_registry_scope_map#id DataAzurermContainerRegistryScopeMap#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeouts">DataAzurermContainerRegistryScopeMapTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `containerRegistryName`<sup>Required</sup> <a name="containerRegistryName" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer.parameter.containerRegistryName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/container_registry_scope_map#container_registry_name DataAzurermContainerRegistryScopeMap#container_registry_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/container_registry_scope_map#name DataAzurermContainerRegistryScopeMap#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/container_registry_scope_map#resource_group_name DataAzurermContainerRegistryScopeMap#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/container_registry_scope_map#id DataAzurermContainerRegistryScopeMap#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeouts">DataAzurermContainerRegistryScopeMapTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/container_registry_scope_map#timeouts DataAzurermContainerRegistryScopeMap#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermContainerRegistryScopeMapTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeouts">DataAzurermContainerRegistryScopeMapTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_container_registry_scope_map.DataAzurermContainerRegistryScopeMap;

DataAzurermContainerRegistryScopeMap.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_container_registry_scope_map.DataAzurermContainerRegistryScopeMap;

DataAzurermContainerRegistryScopeMap.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_container_registry_scope_map.DataAzurermContainerRegistryScopeMap;

DataAzurermContainerRegistryScopeMap.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference">DataAzurermContainerRegistryScopeMapTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.containerRegistryNameInput">containerRegistryNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeouts">DataAzurermContainerRegistryScopeMapTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.containerRegistryName">containerRegistryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.actions"></a>

```java
public java.util.List<java.lang.String> getActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.timeouts"></a>

```java
public DataAzurermContainerRegistryScopeMapTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference">DataAzurermContainerRegistryScopeMapTimeoutsOutputReference</a>

---

##### `containerRegistryNameInput`<sup>Optional</sup> <a name="containerRegistryNameInput" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.containerRegistryNameInput"></a>

```java
public java.lang.String getContainerRegistryNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeouts">DataAzurermContainerRegistryScopeMapTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `containerRegistryName`<sup>Required</sup> <a name="containerRegistryName" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.containerRegistryName"></a>

```java
public java.lang.String getContainerRegistryName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermContainerRegistryScopeMapConfig <a name="DataAzurermContainerRegistryScopeMapConfig" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_container_registry_scope_map.DataAzurermContainerRegistryScopeMapConfig;

DataAzurermContainerRegistryScopeMapConfig.builder()
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
    .containerRegistryName(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermContainerRegistryScopeMapTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.containerRegistryName">containerRegistryName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/container_registry_scope_map#container_registry_name DataAzurermContainerRegistryScopeMap#container_registry_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/container_registry_scope_map#name DataAzurermContainerRegistryScopeMap#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/container_registry_scope_map#resource_group_name DataAzurermContainerRegistryScopeMap#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/container_registry_scope_map#id DataAzurermContainerRegistryScopeMap#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeouts">DataAzurermContainerRegistryScopeMapTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `containerRegistryName`<sup>Required</sup> <a name="containerRegistryName" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.containerRegistryName"></a>

```java
public java.lang.String getContainerRegistryName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/container_registry_scope_map#container_registry_name DataAzurermContainerRegistryScopeMap#container_registry_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/container_registry_scope_map#name DataAzurermContainerRegistryScopeMap#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/container_registry_scope_map#resource_group_name DataAzurermContainerRegistryScopeMap#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/container_registry_scope_map#id DataAzurermContainerRegistryScopeMap#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.timeouts"></a>

```java
public DataAzurermContainerRegistryScopeMapTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeouts">DataAzurermContainerRegistryScopeMapTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/container_registry_scope_map#timeouts DataAzurermContainerRegistryScopeMap#timeouts}

---

### DataAzurermContainerRegistryScopeMapTimeouts <a name="DataAzurermContainerRegistryScopeMapTimeouts" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_container_registry_scope_map.DataAzurermContainerRegistryScopeMapTimeouts;

DataAzurermContainerRegistryScopeMapTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/container_registry_scope_map#read DataAzurermContainerRegistryScopeMap#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/container_registry_scope_map#read DataAzurermContainerRegistryScopeMap#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermContainerRegistryScopeMapTimeoutsOutputReference <a name="DataAzurermContainerRegistryScopeMapTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_container_registry_scope_map.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference;

new DataAzurermContainerRegistryScopeMapTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeouts">DataAzurermContainerRegistryScopeMapTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeouts">DataAzurermContainerRegistryScopeMapTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



