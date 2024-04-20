# `systemCenterVirtualMachineManagerAvailabilitySet` Submodule <a name="`systemCenterVirtualMachineManagerAvailabilitySet` Submodule" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SystemCenterVirtualMachineManagerAvailabilitySet <a name="SystemCenterVirtualMachineManagerAvailabilitySet" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set azurerm_system_center_virtual_machine_manager_availability_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import system_center_virtual_machine_manager_availability_set

systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  custom_location_id: str,
  location: str,
  name: str,
  resource_group_name: str,
  system_center_virtual_machine_manager_server_id: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: SystemCenterVirtualMachineManagerAvailabilitySetTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.customLocationId">custom_location_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#custom_location_id SystemCenterVirtualMachineManagerAvailabilitySet#custom_location_id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#location SystemCenterVirtualMachineManagerAvailabilitySet#location}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#name SystemCenterVirtualMachineManagerAvailabilitySet#name}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#resource_group_name SystemCenterVirtualMachineManagerAvailabilitySet#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.systemCenterVirtualMachineManagerServerId">system_center_virtual_machine_manager_server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#system_center_virtual_machine_manager_server_id SystemCenterVirtualMachineManagerAvailabilitySet#system_center_virtual_machine_manager_server_id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#id SystemCenterVirtualMachineManagerAvailabilitySet#id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#tags SystemCenterVirtualMachineManagerAvailabilitySet#tags}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts">SystemCenterVirtualMachineManagerAvailabilitySetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_location_id`<sup>Required</sup> <a name="custom_location_id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.customLocationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#custom_location_id SystemCenterVirtualMachineManagerAvailabilitySet#custom_location_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#location SystemCenterVirtualMachineManagerAvailabilitySet#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#name SystemCenterVirtualMachineManagerAvailabilitySet#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#resource_group_name SystemCenterVirtualMachineManagerAvailabilitySet#resource_group_name}.

---

##### `system_center_virtual_machine_manager_server_id`<sup>Required</sup> <a name="system_center_virtual_machine_manager_server_id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.systemCenterVirtualMachineManagerServerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#system_center_virtual_machine_manager_server_id SystemCenterVirtualMachineManagerAvailabilitySet#system_center_virtual_machine_manager_server_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#id SystemCenterVirtualMachineManagerAvailabilitySet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#tags SystemCenterVirtualMachineManagerAvailabilitySet#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts">SystemCenterVirtualMachineManagerAvailabilitySetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#timeouts SystemCenterVirtualMachineManagerAvailabilitySet#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#create SystemCenterVirtualMachineManagerAvailabilitySet#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#delete SystemCenterVirtualMachineManagerAvailabilitySet#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#read SystemCenterVirtualMachineManagerAvailabilitySet#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#update SystemCenterVirtualMachineManagerAvailabilitySet#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SystemCenterVirtualMachineManagerAvailabilitySet resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import system_center_virtual_machine_manager_availability_set

systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import system_center_virtual_machine_manager_availability_set

systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import system_center_virtual_machine_manager_availability_set

systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import system_center_virtual_machine_manager_availability_set

systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SystemCenterVirtualMachineManagerAvailabilitySet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SystemCenterVirtualMachineManagerAvailabilitySet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SystemCenterVirtualMachineManagerAvailabilitySet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SystemCenterVirtualMachineManagerAvailabilitySet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference">SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.customLocationIdInput">custom_location_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.systemCenterVirtualMachineManagerServerIdInput">system_center_virtual_machine_manager_server_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts">SystemCenterVirtualMachineManagerAvailabilitySetTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.customLocationId">custom_location_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.systemCenterVirtualMachineManagerServerId">system_center_virtual_machine_manager_server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.timeouts"></a>

```python
timeouts: SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference">SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference</a>

---

##### `custom_location_id_input`<sup>Optional</sup> <a name="custom_location_id_input" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.customLocationIdInput"></a>

```python
custom_location_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `system_center_virtual_machine_manager_server_id_input`<sup>Optional</sup> <a name="system_center_virtual_machine_manager_server_id_input" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.systemCenterVirtualMachineManagerServerIdInput"></a>

