# `azurerm_virtual_machine_packet_capture`

Refer to the Terraform Registory for docs: [`azurerm_virtual_machine_packet_capture`](https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture).

# `virtualMachinePacketCapture` Submodule <a name="`virtualMachinePacketCapture` Submodule" id="@cdktf/provider-azurerm.virtualMachinePacketCapture"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachinePacketCapture <a name="VirtualMachinePacketCapture" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture azurerm_virtual_machine_packet_capture}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_packet_capture

virtualMachinePacketCapture.VirtualMachinePacketCapture(
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
  storage_location: VirtualMachinePacketCaptureStorageLocation,
  virtual_machine_id: str,
  filter: typing.Union[IResolvable, typing.List[VirtualMachinePacketCaptureFilter]] = None,
  id: str = None,
  maximum_bytes_per_packet: typing.Union[int, float] = None,
  maximum_bytes_per_session: typing.Union[int, float] = None,
  maximum_capture_duration_in_seconds: typing.Union[int, float] = None,
  timeouts: VirtualMachinePacketCaptureTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#name VirtualMachinePacketCapture#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.networkWatcherId">network_watcher_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#network_watcher_id VirtualMachinePacketCapture#network_watcher_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.storageLocation">storage_location</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation">VirtualMachinePacketCaptureStorageLocation</a></code> | storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.virtualMachineId">virtual_machine_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#virtual_machine_id VirtualMachinePacketCapture#virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter">VirtualMachinePacketCaptureFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#id VirtualMachinePacketCapture#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.maximumBytesPerPacket">maximum_bytes_per_packet</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#maximum_bytes_per_packet VirtualMachinePacketCapture#maximum_bytes_per_packet}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.maximumBytesPerSession">maximum_bytes_per_session</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#maximum_bytes_per_session VirtualMachinePacketCapture#maximum_bytes_per_session}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.maximumCaptureDurationInSeconds">maximum_capture_duration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#maximum_capture_duration_in_seconds VirtualMachinePacketCapture#maximum_capture_duration_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts">VirtualMachinePacketCaptureTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#name VirtualMachinePacketCapture#name}.

---

##### `network_watcher_id`<sup>Required</sup> <a name="network_watcher_id" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.networkWatcherId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#network_watcher_id VirtualMachinePacketCapture#network_watcher_id}.

---

##### `storage_location`<sup>Required</sup> <a name="storage_location" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.storageLocation"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation">VirtualMachinePacketCaptureStorageLocation</a>

storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#storage_location VirtualMachinePacketCapture#storage_location}

---

##### `virtual_machine_id`<sup>Required</sup> <a name="virtual_machine_id" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.virtualMachineId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#virtual_machine_id VirtualMachinePacketCapture#virtual_machine_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter">VirtualMachinePacketCaptureFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#filter VirtualMachinePacketCapture#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#id VirtualMachinePacketCapture#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maximum_bytes_per_packet`<sup>Optional</sup> <a name="maximum_bytes_per_packet" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.maximumBytesPerPacket"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#maximum_bytes_per_packet VirtualMachinePacketCapture#maximum_bytes_per_packet}.

---

##### `maximum_bytes_per_session`<sup>Optional</sup> <a name="maximum_bytes_per_session" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.maximumBytesPerSession"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#maximum_bytes_per_session VirtualMachinePacketCapture#maximum_bytes_per_session}.

---

##### `maximum_capture_duration_in_seconds`<sup>Optional</sup> <a name="maximum_capture_duration_in_seconds" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.maximumCaptureDurationInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#maximum_capture_duration_in_seconds VirtualMachinePacketCapture#maximum_capture_duration_in_seconds}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts">VirtualMachinePacketCaptureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#timeouts VirtualMachinePacketCapture#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.putStorageLocation">put_storage_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetMaximumBytesPerPacket">reset_maximum_bytes_per_packet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetMaximumBytesPerSession">reset_maximum_bytes_per_session</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetMaximumCaptureDurationInSeconds">reset_maximum_capture_duration_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[VirtualMachinePacketCaptureFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter">VirtualMachinePacketCaptureFilter</a>]]

---

##### `put_storage_location` <a name="put_storage_location" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.putStorageLocation"></a>

```python
def put_storage_location(
  file_path: str = None,
  storage_account_id: str = None
) -> None
```

###### `file_path`<sup>Optional</sup> <a name="file_path" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.putStorageLocation.parameter.filePath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#file_path VirtualMachinePacketCapture#file_path}.

---

###### `storage_account_id`<sup>Optional</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.putStorageLocation.parameter.storageAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#storage_account_id VirtualMachinePacketCapture#storage_account_id}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#create VirtualMachinePacketCapture#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#delete VirtualMachinePacketCapture#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#read VirtualMachinePacketCapture#read}.

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_maximum_bytes_per_packet` <a name="reset_maximum_bytes_per_packet" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetMaximumBytesPerPacket"></a>

```python
def reset_maximum_bytes_per_packet() -> None
```

##### `reset_maximum_bytes_per_session` <a name="reset_maximum_bytes_per_session" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetMaximumBytesPerSession"></a>

```python
def reset_maximum_bytes_per_session() -> None
```

##### `reset_maximum_capture_duration_in_seconds` <a name="reset_maximum_capture_duration_in_seconds" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetMaximumCaptureDurationInSeconds"></a>

```python
def reset_maximum_capture_duration_in_seconds() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_packet_capture

virtualMachinePacketCapture.VirtualMachinePacketCapture.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_packet_capture

virtualMachinePacketCapture.VirtualMachinePacketCapture.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_packet_capture

virtualMachinePacketCapture.VirtualMachinePacketCapture.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList">VirtualMachinePacketCaptureFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.storageLocation">storage_location</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference">VirtualMachinePacketCaptureStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference">VirtualMachinePacketCaptureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter">VirtualMachinePacketCaptureFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumBytesPerPacketInput">maximum_bytes_per_packet_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumBytesPerSessionInput">maximum_bytes_per_session_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumCaptureDurationInSecondsInput">maximum_capture_duration_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.networkWatcherIdInput">network_watcher_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.storageLocationInput">storage_location_input</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation">VirtualMachinePacketCaptureStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts">VirtualMachinePacketCaptureTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.virtualMachineIdInput">virtual_machine_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumBytesPerPacket">maximum_bytes_per_packet</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumBytesPerSession">maximum_bytes_per_session</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumCaptureDurationInSeconds">maximum_capture_duration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.networkWatcherId">network_watcher_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.virtualMachineId">virtual_machine_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.filter"></a>

```python
filter: VirtualMachinePacketCaptureFilterList
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList">VirtualMachinePacketCaptureFilterList</a>

---

##### `storage_location`<sup>Required</sup> <a name="storage_location" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.storageLocation"></a>

```python
storage_location: VirtualMachinePacketCaptureStorageLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference">VirtualMachinePacketCaptureStorageLocationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.timeouts"></a>

```python
timeouts: VirtualMachinePacketCaptureTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference">VirtualMachinePacketCaptureTimeoutsOutputReference</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[VirtualMachinePacketCaptureFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter">VirtualMachinePacketCaptureFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `maximum_bytes_per_packet_input`<sup>Optional</sup> <a name="maximum_bytes_per_packet_input" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumBytesPerPacketInput"></a>

```python
maximum_bytes_per_packet_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_bytes_per_session_input`<sup>Optional</sup> <a name="maximum_bytes_per_session_input" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumBytesPerSessionInput"></a>

```python
maximum_bytes_per_session_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_capture_duration_in_seconds_input`<sup>Optional</sup> <a name="maximum_capture_duration_in_seconds_input" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumCaptureDurationInSecondsInput"></a>

```python
maximum_capture_duration_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_watcher_id_input`<sup>Optional</sup> <a name="network_watcher_id_input" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.networkWatcherIdInput"></a>

```python
network_watcher_id_input: str
```

- *Type:* str

---

##### `storage_location_input`<sup>Optional</sup> <a name="storage_location_input" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.storageLocationInput"></a>

```python
storage_location_input: VirtualMachinePacketCaptureStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation">VirtualMachinePacketCaptureStorageLocation</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VirtualMachinePacketCaptureTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts">VirtualMachinePacketCaptureTimeouts</a>]

