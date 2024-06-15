# `systemCenterVirtualMachineManagerAvailabilitySet` Submodule <a name="`systemCenterVirtualMachineManagerAvailabilitySet` Submodule" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SystemCenterVirtualMachineManagerAvailabilitySet <a name="SystemCenterVirtualMachineManagerAvailabilitySet" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/system_center_virtual_machine_manager_availability_set azurerm_system_center_virtual_machine_manager_availability_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.system_center_virtual_machine_manager_availability_set.SystemCenterVirtualMachineManagerAvailabilitySet;

SystemCenterVirtualMachineManagerAvailabilitySet.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .systemCenterVirtualMachineManagerServerId(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SystemCenterVirtualMachineManagerAvailabilitySetTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.customLocationId">customLocationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/system_center_virtual_machine_manager_availability_set#custom_location_id SystemCenterVirtualMachineManagerAvailabilitySet#custom_location_id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/system_center_virtual_machine_manager_availability_set#location SystemCenterVirtualMachineManagerAvailabilitySet#location}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/system_center_virtual_machine_manager_availability_set#name SystemCenterVirtualMachineManagerAvailabilitySet#name}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/system_center_virtual_machine_manager_availability_set#resource_group_name SystemCenterVirtualMachineManagerAvailabilitySet#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.systemCenterVirtualMachineManagerServerId">systemCenterVirtualMachineManagerServerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/system_center_virtual_machine_manager_availability_set#system_center_virtual_machine_manager_server_id SystemCenterVirtualMachineManagerAvailabilitySet#system_center_virtual_machine_manager_server_id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/system_center_virtual_machine_manager_availability_set#id SystemCenterVirtualMachineManagerAvailabilitySet#id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/system_center_virtual_machine_manager_availability_set#tags SystemCenterVirtualMachineManagerAvailabilitySet#tags}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts">SystemCenterVirtualMachineManagerAvailabilitySetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customLocationId`<sup>Required</sup> <a name="customLocationId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.customLocationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/system_center_virtual_machine_manager_availability_set#custom_location_id SystemCenterVirtualMachineManagerAvailabilitySet#custom_location_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/system_center_virtual_machine_manager_availability_set#location SystemCenterVirtualMachineManagerAvailabilitySet#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/system_center_virtual_machine_manager_availability_set#name SystemCenterVirtualMachineManagerAvailabilitySet#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/system_center_virtual_machine_manager_availability_set#resource_group_name SystemCenterVirtualMachineManagerAvailabilitySet#resource_group_name}.

---

##### `systemCenterVirtualMachineManagerServerId`<sup>Required</sup> <a name="systemCenterVirtualMachineManagerServerId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.systemCenterVirtualMachineManagerServerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/system_center_virtual_machine_manager_availability_set#system_center_virtual_machine_manager_server_id SystemCenterVirtualMachineManagerAvailabilitySet#system_center_virtual_machine_manager_server_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/system_center_virtual_machine_manager_availability_set#id SystemCenterVirtualMachineManagerAvailabilitySet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/system_center_virtual_machine_manager_availability_set#tags SystemCenterVirtualMachineManagerAvailabilitySet#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts">SystemCenterVirtualMachineManagerAvailabilitySetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/system_center_virtual_machine_manager_availability_set#timeouts SystemCenterVirtualMachineManagerAvailabilitySet#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.putTimeouts"></a>

```java
public void putTimeouts(SystemCenterVirtualMachineManagerAvailabilitySetTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts">SystemCenterVirtualMachineManagerAvailabilitySetTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SystemCenterVirtualMachineManagerAvailabilitySet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.system_center_virtual_machine_manager_availability_set.SystemCenterVirtualMachineManagerAvailabilitySet;

SystemCenterVirtualMachineManagerAvailabilitySet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.system_center_virtual_machine_manager_availability_set.SystemCenterVirtualMachineManagerAvailabilitySet;

SystemCenterVirtualMachineManagerAvailabilitySet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.system_center_virtual_machine_manager_availability_set.SystemCenterVirtualMachineManagerAvailabilitySet;

SystemCenterVirtualMachineManagerAvailabilitySet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.system_center_virtual_machine_manager_availability_set.SystemCenterVirtualMachineManagerAvailabilitySet;

SystemCenterVirtualMachineManagerAvailabilitySet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SystemCenterVirtualMachineManagerAvailabilitySet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SystemCenterVirtualMachineManagerAvailabilitySet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SystemCenterVirtualMachineManagerAvailabilitySet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SystemCenterVirtualMachineManagerAvailabilitySet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/system_center_virtual_machine_manager_availability_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SystemCenterVirtualMachineManagerAvailabilitySet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference">SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.customLocationIdInput">customLocationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.systemCenterVirtualMachineManagerServerIdInput">systemCenterVirtualMachineManagerServerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts">SystemCenterVirtualMachineManagerAvailabilitySetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.customLocationId">customLocationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.systemCenterVirtualMachineManagerServerId">systemCenterVirtualMachineManagerServerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.timeouts"></a>

```java
public SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference">SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference</a>

---

##### `customLocationIdInput`<sup>Optional</sup> <a name="customLocationIdInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.customLocationIdInput"></a>

```java
public java.lang.String getCustomLocationIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `systemCenterVirtualMachineManagerServerIdInput`<sup>Optional</sup> <a name="systemCenterVirtualMachineManagerServerIdInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.systemCenterVirtualMachineManagerServerIdInput"></a>

```java
public java.lang.String getSystemCenterVirtualMachineManagerServerIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts">SystemCenterVirtualMachineManagerAvailabilitySetTimeouts</a>

---

##### `customLocationId`<sup>Required</sup> <a name="customLocationId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.customLocationId"></a>

```java
public java.lang.String getCustomLocationId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `systemCenterVirtualMachineManagerServerId`<sup>Required</sup> <a name="systemCenterVirtualMachineManagerServerId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.systemCenterVirtualMachineManagerServerId"></a>

```java
public java.lang.String getSystemCenterVirtualMachineManagerServerId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SystemCenterVirtualMachineManagerAvailabilitySetConfig <a name="SystemCenterVirtualMachineManagerAvailabilitySetConfig" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.system_center_virtual_machine_manager_availability_set.SystemCenterVirtualMachineManagerAvailabilitySetConfig;

SystemCenterVirtualMachineManagerAvailabilitySetConfig.builder()
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
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .systemCenterVirtualMachineManagerServerId(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SystemCenterVirtualMachineManagerAvailabilitySetTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.customLocationId">customLocationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/system_center_virtual_machine_manager_availability_set#custom_location_id SystemCenterVirtualMachineManagerAvailabilitySet#custom_location_id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/system_center_virtual_machine_manager_availability_set#location SystemCenterVirtualMachineManagerAvailabilitySet#location}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/system_center_virtual_machine_manager_availability_set#name SystemCenterVirtualMachineManagerAvailabilitySet#name}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/system_center_virtual_machine_manager_availability_set#resource_group_name SystemCenterVirtualMachineManagerAvailabilitySet#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.systemCenterVirtualMachineManagerServerId">systemCenterVirtualMachineManagerServerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/system_center_virtual_machine_manager_availability_set#system_center_virtual_machine_manager_server_id SystemCenterVirtualMachineManagerAvailabilitySet#system_center_virtual_machine_manager_server_id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/system_center_virtual_machine_manager_availability_set#id SystemCenterVirtualMachineManagerAvailabilitySet#id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/system_center_virtual_machine_manager_availability_set#tags SystemCenterVirtualMachineManagerAvailabilitySet#tags}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts">SystemCenterVirtualMachineManagerAvailabilitySetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customLocationId`<sup>Required</sup> <a name="customLocationId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.customLocationId"></a>

```java
public java.lang.String getCustomLocationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/system_center_virtual_machine_manager_availability_set#custom_location_id SystemCenterVirtualMachineManagerAvailabilitySet#custom_location_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/system_center_virtual_machine_manager_availability_set#location SystemCenterVirtualMachineManagerAvailabilitySet#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/system_center_virtual_machine_manager_availability_set#name SystemCenterVirtualMachineManagerAvailabilitySet#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/system_center_virtual_machine_manager_availability_set#resource_group_name SystemCenterVirtualMachineManagerAvailabilitySet#resource_group_name}.

---

##### `systemCenterVirtualMachineManagerServerId`<sup>Required</sup> <a name="systemCenterVirtualMachineManagerServerId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.systemCenterVirtualMachineManagerServerId"></a>

```java
public java.lang.String getSystemCenterVirtualMachineManagerServerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/system_center_virtual_machine_manager_availability_set#system_center_virtual_machine_manager_server_id SystemCenterVirtualMachineManagerAvailabilitySet#system_center_virtual_machine_manager_server_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/system_center_virtual_machine_manager_availability_set#id SystemCenterVirtualMachineManagerAvailabilitySet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/system_center_virtual_machine_manager_availability_set#tags SystemCenterVirtualMachineManagerAvailabilitySet#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.timeouts"></a>

```java
public SystemCenterVirtualMachineManagerAvailabilitySetTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts">SystemCenterVirtualMachineManagerAvailabilitySetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/system_center_virtual_machine_manager_availability_set#timeouts SystemCenterVirtualMachineManagerAvailabilitySet#timeouts}

---

### SystemCenterVirtualMachineManagerAvailabilitySetTimeouts <a name="SystemCenterVirtualMachineManagerAvailabilitySetTimeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.system_center_virtual_machine_manager_availability_set.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts;

SystemCenterVirtualMachineManagerAvailabilitySetTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/system_center_virtual_machine_manager_availability_set#create SystemCenterVirtualMachineManagerAvailabilitySet#create}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/system_center_virtual_machine_manager_availability_set#delete SystemCenterVirtualMachineManagerAvailabilitySet#delete}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/system_center_virtual_machine_manager_availability_set#read SystemCenterVirtualMachineManagerAvailabilitySet#read}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/system_center_virtual_machine_manager_availability_set#update SystemCenterVirtualMachineManagerAvailabilitySet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/system_center_virtual_machine_manager_availability_set#create SystemCenterVirtualMachineManagerAvailabilitySet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/system_center_virtual_machine_manager_availability_set#delete SystemCenterVirtualMachineManagerAvailabilitySet#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/system_center_virtual_machine_manager_availability_set#read SystemCenterVirtualMachineManagerAvailabilitySet#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/system_center_virtual_machine_manager_availability_set#update SystemCenterVirtualMachineManagerAvailabilitySet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference <a name="SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.system_center_virtual_machine_manager_availability_set.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference;

new SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts">SystemCenterVirtualMachineManagerAvailabilitySetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts">SystemCenterVirtualMachineManagerAvailabilitySetTimeouts</a>

---



