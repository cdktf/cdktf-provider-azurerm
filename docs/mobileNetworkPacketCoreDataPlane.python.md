# `azurerm_mobile_network_packet_core_data_plane`

Refer to the Terraform Registory for docs: [`azurerm_mobile_network_packet_core_data_plane`](https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane).

# `mobileNetworkPacketCoreDataPlane` Submodule <a name="`mobileNetworkPacketCoreDataPlane` Submodule" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MobileNetworkPacketCoreDataPlane <a name="MobileNetworkPacketCoreDataPlane" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane azurerm_mobile_network_packet_core_data_plane}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mobile_network_packet_core_data_plane

mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  mobile_network_packet_core_control_plane_id: str,
  name: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: MobileNetworkPacketCoreDataPlaneTimeouts = None,
  user_plane_access_ipv4_address: str = None,
  user_plane_access_ipv4_gateway: str = None,
  user_plane_access_ipv4_subnet: str = None,
  user_plane_access_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#location MobileNetworkPacketCoreDataPlane#location}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.mobileNetworkPacketCoreControlPlaneId">mobile_network_packet_core_control_plane_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#mobile_network_packet_core_control_plane_id MobileNetworkPacketCoreDataPlane#mobile_network_packet_core_control_plane_id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#name MobileNetworkPacketCoreDataPlane#name}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#id MobileNetworkPacketCoreDataPlane#id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#tags MobileNetworkPacketCoreDataPlane#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts">MobileNetworkPacketCoreDataPlaneTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.userPlaneAccessIpv4Address">user_plane_access_ipv4_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#user_plane_access_ipv4_address MobileNetworkPacketCoreDataPlane#user_plane_access_ipv4_address}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.userPlaneAccessIpv4Gateway">user_plane_access_ipv4_gateway</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#user_plane_access_ipv4_gateway MobileNetworkPacketCoreDataPlane#user_plane_access_ipv4_gateway}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.userPlaneAccessIpv4Subnet">user_plane_access_ipv4_subnet</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#user_plane_access_ipv4_subnet MobileNetworkPacketCoreDataPlane#user_plane_access_ipv4_subnet}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.userPlaneAccessName">user_plane_access_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#user_plane_access_name MobileNetworkPacketCoreDataPlane#user_plane_access_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#location MobileNetworkPacketCoreDataPlane#location}.

---

##### `mobile_network_packet_core_control_plane_id`<sup>Required</sup> <a name="mobile_network_packet_core_control_plane_id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.mobileNetworkPacketCoreControlPlaneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#mobile_network_packet_core_control_plane_id MobileNetworkPacketCoreDataPlane#mobile_network_packet_core_control_plane_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#name MobileNetworkPacketCoreDataPlane#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#id MobileNetworkPacketCoreDataPlane#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#tags MobileNetworkPacketCoreDataPlane#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts">MobileNetworkPacketCoreDataPlaneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#timeouts MobileNetworkPacketCoreDataPlane#timeouts}

---

##### `user_plane_access_ipv4_address`<sup>Optional</sup> <a name="user_plane_access_ipv4_address" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.userPlaneAccessIpv4Address"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#user_plane_access_ipv4_address MobileNetworkPacketCoreDataPlane#user_plane_access_ipv4_address}.

---

##### `user_plane_access_ipv4_gateway`<sup>Optional</sup> <a name="user_plane_access_ipv4_gateway" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.userPlaneAccessIpv4Gateway"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#user_plane_access_ipv4_gateway MobileNetworkPacketCoreDataPlane#user_plane_access_ipv4_gateway}.

---

##### `user_plane_access_ipv4_subnet`<sup>Optional</sup> <a name="user_plane_access_ipv4_subnet" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.userPlaneAccessIpv4Subnet"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#user_plane_access_ipv4_subnet MobileNetworkPacketCoreDataPlane#user_plane_access_ipv4_subnet}.

---

##### `user_plane_access_name`<sup>Optional</sup> <a name="user_plane_access_name" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.userPlaneAccessName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#user_plane_access_name MobileNetworkPacketCoreDataPlane#user_plane_access_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetUserPlaneAccessIpv4Address">reset_user_plane_access_ipv4_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetUserPlaneAccessIpv4Gateway">reset_user_plane_access_ipv4_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetUserPlaneAccessIpv4Subnet">reset_user_plane_access_ipv4_subnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetUserPlaneAccessName">reset_user_plane_access_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#create MobileNetworkPacketCoreDataPlane#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#delete MobileNetworkPacketCoreDataPlane#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#read MobileNetworkPacketCoreDataPlane#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#update MobileNetworkPacketCoreDataPlane#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_plane_access_ipv4_address` <a name="reset_user_plane_access_ipv4_address" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetUserPlaneAccessIpv4Address"></a>

