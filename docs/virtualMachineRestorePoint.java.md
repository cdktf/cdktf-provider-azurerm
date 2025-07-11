# `virtualMachineRestorePoint` Submodule <a name="`virtualMachineRestorePoint` Submodule" id="@cdktf/provider-azurerm.virtualMachineRestorePoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachineRestorePoint <a name="VirtualMachineRestorePoint" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point azurerm_virtual_machine_restore_point}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_machine_restore_point.VirtualMachineRestorePoint;

VirtualMachineRestorePoint.Builder.create(Construct scope, java.lang.String id)
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
    .virtualMachineRestorePointCollectionId(java.lang.String)
//  .crashConsistencyModeEnabled(java.lang.Boolean)
//  .crashConsistencyModeEnabled(IResolvable)
//  .excludedDisks(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(VirtualMachineRestorePointTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point#name VirtualMachineRestorePoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.Initializer.parameter.virtualMachineRestorePointCollectionId">virtualMachineRestorePointCollectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point#virtual_machine_restore_point_collection_id VirtualMachineRestorePoint#virtual_machine_restore_point_collection_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.Initializer.parameter.crashConsistencyModeEnabled">crashConsistencyModeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point#crash_consistency_mode_enabled VirtualMachineRestorePoint#crash_consistency_mode_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.Initializer.parameter.excludedDisks">excludedDisks</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point#excluded_disks VirtualMachineRestorePoint#excluded_disks}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point#id VirtualMachineRestorePoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeouts">VirtualMachineRestorePointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point#name VirtualMachineRestorePoint#name}.

---

##### `virtualMachineRestorePointCollectionId`<sup>Required</sup> <a name="virtualMachineRestorePointCollectionId" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.Initializer.parameter.virtualMachineRestorePointCollectionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point#virtual_machine_restore_point_collection_id VirtualMachineRestorePoint#virtual_machine_restore_point_collection_id}.

---

##### `crashConsistencyModeEnabled`<sup>Optional</sup> <a name="crashConsistencyModeEnabled" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.Initializer.parameter.crashConsistencyModeEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point#crash_consistency_mode_enabled VirtualMachineRestorePoint#crash_consistency_mode_enabled}.

---

##### `excludedDisks`<sup>Optional</sup> <a name="excludedDisks" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.Initializer.parameter.excludedDisks"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point#excluded_disks VirtualMachineRestorePoint#excluded_disks}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point#id VirtualMachineRestorePoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeouts">VirtualMachineRestorePointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point#timeouts VirtualMachineRestorePoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.resetCrashConsistencyModeEnabled">resetCrashConsistencyModeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.resetExcludedDisks">resetExcludedDisks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.putTimeouts"></a>

```java
public void putTimeouts(VirtualMachineRestorePointTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeouts">VirtualMachineRestorePointTimeouts</a>

---

##### `resetCrashConsistencyModeEnabled` <a name="resetCrashConsistencyModeEnabled" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.resetCrashConsistencyModeEnabled"></a>

```java
public void resetCrashConsistencyModeEnabled()
```

##### `resetExcludedDisks` <a name="resetExcludedDisks" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.resetExcludedDisks"></a>

```java
public void resetExcludedDisks()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualMachineRestorePoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_machine_restore_point.VirtualMachineRestorePoint;

VirtualMachineRestorePoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_machine_restore_point.VirtualMachineRestorePoint;

VirtualMachineRestorePoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_machine_restore_point.VirtualMachineRestorePoint;

VirtualMachineRestorePoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_machine_restore_point.VirtualMachineRestorePoint;

VirtualMachineRestorePoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VirtualMachineRestorePoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VirtualMachineRestorePoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VirtualMachineRestorePoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VirtualMachineRestorePoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VirtualMachineRestorePoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference">VirtualMachineRestorePointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.crashConsistencyModeEnabledInput">crashConsistencyModeEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.excludedDisksInput">excludedDisksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeouts">VirtualMachineRestorePointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.virtualMachineRestorePointCollectionIdInput">virtualMachineRestorePointCollectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.crashConsistencyModeEnabled">crashConsistencyModeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.excludedDisks">excludedDisks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.virtualMachineRestorePointCollectionId">virtualMachineRestorePointCollectionId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.timeouts"></a>

```java
public VirtualMachineRestorePointTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference">VirtualMachineRestorePointTimeoutsOutputReference</a>

---

##### `crashConsistencyModeEnabledInput`<sup>Optional</sup> <a name="crashConsistencyModeEnabledInput" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.crashConsistencyModeEnabledInput"></a>

```java
public java.lang.Object getCrashConsistencyModeEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `excludedDisksInput`<sup>Optional</sup> <a name="excludedDisksInput" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.excludedDisksInput"></a>

