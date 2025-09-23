# `dataAzurermMobileNetworkPacketCoreDataPlane` Submodule <a name="`dataAzurermMobileNetworkPacketCoreDataPlane` Submodule" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMobileNetworkPacketCoreDataPlane <a name="DataAzurermMobileNetworkPacketCoreDataPlane" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/mobile_network_packet_core_data_plane azurerm_mobile_network_packet_core_data_plane}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_packet_core_data_plane

dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  mobile_network_packet_core_control_plane_id: str,
  name: str,
  id: str = None,
  timeouts: DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer.parameter.mobileNetworkPacketCoreControlPlaneId">mobile_network_packet_core_control_plane_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/mobile_network_packet_core_data_plane#mobile_network_packet_core_control_plane_id DataAzurermMobileNetworkPacketCoreDataPlane#mobile_network_packet_core_control_plane_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/mobile_network_packet_core_data_plane#name DataAzurermMobileNetworkPacketCoreDataPlane#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/mobile_network_packet_core_data_plane#id DataAzurermMobileNetworkPacketCoreDataPlane#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts">DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `mobile_network_packet_core_control_plane_id`<sup>Required</sup> <a name="mobile_network_packet_core_control_plane_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer.parameter.mobileNetworkPacketCoreControlPlaneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/mobile_network_packet_core_data_plane#mobile_network_packet_core_control_plane_id DataAzurermMobileNetworkPacketCoreDataPlane#mobile_network_packet_core_control_plane_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/mobile_network_packet_core_data_plane#name DataAzurermMobileNetworkPacketCoreDataPlane#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/mobile_network_packet_core_data_plane#id DataAzurermMobileNetworkPacketCoreDataPlane#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts">DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/mobile_network_packet_core_data_plane#timeouts DataAzurermMobileNetworkPacketCoreDataPlane#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/mobile_network_packet_core_data_plane#read DataAzurermMobileNetworkPacketCoreDataPlane#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermMobileNetworkPacketCoreDataPlane resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_packet_core_data_plane

dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_packet_core_data_plane

dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_packet_core_data_plane

dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_packet_core_data_plane

dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermMobileNetworkPacketCoreDataPlane resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermMobileNetworkPacketCoreDataPlane to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermMobileNetworkPacketCoreDataPlane that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/mobile_network_packet_core_data_plane#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermMobileNetworkPacketCoreDataPlane to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference">DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4Address">user_plane_access_ipv4_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4Gateway">user_plane_access_ipv4_gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4Subnet">user_plane_access_ipv4_subnet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.userPlaneAccessName">user_plane_access_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.mobileNetworkPacketCoreControlPlaneIdInput">mobile_network_packet_core_control_plane_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts">DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.mobileNetworkPacketCoreControlPlaneId">mobile_network_packet_core_control_plane_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.timeouts"></a>

```python
timeouts: DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference">DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference</a>

---

##### `user_plane_access_ipv4_address`<sup>Required</sup> <a name="user_plane_access_ipv4_address" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4Address"></a>

```python
user_plane_access_ipv4_address: str
```

- *Type:* str

---

##### `user_plane_access_ipv4_gateway`<sup>Required</sup> <a name="user_plane_access_ipv4_gateway" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4Gateway"></a>

```python
user_plane_access_ipv4_gateway: str
```

- *Type:* str

---

##### `user_plane_access_ipv4_subnet`<sup>Required</sup> <a name="user_plane_access_ipv4_subnet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4Subnet"></a>

```python
user_plane_access_ipv4_subnet: str
```

- *Type:* str

---

##### `user_plane_access_name`<sup>Required</sup> <a name="user_plane_access_name" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.userPlaneAccessName"></a>

```python
user_plane_access_name: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mobile_network_packet_core_control_plane_id_input`<sup>Optional</sup> <a name="mobile_network_packet_core_control_plane_id_input" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.mobileNetworkPacketCoreControlPlaneIdInput"></a>

```python
mobile_network_packet_core_control_plane_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts">DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mobile_network_packet_core_control_plane_id`<sup>Required</sup> <a name="mobile_network_packet_core_control_plane_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.mobileNetworkPacketCoreControlPlaneId"></a>

```python
mobile_network_packet_core_control_plane_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMobileNetworkPacketCoreDataPlaneConfig <a name="DataAzurermMobileNetworkPacketCoreDataPlaneConfig" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_packet_core_data_plane

dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  mobile_network_packet_core_control_plane_id: str,
  name: str,
  id: str = None,
  timeouts: DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.mobileNetworkPacketCoreControlPlaneId">mobile_network_packet_core_control_plane_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/mobile_network_packet_core_data_plane#mobile_network_packet_core_control_plane_id DataAzurermMobileNetworkPacketCoreDataPlane#mobile_network_packet_core_control_plane_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/mobile_network_packet_core_data_plane#name DataAzurermMobileNetworkPacketCoreDataPlane#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/mobile_network_packet_core_data_plane#id DataAzurermMobileNetworkPacketCoreDataPlane#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts">DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `mobile_network_packet_core_control_plane_id`<sup>Required</sup> <a name="mobile_network_packet_core_control_plane_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.mobileNetworkPacketCoreControlPlaneId"></a>

```python
mobile_network_packet_core_control_plane_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/mobile_network_packet_core_data_plane#mobile_network_packet_core_control_plane_id DataAzurermMobileNetworkPacketCoreDataPlane#mobile_network_packet_core_control_plane_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/mobile_network_packet_core_data_plane#name DataAzurermMobileNetworkPacketCoreDataPlane#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/mobile_network_packet_core_data_plane#id DataAzurermMobileNetworkPacketCoreDataPlane#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.timeouts"></a>

```python
timeouts: DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts">DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/mobile_network_packet_core_data_plane#timeouts DataAzurermMobileNetworkPacketCoreDataPlane#timeouts}

---

### DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts <a name="DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_packet_core_data_plane

dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/mobile_network_packet_core_data_plane#read DataAzurermMobileNetworkPacketCoreDataPlane#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/mobile_network_packet_core_data_plane#read DataAzurermMobileNetworkPacketCoreDataPlane#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference <a name="DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_packet_core_data_plane

dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts">DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts">DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts</a>]

---



