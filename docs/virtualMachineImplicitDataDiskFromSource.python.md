# `virtualMachineImplicitDataDiskFromSource` Submodule <a name="`virtualMachineImplicitDataDiskFromSource` Submodule" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachineImplicitDataDiskFromSource <a name="VirtualMachineImplicitDataDiskFromSource" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source azurerm_virtual_machine_implicit_data_disk_from_source}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_implicit_data_disk_from_source

virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  create_option: str,
  disk_size_gb: typing.Union[int, float],
  lun: typing.Union[int, float],
  name: str,
  source_resource_id: str,
  virtual_machine_id: str,
  caching: str = None,
  id: str = None,
  timeouts: VirtualMachineImplicitDataDiskFromSourceTimeouts = None,
  write_accelerator_enabled: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.createOption">create_option</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#create_option VirtualMachineImplicitDataDiskFromSource#create_option}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#disk_size_gb VirtualMachineImplicitDataDiskFromSource#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.lun">lun</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#lun VirtualMachineImplicitDataDiskFromSource#lun}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#name VirtualMachineImplicitDataDiskFromSource#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.sourceResourceId">source_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#source_resource_id VirtualMachineImplicitDataDiskFromSource#source_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.virtualMachineId">virtual_machine_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#virtual_machine_id VirtualMachineImplicitDataDiskFromSource#virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.caching">caching</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#caching VirtualMachineImplicitDataDiskFromSource#caching}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#id VirtualMachineImplicitDataDiskFromSource#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts">VirtualMachineImplicitDataDiskFromSourceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.writeAcceleratorEnabled">write_accelerator_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#write_accelerator_enabled VirtualMachineImplicitDataDiskFromSource#write_accelerator_enabled}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_option`<sup>Required</sup> <a name="create_option" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.createOption"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#create_option VirtualMachineImplicitDataDiskFromSource#create_option}.

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.diskSizeGb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#disk_size_gb VirtualMachineImplicitDataDiskFromSource#disk_size_gb}.

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.lun"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#lun VirtualMachineImplicitDataDiskFromSource#lun}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#name VirtualMachineImplicitDataDiskFromSource#name}.

---

##### `source_resource_id`<sup>Required</sup> <a name="source_resource_id" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.sourceResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#source_resource_id VirtualMachineImplicitDataDiskFromSource#source_resource_id}.

---

##### `virtual_machine_id`<sup>Required</sup> <a name="virtual_machine_id" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.virtualMachineId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#virtual_machine_id VirtualMachineImplicitDataDiskFromSource#virtual_machine_id}.

---

##### `caching`<sup>Optional</sup> <a name="caching" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.caching"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#caching VirtualMachineImplicitDataDiskFromSource#caching}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#id VirtualMachineImplicitDataDiskFromSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts">VirtualMachineImplicitDataDiskFromSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#timeouts VirtualMachineImplicitDataDiskFromSource#timeouts}

---

##### `write_accelerator_enabled`<sup>Optional</sup> <a name="write_accelerator_enabled" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.writeAcceleratorEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#write_accelerator_enabled VirtualMachineImplicitDataDiskFromSource#write_accelerator_enabled}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.resetCaching">reset_caching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.resetWriteAcceleratorEnabled">reset_write_accelerator_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#create VirtualMachineImplicitDataDiskFromSource#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#delete VirtualMachineImplicitDataDiskFromSource#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#read VirtualMachineImplicitDataDiskFromSource#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#update VirtualMachineImplicitDataDiskFromSource#update}.

---

##### `reset_caching` <a name="reset_caching" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.resetCaching"></a>

```python
def reset_caching() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_write_accelerator_enabled` <a name="reset_write_accelerator_enabled" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.resetWriteAcceleratorEnabled"></a>

```python
def reset_write_accelerator_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VirtualMachineImplicitDataDiskFromSource resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_implicit_data_disk_from_source

virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_implicit_data_disk_from_source

virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_implicit_data_disk_from_source

virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_implicit_data_disk_from_source

virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VirtualMachineImplicitDataDiskFromSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VirtualMachineImplicitDataDiskFromSource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VirtualMachineImplicitDataDiskFromSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VirtualMachineImplicitDataDiskFromSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference">VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.cachingInput">caching_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.createOptionInput">create_option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.diskSizeGbInput">disk_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.lunInput">lun_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.sourceResourceIdInput">source_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts">VirtualMachineImplicitDataDiskFromSourceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.virtualMachineIdInput">virtual_machine_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.writeAcceleratorEnabledInput">write_accelerator_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.caching">caching</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.createOption">create_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.lun">lun</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.sourceResourceId">source_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.virtualMachineId">virtual_machine_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.writeAcceleratorEnabled">write_accelerator_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.timeouts"></a>

```python
timeouts: VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference">VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference</a>

---

##### `caching_input`<sup>Optional</sup> <a name="caching_input" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.cachingInput"></a>

```python
caching_input: str
```

- *Type:* str

---

##### `create_option_input`<sup>Optional</sup> <a name="create_option_input" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.createOptionInput"></a>

```python
create_option_input: str
```

- *Type:* str

---

##### `disk_size_gb_input`<sup>Optional</sup> <a name="disk_size_gb_input" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.diskSizeGbInput"></a>

```python
disk_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `lun_input`<sup>Optional</sup> <a name="lun_input" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.lunInput"></a>

```python
lun_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `source_resource_id_input`<sup>Optional</sup> <a name="source_resource_id_input" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.sourceResourceIdInput"></a>

