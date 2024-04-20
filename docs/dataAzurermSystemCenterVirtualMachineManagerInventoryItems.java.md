# `dataAzurermSystemCenterVirtualMachineManagerInventoryItems` Submodule <a name="`dataAzurermSystemCenterVirtualMachineManagerInventoryItems` Submodule" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermSystemCenterVirtualMachineManagerInventoryItems <a name="DataAzurermSystemCenterVirtualMachineManagerInventoryItems" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items azurerm_system_center_virtual_machine_manager_inventory_items}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_system_center_virtual_machine_manager_inventory_items.DataAzurermSystemCenterVirtualMachineManagerInventoryItems;

DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Builder.create(Construct scope, java.lang.String id)
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
    .inventoryType(java.lang.String)
    .systemCenterVirtualMachineManagerServerId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.inventoryType">inventoryType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#inventory_type DataAzurermSystemCenterVirtualMachineManagerInventoryItems#inventory_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.systemCenterVirtualMachineManagerServerId">systemCenterVirtualMachineManagerServerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#system_center_virtual_machine_manager_server_id DataAzurermSystemCenterVirtualMachineManagerInventoryItems#system_center_virtual_machine_manager_server_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#id DataAzurermSystemCenterVirtualMachineManagerInventoryItems#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `inventoryType`<sup>Required</sup> <a name="inventoryType" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.inventoryType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#inventory_type DataAzurermSystemCenterVirtualMachineManagerInventoryItems#inventory_type}.

---

##### `systemCenterVirtualMachineManagerServerId`<sup>Required</sup> <a name="systemCenterVirtualMachineManagerServerId" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.systemCenterVirtualMachineManagerServerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#system_center_virtual_machine_manager_server_id DataAzurermSystemCenterVirtualMachineManagerInventoryItems#system_center_virtual_machine_manager_server_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#id DataAzurermSystemCenterVirtualMachineManagerInventoryItems#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#timeouts DataAzurermSystemCenterVirtualMachineManagerInventoryItems#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermSystemCenterVirtualMachineManagerInventoryItems resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_system_center_virtual_machine_manager_inventory_items.DataAzurermSystemCenterVirtualMachineManagerInventoryItems;

DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_system_center_virtual_machine_manager_inventory_items.DataAzurermSystemCenterVirtualMachineManagerInventoryItems;

DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_system_center_virtual_machine_manager_inventory_items.DataAzurermSystemCenterVirtualMachineManagerInventoryItems;

DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_system_center_virtual_machine_manager_inventory_items.DataAzurermSystemCenterVirtualMachineManagerInventoryItems;

DataAzurermSystemCenterVirtualMachineManagerInventoryItems.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermSystemCenterVirtualMachineManagerInventoryItems.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAzurermSystemCenterVirtualMachineManagerInventoryItems resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermSystemCenterVirtualMachineManagerInventoryItems to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermSystemCenterVirtualMachineManagerInventoryItems that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermSystemCenterVirtualMachineManagerInventoryItems to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.inventoryItems">inventoryItems</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.inventoryTypeInput">inventoryTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.systemCenterVirtualMachineManagerServerIdInput">systemCenterVirtualMachineManagerServerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.inventoryType">inventoryType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.systemCenterVirtualMachineManagerServerId">systemCenterVirtualMachineManagerServerId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `inventoryItems`<sup>Required</sup> <a name="inventoryItems" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.inventoryItems"></a>

```java
public DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList getInventoryItems();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.timeouts"></a>

```java
public DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inventoryTypeInput`<sup>Optional</sup> <a name="inventoryTypeInput" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.inventoryTypeInput"></a>

```java
public java.lang.String getInventoryTypeInput();
```

- *Type:* java.lang.String

---

##### `systemCenterVirtualMachineManagerServerIdInput`<sup>Optional</sup> <a name="systemCenterVirtualMachineManagerServerIdInput" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.systemCenterVirtualMachineManagerServerIdInput"></a>

```java
public java.lang.String getSystemCenterVirtualMachineManagerServerIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inventoryType`<sup>Required</sup> <a name="inventoryType" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.inventoryType"></a>

```java
public java.lang.String getInventoryType();
```

- *Type:* java.lang.String

---

##### `systemCenterVirtualMachineManagerServerId`<sup>Required</sup> <a name="systemCenterVirtualMachineManagerServerId" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.systemCenterVirtualMachineManagerServerId"></a>

```java
public java.lang.String getSystemCenterVirtualMachineManagerServerId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig <a name="DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_system_center_virtual_machine_manager_inventory_items.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig;

DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.builder()
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
    .inventoryType(java.lang.String)
    .systemCenterVirtualMachineManagerServerId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.inventoryType">inventoryType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#inventory_type DataAzurermSystemCenterVirtualMachineManagerInventoryItems#inventory_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.systemCenterVirtualMachineManagerServerId">systemCenterVirtualMachineManagerServerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#system_center_virtual_machine_manager_server_id DataAzurermSystemCenterVirtualMachineManagerInventoryItems#system_center_virtual_machine_manager_server_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#id DataAzurermSystemCenterVirtualMachineManagerInventoryItems#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `inventoryType`<sup>Required</sup> <a name="inventoryType" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.inventoryType"></a>

```java
public java.lang.String getInventoryType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#inventory_type DataAzurermSystemCenterVirtualMachineManagerInventoryItems#inventory_type}.

---

##### `systemCenterVirtualMachineManagerServerId`<sup>Required</sup> <a name="systemCenterVirtualMachineManagerServerId" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.systemCenterVirtualMachineManagerServerId"></a>

```java
public java.lang.String getSystemCenterVirtualMachineManagerServerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#system_center_virtual_machine_manager_server_id DataAzurermSystemCenterVirtualMachineManagerInventoryItems#system_center_virtual_machine_manager_server_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#id DataAzurermSystemCenterVirtualMachineManagerInventoryItems#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.timeouts"></a>

```java
public DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#timeouts DataAzurermSystemCenterVirtualMachineManagerInventoryItems#timeouts}

---

### DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems <a name="DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_system_center_virtual_machine_manager_inventory_items.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems;

DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems.builder()
    .build();
```


### DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts <a name="DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_system_center_virtual_machine_manager_inventory_items.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts;

DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#read DataAzurermSystemCenterVirtualMachineManagerInventoryItems#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#read DataAzurermSystemCenterVirtualMachineManagerInventoryItems#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList <a name="DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_system_center_virtual_machine_manager_inventory_items.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList;

new DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.get"></a>

```java
public DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference <a name="DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_system_center_virtual_machine_manager_inventory_items.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference;

new DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.internalValue"></a>

```java
public DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems</a>

---


### DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference <a name="DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_system_center_virtual_machine_manager_inventory_items.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference;

new DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts</a>

---



