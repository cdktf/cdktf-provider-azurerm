# `virtualMachineScaleSetPacketCapture` Submodule <a name="`virtualMachineScaleSetPacketCapture` Submodule" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachineScaleSetPacketCapture <a name="VirtualMachineScaleSetPacketCapture" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture azurerm_virtual_machine_scale_set_packet_capture}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_scale_set_packet_capture

virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  network_watcher_id: str,
  storage_location: VirtualMachineScaleSetPacketCaptureStorageLocation,
  virtual_machine_scale_set_id: str,
  filter: typing.Union[IResolvable, typing.List[VirtualMachineScaleSetPacketCaptureFilter]] = None,
  id: str = None,
  machine_scope: VirtualMachineScaleSetPacketCaptureMachineScope = None,
  maximum_bytes_per_packet: typing.Union[int, float] = None,
  maximum_bytes_per_session: typing.Union[int, float] = None,
  maximum_capture_duration_in_seconds: typing.Union[int, float] = None,
  timeouts: VirtualMachineScaleSetPacketCaptureTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#name VirtualMachineScaleSetPacketCapture#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.networkWatcherId">network_watcher_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#network_watcher_id VirtualMachineScaleSetPacketCapture#network_watcher_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.storageLocation">storage_location</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocation">VirtualMachineScaleSetPacketCaptureStorageLocation</a></code> | storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.virtualMachineScaleSetId">virtual_machine_scale_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#virtual_machine_scale_set_id VirtualMachineScaleSetPacketCapture#virtual_machine_scale_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilter">VirtualMachineScaleSetPacketCaptureFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#id VirtualMachineScaleSetPacketCapture#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.machineScope">machine_scope</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScope">VirtualMachineScaleSetPacketCaptureMachineScope</a></code> | machine_scope block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.maximumBytesPerPacket">maximum_bytes_per_packet</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#maximum_bytes_per_packet VirtualMachineScaleSetPacketCapture#maximum_bytes_per_packet}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.maximumBytesPerSession">maximum_bytes_per_session</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#maximum_bytes_per_session VirtualMachineScaleSetPacketCapture#maximum_bytes_per_session}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.maximumCaptureDurationInSeconds">maximum_capture_duration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#maximum_capture_duration_in_seconds VirtualMachineScaleSetPacketCapture#maximum_capture_duration_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeouts">VirtualMachineScaleSetPacketCaptureTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#name VirtualMachineScaleSetPacketCapture#name}.

---

##### `network_watcher_id`<sup>Required</sup> <a name="network_watcher_id" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.networkWatcherId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#network_watcher_id VirtualMachineScaleSetPacketCapture#network_watcher_id}.

---

##### `storage_location`<sup>Required</sup> <a name="storage_location" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.storageLocation"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocation">VirtualMachineScaleSetPacketCaptureStorageLocation</a>

storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#storage_location VirtualMachineScaleSetPacketCapture#storage_location}

---

##### `virtual_machine_scale_set_id`<sup>Required</sup> <a name="virtual_machine_scale_set_id" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.virtualMachineScaleSetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#virtual_machine_scale_set_id VirtualMachineScaleSetPacketCapture#virtual_machine_scale_set_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilter">VirtualMachineScaleSetPacketCaptureFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#filter VirtualMachineScaleSetPacketCapture#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#id VirtualMachineScaleSetPacketCapture#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `machine_scope`<sup>Optional</sup> <a name="machine_scope" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.machineScope"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScope">VirtualMachineScaleSetPacketCaptureMachineScope</a>

machine_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#machine_scope VirtualMachineScaleSetPacketCapture#machine_scope}

---

##### `maximum_bytes_per_packet`<sup>Optional</sup> <a name="maximum_bytes_per_packet" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.maximumBytesPerPacket"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#maximum_bytes_per_packet VirtualMachineScaleSetPacketCapture#maximum_bytes_per_packet}.

---