```python
source_resource_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VirtualMachineImplicitDataDiskFromSourceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts">VirtualMachineImplicitDataDiskFromSourceTimeouts</a>]

---

##### `virtual_machine_id_input`<sup>Optional</sup> <a name="virtual_machine_id_input" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.virtualMachineIdInput"></a>

```python
virtual_machine_id_input: str
```

- *Type:* str

---

##### `write_accelerator_enabled_input`<sup>Optional</sup> <a name="write_accelerator_enabled_input" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.writeAcceleratorEnabledInput"></a>

```python
write_accelerator_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.caching"></a>

```python
caching: str
```

- *Type:* str

---

##### `create_option`<sup>Required</sup> <a name="create_option" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.createOption"></a>

```python
create_option: str
```

- *Type:* str

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.lun"></a>

```python
lun: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source_resource_id`<sup>Required</sup> <a name="source_resource_id" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.sourceResourceId"></a>

```python
source_resource_id: str
```

- *Type:* str

---

##### `virtual_machine_id`<sup>Required</sup> <a name="virtual_machine_id" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.virtualMachineId"></a>

```python
virtual_machine_id: str
```

- *Type:* str

---

##### `write_accelerator_enabled`<sup>Required</sup> <a name="write_accelerator_enabled" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.writeAcceleratorEnabled"></a>

```python
write_accelerator_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineImplicitDataDiskFromSourceConfig <a name="VirtualMachineImplicitDataDiskFromSourceConfig" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_implicit_data_disk_from_source

virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  create_option: str,
  disk_size_gb: typing.Union[int, float],
  lun: typing.Union[int, float],
  name: str,
  source_resource_id: str,
  virtual_machine_id: str,
  caching: str = None,
  id: str = None,
  timeouts: VirtualMachineImplicitDataDiskFromSourceTimeouts = None,
  write_accelerator_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.createOption">create_option</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#create_option VirtualMachineImplicitDataDiskFromSource#create_option}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#disk_size_gb VirtualMachineImplicitDataDiskFromSource#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.lun">lun</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#lun VirtualMachineImplicitDataDiskFromSource#lun}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#name VirtualMachineImplicitDataDiskFromSource#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.sourceResourceId">source_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#source_resource_id VirtualMachineImplicitDataDiskFromSource#source_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.virtualMachineId">virtual_machine_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#virtual_machine_id VirtualMachineImplicitDataDiskFromSource#virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.caching">caching</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#caching VirtualMachineImplicitDataDiskFromSource#caching}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#id VirtualMachineImplicitDataDiskFromSource#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts">VirtualMachineImplicitDataDiskFromSourceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.writeAcceleratorEnabled">write_accelerator_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#write_accelerator_enabled VirtualMachineImplicitDataDiskFromSource#write_accelerator_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_option`<sup>Required</sup> <a name="create_option" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.createOption"></a>

```python
create_option: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#create_option VirtualMachineImplicitDataDiskFromSource#create_option}.

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#disk_size_gb VirtualMachineImplicitDataDiskFromSource#disk_size_gb}.

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.lun"></a>

```python
lun: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#lun VirtualMachineImplicitDataDiskFromSource#lun}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#name VirtualMachineImplicitDataDiskFromSource#name}.

---

##### `source_resource_id`<sup>Required</sup> <a name="source_resource_id" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.sourceResourceId"></a>

```python
source_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#source_resource_id VirtualMachineImplicitDataDiskFromSource#source_resource_id}.

---

##### `virtual_machine_id`<sup>Required</sup> <a name="virtual_machine_id" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.virtualMachineId"></a>

```python
virtual_machine_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#virtual_machine_id VirtualMachineImplicitDataDiskFromSource#virtual_machine_id}.

---

##### `caching`<sup>Optional</sup> <a name="caching" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.caching"></a>

```python
caching: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#caching VirtualMachineImplicitDataDiskFromSource#caching}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#id VirtualMachineImplicitDataDiskFromSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.timeouts"></a>

```python
timeouts: VirtualMachineImplicitDataDiskFromSourceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts">VirtualMachineImplicitDataDiskFromSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#timeouts VirtualMachineImplicitDataDiskFromSource#timeouts}

---

##### `write_accelerator_enabled`<sup>Optional</sup> <a name="write_accelerator_enabled" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.writeAcceleratorEnabled"></a>

```python
write_accelerator_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#write_accelerator_enabled VirtualMachineImplicitDataDiskFromSource#write_accelerator_enabled}.

---

### VirtualMachineImplicitDataDiskFromSourceTimeouts <a name="VirtualMachineImplicitDataDiskFromSourceTimeouts" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_implicit_data_disk_from_source

virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#create VirtualMachineImplicitDataDiskFromSource#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#delete VirtualMachineImplicitDataDiskFromSource#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#read VirtualMachineImplicitDataDiskFromSource#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#update VirtualMachineImplicitDataDiskFromSource#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#create VirtualMachineImplicitDataDiskFromSource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#delete VirtualMachineImplicitDataDiskFromSource#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#read VirtualMachineImplicitDataDiskFromSource#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/virtual_machine_implicit_data_disk_from_source#update VirtualMachineImplicitDataDiskFromSource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference <a name="VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_implicit_data_disk_from_source

virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts">VirtualMachineImplicitDataDiskFromSourceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VirtualMachineImplicitDataDiskFromSourceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts">VirtualMachineImplicitDataDiskFromSourceTimeouts</a>]

---