---

##### `virtual_machine_id_input`<sup>Optional</sup> <a name="virtual_machine_id_input" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.virtualMachineIdInput"></a>

```python
virtual_machine_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `maximum_bytes_per_packet`<sup>Required</sup> <a name="maximum_bytes_per_packet" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumBytesPerPacket"></a>

```python
maximum_bytes_per_packet: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_bytes_per_session`<sup>Required</sup> <a name="maximum_bytes_per_session" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumBytesPerSession"></a>

```python
maximum_bytes_per_session: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_capture_duration_in_seconds`<sup>Required</sup> <a name="maximum_capture_duration_in_seconds" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumCaptureDurationInSeconds"></a>

```python
maximum_capture_duration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_watcher_id`<sup>Required</sup> <a name="network_watcher_id" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.networkWatcherId"></a>

```python
network_watcher_id: str
```

- *Type:* str

---

##### `virtual_machine_id`<sup>Required</sup> <a name="virtual_machine_id" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.virtualMachineId"></a>

```python
virtual_machine_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachinePacketCaptureConfig <a name="VirtualMachinePacketCaptureConfig" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_packet_capture

virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  network_watcher_id: str,
  storage_location: VirtualMachinePacketCaptureStorageLocation,
  virtual_machine_id: str,
  filter: typing.Union[IResolvable, typing.List[VirtualMachinePacketCaptureFilter]] = None,
  id: str = None,
  maximum_bytes_per_packet: typing.Union[int, float] = None,
  maximum_bytes_per_session: typing.Union[int, float] = None,
  maximum_capture_duration_in_seconds: typing.Union[int, float] = None,
  timeouts: VirtualMachinePacketCaptureTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#name VirtualMachinePacketCapture#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.networkWatcherId">network_watcher_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#network_watcher_id VirtualMachinePacketCapture#network_watcher_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.storageLocation">storage_location</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation">VirtualMachinePacketCaptureStorageLocation</a></code> | storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.virtualMachineId">virtual_machine_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#virtual_machine_id VirtualMachinePacketCapture#virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter">VirtualMachinePacketCaptureFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#id VirtualMachinePacketCapture#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.maximumBytesPerPacket">maximum_bytes_per_packet</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#maximum_bytes_per_packet VirtualMachinePacketCapture#maximum_bytes_per_packet}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.maximumBytesPerSession">maximum_bytes_per_session</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#maximum_bytes_per_session VirtualMachinePacketCapture#maximum_bytes_per_session}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.maximumCaptureDurationInSeconds">maximum_capture_duration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#maximum_capture_duration_in_seconds VirtualMachinePacketCapture#maximum_capture_duration_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts">VirtualMachinePacketCaptureTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#name VirtualMachinePacketCapture#name}.