```python
def reset_user_plane_access_ipv4_address() -> None
```

##### `reset_user_plane_access_ipv4_gateway` <a name="reset_user_plane_access_ipv4_gateway" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetUserPlaneAccessIpv4Gateway"></a>

```python
def reset_user_plane_access_ipv4_gateway() -> None
```

##### `reset_user_plane_access_ipv4_subnet` <a name="reset_user_plane_access_ipv4_subnet" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetUserPlaneAccessIpv4Subnet"></a>

```python
def reset_user_plane_access_ipv4_subnet() -> None
```

##### `reset_user_plane_access_name` <a name="reset_user_plane_access_name" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetUserPlaneAccessName"></a>

```python
def reset_user_plane_access_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import mobile_network_packet_core_data_plane

mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import mobile_network_packet_core_data_plane

mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import mobile_network_packet_core_data_plane

mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference">MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.mobileNetworkPacketCoreControlPlaneIdInput">mobile_network_packet_core_control_plane_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts">MobileNetworkPacketCoreDataPlaneTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4AddressInput">user_plane_access_ipv4_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4GatewayInput">user_plane_access_ipv4_gateway_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4SubnetInput">user_plane_access_ipv4_subnet_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessNameInput">user_plane_access_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.mobileNetworkPacketCoreControlPlaneId">mobile_network_packet_core_control_plane_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4Address">user_plane_access_ipv4_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4Gateway">user_plane_access_ipv4_gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4Subnet">user_plane_access_ipv4_subnet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessName">user_plane_access_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.timeouts"></a>

```python
timeouts: MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference">MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `mobile_network_packet_core_control_plane_id_input`<sup>Optional</sup> <a name="mobile_network_packet_core_control_plane_id_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.mobileNetworkPacketCoreControlPlaneIdInput"></a>

```python
mobile_network_packet_core_control_plane_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MobileNetworkPacketCoreDataPlaneTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts">MobileNetworkPacketCoreDataPlaneTimeouts</a>]

---

##### `user_plane_access_ipv4_address_input`<sup>Optional</sup> <a name="user_plane_access_ipv4_address_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4AddressInput"></a>

```python
user_plane_access_ipv4_address_input: str
```

- *Type:* str

---

##### `user_plane_access_ipv4_gateway_input`<sup>Optional</sup> <a name="user_plane_access_ipv4_gateway_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4GatewayInput"></a>

```python
user_plane_access_ipv4_gateway_input: str
```

- *Type:* str

---

##### `user_plane_access_ipv4_subnet_input`<sup>Optional</sup> <a name="user_plane_access_ipv4_subnet_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4SubnetInput"></a>

```python
user_plane_access_ipv4_subnet_input: str
```

- *Type:* str

---

##### `user_plane_access_name_input`<sup>Optional</sup> <a name="user_plane_access_name_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessNameInput"></a>

```python
user_plane_access_name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `mobile_network_packet_core_control_plane_id`<sup>Required</sup> <a name="mobile_network_packet_core_control_plane_id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.mobileNetworkPacketCoreControlPlaneId"></a>

```python
mobile_network_packet_core_control_plane_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `user_plane_access_ipv4_address`<sup>Required</sup> <a name="user_plane_access_ipv4_address" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4Address"></a>

```python
user_plane_access_ipv4_address: str
```

- *Type:* str

---

##### `user_plane_access_ipv4_gateway`<sup>Required</sup> <a name="user_plane_access_ipv4_gateway" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4Gateway"></a>

```python
user_plane_access_ipv4_gateway: str
```

- *Type:* str

---

##### `user_plane_access_ipv4_subnet`<sup>Required</sup> <a name="user_plane_access_ipv4_subnet" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4Subnet"></a>

```python
user_plane_access_ipv4_subnet: str
```

- *Type:* str

---

##### `user_plane_access_name`<sup>Required</sup> <a name="user_plane_access_name" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessName"></a>

```python
user_plane_access_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MobileNetworkPacketCoreDataPlaneConfig <a name="MobileNetworkPacketCoreDataPlaneConfig" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mobile_network_packet_core_data_plane

mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  mobile_network_packet_core_control_plane_id: str,
  name: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: MobileNetworkPacketCoreDataPlaneTimeouts = None,
  user_plane_access_ipv4_address: str = None,
  user_plane_access_ipv4_gateway: str = None,
  user_plane_access_ipv4_subnet: str = None,
  user_plane_access_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#location MobileNetworkPacketCoreDataPlane#location}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.mobileNetworkPacketCoreControlPlaneId">mobile_network_packet_core_control_plane_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#mobile_network_packet_core_control_plane_id MobileNetworkPacketCoreDataPlane#mobile_network_packet_core_control_plane_id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#name MobileNetworkPacketCoreDataPlane#name}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#id MobileNetworkPacketCoreDataPlane#id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#tags MobileNetworkPacketCoreDataPlane#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts">MobileNetworkPacketCoreDataPlaneTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.userPlaneAccessIpv4Address">user_plane_access_ipv4_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#user_plane_access_ipv4_address MobileNetworkPacketCoreDataPlane#user_plane_access_ipv4_address}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.userPlaneAccessIpv4Gateway">user_plane_access_ipv4_gateway</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#user_plane_access_ipv4_gateway MobileNetworkPacketCoreDataPlane#user_plane_access_ipv4_gateway}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.userPlaneAccessIpv4Subnet">user_plane_access_ipv4_subnet</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#user_plane_access_ipv4_subnet MobileNetworkPacketCoreDataPlane#user_plane_access_ipv4_subnet}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.userPlaneAccessName">user_plane_access_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#user_plane_access_name MobileNetworkPacketCoreDataPlane#user_plane_access_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#location MobileNetworkPacketCoreDataPlane#location}.

---

##### `mobile_network_packet_core_control_plane_id`<sup>Required</sup> <a name="mobile_network_packet_core_control_plane_id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.mobileNetworkPacketCoreControlPlaneId"></a>

```python
mobile_network_packet_core_control_plane_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#mobile_network_packet_core_control_plane_id MobileNetworkPacketCoreDataPlane#mobile_network_packet_core_control_plane_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#name MobileNetworkPacketCoreDataPlane#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#id MobileNetworkPacketCoreDataPlane#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#tags MobileNetworkPacketCoreDataPlane#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.timeouts"></a>

```python
timeouts: MobileNetworkPacketCoreDataPlaneTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts">MobileNetworkPacketCoreDataPlaneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#timeouts MobileNetworkPacketCoreDataPlane#timeouts}

---

##### `user_plane_access_ipv4_address`<sup>Optional</sup> <a name="user_plane_access_ipv4_address" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.userPlaneAccessIpv4Address"></a>

```python
user_plane_access_ipv4_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#user_plane_access_ipv4_address MobileNetworkPacketCoreDataPlane#user_plane_access_ipv4_address}.

---

##### `user_plane_access_ipv4_gateway`<sup>Optional</sup> <a name="user_plane_access_ipv4_gateway" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.userPlaneAccessIpv4Gateway"></a>

```python
user_plane_access_ipv4_gateway: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#user_plane_access_ipv4_gateway MobileNetworkPacketCoreDataPlane#user_plane_access_ipv4_gateway}.

---

##### `user_plane_access_ipv4_subnet`<sup>Optional</sup> <a name="user_plane_access_ipv4_subnet" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.userPlaneAccessIpv4Subnet"></a>

```python
user_plane_access_ipv4_subnet: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#user_plane_access_ipv4_subnet MobileNetworkPacketCoreDataPlane#user_plane_access_ipv4_subnet}.

---

##### `user_plane_access_name`<sup>Optional</sup> <a name="user_plane_access_name" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.userPlaneAccessName"></a>

```python
user_plane_access_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#user_plane_access_name MobileNetworkPacketCoreDataPlane#user_plane_access_name}.

---

### MobileNetworkPacketCoreDataPlaneTimeouts <a name="MobileNetworkPacketCoreDataPlaneTimeouts" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mobile_network_packet_core_data_plane

mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#create MobileNetworkPacketCoreDataPlane#create}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#delete MobileNetworkPacketCoreDataPlane#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#read MobileNetworkPacketCoreDataPlane#read}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#update MobileNetworkPacketCoreDataPlane#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#create MobileNetworkPacketCoreDataPlane#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#delete MobileNetworkPacketCoreDataPlane#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#read MobileNetworkPacketCoreDataPlane#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/mobile_network_packet_core_data_plane#update MobileNetworkPacketCoreDataPlane#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference <a name="MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mobile_network_packet_core_data_plane

mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts">MobileNetworkPacketCoreDataPlaneTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MobileNetworkPacketCoreDataPlaneTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts">MobileNetworkPacketCoreDataPlaneTimeouts</a>]

---



