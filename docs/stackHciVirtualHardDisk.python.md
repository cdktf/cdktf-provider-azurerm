# `stackHciVirtualHardDisk` Submodule <a name="`stackHciVirtualHardDisk` Submodule" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackHciVirtualHardDisk <a name="StackHciVirtualHardDisk" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk azurerm_stack_hci_virtual_hard_disk}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_virtual_hard_disk

stackHciVirtualHardDisk.StackHciVirtualHardDisk(
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
  disk_size_in_gb: typing.Union[int, float],
  location: str,
  name: str,
  resource_group_name: str,
  block_size_in_bytes: typing.Union[int, float] = None,
  disk_file_format: str = None,
  dynamic_enabled: typing.Union[bool, IResolvable] = None,
  hyperv_generation: str = None,
  id: str = None,
  logical_sector_in_bytes: typing.Union[int, float] = None,
  physical_sector_in_bytes: typing.Union[int, float] = None,
  storage_path_id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: StackHciVirtualHardDiskTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.customLocationId">custom_location_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#custom_location_id StackHciVirtualHardDisk#custom_location_id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.diskSizeInGb">disk_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#disk_size_in_gb StackHciVirtualHardDisk#disk_size_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#location StackHciVirtualHardDisk#location}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#name StackHciVirtualHardDisk#name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#resource_group_name StackHciVirtualHardDisk#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.blockSizeInBytes">block_size_in_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#block_size_in_bytes StackHciVirtualHardDisk#block_size_in_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.diskFileFormat">disk_file_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#disk_file_format StackHciVirtualHardDisk#disk_file_format}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.dynamicEnabled">dynamic_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#dynamic_enabled StackHciVirtualHardDisk#dynamic_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.hypervGeneration">hyperv_generation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#hyperv_generation StackHciVirtualHardDisk#hyperv_generation}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#id StackHciVirtualHardDisk#id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.logicalSectorInBytes">logical_sector_in_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#logical_sector_in_bytes StackHciVirtualHardDisk#logical_sector_in_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.physicalSectorInBytes">physical_sector_in_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#physical_sector_in_bytes StackHciVirtualHardDisk#physical_sector_in_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.storagePathId">storage_path_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#storage_path_id StackHciVirtualHardDisk#storage_path_id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#tags StackHciVirtualHardDisk#tags}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts">StackHciVirtualHardDiskTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_location_id`<sup>Required</sup> <a name="custom_location_id" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.customLocationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#custom_location_id StackHciVirtualHardDisk#custom_location_id}.

---

##### `disk_size_in_gb`<sup>Required</sup> <a name="disk_size_in_gb" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.diskSizeInGb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#disk_size_in_gb StackHciVirtualHardDisk#disk_size_in_gb}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#location StackHciVirtualHardDisk#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#name StackHciVirtualHardDisk#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#resource_group_name StackHciVirtualHardDisk#resource_group_name}.

---

##### `block_size_in_bytes`<sup>Optional</sup> <a name="block_size_in_bytes" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.blockSizeInBytes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#block_size_in_bytes StackHciVirtualHardDisk#block_size_in_bytes}.

---

##### `disk_file_format`<sup>Optional</sup> <a name="disk_file_format" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.diskFileFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#disk_file_format StackHciVirtualHardDisk#disk_file_format}.

---

##### `dynamic_enabled`<sup>Optional</sup> <a name="dynamic_enabled" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.dynamicEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#dynamic_enabled StackHciVirtualHardDisk#dynamic_enabled}.

---

##### `hyperv_generation`<sup>Optional</sup> <a name="hyperv_generation" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.hypervGeneration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#hyperv_generation StackHciVirtualHardDisk#hyperv_generation}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#id StackHciVirtualHardDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logical_sector_in_bytes`<sup>Optional</sup> <a name="logical_sector_in_bytes" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.logicalSectorInBytes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#logical_sector_in_bytes StackHciVirtualHardDisk#logical_sector_in_bytes}.

---

##### `physical_sector_in_bytes`<sup>Optional</sup> <a name="physical_sector_in_bytes" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.physicalSectorInBytes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#physical_sector_in_bytes StackHciVirtualHardDisk#physical_sector_in_bytes}.

---

##### `storage_path_id`<sup>Optional</sup> <a name="storage_path_id" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.storagePathId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#storage_path_id StackHciVirtualHardDisk#storage_path_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#tags StackHciVirtualHardDisk#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts">StackHciVirtualHardDiskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#timeouts StackHciVirtualHardDisk#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetBlockSizeInBytes">reset_block_size_in_bytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetDiskFileFormat">reset_disk_file_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetDynamicEnabled">reset_dynamic_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetHypervGeneration">reset_hyperv_generation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetLogicalSectorInBytes">reset_logical_sector_in_bytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetPhysicalSectorInBytes">reset_physical_sector_in_bytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetStoragePathId">reset_storage_path_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#create StackHciVirtualHardDisk#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#delete StackHciVirtualHardDisk#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#read StackHciVirtualHardDisk#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#update StackHciVirtualHardDisk#update}.

---

##### `reset_block_size_in_bytes` <a name="reset_block_size_in_bytes" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetBlockSizeInBytes"></a>

```python
def reset_block_size_in_bytes() -> None
```

##### `reset_disk_file_format` <a name="reset_disk_file_format" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetDiskFileFormat"></a>

```python
def reset_disk_file_format() -> None
```

##### `reset_dynamic_enabled` <a name="reset_dynamic_enabled" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetDynamicEnabled"></a>

```python
def reset_dynamic_enabled() -> None
```

##### `reset_hyperv_generation` <a name="reset_hyperv_generation" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetHypervGeneration"></a>

```python
def reset_hyperv_generation() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_logical_sector_in_bytes` <a name="reset_logical_sector_in_bytes" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetLogicalSectorInBytes"></a>

```python
def reset_logical_sector_in_bytes() -> None
```

##### `reset_physical_sector_in_bytes` <a name="reset_physical_sector_in_bytes" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetPhysicalSectorInBytes"></a>

```python
def reset_physical_sector_in_bytes() -> None
```

##### `reset_storage_path_id` <a name="reset_storage_path_id" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetStoragePathId"></a>

```python
def reset_storage_path_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StackHciVirtualHardDisk resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_virtual_hard_disk

stackHciVirtualHardDisk.StackHciVirtualHardDisk.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_virtual_hard_disk

stackHciVirtualHardDisk.StackHciVirtualHardDisk.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_virtual_hard_disk

stackHciVirtualHardDisk.StackHciVirtualHardDisk.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_virtual_hard_disk

stackHciVirtualHardDisk.StackHciVirtualHardDisk.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StackHciVirtualHardDisk resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StackHciVirtualHardDisk to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StackHciVirtualHardDisk that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StackHciVirtualHardDisk to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference">StackHciVirtualHardDiskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.blockSizeInBytesInput">block_size_in_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.customLocationIdInput">custom_location_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.diskFileFormatInput">disk_file_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.diskSizeInGbInput">disk_size_in_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.dynamicEnabledInput">dynamic_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.hypervGenerationInput">hyperv_generation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.logicalSectorInBytesInput">logical_sector_in_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.physicalSectorInBytesInput">physical_sector_in_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.storagePathIdInput">storage_path_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts">StackHciVirtualHardDiskTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.blockSizeInBytes">block_size_in_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.customLocationId">custom_location_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.diskFileFormat">disk_file_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.diskSizeInGb">disk_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.dynamicEnabled">dynamic_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.hypervGeneration">hyperv_generation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.logicalSectorInBytes">logical_sector_in_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.physicalSectorInBytes">physical_sector_in_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.storagePathId">storage_path_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.timeouts"></a>

```python
timeouts: StackHciVirtualHardDiskTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference">StackHciVirtualHardDiskTimeoutsOutputReference</a>

---

##### `block_size_in_bytes_input`<sup>Optional</sup> <a name="block_size_in_bytes_input" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.blockSizeInBytesInput"></a>

```python
block_size_in_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `custom_location_id_input`<sup>Optional</sup> <a name="custom_location_id_input" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.customLocationIdInput"></a>

```python
custom_location_id_input: str
```

- *Type:* str

---

##### `disk_file_format_input`<sup>Optional</sup> <a name="disk_file_format_input" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.diskFileFormatInput"></a>

```python
disk_file_format_input: str
```

- *Type:* str

---

##### `disk_size_in_gb_input`<sup>Optional</sup> <a name="disk_size_in_gb_input" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.diskSizeInGbInput"></a>

```python
disk_size_in_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dynamic_enabled_input`<sup>Optional</sup> <a name="dynamic_enabled_input" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.dynamicEnabledInput"></a>

```python
dynamic_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hyperv_generation_input`<sup>Optional</sup> <a name="hyperv_generation_input" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.hypervGenerationInput"></a>

```python
hyperv_generation_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `logical_sector_in_bytes_input`<sup>Optional</sup> <a name="logical_sector_in_bytes_input" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.logicalSectorInBytesInput"></a>

```python
logical_sector_in_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `physical_sector_in_bytes_input`<sup>Optional</sup> <a name="physical_sector_in_bytes_input" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.physicalSectorInBytesInput"></a>

```python
physical_sector_in_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `storage_path_id_input`<sup>Optional</sup> <a name="storage_path_id_input" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.storagePathIdInput"></a>

```python
storage_path_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, StackHciVirtualHardDiskTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts">StackHciVirtualHardDiskTimeouts</a>]

---

##### `block_size_in_bytes`<sup>Required</sup> <a name="block_size_in_bytes" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.blockSizeInBytes"></a>

```python
block_size_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `custom_location_id`<sup>Required</sup> <a name="custom_location_id" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.customLocationId"></a>

```python
custom_location_id: str
```

- *Type:* str

---

##### `disk_file_format`<sup>Required</sup> <a name="disk_file_format" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.diskFileFormat"></a>

```python
disk_file_format: str
```

- *Type:* str

---

##### `disk_size_in_gb`<sup>Required</sup> <a name="disk_size_in_gb" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.diskSizeInGb"></a>

```python
disk_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dynamic_enabled`<sup>Required</sup> <a name="dynamic_enabled" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.dynamicEnabled"></a>

```python
dynamic_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hyperv_generation`<sup>Required</sup> <a name="hyperv_generation" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.hypervGeneration"></a>

```python
hyperv_generation: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `logical_sector_in_bytes`<sup>Required</sup> <a name="logical_sector_in_bytes" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.logicalSectorInBytes"></a>

```python
logical_sector_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `physical_sector_in_bytes`<sup>Required</sup> <a name="physical_sector_in_bytes" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.physicalSectorInBytes"></a>

```python
physical_sector_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `storage_path_id`<sup>Required</sup> <a name="storage_path_id" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.storagePathId"></a>

```python
storage_path_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StackHciVirtualHardDiskConfig <a name="StackHciVirtualHardDiskConfig" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_virtual_hard_disk

stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  custom_location_id: str,
  disk_size_in_gb: typing.Union[int, float],
  location: str,
  name: str,
  resource_group_name: str,
  block_size_in_bytes: typing.Union[int, float] = None,
  disk_file_format: str = None,
  dynamic_enabled: typing.Union[bool, IResolvable] = None,
  hyperv_generation: str = None,
  id: str = None,
  logical_sector_in_bytes: typing.Union[int, float] = None,
  physical_sector_in_bytes: typing.Union[int, float] = None,
  storage_path_id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: StackHciVirtualHardDiskTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.customLocationId">custom_location_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#custom_location_id StackHciVirtualHardDisk#custom_location_id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.diskSizeInGb">disk_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#disk_size_in_gb StackHciVirtualHardDisk#disk_size_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#location StackHciVirtualHardDisk#location}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#name StackHciVirtualHardDisk#name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#resource_group_name StackHciVirtualHardDisk#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.blockSizeInBytes">block_size_in_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#block_size_in_bytes StackHciVirtualHardDisk#block_size_in_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.diskFileFormat">disk_file_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#disk_file_format StackHciVirtualHardDisk#disk_file_format}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.dynamicEnabled">dynamic_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#dynamic_enabled StackHciVirtualHardDisk#dynamic_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.hypervGeneration">hyperv_generation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#hyperv_generation StackHciVirtualHardDisk#hyperv_generation}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#id StackHciVirtualHardDisk#id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.logicalSectorInBytes">logical_sector_in_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#logical_sector_in_bytes StackHciVirtualHardDisk#logical_sector_in_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.physicalSectorInBytes">physical_sector_in_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#physical_sector_in_bytes StackHciVirtualHardDisk#physical_sector_in_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.storagePathId">storage_path_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#storage_path_id StackHciVirtualHardDisk#storage_path_id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#tags StackHciVirtualHardDisk#tags}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts">StackHciVirtualHardDiskTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_location_id`<sup>Required</sup> <a name="custom_location_id" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.customLocationId"></a>

```python
custom_location_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#custom_location_id StackHciVirtualHardDisk#custom_location_id}.

---

##### `disk_size_in_gb`<sup>Required</sup> <a name="disk_size_in_gb" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.diskSizeInGb"></a>

```python
disk_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#disk_size_in_gb StackHciVirtualHardDisk#disk_size_in_gb}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#location StackHciVirtualHardDisk#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#name StackHciVirtualHardDisk#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#resource_group_name StackHciVirtualHardDisk#resource_group_name}.

---

##### `block_size_in_bytes`<sup>Optional</sup> <a name="block_size_in_bytes" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.blockSizeInBytes"></a>

```python
block_size_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#block_size_in_bytes StackHciVirtualHardDisk#block_size_in_bytes}.

---

##### `disk_file_format`<sup>Optional</sup> <a name="disk_file_format" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.diskFileFormat"></a>

```python
disk_file_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#disk_file_format StackHciVirtualHardDisk#disk_file_format}.

---

##### `dynamic_enabled`<sup>Optional</sup> <a name="dynamic_enabled" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.dynamicEnabled"></a>

```python
dynamic_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#dynamic_enabled StackHciVirtualHardDisk#dynamic_enabled}.

---

##### `hyperv_generation`<sup>Optional</sup> <a name="hyperv_generation" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.hypervGeneration"></a>

```python
hyperv_generation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#hyperv_generation StackHciVirtualHardDisk#hyperv_generation}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#id StackHciVirtualHardDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logical_sector_in_bytes`<sup>Optional</sup> <a name="logical_sector_in_bytes" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.logicalSectorInBytes"></a>

```python
logical_sector_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#logical_sector_in_bytes StackHciVirtualHardDisk#logical_sector_in_bytes}.

---

##### `physical_sector_in_bytes`<sup>Optional</sup> <a name="physical_sector_in_bytes" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.physicalSectorInBytes"></a>

```python
physical_sector_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#physical_sector_in_bytes StackHciVirtualHardDisk#physical_sector_in_bytes}.

---

##### `storage_path_id`<sup>Optional</sup> <a name="storage_path_id" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.storagePathId"></a>

```python
storage_path_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#storage_path_id StackHciVirtualHardDisk#storage_path_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#tags StackHciVirtualHardDisk#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.timeouts"></a>

```python
timeouts: StackHciVirtualHardDiskTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts">StackHciVirtualHardDiskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#timeouts StackHciVirtualHardDisk#timeouts}

---

### StackHciVirtualHardDiskTimeouts <a name="StackHciVirtualHardDiskTimeouts" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_virtual_hard_disk

stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#create StackHciVirtualHardDisk#create}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#delete StackHciVirtualHardDisk#delete}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#read StackHciVirtualHardDisk#read}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#update StackHciVirtualHardDisk#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#create StackHciVirtualHardDisk#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#delete StackHciVirtualHardDisk#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#read StackHciVirtualHardDisk#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/stack_hci_virtual_hard_disk#update StackHciVirtualHardDisk#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackHciVirtualHardDiskTimeoutsOutputReference <a name="StackHciVirtualHardDiskTimeoutsOutputReference" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_virtual_hard_disk

stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts">StackHciVirtualHardDiskTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StackHciVirtualHardDiskTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts">StackHciVirtualHardDiskTimeouts</a>]

---