---

##### `network_watcher_id`<sup>Required</sup> <a name="network_watcher_id" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.networkWatcherId"></a>

```python
network_watcher_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#network_watcher_id VirtualMachinePacketCapture#network_watcher_id}.

---

##### `storage_location`<sup>Required</sup> <a name="storage_location" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.storageLocation"></a>

```python
storage_location: VirtualMachinePacketCaptureStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation">VirtualMachinePacketCaptureStorageLocation</a>

storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#storage_location VirtualMachinePacketCapture#storage_location}

---

##### `virtual_machine_id`<sup>Required</sup> <a name="virtual_machine_id" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.virtualMachineId"></a>

```python
virtual_machine_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#virtual_machine_id VirtualMachinePacketCapture#virtual_machine_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[VirtualMachinePacketCaptureFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter">VirtualMachinePacketCaptureFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#filter VirtualMachinePacketCapture#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#id VirtualMachinePacketCapture#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maximum_bytes_per_packet`<sup>Optional</sup> <a name="maximum_bytes_per_packet" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.maximumBytesPerPacket"></a>

```python
maximum_bytes_per_packet: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#maximum_bytes_per_packet VirtualMachinePacketCapture#maximum_bytes_per_packet}.

---

##### `maximum_bytes_per_session`<sup>Optional</sup> <a name="maximum_bytes_per_session" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.maximumBytesPerSession"></a>

```python
maximum_bytes_per_session: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#maximum_bytes_per_session VirtualMachinePacketCapture#maximum_bytes_per_session}.

