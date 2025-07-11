# `virtualMachineRestorePointCollection` Submodule <a name="`virtualMachineRestorePointCollection` Submodule" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachineRestorePointCollection <a name="VirtualMachineRestorePointCollection" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point_collection azurerm_virtual_machine_restore_point_collection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_machine_restore_point_collection.VirtualMachineRestorePointCollection;

VirtualMachineRestorePointCollection.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .sourceVirtualMachineId(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(VirtualMachineRestorePointCollectionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point_collection#location VirtualMachineRestorePointCollection#location}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point_collection#name VirtualMachineRestorePointCollection#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point_collection#resource_group_name VirtualMachineRestorePointCollection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.Initializer.parameter.sourceVirtualMachineId">sourceVirtualMachineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point_collection#source_virtual_machine_id VirtualMachineRestorePointCollection#source_virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point_collection#id VirtualMachineRestorePointCollection#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point_collection#tags VirtualMachineRestorePointCollection#tags}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeouts">VirtualMachineRestorePointCollectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point_collection#location VirtualMachineRestorePointCollection#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point_collection#name VirtualMachineRestorePointCollection#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point_collection#resource_group_name VirtualMachineRestorePointCollection#resource_group_name}.

---

##### `sourceVirtualMachineId`<sup>Required</sup> <a name="sourceVirtualMachineId" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.Initializer.parameter.sourceVirtualMachineId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point_collection#source_virtual_machine_id VirtualMachineRestorePointCollection#source_virtual_machine_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point_collection#id VirtualMachineRestorePointCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point_collection#tags VirtualMachineRestorePointCollection#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeouts">VirtualMachineRestorePointCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point_collection#timeouts VirtualMachineRestorePointCollection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.putTimeouts"></a>

```java
public void putTimeouts(VirtualMachineRestorePointCollectionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeouts">VirtualMachineRestorePointCollectionTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualMachineRestorePointCollection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_machine_restore_point_collection.VirtualMachineRestorePointCollection;

VirtualMachineRestorePointCollection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_machine_restore_point_collection.VirtualMachineRestorePointCollection;

VirtualMachineRestorePointCollection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_machine_restore_point_collection.VirtualMachineRestorePointCollection;

VirtualMachineRestorePointCollection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_machine_restore_point_collection.VirtualMachineRestorePointCollection;

VirtualMachineRestorePointCollection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VirtualMachineRestorePointCollection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VirtualMachineRestorePointCollection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VirtualMachineRestorePointCollection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VirtualMachineRestorePointCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point_collection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VirtualMachineRestorePointCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference">VirtualMachineRestorePointCollectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.sourceVirtualMachineIdInput">sourceVirtualMachineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeouts">VirtualMachineRestorePointCollectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.sourceVirtualMachineId">sourceVirtualMachineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.timeouts"></a>

```java
public VirtualMachineRestorePointCollectionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference">VirtualMachineRestorePointCollectionTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `sourceVirtualMachineIdInput`<sup>Optional</sup> <a name="sourceVirtualMachineIdInput" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.sourceVirtualMachineIdInput"></a>

```java
public java.lang.String getSourceVirtualMachineIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeouts">VirtualMachineRestorePointCollectionTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `sourceVirtualMachineId`<sup>Required</sup> <a name="sourceVirtualMachineId" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.sourceVirtualMachineId"></a>

```java
public java.lang.String getSourceVirtualMachineId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineRestorePointCollectionConfig <a name="VirtualMachineRestorePointCollectionConfig" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_machine_restore_point_collection.VirtualMachineRestorePointCollectionConfig;

VirtualMachineRestorePointCollectionConfig.builder()
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
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .sourceVirtualMachineId(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(VirtualMachineRestorePointCollectionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point_collection#location VirtualMachineRestorePointCollection#location}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point_collection#name VirtualMachineRestorePointCollection#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point_collection#resource_group_name VirtualMachineRestorePointCollection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.sourceVirtualMachineId">sourceVirtualMachineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point_collection#source_virtual_machine_id VirtualMachineRestorePointCollection#source_virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point_collection#id VirtualMachineRestorePointCollection#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point_collection#tags VirtualMachineRestorePointCollection#tags}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeouts">VirtualMachineRestorePointCollectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point_collection#location VirtualMachineRestorePointCollection#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point_collection#name VirtualMachineRestorePointCollection#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point_collection#resource_group_name VirtualMachineRestorePointCollection#resource_group_name}.

---

##### `sourceVirtualMachineId`<sup>Required</sup> <a name="sourceVirtualMachineId" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.sourceVirtualMachineId"></a>

```java
public java.lang.String getSourceVirtualMachineId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point_collection#source_virtual_machine_id VirtualMachineRestorePointCollection#source_virtual_machine_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point_collection#id VirtualMachineRestorePointCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point_collection#tags VirtualMachineRestorePointCollection#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.timeouts"></a>

```java
public VirtualMachineRestorePointCollectionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeouts">VirtualMachineRestorePointCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point_collection#timeouts VirtualMachineRestorePointCollection#timeouts}

---

### VirtualMachineRestorePointCollectionTimeouts <a name="VirtualMachineRestorePointCollectionTimeouts" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_machine_restore_point_collection.VirtualMachineRestorePointCollectionTimeouts;

VirtualMachineRestorePointCollectionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point_collection#create VirtualMachineRestorePointCollection#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point_collection#delete VirtualMachineRestorePointCollection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point_collection#read VirtualMachineRestorePointCollection#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point_collection#update VirtualMachineRestorePointCollection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point_collection#create VirtualMachineRestorePointCollection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point_collection#delete VirtualMachineRestorePointCollection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point_collection#read VirtualMachineRestorePointCollection#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point_collection#update VirtualMachineRestorePointCollection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualMachineRestorePointCollectionTimeoutsOutputReference <a name="VirtualMachineRestorePointCollectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_machine_restore_point_collection.VirtualMachineRestorePointCollectionTimeoutsOutputReference;

new VirtualMachineRestorePointCollectionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeouts">VirtualMachineRestorePointCollectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeouts">VirtualMachineRestorePointCollectionTimeouts</a>

---



