# `dataAzurermSystemCenterVirtualMachineManagerInventoryItems` Submodule <a name="`dataAzurermSystemCenterVirtualMachineManagerInventoryItems` Submodule" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermSystemCenterVirtualMachineManagerInventoryItems <a name="DataAzurermSystemCenterVirtualMachineManagerInventoryItems" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items azurerm_system_center_virtual_machine_manager_inventory_items}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_system_center_virtual_machine_manager_inventory_items

dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  inventory_type: str,
  system_center_virtual_machine_manager_server_id: str,
  id: str = None,
  timeouts: DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.inventoryType">inventory_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#inventory_type DataAzurermSystemCenterVirtualMachineManagerInventoryItems#inventory_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.systemCenterVirtualMachineManagerServerId">system_center_virtual_machine_manager_server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#system_center_virtual_machine_manager_server_id DataAzurermSystemCenterVirtualMachineManagerInventoryItems#system_center_virtual_machine_manager_server_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#id DataAzurermSystemCenterVirtualMachineManagerInventoryItems#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `inventory_type`<sup>Required</sup> <a name="inventory_type" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.inventoryType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#inventory_type DataAzurermSystemCenterVirtualMachineManagerInventoryItems#inventory_type}.

---

##### `system_center_virtual_machine_manager_server_id`<sup>Required</sup> <a name="system_center_virtual_machine_manager_server_id" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.systemCenterVirtualMachineManagerServerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#system_center_virtual_machine_manager_server_id DataAzurermSystemCenterVirtualMachineManagerInventoryItems#system_center_virtual_machine_manager_server_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#id DataAzurermSystemCenterVirtualMachineManagerInventoryItems#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#timeouts DataAzurermSystemCenterVirtualMachineManagerInventoryItems#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#read DataAzurermSystemCenterVirtualMachineManagerInventoryItems#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermSystemCenterVirtualMachineManagerInventoryItems resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_system_center_virtual_machine_manager_inventory_items

dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_system_center_virtual_machine_manager_inventory_items

dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_system_center_virtual_machine_manager_inventory_items

dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_system_center_virtual_machine_manager_inventory_items

dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermSystemCenterVirtualMachineManagerInventoryItems resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermSystemCenterVirtualMachineManagerInventoryItems to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermSystemCenterVirtualMachineManagerInventoryItems that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermSystemCenterVirtualMachineManagerInventoryItems to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.inventoryItems">inventory_items</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.inventoryTypeInput">inventory_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.systemCenterVirtualMachineManagerServerIdInput">system_center_virtual_machine_manager_server_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.inventoryType">inventory_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.systemCenterVirtualMachineManagerServerId">system_center_virtual_machine_manager_server_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `inventory_items`<sup>Required</sup> <a name="inventory_items" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.inventoryItems"></a>

```python
inventory_items: DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.timeouts"></a>

```python
timeouts: DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `inventory_type_input`<sup>Optional</sup> <a name="inventory_type_input" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.inventoryTypeInput"></a>

```python
inventory_type_input: str
```

- *Type:* str

---

##### `system_center_virtual_machine_manager_server_id_input`<sup>Optional</sup> <a name="system_center_virtual_machine_manager_server_id_input" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.systemCenterVirtualMachineManagerServerIdInput"></a>

```python
system_center_virtual_machine_manager_server_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inventory_type`<sup>Required</sup> <a name="inventory_type" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.inventoryType"></a>

```python
inventory_type: str
```

- *Type:* str

---

##### `system_center_virtual_machine_manager_server_id`<sup>Required</sup> <a name="system_center_virtual_machine_manager_server_id" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.systemCenterVirtualMachineManagerServerId"></a>

```python
system_center_virtual_machine_manager_server_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig <a name="DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_system_center_virtual_machine_manager_inventory_items

dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  inventory_type: str,
  system_center_virtual_machine_manager_server_id: str,
  id: str = None,
  timeouts: DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.inventoryType">inventory_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#inventory_type DataAzurermSystemCenterVirtualMachineManagerInventoryItems#inventory_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.systemCenterVirtualMachineManagerServerId">system_center_virtual_machine_manager_server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#system_center_virtual_machine_manager_server_id DataAzurermSystemCenterVirtualMachineManagerInventoryItems#system_center_virtual_machine_manager_server_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#id DataAzurermSystemCenterVirtualMachineManagerInventoryItems#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `inventory_type`<sup>Required</sup> <a name="inventory_type" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.inventoryType"></a>

```python
inventory_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#inventory_type DataAzurermSystemCenterVirtualMachineManagerInventoryItems#inventory_type}.

---

##### `system_center_virtual_machine_manager_server_id`<sup>Required</sup> <a name="system_center_virtual_machine_manager_server_id" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.systemCenterVirtualMachineManagerServerId"></a>

```python
system_center_virtual_machine_manager_server_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#system_center_virtual_machine_manager_server_id DataAzurermSystemCenterVirtualMachineManagerInventoryItems#system_center_virtual_machine_manager_server_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#id DataAzurermSystemCenterVirtualMachineManagerInventoryItems#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.timeouts"></a>

```python
timeouts: DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#timeouts DataAzurermSystemCenterVirtualMachineManagerInventoryItems#timeouts}

---

### DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems <a name="DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_system_center_virtual_machine_manager_inventory_items

dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems()
```


### DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts <a name="DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_system_center_virtual_machine_manager_inventory_items

dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#read DataAzurermSystemCenterVirtualMachineManagerInventoryItems#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#read DataAzurermSystemCenterVirtualMachineManagerInventoryItems#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList <a name="DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_system_center_virtual_machine_manager_inventory_items

dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference <a name="DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_system_center_virtual_machine_manager_inventory_items

dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems</a>

---


### DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference <a name="DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_system_center_virtual_machine_manager_inventory_items

dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts</a>]

---