---

##### `maximum_capture_duration_in_seconds`<sup>Optional</sup> <a name="maximum_capture_duration_in_seconds" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.maximumCaptureDurationInSeconds"></a>

```python
maximum_capture_duration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#maximum_capture_duration_in_seconds VirtualMachinePacketCapture#maximum_capture_duration_in_seconds}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.timeouts"></a>

```python
timeouts: VirtualMachinePacketCaptureTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts">VirtualMachinePacketCaptureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#timeouts VirtualMachinePacketCapture#timeouts}

---

### VirtualMachinePacketCaptureFilter <a name="VirtualMachinePacketCaptureFilter" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_packet_capture

virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter(
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
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#protocol VirtualMachinePacketCapture#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.property.localIpAddress">local_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#local_ip_address VirtualMachinePacketCapture#local_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.property.localPort">local_port</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#local_port VirtualMachinePacketCapture#local_port}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.property.remoteIpAddress">remote_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#remote_ip_address VirtualMachinePacketCapture#remote_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.property.remotePort">remote_port</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#remote_port VirtualMachinePacketCapture#remote_port}. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#protocol VirtualMachinePacketCapture#protocol}.

---

##### `local_ip_address`<sup>Optional</sup> <a name="local_ip_address" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.property.localIpAddress"></a>

```python
local_ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#local_ip_address VirtualMachinePacketCapture#local_ip_address}.

---

##### `local_port`<sup>Optional</sup> <a name="local_port" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.property.localPort"></a>

```python
local_port: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#local_port VirtualMachinePacketCapture#local_port}.

---

##### `remote_ip_address`<sup>Optional</sup> <a name="remote_ip_address" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.property.remoteIpAddress"></a>

```python
remote_ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#remote_ip_address VirtualMachinePacketCapture#remote_ip_address}.

---

##### `remote_port`<sup>Optional</sup> <a name="remote_port" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.property.remotePort"></a>

```python
remote_port: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#remote_port VirtualMachinePacketCapture#remote_port}.

---

### VirtualMachinePacketCaptureStorageLocation <a name="VirtualMachinePacketCaptureStorageLocation" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_packet_capture

virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation(
  file_path: str = None,
  storage_account_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation.property.filePath">file_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#file_path VirtualMachinePacketCapture#file_path}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#storage_account_id VirtualMachinePacketCapture#storage_account_id}. |

---

##### `file_path`<sup>Optional</sup> <a name="file_path" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation.property.filePath"></a>

```python
file_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#file_path VirtualMachinePacketCapture#file_path}.

---

##### `storage_account_id`<sup>Optional</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#storage_account_id VirtualMachinePacketCapture#storage_account_id}.

---

### VirtualMachinePacketCaptureTimeouts <a name="VirtualMachinePacketCaptureTimeouts" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_packet_capture

virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#create VirtualMachinePacketCapture#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#delete VirtualMachinePacketCapture#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#read VirtualMachinePacketCapture#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#create VirtualMachinePacketCapture#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#delete VirtualMachinePacketCapture#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/virtual_machine_packet_capture#read VirtualMachinePacketCapture#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualMachinePacketCaptureFilterList <a name="VirtualMachinePacketCaptureFilterList" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_packet_capture

virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VirtualMachinePacketCaptureFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter">VirtualMachinePacketCaptureFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VirtualMachinePacketCaptureFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter">VirtualMachinePacketCaptureFilter</a>]]

---


### VirtualMachinePacketCaptureFilterOutputReference <a name="VirtualMachinePacketCaptureFilterOutputReference" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_packet_capture

virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resetLocalIpAddress">reset_local_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resetLocalPort">reset_local_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resetRemoteIpAddress">reset_remote_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resetRemotePort">reset_remote_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_local_ip_address` <a name="reset_local_ip_address" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resetLocalIpAddress"></a>

```python
def reset_local_ip_address() -> None
```

##### `reset_local_port` <a name="reset_local_port" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resetLocalPort"></a>

```python
def reset_local_port() -> None
```

##### `reset_remote_ip_address` <a name="reset_remote_ip_address" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resetRemoteIpAddress"></a>

```python
def reset_remote_ip_address() -> None
```

##### `reset_remote_port` <a name="reset_remote_port" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resetRemotePort"></a>

```python
def reset_remote_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.localIpAddressInput">local_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.localPortInput">local_port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.remoteIpAddressInput">remote_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.remotePortInput">remote_port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.localIpAddress">local_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.localPort">local_port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.remoteIpAddress">remote_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.remotePort">remote_port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter">VirtualMachinePacketCaptureFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `local_ip_address_input`<sup>Optional</sup> <a name="local_ip_address_input" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.localIpAddressInput"></a>

```python
local_ip_address_input: str
```

- *Type:* str

---

##### `local_port_input`<sup>Optional</sup> <a name="local_port_input" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.localPortInput"></a>

```python
local_port_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `remote_ip_address_input`<sup>Optional</sup> <a name="remote_ip_address_input" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.remoteIpAddressInput"></a>

```python
remote_ip_address_input: str
```

- *Type:* str

---

##### `remote_port_input`<sup>Optional</sup> <a name="remote_port_input" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.remotePortInput"></a>

```python
remote_port_input: str
```

- *Type:* str

---

##### `local_ip_address`<sup>Required</sup> <a name="local_ip_address" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.localIpAddress"></a>

```python
local_ip_address: str
```

- *Type:* str

---

##### `local_port`<sup>Required</sup> <a name="local_port" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.localPort"></a>

```python
local_port: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `remote_ip_address`<sup>Required</sup> <a name="remote_ip_address" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.remoteIpAddress"></a>

```python
remote_ip_address: str
```

- *Type:* str

---

##### `remote_port`<sup>Required</sup> <a name="remote_port" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.remotePort"></a>

```python
remote_port: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VirtualMachinePacketCaptureFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter">VirtualMachinePacketCaptureFilter</a>]

---


### VirtualMachinePacketCaptureStorageLocationOutputReference <a name="VirtualMachinePacketCaptureStorageLocationOutputReference" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_packet_capture

virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.resetFilePath">reset_file_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.resetStorageAccountId">reset_storage_account_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_file_path` <a name="reset_file_path" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.resetFilePath"></a>

```python
def reset_file_path() -> None
```

##### `reset_storage_account_id` <a name="reset_storage_account_id" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.resetStorageAccountId"></a>

```python
def reset_storage_account_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.storagePath">storage_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.filePathInput">file_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.storageAccountIdInput">storage_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.filePath">file_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation">VirtualMachinePacketCaptureStorageLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `storage_path`<sup>Required</sup> <a name="storage_path" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.storagePath"></a>

```python
storage_path: str
```

- *Type:* str

---

##### `file_path_input`<sup>Optional</sup> <a name="file_path_input" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.filePathInput"></a>

```python
file_path_input: str
```

- *Type:* str

---

##### `storage_account_id_input`<sup>Optional</sup> <a name="storage_account_id_input" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.storageAccountIdInput"></a>

```python
storage_account_id_input: str
```

- *Type:* str

---

##### `file_path`<sup>Required</sup> <a name="file_path" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.filePath"></a>

```python
file_path: str
```

- *Type:* str

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.internalValue"></a>

```python
internal_value: VirtualMachinePacketCaptureStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation">VirtualMachinePacketCaptureStorageLocation</a>

---


### VirtualMachinePacketCaptureTimeoutsOutputReference <a name="VirtualMachinePacketCaptureTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_packet_capture

virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts">VirtualMachinePacketCaptureTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VirtualMachinePacketCaptureTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts">VirtualMachinePacketCaptureTimeouts</a>]

---



