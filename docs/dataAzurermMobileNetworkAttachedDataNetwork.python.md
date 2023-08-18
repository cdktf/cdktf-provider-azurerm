# `data_azurerm_mobile_network_attached_data_network`

Refer to the Terraform Registory for docs: [`data_azurerm_mobile_network_attached_data_network`](https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/mobile_network_attached_data_network).

# `dataAzurermMobileNetworkAttachedDataNetwork` Submodule <a name="`dataAzurermMobileNetworkAttachedDataNetwork` Submodule" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMobileNetworkAttachedDataNetwork <a name="DataAzurermMobileNetworkAttachedDataNetwork" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/mobile_network_attached_data_network azurerm_mobile_network_attached_data_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_attached_data_network

dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  mobile_network_data_network_name: str,
  mobile_network_packet_core_data_plane_id: str,
  id: str = None,
  timeouts: DataAzurermMobileNetworkAttachedDataNetworkTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer.parameter.mobileNetworkDataNetworkName">mobile_network_data_network_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/mobile_network_attached_data_network#mobile_network_data_network_name DataAzurermMobileNetworkAttachedDataNetwork#mobile_network_data_network_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer.parameter.mobileNetworkPacketCoreDataPlaneId">mobile_network_packet_core_data_plane_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/mobile_network_attached_data_network#mobile_network_packet_core_data_plane_id DataAzurermMobileNetworkAttachedDataNetwork#mobile_network_packet_core_data_plane_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/mobile_network_attached_data_network#id DataAzurermMobileNetworkAttachedDataNetwork#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeouts">DataAzurermMobileNetworkAttachedDataNetworkTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `mobile_network_data_network_name`<sup>Required</sup> <a name="mobile_network_data_network_name" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer.parameter.mobileNetworkDataNetworkName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/mobile_network_attached_data_network#mobile_network_data_network_name DataAzurermMobileNetworkAttachedDataNetwork#mobile_network_data_network_name}.

---

##### `mobile_network_packet_core_data_plane_id`<sup>Required</sup> <a name="mobile_network_packet_core_data_plane_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer.parameter.mobileNetworkPacketCoreDataPlaneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/mobile_network_attached_data_network#mobile_network_packet_core_data_plane_id DataAzurermMobileNetworkAttachedDataNetwork#mobile_network_packet_core_data_plane_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/mobile_network_attached_data_network#id DataAzurermMobileNetworkAttachedDataNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeouts">DataAzurermMobileNetworkAttachedDataNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/mobile_network_attached_data_network#timeouts DataAzurermMobileNetworkAttachedDataNetwork#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/mobile_network_attached_data_network#read DataAzurermMobileNetworkAttachedDataNetwork#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_attached_data_network

dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_attached_data_network

dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_attached_data_network

dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.dnsAddresses">dns_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.networkAddressPortTranslation">network_address_port_translation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList">DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference">DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.userEquipmentAddressPoolPrefixes">user_equipment_address_pool_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.userEquipmentStaticAddressPoolPrefixes">user_equipment_static_address_pool_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4Address">user_plane_access_ipv4_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4Gateway">user_plane_access_ipv4_gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4Subnet">user_plane_access_ipv4_subnet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.userPlaneAccessName">user_plane_access_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.mobileNetworkDataNetworkNameInput">mobile_network_data_network_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.mobileNetworkPacketCoreDataPlaneIdInput">mobile_network_packet_core_data_plane_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeouts">DataAzurermMobileNetworkAttachedDataNetworkTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.mobileNetworkDataNetworkName">mobile_network_data_network_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.mobileNetworkPacketCoreDataPlaneId">mobile_network_packet_core_data_plane_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `dns_addresses`<sup>Required</sup> <a name="dns_addresses" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.dnsAddresses"></a>

```python
dns_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `network_address_port_translation`<sup>Required</sup> <a name="network_address_port_translation" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.networkAddressPortTranslation"></a>

```python
network_address_port_translation: DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList">DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.timeouts"></a>