```java
public java.util.List<java.lang.String> getExcludedDisksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeouts">VirtualMachineRestorePointTimeouts</a>

---

##### `virtualMachineRestorePointCollectionIdInput`<sup>Optional</sup> <a name="virtualMachineRestorePointCollectionIdInput" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.virtualMachineRestorePointCollectionIdInput"></a>

```java
public java.lang.String getVirtualMachineRestorePointCollectionIdInput();
```

- *Type:* java.lang.String

---

##### `crashConsistencyModeEnabled`<sup>Required</sup> <a name="crashConsistencyModeEnabled" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.crashConsistencyModeEnabled"></a>

```java
public java.lang.Object getCrashConsistencyModeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `excludedDisks`<sup>Required</sup> <a name="excludedDisks" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.excludedDisks"></a>

```java
public java.util.List<java.lang.String> getExcludedDisks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `virtualMachineRestorePointCollectionId`<sup>Required</sup> <a name="virtualMachineRestorePointCollectionId" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.virtualMachineRestorePointCollectionId"></a>

```java
public java.lang.String getVirtualMachineRestorePointCollectionId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineRestorePointConfig <a name="VirtualMachineRestorePointConfig" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_machine_restore_point.VirtualMachineRestorePointConfig;

VirtualMachineRestorePointConfig.builder()
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
    .virtualMachineRestorePointCollectionId(java.lang.String)
//  .crashConsistencyModeEnabled(java.lang.Boolean)
//  .crashConsistencyModeEnabled(IResolvable)
//  .excludedDisks(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(VirtualMachineRestorePointTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point#name VirtualMachineRestorePoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointConfig.property.virtualMachineRestorePointCollectionId">virtualMachineRestorePointCollectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point#virtual_machine_restore_point_collection_id VirtualMachineRestorePoint#virtual_machine_restore_point_collection_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointConfig.property.crashConsistencyModeEnabled">crashConsistencyModeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point#crash_consistency_mode_enabled VirtualMachineRestorePoint#crash_consistency_mode_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointConfig.property.excludedDisks">excludedDisks</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point#excluded_disks VirtualMachineRestorePoint#excluded_disks}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point#id VirtualMachineRestorePoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeouts">VirtualMachineRestorePointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point#name VirtualMachineRestorePoint#name}.

---

##### `virtualMachineRestorePointCollectionId`<sup>Required</sup> <a name="virtualMachineRestorePointCollectionId" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointConfig.property.virtualMachineRestorePointCollectionId"></a>

```java
public java.lang.String getVirtualMachineRestorePointCollectionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point#virtual_machine_restore_point_collection_id VirtualMachineRestorePoint#virtual_machine_restore_point_collection_id}.

---

##### `crashConsistencyModeEnabled`<sup>Optional</sup> <a name="crashConsistencyModeEnabled" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointConfig.property.crashConsistencyModeEnabled"></a>

```java
public java.lang.Object getCrashConsistencyModeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point#crash_consistency_mode_enabled VirtualMachineRestorePoint#crash_consistency_mode_enabled}.

---

##### `excludedDisks`<sup>Optional</sup> <a name="excludedDisks" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointConfig.property.excludedDisks"></a>

```java
public java.util.List<java.lang.String> getExcludedDisks();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point#excluded_disks VirtualMachineRestorePoint#excluded_disks}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point#id VirtualMachineRestorePoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointConfig.property.timeouts"></a>

```java
public VirtualMachineRestorePointTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeouts">VirtualMachineRestorePointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point#timeouts VirtualMachineRestorePoint#timeouts}

---

### VirtualMachineRestorePointTimeouts <a name="VirtualMachineRestorePointTimeouts" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_machine_restore_point.VirtualMachineRestorePointTimeouts;

VirtualMachineRestorePointTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point#create VirtualMachineRestorePoint#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point#delete VirtualMachineRestorePoint#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point#read VirtualMachineRestorePoint#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point#create VirtualMachineRestorePoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point#delete VirtualMachineRestorePoint#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_machine_restore_point#read VirtualMachineRestorePoint#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualMachineRestorePointTimeoutsOutputReference <a name="VirtualMachineRestorePointTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_machine_restore_point.VirtualMachineRestorePointTimeoutsOutputReference;

new VirtualMachineRestorePointTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeouts">VirtualMachineRestorePointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualMachineRestorePoint.VirtualMachineRestorePointTimeouts">VirtualMachineRestorePointTimeouts</a>

---