##### `maximum_bytes_per_session`<sup>Optional</sup> <a name="maximum_bytes_per_session" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.maximumBytesPerSession"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#maximum_bytes_per_session VirtualMachineScaleSetPacketCapture#maximum_bytes_per_session}.

---

##### `maximum_capture_duration_in_seconds`<sup>Optional</sup> <a name="maximum_capture_duration_in_seconds" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.maximumCaptureDurationInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#maximum_capture_duration_in_seconds VirtualMachineScaleSetPacketCapture#maximum_capture_duration_in_seconds}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeouts">VirtualMachineScaleSetPacketCaptureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#timeouts VirtualMachineScaleSetPacketCapture#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.putMachineScope">put_machine_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.putStorageLocation">put_storage_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.resetMachineScope">reset_machine_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.resetMaximumBytesPerPacket">reset_maximum_bytes_per_packet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.resetMaximumBytesPerSession">reset_maximum_bytes_per_session</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.resetMaximumCaptureDurationInSeconds">reset_maximum_capture_duration_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[VirtualMachineScaleSetPacketCaptureFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilter">VirtualMachineScaleSetPacketCaptureFilter</a>]]

---

##### `put_machine_scope` <a name="put_machine_scope" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.putMachineScope"></a>

```python
def put_machine_scope(
  exclude_instance_ids: typing.List[str] = None,
  include_instance_ids: typing.List[str] = None
) -> None
```

###### `exclude_instance_ids`<sup>Optional</sup> <a name="exclude_instance_ids" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.putMachineScope.parameter.excludeInstanceIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#exclude_instance_ids VirtualMachineScaleSetPacketCapture#exclude_instance_ids}.

---

###### `include_instance_ids`<sup>Optional</sup> <a name="include_instance_ids" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.putMachineScope.parameter.includeInstanceIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#include_instance_ids VirtualMachineScaleSetPacketCapture#include_instance_ids}.

---

##### `put_storage_location` <a name="put_storage_location" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.putStorageLocation"></a>

```python
def put_storage_location(
  file_path: str = None,
  storage_account_id: str = None
) -> None
```

###### `file_path`<sup>Optional</sup> <a name="file_path" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.putStorageLocation.parameter.filePath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#file_path VirtualMachineScaleSetPacketCapture#file_path}.

---

###### `storage_account_id`<sup>Optional</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.putStorageLocation.parameter.storageAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#storage_account_id VirtualMachineScaleSetPacketCapture#storage_account_id}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#create VirtualMachineScaleSetPacketCapture#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#delete VirtualMachineScaleSetPacketCapture#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#read VirtualMachineScaleSetPacketCapture#read}.

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_machine_scope` <a name="reset_machine_scope" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.resetMachineScope"></a>

```python
def reset_machine_scope() -> None
```

##### `reset_maximum_bytes_per_packet` <a name="reset_maximum_bytes_per_packet" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.resetMaximumBytesPerPacket"></a>

```python
def reset_maximum_bytes_per_packet() -> None
```

##### `reset_maximum_bytes_per_session` <a name="reset_maximum_bytes_per_session" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.resetMaximumBytesPerSession"></a>

```python
def reset_maximum_bytes_per_session() -> None
```

##### `reset_maximum_capture_duration_in_seconds` <a name="reset_maximum_capture_duration_in_seconds" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.resetMaximumCaptureDurationInSeconds"></a>

```python
def reset_maximum_capture_duration_in_seconds() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VirtualMachineScaleSetPacketCapture resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_scale_set_packet_capture

virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_scale_set_packet_capture

virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_scale_set_packet_capture

virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_scale_set_packet_capture

virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VirtualMachineScaleSetPacketCapture resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VirtualMachineScaleSetPacketCapture to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VirtualMachineScaleSetPacketCapture that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VirtualMachineScaleSetPacketCapture to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList">VirtualMachineScaleSetPacketCaptureFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.machineScope">machine_scope</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference">VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.storageLocation">storage_location</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference">VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference">VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilter">VirtualMachineScaleSetPacketCaptureFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.machineScopeInput">machine_scope_input</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScope">VirtualMachineScaleSetPacketCaptureMachineScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.maximumBytesPerPacketInput">maximum_bytes_per_packet_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.maximumBytesPerSessionInput">maximum_bytes_per_session_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.maximumCaptureDurationInSecondsInput">maximum_capture_duration_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.networkWatcherIdInput">network_watcher_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.storageLocationInput">storage_location_input</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocation">VirtualMachineScaleSetPacketCaptureStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeouts">VirtualMachineScaleSetPacketCaptureTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.virtualMachineScaleSetIdInput">virtual_machine_scale_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.maximumBytesPerPacket">maximum_bytes_per_packet</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.maximumBytesPerSession">maximum_bytes_per_session</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.maximumCaptureDurationInSeconds">maximum_capture_duration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.networkWatcherId">network_watcher_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.virtualMachineScaleSetId">virtual_machine_scale_set_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.filter"></a>

```python
filter: VirtualMachineScaleSetPacketCaptureFilterList
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList">VirtualMachineScaleSetPacketCaptureFilterList</a>

---

##### `machine_scope`<sup>Required</sup> <a name="machine_scope" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.machineScope"></a>

```python
machine_scope: VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference">VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference</a>

---

##### `storage_location`<sup>Required</sup> <a name="storage_location" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.storageLocation"></a>

```python
storage_location: VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference">VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.timeouts"></a>

```python
timeouts: VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference">VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[VirtualMachineScaleSetPacketCaptureFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilter">VirtualMachineScaleSetPacketCaptureFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `machine_scope_input`<sup>Optional</sup> <a name="machine_scope_input" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.machineScopeInput"></a>

```python
machine_scope_input: VirtualMachineScaleSetPacketCaptureMachineScope
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScope">VirtualMachineScaleSetPacketCaptureMachineScope</a>

---

##### `maximum_bytes_per_packet_input`<sup>Optional</sup> <a name="maximum_bytes_per_packet_input" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.maximumBytesPerPacketInput"></a>

```python
maximum_bytes_per_packet_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_bytes_per_session_input`<sup>Optional</sup> <a name="maximum_bytes_per_session_input" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.maximumBytesPerSessionInput"></a>

```python
maximum_bytes_per_session_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_capture_duration_in_seconds_input`<sup>Optional</sup> <a name="maximum_capture_duration_in_seconds_input" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.maximumCaptureDurationInSecondsInput"></a>

```python
maximum_capture_duration_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_watcher_id_input`<sup>Optional</sup> <a name="network_watcher_id_input" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.networkWatcherIdInput"></a>

```python
network_watcher_id_input: str
```

- *Type:* str

---

##### `storage_location_input`<sup>Optional</sup> <a name="storage_location_input" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.storageLocationInput"></a>

```python
storage_location_input: VirtualMachineScaleSetPacketCaptureStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocation">VirtualMachineScaleSetPacketCaptureStorageLocation</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VirtualMachineScaleSetPacketCaptureTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeouts">VirtualMachineScaleSetPacketCaptureTimeouts</a>]

---

##### `virtual_machine_scale_set_id_input`<sup>Optional</sup> <a name="virtual_machine_scale_set_id_input" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.virtualMachineScaleSetIdInput"></a>

```python
virtual_machine_scale_set_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `maximum_bytes_per_packet`<sup>Required</sup> <a name="maximum_bytes_per_packet" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.maximumBytesPerPacket"></a>

```python
maximum_bytes_per_packet: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_bytes_per_session`<sup>Required</sup> <a name="maximum_bytes_per_session" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.maximumBytesPerSession"></a>

```python
maximum_bytes_per_session: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_capture_duration_in_seconds`<sup>Required</sup> <a name="maximum_capture_duration_in_seconds" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.maximumCaptureDurationInSeconds"></a>

```python
maximum_capture_duration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_watcher_id`<sup>Required</sup> <a name="network_watcher_id" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.networkWatcherId"></a>

```python
network_watcher_id: str
```

- *Type:* str

---

##### `virtual_machine_scale_set_id`<sup>Required</sup> <a name="virtual_machine_scale_set_id" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.virtualMachineScaleSetId"></a>

```python
virtual_machine_scale_set_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineScaleSetPacketCaptureConfig <a name="VirtualMachineScaleSetPacketCaptureConfig" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_scale_set_packet_capture

virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  network_watcher_id: str,
  storage_location: VirtualMachineScaleSetPacketCaptureStorageLocation,
  virtual_machine_scale_set_id: str,
  filter: typing.Union[IResolvable, typing.List[VirtualMachineScaleSetPacketCaptureFilter]] = None,
  id: str = None,
  machine_scope: VirtualMachineScaleSetPacketCaptureMachineScope = None,
  maximum_bytes_per_packet: typing.Union[int, float] = None,
  maximum_bytes_per_session: typing.Union[int, float] = None,
  maximum_capture_duration_in_seconds: typing.Union[int, float] = None,
  timeouts: VirtualMachineScaleSetPacketCaptureTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#name VirtualMachineScaleSetPacketCapture#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.networkWatcherId">network_watcher_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#network_watcher_id VirtualMachineScaleSetPacketCapture#network_watcher_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.storageLocation">storage_location</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocation">VirtualMachineScaleSetPacketCaptureStorageLocation</a></code> | storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.virtualMachineScaleSetId">virtual_machine_scale_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#virtual_machine_scale_set_id VirtualMachineScaleSetPacketCapture#virtual_machine_scale_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilter">VirtualMachineScaleSetPacketCaptureFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#id VirtualMachineScaleSetPacketCapture#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.machineScope">machine_scope</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScope">VirtualMachineScaleSetPacketCaptureMachineScope</a></code> | machine_scope block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.maximumBytesPerPacket">maximum_bytes_per_packet</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#maximum_bytes_per_packet VirtualMachineScaleSetPacketCapture#maximum_bytes_per_packet}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.maximumBytesPerSession">maximum_bytes_per_session</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#maximum_bytes_per_session VirtualMachineScaleSetPacketCapture#maximum_bytes_per_session}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.maximumCaptureDurationInSeconds">maximum_capture_duration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#maximum_capture_duration_in_seconds VirtualMachineScaleSetPacketCapture#maximum_capture_duration_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeouts">VirtualMachineScaleSetPacketCaptureTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#name VirtualMachineScaleSetPacketCapture#name}.

---

##### `network_watcher_id`<sup>Required</sup> <a name="network_watcher_id" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.networkWatcherId"></a>

```python
network_watcher_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#network_watcher_id VirtualMachineScaleSetPacketCapture#network_watcher_id}.

---

##### `storage_location`<sup>Required</sup> <a name="storage_location" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.storageLocation"></a>

```python
storage_location: VirtualMachineScaleSetPacketCaptureStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocation">VirtualMachineScaleSetPacketCaptureStorageLocation</a>

storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#storage_location VirtualMachineScaleSetPacketCapture#storage_location}

---

##### `virtual_machine_scale_set_id`<sup>Required</sup> <a name="virtual_machine_scale_set_id" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.virtualMachineScaleSetId"></a>

```python
virtual_machine_scale_set_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#virtual_machine_scale_set_id VirtualMachineScaleSetPacketCapture#virtual_machine_scale_set_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[VirtualMachineScaleSetPacketCaptureFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilter">VirtualMachineScaleSetPacketCaptureFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#filter VirtualMachineScaleSetPacketCapture#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#id VirtualMachineScaleSetPacketCapture#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `machine_scope`<sup>Optional</sup> <a name="machine_scope" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.machineScope"></a>

```python
machine_scope: VirtualMachineScaleSetPacketCaptureMachineScope
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScope">VirtualMachineScaleSetPacketCaptureMachineScope</a>

machine_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#machine_scope VirtualMachineScaleSetPacketCapture#machine_scope}

