# `virtualMachineDataDiskAttachment` Submodule <a name="`virtualMachineDataDiskAttachment` Submodule" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachineDataDiskAttachment <a name="VirtualMachineDataDiskAttachment" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment azurerm_virtual_machine_data_disk_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_data_disk_attachment

virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  caching: str,
  lun: typing.Union[int, float],
  managed_disk_id: str,
  virtual_machine_id: str,
  create_option: str = None,
  id: str = None,
  timeouts: VirtualMachineDataDiskAttachmentTimeouts = None,
  write_accelerator_enabled: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.caching">caching</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#caching VirtualMachineDataDiskAttachment#caching}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.lun">lun</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#lun VirtualMachineDataDiskAttachment#lun}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.managedDiskId">managed_disk_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#managed_disk_id VirtualMachineDataDiskAttachment#managed_disk_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.virtualMachineId">virtual_machine_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#virtual_machine_id VirtualMachineDataDiskAttachment#virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.createOption">create_option</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#create_option VirtualMachineDataDiskAttachment#create_option}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#id VirtualMachineDataDiskAttachment#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts">VirtualMachineDataDiskAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.writeAcceleratorEnabled">write_accelerator_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#write_accelerator_enabled VirtualMachineDataDiskAttachment#write_accelerator_enabled}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.caching"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#caching VirtualMachineDataDiskAttachment#caching}.

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.lun"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#lun VirtualMachineDataDiskAttachment#lun}.

---

##### `managed_disk_id`<sup>Required</sup> <a name="managed_disk_id" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.managedDiskId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#managed_disk_id VirtualMachineDataDiskAttachment#managed_disk_id}.

---

##### `virtual_machine_id`<sup>Required</sup> <a name="virtual_machine_id" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.virtualMachineId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#virtual_machine_id VirtualMachineDataDiskAttachment#virtual_machine_id}.

---

##### `create_option`<sup>Optional</sup> <a name="create_option" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.createOption"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#create_option VirtualMachineDataDiskAttachment#create_option}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#id VirtualMachineDataDiskAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts">VirtualMachineDataDiskAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#timeouts VirtualMachineDataDiskAttachment#timeouts}

---

##### `write_accelerator_enabled`<sup>Optional</sup> <a name="write_accelerator_enabled" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.writeAcceleratorEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#write_accelerator_enabled VirtualMachineDataDiskAttachment#write_accelerator_enabled}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.resetCreateOption">reset_create_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.resetWriteAcceleratorEnabled">reset_write_accelerator_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#create VirtualMachineDataDiskAttachment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#delete VirtualMachineDataDiskAttachment#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#read VirtualMachineDataDiskAttachment#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#update VirtualMachineDataDiskAttachment#update}.

---

##### `reset_create_option` <a name="reset_create_option" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.resetCreateOption"></a>

```python
def reset_create_option() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_write_accelerator_enabled` <a name="reset_write_accelerator_enabled" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.resetWriteAcceleratorEnabled"></a>

```python
def reset_write_accelerator_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VirtualMachineDataDiskAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_data_disk_attachment

virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_data_disk_attachment

virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_data_disk_attachment

virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_data_disk_attachment

virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VirtualMachineDataDiskAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VirtualMachineDataDiskAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VirtualMachineDataDiskAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VirtualMachineDataDiskAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference">VirtualMachineDataDiskAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.cachingInput">caching_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.createOptionInput">create_option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.lunInput">lun_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.managedDiskIdInput">managed_disk_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts">VirtualMachineDataDiskAttachmentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.virtualMachineIdInput">virtual_machine_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.writeAcceleratorEnabledInput">write_accelerator_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.caching">caching</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.createOption">create_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.lun">lun</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.managedDiskId">managed_disk_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.virtualMachineId">virtual_machine_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.writeAcceleratorEnabled">write_accelerator_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.timeouts"></a>

```python
timeouts: VirtualMachineDataDiskAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference">VirtualMachineDataDiskAttachmentTimeoutsOutputReference</a>

---

##### `caching_input`<sup>Optional</sup> <a name="caching_input" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.cachingInput"></a>

```python
caching_input: str
```

- *Type:* str

---

##### `create_option_input`<sup>Optional</sup> <a name="create_option_input" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.createOptionInput"></a>

```python
create_option_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `lun_input`<sup>Optional</sup> <a name="lun_input" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.lunInput"></a>

```python
lun_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `managed_disk_id_input`<sup>Optional</sup> <a name="managed_disk_id_input" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.managedDiskIdInput"></a>