```python
timeouts: DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference">DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference</a>

---

##### `user_equipment_address_pool_prefixes`<sup>Required</sup> <a name="user_equipment_address_pool_prefixes" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.userEquipmentAddressPoolPrefixes"></a>

```python
user_equipment_address_pool_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_equipment_static_address_pool_prefixes`<sup>Required</sup> <a name="user_equipment_static_address_pool_prefixes" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.userEquipmentStaticAddressPoolPrefixes"></a>

```python
user_equipment_static_address_pool_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_plane_access_ipv4_address`<sup>Required</sup> <a name="user_plane_access_ipv4_address" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4Address"></a>

```python
user_plane_access_ipv4_address: str
```

- *Type:* str

---

##### `user_plane_access_ipv4_gateway`<sup>Required</sup> <a name="user_plane_access_ipv4_gateway" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4Gateway"></a>

```python
user_plane_access_ipv4_gateway: str
```

- *Type:* str

---

##### `user_plane_access_ipv4_subnet`<sup>Required</sup> <a name="user_plane_access_ipv4_subnet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4Subnet"></a>

```python
user_plane_access_ipv4_subnet: str
```

- *Type:* str

---

##### `user_plane_access_name`<sup>Required</sup> <a name="user_plane_access_name" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.userPlaneAccessName"></a>

```python
user_plane_access_name: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mobile_network_data_network_name_input`<sup>Optional</sup> <a name="mobile_network_data_network_name_input" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.mobileNetworkDataNetworkNameInput"></a>

```python
mobile_network_data_network_name_input: str
```

- *Type:* str

---

##### `mobile_network_packet_core_data_plane_id_input`<sup>Optional</sup> <a name="mobile_network_packet_core_data_plane_id_input" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.mobileNetworkPacketCoreDataPlaneIdInput"></a>

```python
mobile_network_packet_core_data_plane_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermMobileNetworkAttachedDataNetworkTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeouts">DataAzurermMobileNetworkAttachedDataNetworkTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mobile_network_data_network_name`<sup>Required</sup> <a name="mobile_network_data_network_name" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.mobileNetworkDataNetworkName"></a>

```python
mobile_network_data_network_name: str
```

- *Type:* str

---

##### `mobile_network_packet_core_data_plane_id`<sup>Required</sup> <a name="mobile_network_packet_core_data_plane_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.mobileNetworkPacketCoreDataPlaneId"></a>

```python
mobile_network_packet_core_data_plane_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMobileNetworkAttachedDataNetworkConfig <a name="DataAzurermMobileNetworkAttachedDataNetworkConfig" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_attached_data_network

dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  mobile_network_data_network_name: str,
  mobile_network_packet_core_data_plane_id: str,
  id: str = None,
  timeouts: DataAzurermMobileNetworkAttachedDataNetworkTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.mobileNetworkDataNetworkName">mobile_network_data_network_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/mobile_network_attached_data_network#mobile_network_data_network_name DataAzurermMobileNetworkAttachedDataNetwork#mobile_network_data_network_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.mobileNetworkPacketCoreDataPlaneId">mobile_network_packet_core_data_plane_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/mobile_network_attached_data_network#mobile_network_packet_core_data_plane_id DataAzurermMobileNetworkAttachedDataNetwork#mobile_network_packet_core_data_plane_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/mobile_network_attached_data_network#id DataAzurermMobileNetworkAttachedDataNetwork#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeouts">DataAzurermMobileNetworkAttachedDataNetworkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `mobile_network_data_network_name`<sup>Required</sup> <a name="mobile_network_data_network_name" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.mobileNetworkDataNetworkName"></a>

```python
mobile_network_data_network_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/mobile_network_attached_data_network#mobile_network_data_network_name DataAzurermMobileNetworkAttachedDataNetwork#mobile_network_data_network_name}.

---

##### `mobile_network_packet_core_data_plane_id`<sup>Required</sup> <a name="mobile_network_packet_core_data_plane_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.mobileNetworkPacketCoreDataPlaneId"></a>