---

##### `maximum_bytes_per_packet`<sup>Optional</sup> <a name="maximum_bytes_per_packet" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.maximumBytesPerPacket"></a>

```python
maximum_bytes_per_packet: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#maximum_bytes_per_packet VirtualMachineScaleSetPacketCapture#maximum_bytes_per_packet}.

---

##### `maximum_bytes_per_session`<sup>Optional</sup> <a name="maximum_bytes_per_session" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.maximumBytesPerSession"></a>

```python
maximum_bytes_per_session: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#maximum_bytes_per_session VirtualMachineScaleSetPacketCapture#maximum_bytes_per_session}.

---

##### `maximum_capture_duration_in_seconds`<sup>Optional</sup> <a name="maximum_capture_duration_in_seconds" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.maximumCaptureDurationInSeconds"></a>

```python
maximum_capture_duration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#maximum_capture_duration_in_seconds VirtualMachineScaleSetPacketCapture#maximum_capture_duration_in_seconds}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.timeouts"></a>

```python
timeouts: VirtualMachineScaleSetPacketCaptureTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeouts">VirtualMachineScaleSetPacketCaptureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#timeouts VirtualMachineScaleSetPacketCapture#timeouts}

---

### VirtualMachineScaleSetPacketCaptureFilter <a name="VirtualMachineScaleSetPacketCaptureFilter" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_scale_set_packet_capture

virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilter(
  protocol: str,
  local_ip_address: str = None,
  local_port: str = None,
  remote_ip_address: str = None,
  remote_port: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilter.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#protocol VirtualMachineScaleSetPacketCapture#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilter.property.localIpAddress">local_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#local_ip_address VirtualMachineScaleSetPacketCapture#local_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilter.property.localPort">local_port</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#local_port VirtualMachineScaleSetPacketCapture#local_port}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilter.property.remoteIpAddress">remote_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#remote_ip_address VirtualMachineScaleSetPacketCapture#remote_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilter.property.remotePort">remote_port</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#remote_port VirtualMachineScaleSetPacketCapture#remote_port}. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilter.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#protocol VirtualMachineScaleSetPacketCapture#protocol}.

---

##### `local_ip_address`<sup>Optional</sup> <a name="local_ip_address" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilter.property.localIpAddress"></a>

```python
local_ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#local_ip_address VirtualMachineScaleSetPacketCapture#local_ip_address}.

---

##### `local_port`<sup>Optional</sup> <a name="local_port" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilter.property.localPort"></a>

```python
local_port: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#local_port VirtualMachineScaleSetPacketCapture#local_port}.

---

##### `remote_ip_address`<sup>Optional</sup> <a name="remote_ip_address" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilter.property.remoteIpAddress"></a>

```python
remote_ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#remote_ip_address VirtualMachineScaleSetPacketCapture#remote_ip_address}.

---

##### `remote_port`<sup>Optional</sup> <a name="remote_port" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilter.property.remotePort"></a>

```python
remote_port: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#remote_port VirtualMachineScaleSetPacketCapture#remote_port}.

---

### VirtualMachineScaleSetPacketCaptureMachineScope <a name="VirtualMachineScaleSetPacketCaptureMachineScope" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScope.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_scale_set_packet_capture

virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScope(
  exclude_instance_ids: typing.List[str] = None,
  include_instance_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScope.property.excludeInstanceIds">exclude_instance_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#exclude_instance_ids VirtualMachineScaleSetPacketCapture#exclude_instance_ids}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScope.property.includeInstanceIds">include_instance_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#include_instance_ids VirtualMachineScaleSetPacketCapture#include_instance_ids}. |

---

##### `exclude_instance_ids`<sup>Optional</sup> <a name="exclude_instance_ids" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScope.property.excludeInstanceIds"></a>

```python
exclude_instance_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#exclude_instance_ids VirtualMachineScaleSetPacketCapture#exclude_instance_ids}.

---

##### `include_instance_ids`<sup>Optional</sup> <a name="include_instance_ids" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScope.property.includeInstanceIds"></a>

```python
include_instance_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#include_instance_ids VirtualMachineScaleSetPacketCapture#include_instance_ids}.

---

### VirtualMachineScaleSetPacketCaptureStorageLocation <a name="VirtualMachineScaleSetPacketCaptureStorageLocation" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_scale_set_packet_capture

virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocation(
  file_path: str = None,
  storage_account_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocation.property.filePath">file_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#file_path VirtualMachineScaleSetPacketCapture#file_path}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocation.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#storage_account_id VirtualMachineScaleSetPacketCapture#storage_account_id}. |

---

##### `file_path`<sup>Optional</sup> <a name="file_path" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocation.property.filePath"></a>

```python
file_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#file_path VirtualMachineScaleSetPacketCapture#file_path}.

---

##### `storage_account_id`<sup>Optional</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocation.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#storage_account_id VirtualMachineScaleSetPacketCapture#storage_account_id}.

---

### VirtualMachineScaleSetPacketCaptureTimeouts <a name="VirtualMachineScaleSetPacketCaptureTimeouts" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_scale_set_packet_capture

virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#create VirtualMachineScaleSetPacketCapture#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#delete VirtualMachineScaleSetPacketCapture#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#read VirtualMachineScaleSetPacketCapture#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#create VirtualMachineScaleSetPacketCapture#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#delete VirtualMachineScaleSetPacketCapture#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_scale_set_packet_capture#read VirtualMachineScaleSetPacketCapture#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualMachineScaleSetPacketCaptureFilterList <a name="VirtualMachineScaleSetPacketCaptureFilterList" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_scale_set_packet_capture

virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VirtualMachineScaleSetPacketCaptureFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilter">VirtualMachineScaleSetPacketCaptureFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VirtualMachineScaleSetPacketCaptureFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilter">VirtualMachineScaleSetPacketCaptureFilter</a>]]

---


### VirtualMachineScaleSetPacketCaptureFilterOutputReference <a name="VirtualMachineScaleSetPacketCaptureFilterOutputReference" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_scale_set_packet_capture

virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.resetLocalIpAddress">reset_local_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.resetLocalPort">reset_local_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.resetRemoteIpAddress">reset_remote_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.resetRemotePort">reset_remote_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_local_ip_address` <a name="reset_local_ip_address" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.resetLocalIpAddress"></a>

```python
def reset_local_ip_address() -> None
```

##### `reset_local_port` <a name="reset_local_port" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.resetLocalPort"></a>

```python
def reset_local_port() -> None
```

##### `reset_remote_ip_address` <a name="reset_remote_ip_address" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.resetRemoteIpAddress"></a>

```python
def reset_remote_ip_address() -> None
```

##### `reset_remote_port` <a name="reset_remote_port" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.resetRemotePort"></a>

```python
def reset_remote_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.localIpAddressInput">local_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.localPortInput">local_port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.remoteIpAddressInput">remote_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.remotePortInput">remote_port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.localIpAddress">local_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.localPort">local_port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.remoteIpAddress">remote_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.remotePort">remote_port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilter">VirtualMachineScaleSetPacketCaptureFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `local_ip_address_input`<sup>Optional</sup> <a name="local_ip_address_input" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.localIpAddressInput"></a>

```python
local_ip_address_input: str
```

- *Type:* str

---

##### `local_port_input`<sup>Optional</sup> <a name="local_port_input" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.localPortInput"></a>

```python
local_port_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `remote_ip_address_input`<sup>Optional</sup> <a name="remote_ip_address_input" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.remoteIpAddressInput"></a>

```python
remote_ip_address_input: str
```

- *Type:* str

---

##### `remote_port_input`<sup>Optional</sup> <a name="remote_port_input" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.remotePortInput"></a>

```python
remote_port_input: str
```

- *Type:* str

---

##### `local_ip_address`<sup>Required</sup> <a name="local_ip_address" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.localIpAddress"></a>

```python
local_ip_address: str
```

- *Type:* str

---

##### `local_port`<sup>Required</sup> <a name="local_port" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.localPort"></a>

```python
local_port: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `remote_ip_address`<sup>Required</sup> <a name="remote_ip_address" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.remoteIpAddress"></a>

```python
remote_ip_address: str
```

- *Type:* str

---

##### `remote_port`<sup>Required</sup> <a name="remote_port" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.remotePort"></a>

```python
remote_port: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VirtualMachineScaleSetPacketCaptureFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilter">VirtualMachineScaleSetPacketCaptureFilter</a>]

---


### VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference <a name="VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_scale_set_packet_capture

virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.resetExcludeInstanceIds">reset_exclude_instance_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.resetIncludeInstanceIds">reset_include_instance_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exclude_instance_ids` <a name="reset_exclude_instance_ids" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.resetExcludeInstanceIds"></a>

```python
def reset_exclude_instance_ids() -> None
```

##### `reset_include_instance_ids` <a name="reset_include_instance_ids" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.resetIncludeInstanceIds"></a>

```python
def reset_include_instance_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.property.excludeInstanceIdsInput">exclude_instance_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.property.includeInstanceIdsInput">include_instance_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.property.excludeInstanceIds">exclude_instance_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.property.includeInstanceIds">include_instance_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScope">VirtualMachineScaleSetPacketCaptureMachineScope</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude_instance_ids_input`<sup>Optional</sup> <a name="exclude_instance_ids_input" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.property.excludeInstanceIdsInput"></a>

```python
exclude_instance_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_instance_ids_input`<sup>Optional</sup> <a name="include_instance_ids_input" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.property.includeInstanceIdsInput"></a>

```python
include_instance_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclude_instance_ids`<sup>Required</sup> <a name="exclude_instance_ids" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.property.excludeInstanceIds"></a>

```python
exclude_instance_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_instance_ids`<sup>Required</sup> <a name="include_instance_ids" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.property.includeInstanceIds"></a>

```python
include_instance_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.property.internalValue"></a>

```python
internal_value: VirtualMachineScaleSetPacketCaptureMachineScope
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScope">VirtualMachineScaleSetPacketCaptureMachineScope</a>

---


### VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference <a name="VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_scale_set_packet_capture

virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.resetFilePath">reset_file_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.resetStorageAccountId">reset_storage_account_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_file_path` <a name="reset_file_path" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.resetFilePath"></a>

```python
def reset_file_path() -> None
```

##### `reset_storage_account_id` <a name="reset_storage_account_id" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.resetStorageAccountId"></a>

```python
def reset_storage_account_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.property.storagePath">storage_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.property.filePathInput">file_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.property.storageAccountIdInput">storage_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.property.filePath">file_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocation">VirtualMachineScaleSetPacketCaptureStorageLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `storage_path`<sup>Required</sup> <a name="storage_path" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.property.storagePath"></a>

```python
storage_path: str
```

- *Type:* str

---

##### `file_path_input`<sup>Optional</sup> <a name="file_path_input" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.property.filePathInput"></a>

```python
file_path_input: str
```

- *Type:* str

---

##### `storage_account_id_input`<sup>Optional</sup> <a name="storage_account_id_input" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.property.storageAccountIdInput"></a>

```python
storage_account_id_input: str
```

- *Type:* str

---

##### `file_path`<sup>Required</sup> <a name="file_path" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.property.filePath"></a>

```python
file_path: str
```

- *Type:* str

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.property.internalValue"></a>

```python
internal_value: VirtualMachineScaleSetPacketCaptureStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocation">VirtualMachineScaleSetPacketCaptureStorageLocation</a>

---


### VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference <a name="VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_scale_set_packet_capture

virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeouts">VirtualMachineScaleSetPacketCaptureTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VirtualMachineScaleSetPacketCaptureTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeouts">VirtualMachineScaleSetPacketCaptureTimeouts</a>]

---