```python
system_center_virtual_machine_manager_server_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SystemCenterVirtualMachineManagerAvailabilitySetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts">SystemCenterVirtualMachineManagerAvailabilitySetTimeouts</a>]

---

##### `custom_location_id`<sup>Required</sup> <a name="custom_location_id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.customLocationId"></a>

```python
custom_location_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `system_center_virtual_machine_manager_server_id`<sup>Required</sup> <a name="system_center_virtual_machine_manager_server_id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.systemCenterVirtualMachineManagerServerId"></a>

```python
system_center_virtual_machine_manager_server_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SystemCenterVirtualMachineManagerAvailabilitySetConfig <a name="SystemCenterVirtualMachineManagerAvailabilitySetConfig" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import system_center_virtual_machine_manager_availability_set

systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  custom_location_id: str,
  location: str,
  name: str,
  resource_group_name: str,
  system_center_virtual_machine_manager_server_id: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: SystemCenterVirtualMachineManagerAvailabilitySetTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.customLocationId">custom_location_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#custom_location_id SystemCenterVirtualMachineManagerAvailabilitySet#custom_location_id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#location SystemCenterVirtualMachineManagerAvailabilitySet#location}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#name SystemCenterVirtualMachineManagerAvailabilitySet#name}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#resource_group_name SystemCenterVirtualMachineManagerAvailabilitySet#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.systemCenterVirtualMachineManagerServerId">system_center_virtual_machine_manager_server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#system_center_virtual_machine_manager_server_id SystemCenterVirtualMachineManagerAvailabilitySet#system_center_virtual_machine_manager_server_id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#id SystemCenterVirtualMachineManagerAvailabilitySet#id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#tags SystemCenterVirtualMachineManagerAvailabilitySet#tags}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts">SystemCenterVirtualMachineManagerAvailabilitySetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_location_id`<sup>Required</sup> <a name="custom_location_id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.customLocationId"></a>

```python
custom_location_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#custom_location_id SystemCenterVirtualMachineManagerAvailabilitySet#custom_location_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#location SystemCenterVirtualMachineManagerAvailabilitySet#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#name SystemCenterVirtualMachineManagerAvailabilitySet#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#resource_group_name SystemCenterVirtualMachineManagerAvailabilitySet#resource_group_name}.

---

##### `system_center_virtual_machine_manager_server_id`<sup>Required</sup> <a name="system_center_virtual_machine_manager_server_id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.systemCenterVirtualMachineManagerServerId"></a>

```python
system_center_virtual_machine_manager_server_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#system_center_virtual_machine_manager_server_id SystemCenterVirtualMachineManagerAvailabilitySet#system_center_virtual_machine_manager_server_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#id SystemCenterVirtualMachineManagerAvailabilitySet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#tags SystemCenterVirtualMachineManagerAvailabilitySet#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.timeouts"></a>

```python
timeouts: SystemCenterVirtualMachineManagerAvailabilitySetTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts">SystemCenterVirtualMachineManagerAvailabilitySetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#timeouts SystemCenterVirtualMachineManagerAvailabilitySet#timeouts}

---

### SystemCenterVirtualMachineManagerAvailabilitySetTimeouts <a name="SystemCenterVirtualMachineManagerAvailabilitySetTimeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import system_center_virtual_machine_manager_availability_set

systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#create SystemCenterVirtualMachineManagerAvailabilitySet#create}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#delete SystemCenterVirtualMachineManagerAvailabilitySet#delete}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#read SystemCenterVirtualMachineManagerAvailabilitySet#read}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#update SystemCenterVirtualMachineManagerAvailabilitySet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#create SystemCenterVirtualMachineManagerAvailabilitySet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#delete SystemCenterVirtualMachineManagerAvailabilitySet#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#read SystemCenterVirtualMachineManagerAvailabilitySet#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/system_center_virtual_machine_manager_availability_set#update SystemCenterVirtualMachineManagerAvailabilitySet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference <a name="SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import system_center_virtual_machine_manager_availability_set

systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts">SystemCenterVirtualMachineManagerAvailabilitySetTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SystemCenterVirtualMachineManagerAvailabilitySetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts">SystemCenterVirtualMachineManagerAvailabilitySetTimeouts</a>]

---