```python
managed_disk_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VirtualMachineDataDiskAttachmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts">VirtualMachineDataDiskAttachmentTimeouts</a>]

---

##### `virtual_machine_id_input`<sup>Optional</sup> <a name="virtual_machine_id_input" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.virtualMachineIdInput"></a>

```python
virtual_machine_id_input: str
```

- *Type:* str

---

##### `write_accelerator_enabled_input`<sup>Optional</sup> <a name="write_accelerator_enabled_input" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.writeAcceleratorEnabledInput"></a>

```python
write_accelerator_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.caching"></a>

```python
caching: str
```

- *Type:* str

---

##### `create_option`<sup>Required</sup> <a name="create_option" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.createOption"></a>

```python
create_option: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.lun"></a>

```python
lun: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `managed_disk_id`<sup>Required</sup> <a name="managed_disk_id" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.managedDiskId"></a>

```python
managed_disk_id: str
```

- *Type:* str

---

##### `virtual_machine_id`<sup>Required</sup> <a name="virtual_machine_id" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.virtualMachineId"></a>

```python
virtual_machine_id: str
```

- *Type:* str

---

##### `write_accelerator_enabled`<sup>Required</sup> <a name="write_accelerator_enabled" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.writeAcceleratorEnabled"></a>

```python
write_accelerator_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineDataDiskAttachmentConfig <a name="VirtualMachineDataDiskAttachmentConfig" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_data_disk_attachment

virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  caching: str,
  lun: typing.Union[int, float],
  managed_disk_id: str,
  virtual_machine_id: str,
  create_option: str = None,
  id: str = None,
  timeouts: VirtualMachineDataDiskAttachmentTimeouts = None,
  write_accelerator_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.caching">caching</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#caching VirtualMachineDataDiskAttachment#caching}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.lun">lun</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#lun VirtualMachineDataDiskAttachment#lun}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.managedDiskId">managed_disk_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#managed_disk_id VirtualMachineDataDiskAttachment#managed_disk_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.virtualMachineId">virtual_machine_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#virtual_machine_id VirtualMachineDataDiskAttachment#virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.createOption">create_option</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#create_option VirtualMachineDataDiskAttachment#create_option}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#id VirtualMachineDataDiskAttachment#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts">VirtualMachineDataDiskAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.writeAcceleratorEnabled">write_accelerator_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#write_accelerator_enabled VirtualMachineDataDiskAttachment#write_accelerator_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.caching"></a>

```python
caching: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#caching VirtualMachineDataDiskAttachment#caching}.

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.lun"></a>

```python
lun: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#lun VirtualMachineDataDiskAttachment#lun}.

---

##### `managed_disk_id`<sup>Required</sup> <a name="managed_disk_id" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.managedDiskId"></a>

```python
managed_disk_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#managed_disk_id VirtualMachineDataDiskAttachment#managed_disk_id}.

---

##### `virtual_machine_id`<sup>Required</sup> <a name="virtual_machine_id" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.virtualMachineId"></a>

```python
virtual_machine_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#virtual_machine_id VirtualMachineDataDiskAttachment#virtual_machine_id}.

---

##### `create_option`<sup>Optional</sup> <a name="create_option" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.createOption"></a>

```python
create_option: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#create_option VirtualMachineDataDiskAttachment#create_option}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#id VirtualMachineDataDiskAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.timeouts"></a>

```python
timeouts: VirtualMachineDataDiskAttachmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts">VirtualMachineDataDiskAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#timeouts VirtualMachineDataDiskAttachment#timeouts}

---

##### `write_accelerator_enabled`<sup>Optional</sup> <a name="write_accelerator_enabled" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.writeAcceleratorEnabled"></a>

```python
write_accelerator_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#write_accelerator_enabled VirtualMachineDataDiskAttachment#write_accelerator_enabled}.

---

### VirtualMachineDataDiskAttachmentTimeouts <a name="VirtualMachineDataDiskAttachmentTimeouts" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_data_disk_attachment

virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#create VirtualMachineDataDiskAttachment#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#delete VirtualMachineDataDiskAttachment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#read VirtualMachineDataDiskAttachment#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#update VirtualMachineDataDiskAttachment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#create VirtualMachineDataDiskAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#delete VirtualMachineDataDiskAttachment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#read VirtualMachineDataDiskAttachment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/virtual_machine_data_disk_attachment#update VirtualMachineDataDiskAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualMachineDataDiskAttachmentTimeoutsOutputReference <a name="VirtualMachineDataDiskAttachmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_data_disk_attachment

virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts">VirtualMachineDataDiskAttachmentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VirtualMachineDataDiskAttachmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts">VirtualMachineDataDiskAttachmentTimeouts</a>]

---



