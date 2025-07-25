# `systemCenterVirtualMachineManagerVirtualMachineTemplate` Submodule <a name="`systemCenterVirtualMachineManagerVirtualMachineTemplate` Submodule" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SystemCenterVirtualMachineManagerVirtualMachineTemplate <a name="SystemCenterVirtualMachineManagerVirtualMachineTemplate" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_template azurerm_system_center_virtual_machine_manager_virtual_machine_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.system_center_virtual_machine_manager_virtual_machine_template.SystemCenterVirtualMachineManagerVirtualMachineTemplate;

SystemCenterVirtualMachineManagerVirtualMachineTemplate.Builder.create(Construct scope, java.lang.String id)
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
    .systemCenterVirtualMachineManagerServerInventoryItemId(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.Initializer.parameter.customLocationId">customLocationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_template#custom_location_id SystemCenterVirtualMachineManagerVirtualMachineTemplate#custom_location_id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_template#location SystemCenterVirtualMachineManagerVirtualMachineTemplate#location}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_template#name SystemCenterVirtualMachineManagerVirtualMachineTemplate#name}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_template#resource_group_name SystemCenterVirtualMachineManagerVirtualMachineTemplate#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.Initializer.parameter.systemCenterVirtualMachineManagerServerInventoryItemId">systemCenterVirtualMachineManagerServerInventoryItemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_template#system_center_virtual_machine_manager_server_inventory_item_id SystemCenterVirtualMachineManagerVirtualMachineTemplate#system_center_virtual_machine_manager_server_inventory_item_id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_template#id SystemCenterVirtualMachineManagerVirtualMachineTemplate#id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_template#tags SystemCenterVirtualMachineManagerVirtualMachineTemplate#tags}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeouts">SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customLocationId`<sup>Required</sup> <a name="customLocationId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.Initializer.parameter.customLocationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_template#custom_location_id SystemCenterVirtualMachineManagerVirtualMachineTemplate#custom_location_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_template#location SystemCenterVirtualMachineManagerVirtualMachineTemplate#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_template#name SystemCenterVirtualMachineManagerVirtualMachineTemplate#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_template#resource_group_name SystemCenterVirtualMachineManagerVirtualMachineTemplate#resource_group_name}.

---

##### `systemCenterVirtualMachineManagerServerInventoryItemId`<sup>Required</sup> <a name="systemCenterVirtualMachineManagerServerInventoryItemId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.Initializer.parameter.systemCenterVirtualMachineManagerServerInventoryItemId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_template#system_center_virtual_machine_manager_server_inventory_item_id SystemCenterVirtualMachineManagerVirtualMachineTemplate#system_center_virtual_machine_manager_server_inventory_item_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_template#id SystemCenterVirtualMachineManagerVirtualMachineTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_template#tags SystemCenterVirtualMachineManagerVirtualMachineTemplate#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeouts">SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_template#timeouts SystemCenterVirtualMachineManagerVirtualMachineTemplate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.putTimeouts"></a>

```java
public void putTimeouts(SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeouts">SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SystemCenterVirtualMachineManagerVirtualMachineTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.system_center_virtual_machine_manager_virtual_machine_template.SystemCenterVirtualMachineManagerVirtualMachineTemplate;

SystemCenterVirtualMachineManagerVirtualMachineTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.system_center_virtual_machine_manager_virtual_machine_template.SystemCenterVirtualMachineManagerVirtualMachineTemplate;

SystemCenterVirtualMachineManagerVirtualMachineTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.system_center_virtual_machine_manager_virtual_machine_template.SystemCenterVirtualMachineManagerVirtualMachineTemplate;

SystemCenterVirtualMachineManagerVirtualMachineTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.system_center_virtual_machine_manager_virtual_machine_template.SystemCenterVirtualMachineManagerVirtualMachineTemplate;

SystemCenterVirtualMachineManagerVirtualMachineTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SystemCenterVirtualMachineManagerVirtualMachineTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SystemCenterVirtualMachineManagerVirtualMachineTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SystemCenterVirtualMachineManagerVirtualMachineTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SystemCenterVirtualMachineManagerVirtualMachineTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SystemCenterVirtualMachineManagerVirtualMachineTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference">SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.customLocationIdInput">customLocationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.systemCenterVirtualMachineManagerServerInventoryItemIdInput">systemCenterVirtualMachineManagerServerInventoryItemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeouts">SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.customLocationId">customLocationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.systemCenterVirtualMachineManagerServerInventoryItemId">systemCenterVirtualMachineManagerServerInventoryItemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.timeouts"></a>

```java
public SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference">SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference</a>

---

##### `customLocationIdInput`<sup>Optional</sup> <a name="customLocationIdInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.customLocationIdInput"></a>

```java
public java.lang.String getCustomLocationIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `systemCenterVirtualMachineManagerServerInventoryItemIdInput`<sup>Optional</sup> <a name="systemCenterVirtualMachineManagerServerInventoryItemIdInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.systemCenterVirtualMachineManagerServerInventoryItemIdInput"></a>

```java
public java.lang.String getSystemCenterVirtualMachineManagerServerInventoryItemIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeouts">SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeouts</a>

---

##### `customLocationId`<sup>Required</sup> <a name="customLocationId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.customLocationId"></a>

```java
public java.lang.String getCustomLocationId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `systemCenterVirtualMachineManagerServerInventoryItemId`<sup>Required</sup> <a name="systemCenterVirtualMachineManagerServerInventoryItemId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.systemCenterVirtualMachineManagerServerInventoryItemId"></a>

```java
public java.lang.String getSystemCenterVirtualMachineManagerServerInventoryItemId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SystemCenterVirtualMachineManagerVirtualMachineTemplateConfig <a name="SystemCenterVirtualMachineManagerVirtualMachineTemplateConfig" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.system_center_virtual_machine_manager_virtual_machine_template.SystemCenterVirtualMachineManagerVirtualMachineTemplateConfig;

SystemCenterVirtualMachineManagerVirtualMachineTemplateConfig.builder()
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
    .systemCenterVirtualMachineManagerServerInventoryItemId(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateConfig.property.customLocationId">customLocationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_template#custom_location_id SystemCenterVirtualMachineManagerVirtualMachineTemplate#custom_location_id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_template#location SystemCenterVirtualMachineManagerVirtualMachineTemplate#location}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_template#name SystemCenterVirtualMachineManagerVirtualMachineTemplate#name}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_template#resource_group_name SystemCenterVirtualMachineManagerVirtualMachineTemplate#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateConfig.property.systemCenterVirtualMachineManagerServerInventoryItemId">systemCenterVirtualMachineManagerServerInventoryItemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_template#system_center_virtual_machine_manager_server_inventory_item_id SystemCenterVirtualMachineManagerVirtualMachineTemplate#system_center_virtual_machine_manager_server_inventory_item_id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_template#id SystemCenterVirtualMachineManagerVirtualMachineTemplate#id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_template#tags SystemCenterVirtualMachineManagerVirtualMachineTemplate#tags}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeouts">SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customLocationId`<sup>Required</sup> <a name="customLocationId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateConfig.property.customLocationId"></a>

```java
public java.lang.String getCustomLocationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_template#custom_location_id SystemCenterVirtualMachineManagerVirtualMachineTemplate#custom_location_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_template#location SystemCenterVirtualMachineManagerVirtualMachineTemplate#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_template#name SystemCenterVirtualMachineManagerVirtualMachineTemplate#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_template#resource_group_name SystemCenterVirtualMachineManagerVirtualMachineTemplate#resource_group_name}.

---

##### `systemCenterVirtualMachineManagerServerInventoryItemId`<sup>Required</sup> <a name="systemCenterVirtualMachineManagerServerInventoryItemId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateConfig.property.systemCenterVirtualMachineManagerServerInventoryItemId"></a>

```java
public java.lang.String getSystemCenterVirtualMachineManagerServerInventoryItemId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_template#system_center_virtual_machine_manager_server_inventory_item_id SystemCenterVirtualMachineManagerVirtualMachineTemplate#system_center_virtual_machine_manager_server_inventory_item_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_template#id SystemCenterVirtualMachineManagerVirtualMachineTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_template#tags SystemCenterVirtualMachineManagerVirtualMachineTemplate#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateConfig.property.timeouts"></a>

```java
public SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeouts">SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_template#timeouts SystemCenterVirtualMachineManagerVirtualMachineTemplate#timeouts}

---

### SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeouts <a name="SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.system_center_virtual_machine_manager_virtual_machine_template.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeouts;

SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_template#create SystemCenterVirtualMachineManagerVirtualMachineTemplate#create}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_template#delete SystemCenterVirtualMachineManagerVirtualMachineTemplate#delete}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_template#read SystemCenterVirtualMachineManagerVirtualMachineTemplate#read}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_template#update SystemCenterVirtualMachineManagerVirtualMachineTemplate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_template#create SystemCenterVirtualMachineManagerVirtualMachineTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_template#delete SystemCenterVirtualMachineManagerVirtualMachineTemplate#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_template#read SystemCenterVirtualMachineManagerVirtualMachineTemplate#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_template#update SystemCenterVirtualMachineManagerVirtualMachineTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference <a name="SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.system_center_virtual_machine_manager_virtual_machine_template.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference;

new SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeouts">SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineTemplate.SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeouts">SystemCenterVirtualMachineManagerVirtualMachineTemplateTimeouts</a>

---