```python
mobile_network_packet_core_data_plane_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/mobile_network_attached_data_network#mobile_network_packet_core_data_plane_id DataAzurermMobileNetworkAttachedDataNetwork#mobile_network_packet_core_data_plane_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/mobile_network_attached_data_network#id DataAzurermMobileNetworkAttachedDataNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.timeouts"></a>

```python
timeouts: DataAzurermMobileNetworkAttachedDataNetworkTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeouts">DataAzurermMobileNetworkAttachedDataNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/mobile_network_attached_data_network#timeouts DataAzurermMobileNetworkAttachedDataNetwork#timeouts}

---

### DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslation <a name="DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslation" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_attached_data_network

dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslation()
```


### DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange <a name="DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_attached_data_network

dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange()
```


### DataAzurermMobileNetworkAttachedDataNetworkTimeouts <a name="DataAzurermMobileNetworkAttachedDataNetworkTimeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_attached_data_network

dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/mobile_network_attached_data_network#read DataAzurermMobileNetworkAttachedDataNetwork#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/mobile_network_attached_data_network#read DataAzurermMobileNetworkAttachedDataNetwork#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList <a name="DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_attached_data_network

dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference <a name="DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_attached_data_network

dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.icmpPinholeTimeoutInSeconds">icmp_pinhole_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.pinholeMaximumNumber">pinhole_maximum_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.portRange">port_range</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList">DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.tcpPinholeTimeoutInSeconds">tcp_pinhole_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.tcpPortReuseMinimumHoldTimeInSeconds">tcp_port_reuse_minimum_hold_time_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.udpPinholeTimeoutInSeconds">udp_pinhole_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.udpPortReuseMinimumHoldTimeInSeconds">udp_port_reuse_minimum_hold_time_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslation">DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `icmp_pinhole_timeout_in_seconds`<sup>Required</sup> <a name="icmp_pinhole_timeout_in_seconds" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.icmpPinholeTimeoutInSeconds"></a>

```python
icmp_pinhole_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pinhole_maximum_number`<sup>Required</sup> <a name="pinhole_maximum_number" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.pinholeMaximumNumber"></a>

```python
pinhole_maximum_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_range`<sup>Required</sup> <a name="port_range" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.portRange"></a>

```python
port_range: DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList">DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList</a>

---

##### `tcp_pinhole_timeout_in_seconds`<sup>Required</sup> <a name="tcp_pinhole_timeout_in_seconds" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.tcpPinholeTimeoutInSeconds"></a>

```python
tcp_pinhole_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tcp_port_reuse_minimum_hold_time_in_seconds`<sup>Required</sup> <a name="tcp_port_reuse_minimum_hold_time_in_seconds" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.tcpPortReuseMinimumHoldTimeInSeconds"></a>

```python
tcp_port_reuse_minimum_hold_time_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `udp_pinhole_timeout_in_seconds`<sup>Required</sup> <a name="udp_pinhole_timeout_in_seconds" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.udpPinholeTimeoutInSeconds"></a>

```python
udp_pinhole_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `udp_port_reuse_minimum_hold_time_in_seconds`<sup>Required</sup> <a name="udp_port_reuse_minimum_hold_time_in_seconds" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.udpPortReuseMinimumHoldTimeInSeconds"></a>

```python
udp_port_reuse_minimum_hold_time_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslation">DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslation</a>

---


### DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList <a name="DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_attached_data_network

dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference <a name="DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_attached_data_network

dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.maximum">maximum</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.minimum">minimum</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange">DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.maximum"></a>

```python
maximum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.minimum"></a>

```python
minimum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange">DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange</a>

---


### DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference <a name="DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_attached_data_network

dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeouts">DataAzurermMobileNetworkAttachedDataNetworkTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermMobileNetworkAttachedDataNetworkTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeouts">DataAzurermMobileNetworkAttachedDataNetworkTimeouts</a>]

---



