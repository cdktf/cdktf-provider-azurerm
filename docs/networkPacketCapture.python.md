# `azurerm_network_packet_capture`

Refer to the Terraform Registory for docs: [`azurerm_network_packet_capture`](https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture).

# `networkPacketCapture` Submodule <a name="`networkPacketCapture` Submodule" id="@cdktf/provider-azurerm.networkPacketCapture"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkPacketCapture <a name="NetworkPacketCapture" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture azurerm_network_packet_capture}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_packet_capture

networkPacketCapture.NetworkPacketCapture(
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
  network_watcher_name: str,
  resource_group_name: str,
  storage_location: NetworkPacketCaptureStorageLocation,
  target_resource_id: str,
  filter: typing.Union[IResolvable, typing.List[NetworkPacketCaptureFilter]] = None,
  id: str = None,
  maximum_bytes_per_packet: typing.Union[int, float] = None,
  maximum_bytes_per_session: typing.Union[int, float] = None,
  maximum_capture_duration: typing.Union[int, float] = None,
  timeouts: NetworkPacketCaptureTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#name NetworkPacketCapture#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.networkWatcherName">network_watcher_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#network_watcher_name NetworkPacketCapture#network_watcher_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#resource_group_name NetworkPacketCapture#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.storageLocation">storage_location</a></code> | <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation">NetworkPacketCaptureStorageLocation</a></code> | storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.targetResourceId">target_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#target_resource_id NetworkPacketCapture#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter">NetworkPacketCaptureFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#id NetworkPacketCapture#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.maximumBytesPerPacket">maximum_bytes_per_packet</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#maximum_bytes_per_packet NetworkPacketCapture#maximum_bytes_per_packet}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.maximumBytesPerSession">maximum_bytes_per_session</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#maximum_bytes_per_session NetworkPacketCapture#maximum_bytes_per_session}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.maximumCaptureDuration">maximum_capture_duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#maximum_capture_duration NetworkPacketCapture#maximum_capture_duration}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts">NetworkPacketCaptureTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#name NetworkPacketCapture#name}.

---

##### `network_watcher_name`<sup>Required</sup> <a name="network_watcher_name" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.networkWatcherName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#network_watcher_name NetworkPacketCapture#network_watcher_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#resource_group_name NetworkPacketCapture#resource_group_name}.

---

##### `storage_location`<sup>Required</sup> <a name="storage_location" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.storageLocation"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation">NetworkPacketCaptureStorageLocation</a>

storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#storage_location NetworkPacketCapture#storage_location}

---

##### `target_resource_id`<sup>Required</sup> <a name="target_resource_id" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.targetResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#target_resource_id NetworkPacketCapture#target_resource_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter">NetworkPacketCaptureFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#filter NetworkPacketCapture#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#id NetworkPacketCapture#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maximum_bytes_per_packet`<sup>Optional</sup> <a name="maximum_bytes_per_packet" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.maximumBytesPerPacket"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#maximum_bytes_per_packet NetworkPacketCapture#maximum_bytes_per_packet}.

---

##### `maximum_bytes_per_session`<sup>Optional</sup> <a name="maximum_bytes_per_session" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.maximumBytesPerSession"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#maximum_bytes_per_session NetworkPacketCapture#maximum_bytes_per_session}.

---

##### `maximum_capture_duration`<sup>Optional</sup> <a name="maximum_capture_duration" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.maximumCaptureDuration"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#maximum_capture_duration NetworkPacketCapture#maximum_capture_duration}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts">NetworkPacketCaptureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#timeouts NetworkPacketCapture#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.putStorageLocation">put_storage_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetMaximumBytesPerPacket">reset_maximum_bytes_per_packet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetMaximumBytesPerSession">reset_maximum_bytes_per_session</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetMaximumCaptureDuration">reset_maximum_capture_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[NetworkPacketCaptureFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter">NetworkPacketCaptureFilter</a>]]

---

##### `put_storage_location` <a name="put_storage_location" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.putStorageLocation"></a>

```python
def put_storage_location(
  file_path: str = None,
  storage_account_id: str = None
) -> None
```

###### `file_path`<sup>Optional</sup> <a name="file_path" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.putStorageLocation.parameter.filePath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#file_path NetworkPacketCapture#file_path}.

---

###### `storage_account_id`<sup>Optional</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.putStorageLocation.parameter.storageAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#storage_account_id NetworkPacketCapture#storage_account_id}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#create NetworkPacketCapture#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#delete NetworkPacketCapture#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#read NetworkPacketCapture#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#update NetworkPacketCapture#update}.

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_maximum_bytes_per_packet` <a name="reset_maximum_bytes_per_packet" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetMaximumBytesPerPacket"></a>

```python
def reset_maximum_bytes_per_packet() -> None
```

##### `reset_maximum_bytes_per_session` <a name="reset_maximum_bytes_per_session" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetMaximumBytesPerSession"></a>

```python
def reset_maximum_bytes_per_session() -> None
```

##### `reset_maximum_capture_duration` <a name="reset_maximum_capture_duration" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetMaximumCaptureDuration"></a>

```python
def reset_maximum_capture_duration() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkPacketCapture resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import network_packet_capture

networkPacketCapture.NetworkPacketCapture.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import network_packet_capture

networkPacketCapture.NetworkPacketCapture.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import network_packet_capture

networkPacketCapture.NetworkPacketCapture.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import network_packet_capture

networkPacketCapture.NetworkPacketCapture.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkPacketCapture resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkPacketCapture to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkPacketCapture that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkPacketCapture to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList">NetworkPacketCaptureFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.storageLocation">storage_location</a></code> | <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference">NetworkPacketCaptureStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference">NetworkPacketCaptureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter">NetworkPacketCaptureFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.maximumBytesPerPacketInput">maximum_bytes_per_packet_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.maximumBytesPerSessionInput">maximum_bytes_per_session_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.maximumCaptureDurationInput">maximum_capture_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.networkWatcherNameInput">network_watcher_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.storageLocationInput">storage_location_input</a></code> | <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation">NetworkPacketCaptureStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.targetResourceIdInput">target_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts">NetworkPacketCaptureTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.maximumBytesPerPacket">maximum_bytes_per_packet</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.maximumBytesPerSession">maximum_bytes_per_session</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.maximumCaptureDuration">maximum_capture_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.networkWatcherName">network_watcher_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.targetResourceId">target_resource_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.filter"></a>

```python
filter: NetworkPacketCaptureFilterList
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList">NetworkPacketCaptureFilterList</a>

---

##### `storage_location`<sup>Required</sup> <a name="storage_location" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.storageLocation"></a>

```python
storage_location: NetworkPacketCaptureStorageLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference">NetworkPacketCaptureStorageLocationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.timeouts"></a>

```python
timeouts: NetworkPacketCaptureTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference">NetworkPacketCaptureTimeoutsOutputReference</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[NetworkPacketCaptureFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter">NetworkPacketCaptureFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `maximum_bytes_per_packet_input`<sup>Optional</sup> <a name="maximum_bytes_per_packet_input" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.maximumBytesPerPacketInput"></a>

```python
maximum_bytes_per_packet_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_bytes_per_session_input`<sup>Optional</sup> <a name="maximum_bytes_per_session_input" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.maximumBytesPerSessionInput"></a>

```python
maximum_bytes_per_session_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_capture_duration_input`<sup>Optional</sup> <a name="maximum_capture_duration_input" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.maximumCaptureDurationInput"></a>

```python
maximum_capture_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_watcher_name_input`<sup>Optional</sup> <a name="network_watcher_name_input" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.networkWatcherNameInput"></a>

```python
network_watcher_name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `storage_location_input`<sup>Optional</sup> <a name="storage_location_input" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.storageLocationInput"></a>

```python
storage_location_input: NetworkPacketCaptureStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation">NetworkPacketCaptureStorageLocation</a>

---

##### `target_resource_id_input`<sup>Optional</sup> <a name="target_resource_id_input" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.targetResourceIdInput"></a>

```python
target_resource_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetworkPacketCaptureTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts">NetworkPacketCaptureTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `maximum_bytes_per_packet`<sup>Required</sup> <a name="maximum_bytes_per_packet" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.maximumBytesPerPacket"></a>

```python
maximum_bytes_per_packet: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_bytes_per_session`<sup>Required</sup> <a name="maximum_bytes_per_session" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.maximumBytesPerSession"></a>

```python
maximum_bytes_per_session: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_capture_duration`<sup>Required</sup> <a name="maximum_capture_duration" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.maximumCaptureDuration"></a>

```python
maximum_capture_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_watcher_name`<sup>Required</sup> <a name="network_watcher_name" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.networkWatcherName"></a>

```python
network_watcher_name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `target_resource_id`<sup>Required</sup> <a name="target_resource_id" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.targetResourceId"></a>

```python
target_resource_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkPacketCaptureConfig <a name="NetworkPacketCaptureConfig" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_packet_capture

networkPacketCapture.NetworkPacketCaptureConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  network_watcher_name: str,
  resource_group_name: str,
  storage_location: NetworkPacketCaptureStorageLocation,
  target_resource_id: str,
  filter: typing.Union[IResolvable, typing.List[NetworkPacketCaptureFilter]] = None,
  id: str = None,
  maximum_bytes_per_packet: typing.Union[int, float] = None,
  maximum_bytes_per_session: typing.Union[int, float] = None,
  maximum_capture_duration: typing.Union[int, float] = None,
  timeouts: NetworkPacketCaptureTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#name NetworkPacketCapture#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.networkWatcherName">network_watcher_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#network_watcher_name NetworkPacketCapture#network_watcher_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#resource_group_name NetworkPacketCapture#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.storageLocation">storage_location</a></code> | <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation">NetworkPacketCaptureStorageLocation</a></code> | storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.targetResourceId">target_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#target_resource_id NetworkPacketCapture#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter">NetworkPacketCaptureFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#id NetworkPacketCapture#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.maximumBytesPerPacket">maximum_bytes_per_packet</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#maximum_bytes_per_packet NetworkPacketCapture#maximum_bytes_per_packet}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.maximumBytesPerSession">maximum_bytes_per_session</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#maximum_bytes_per_session NetworkPacketCapture#maximum_bytes_per_session}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.maximumCaptureDuration">maximum_capture_duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#maximum_capture_duration NetworkPacketCapture#maximum_capture_duration}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts">NetworkPacketCaptureTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#name NetworkPacketCapture#name}.

---

##### `network_watcher_name`<sup>Required</sup> <a name="network_watcher_name" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.networkWatcherName"></a>

```python
network_watcher_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#network_watcher_name NetworkPacketCapture#network_watcher_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#resource_group_name NetworkPacketCapture#resource_group_name}.

---

##### `storage_location`<sup>Required</sup> <a name="storage_location" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.storageLocation"></a>

```python
storage_location: NetworkPacketCaptureStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation">NetworkPacketCaptureStorageLocation</a>

storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#storage_location NetworkPacketCapture#storage_location}

---

##### `target_resource_id`<sup>Required</sup> <a name="target_resource_id" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.targetResourceId"></a>

```python
target_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#target_resource_id NetworkPacketCapture#target_resource_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[NetworkPacketCaptureFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter">NetworkPacketCaptureFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#filter NetworkPacketCapture#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#id NetworkPacketCapture#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maximum_bytes_per_packet`<sup>Optional</sup> <a name="maximum_bytes_per_packet" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.maximumBytesPerPacket"></a>

```python
maximum_bytes_per_packet: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#maximum_bytes_per_packet NetworkPacketCapture#maximum_bytes_per_packet}.

---

##### `maximum_bytes_per_session`<sup>Optional</sup> <a name="maximum_bytes_per_session" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.maximumBytesPerSession"></a>

```python
maximum_bytes_per_session: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#maximum_bytes_per_session NetworkPacketCapture#maximum_bytes_per_session}.

---

##### `maximum_capture_duration`<sup>Optional</sup> <a name="maximum_capture_duration" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.maximumCaptureDuration"></a>

```python
maximum_capture_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#maximum_capture_duration NetworkPacketCapture#maximum_capture_duration}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.timeouts"></a>

```python
timeouts: NetworkPacketCaptureTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts">NetworkPacketCaptureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#timeouts NetworkPacketCapture#timeouts}

---

### NetworkPacketCaptureFilter <a name="NetworkPacketCaptureFilter" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_packet_capture

networkPacketCapture.NetworkPacketCaptureFilter(
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
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#protocol NetworkPacketCapture#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter.property.localIpAddress">local_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#local_ip_address NetworkPacketCapture#local_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter.property.localPort">local_port</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#local_port NetworkPacketCapture#local_port}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter.property.remoteIpAddress">remote_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#remote_ip_address NetworkPacketCapture#remote_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter.property.remotePort">remote_port</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#remote_port NetworkPacketCapture#remote_port}. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#protocol NetworkPacketCapture#protocol}.

---

##### `local_ip_address`<sup>Optional</sup> <a name="local_ip_address" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter.property.localIpAddress"></a>

```python
local_ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#local_ip_address NetworkPacketCapture#local_ip_address}.

---

##### `local_port`<sup>Optional</sup> <a name="local_port" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter.property.localPort"></a>

```python
local_port: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#local_port NetworkPacketCapture#local_port}.

---

##### `remote_ip_address`<sup>Optional</sup> <a name="remote_ip_address" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter.property.remoteIpAddress"></a>

```python
remote_ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#remote_ip_address NetworkPacketCapture#remote_ip_address}.

---

##### `remote_port`<sup>Optional</sup> <a name="remote_port" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter.property.remotePort"></a>

```python
remote_port: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#remote_port NetworkPacketCapture#remote_port}.

---

### NetworkPacketCaptureStorageLocation <a name="NetworkPacketCaptureStorageLocation" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_packet_capture

networkPacketCapture.NetworkPacketCaptureStorageLocation(
  file_path: str = None,
  storage_account_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation.property.filePath">file_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#file_path NetworkPacketCapture#file_path}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#storage_account_id NetworkPacketCapture#storage_account_id}. |

---

##### `file_path`<sup>Optional</sup> <a name="file_path" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation.property.filePath"></a>

```python
file_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#file_path NetworkPacketCapture#file_path}.

---

##### `storage_account_id`<sup>Optional</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#storage_account_id NetworkPacketCapture#storage_account_id}.

---

### NetworkPacketCaptureTimeouts <a name="NetworkPacketCaptureTimeouts" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_packet_capture

networkPacketCapture.NetworkPacketCaptureTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#create NetworkPacketCapture#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#delete NetworkPacketCapture#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#read NetworkPacketCapture#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#update NetworkPacketCapture#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#create NetworkPacketCapture#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#delete NetworkPacketCapture#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#read NetworkPacketCapture#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/network_packet_capture#update NetworkPacketCapture#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkPacketCaptureFilterList <a name="NetworkPacketCaptureFilterList" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_packet_capture

networkPacketCapture.NetworkPacketCaptureFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkPacketCaptureFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter">NetworkPacketCaptureFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NetworkPacketCaptureFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter">NetworkPacketCaptureFilter</a>]]

---


### NetworkPacketCaptureFilterOutputReference <a name="NetworkPacketCaptureFilterOutputReference" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_packet_capture

networkPacketCapture.NetworkPacketCaptureFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.resetLocalIpAddress">reset_local_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.resetLocalPort">reset_local_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.resetRemoteIpAddress">reset_remote_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.resetRemotePort">reset_remote_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_local_ip_address` <a name="reset_local_ip_address" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.resetLocalIpAddress"></a>

```python
def reset_local_ip_address() -> None
```

##### `reset_local_port` <a name="reset_local_port" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.resetLocalPort"></a>

```python
def reset_local_port() -> None
```

##### `reset_remote_ip_address` <a name="reset_remote_ip_address" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.resetRemoteIpAddress"></a>

```python
def reset_remote_ip_address() -> None
```

##### `reset_remote_port` <a name="reset_remote_port" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.resetRemotePort"></a>

```python
def reset_remote_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.localIpAddressInput">local_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.localPortInput">local_port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.remoteIpAddressInput">remote_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.remotePortInput">remote_port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.localIpAddress">local_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.localPort">local_port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.remoteIpAddress">remote_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.remotePort">remote_port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter">NetworkPacketCaptureFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `local_ip_address_input`<sup>Optional</sup> <a name="local_ip_address_input" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.localIpAddressInput"></a>

```python
local_ip_address_input: str
```

- *Type:* str

---

##### `local_port_input`<sup>Optional</sup> <a name="local_port_input" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.localPortInput"></a>

```python
local_port_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `remote_ip_address_input`<sup>Optional</sup> <a name="remote_ip_address_input" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.remoteIpAddressInput"></a>

```python
remote_ip_address_input: str
```

- *Type:* str

---

##### `remote_port_input`<sup>Optional</sup> <a name="remote_port_input" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.remotePortInput"></a>

```python
remote_port_input: str
```

- *Type:* str

---

##### `local_ip_address`<sup>Required</sup> <a name="local_ip_address" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.localIpAddress"></a>

```python
local_ip_address: str
```

- *Type:* str

---

##### `local_port`<sup>Required</sup> <a name="local_port" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.localPort"></a>

```python
local_port: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `remote_ip_address`<sup>Required</sup> <a name="remote_ip_address" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.remoteIpAddress"></a>

```python
remote_ip_address: str
```

- *Type:* str

---

##### `remote_port`<sup>Required</sup> <a name="remote_port" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.remotePort"></a>

```python
remote_port: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkPacketCaptureFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter">NetworkPacketCaptureFilter</a>]

---


### NetworkPacketCaptureStorageLocationOutputReference <a name="NetworkPacketCaptureStorageLocationOutputReference" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_packet_capture

networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.resetFilePath">reset_file_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.resetStorageAccountId">reset_storage_account_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_file_path` <a name="reset_file_path" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.resetFilePath"></a>

```python
def reset_file_path() -> None
```

##### `reset_storage_account_id` <a name="reset_storage_account_id" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.resetStorageAccountId"></a>

```python
def reset_storage_account_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.storagePath">storage_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.filePathInput">file_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.storageAccountIdInput">storage_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.filePath">file_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation">NetworkPacketCaptureStorageLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `storage_path`<sup>Required</sup> <a name="storage_path" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.storagePath"></a>

```python
storage_path: str
```

- *Type:* str

---

##### `file_path_input`<sup>Optional</sup> <a name="file_path_input" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.filePathInput"></a>

```python
file_path_input: str
```

- *Type:* str

---

##### `storage_account_id_input`<sup>Optional</sup> <a name="storage_account_id_input" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.storageAccountIdInput"></a>

```python
storage_account_id_input: str
```

- *Type:* str

---

##### `file_path`<sup>Required</sup> <a name="file_path" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.filePath"></a>

```python
file_path: str
```

- *Type:* str

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.internalValue"></a>

```python
internal_value: NetworkPacketCaptureStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation">NetworkPacketCaptureStorageLocation</a>

---


### NetworkPacketCaptureTimeoutsOutputReference <a name="NetworkPacketCaptureTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_packet_capture

networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts">NetworkPacketCaptureTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkPacketCaptureTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts">NetworkPacketCaptureTimeouts</a>]

---



