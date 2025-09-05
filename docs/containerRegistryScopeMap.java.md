# `containerRegistryScopeMap` Submodule <a name="`containerRegistryScopeMap` Submodule" id="@cdktf/provider-azurerm.containerRegistryScopeMap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerRegistryScopeMap <a name="ContainerRegistryScopeMap" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/container_registry_scope_map azurerm_container_registry_scope_map}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry_scope_map.ContainerRegistryScopeMap;

ContainerRegistryScopeMap.Builder.create(Construct scope, java.lang.String id)
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
    .actions(java.util.List<java.lang.String>)
    .containerRegistryName(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ContainerRegistryScopeMapTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/container_registry_scope_map#actions ContainerRegistryScopeMap#actions}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.containerRegistryName">containerRegistryName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/container_registry_scope_map#container_registry_name ContainerRegistryScopeMap#container_registry_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/container_registry_scope_map#name ContainerRegistryScopeMap#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/container_registry_scope_map#resource_group_name ContainerRegistryScopeMap#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/container_registry_scope_map#description ContainerRegistryScopeMap#description}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/container_registry_scope_map#id ContainerRegistryScopeMap#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeouts">ContainerRegistryScopeMapTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.actions"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/container_registry_scope_map#actions ContainerRegistryScopeMap#actions}.

---

##### `containerRegistryName`<sup>Required</sup> <a name="containerRegistryName" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.containerRegistryName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/container_registry_scope_map#container_registry_name ContainerRegistryScopeMap#container_registry_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/container_registry_scope_map#name ContainerRegistryScopeMap#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/container_registry_scope_map#resource_group_name ContainerRegistryScopeMap#resource_group_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/container_registry_scope_map#description ContainerRegistryScopeMap#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/container_registry_scope_map#id ContainerRegistryScopeMap#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeouts">ContainerRegistryScopeMapTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/container_registry_scope_map#timeouts ContainerRegistryScopeMap#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.putTimeouts"></a>

```java
public void putTimeouts(ContainerRegistryScopeMapTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeouts">ContainerRegistryScopeMapTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerRegistryScopeMap resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry_scope_map.ContainerRegistryScopeMap;

ContainerRegistryScopeMap.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry_scope_map.ContainerRegistryScopeMap;

ContainerRegistryScopeMap.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry_scope_map.ContainerRegistryScopeMap;

ContainerRegistryScopeMap.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry_scope_map.ContainerRegistryScopeMap;

ContainerRegistryScopeMap.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ContainerRegistryScopeMap.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ContainerRegistryScopeMap resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ContainerRegistryScopeMap to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ContainerRegistryScopeMap that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/container_registry_scope_map#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ContainerRegistryScopeMap to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference">ContainerRegistryScopeMapTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.actionsInput">actionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.containerRegistryNameInput">containerRegistryNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeouts">ContainerRegistryScopeMapTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.containerRegistryName">containerRegistryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.timeouts"></a>

```java
public ContainerRegistryScopeMapTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference">ContainerRegistryScopeMapTimeoutsOutputReference</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.actionsInput"></a>

```java
public java.util.List<java.lang.String> getActionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `containerRegistryNameInput`<sup>Optional</sup> <a name="containerRegistryNameInput" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.containerRegistryNameInput"></a>

```java
public java.lang.String getContainerRegistryNameInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeouts">ContainerRegistryScopeMapTimeouts</a>

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.actions"></a>

```java
public java.util.List<java.lang.String> getActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `containerRegistryName`<sup>Required</sup> <a name="containerRegistryName" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.containerRegistryName"></a>

```java
public java.lang.String getContainerRegistryName();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerRegistryScopeMapConfig <a name="ContainerRegistryScopeMapConfig" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry_scope_map.ContainerRegistryScopeMapConfig;

ContainerRegistryScopeMapConfig.builder()
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
    .actions(java.util.List<java.lang.String>)
    .containerRegistryName(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ContainerRegistryScopeMapTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/container_registry_scope_map#actions ContainerRegistryScopeMap#actions}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.containerRegistryName">containerRegistryName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/container_registry_scope_map#container_registry_name ContainerRegistryScopeMap#container_registry_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/container_registry_scope_map#name ContainerRegistryScopeMap#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/container_registry_scope_map#resource_group_name ContainerRegistryScopeMap#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/container_registry_scope_map#description ContainerRegistryScopeMap#description}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/container_registry_scope_map#id ContainerRegistryScopeMap#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeouts">ContainerRegistryScopeMapTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.actions"></a>

```java
public java.util.List<java.lang.String> getActions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/container_registry_scope_map#actions ContainerRegistryScopeMap#actions}.

---

##### `containerRegistryName`<sup>Required</sup> <a name="containerRegistryName" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.containerRegistryName"></a>

```java
public java.lang.String getContainerRegistryName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/container_registry_scope_map#container_registry_name ContainerRegistryScopeMap#container_registry_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/container_registry_scope_map#name ContainerRegistryScopeMap#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/container_registry_scope_map#resource_group_name ContainerRegistryScopeMap#resource_group_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/container_registry_scope_map#description ContainerRegistryScopeMap#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/container_registry_scope_map#id ContainerRegistryScopeMap#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.timeouts"></a>

```java
public ContainerRegistryScopeMapTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeouts">ContainerRegistryScopeMapTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/container_registry_scope_map#timeouts ContainerRegistryScopeMap#timeouts}

---

### ContainerRegistryScopeMapTimeouts <a name="ContainerRegistryScopeMapTimeouts" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry_scope_map.ContainerRegistryScopeMapTimeouts;

ContainerRegistryScopeMapTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/container_registry_scope_map#create ContainerRegistryScopeMap#create}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/container_registry_scope_map#delete ContainerRegistryScopeMap#delete}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/container_registry_scope_map#read ContainerRegistryScopeMap#read}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/container_registry_scope_map#update ContainerRegistryScopeMap#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/container_registry_scope_map#create ContainerRegistryScopeMap#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/container_registry_scope_map#delete ContainerRegistryScopeMap#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/container_registry_scope_map#read ContainerRegistryScopeMap#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/container_registry_scope_map#update ContainerRegistryScopeMap#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerRegistryScopeMapTimeoutsOutputReference <a name="ContainerRegistryScopeMapTimeoutsOutputReference" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry_scope_map.ContainerRegistryScopeMapTimeoutsOutputReference;

new ContainerRegistryScopeMapTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeouts">ContainerRegistryScopeMapTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeouts">ContainerRegistryScopeMapTimeouts</a>

---



