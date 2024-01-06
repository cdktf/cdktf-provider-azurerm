# `dataAzurermMobileNetworkPacketCoreControlPlane` Submodule <a name="`dataAzurermMobileNetworkPacketCoreControlPlane` Submodule" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMobileNetworkPacketCoreControlPlane <a name="DataAzurermMobileNetworkPacketCoreControlPlane" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/mobile_network_packet_core_control_plane azurerm_mobile_network_packet_core_control_plane}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_packet_core_control_plane

dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane(
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
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermMobileNetworkPacketCoreControlPlaneTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/mobile_network_packet_core_control_plane#name DataAzurermMobileNetworkPacketCoreControlPlane#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/mobile_network_packet_core_control_plane#resource_group_name DataAzurermMobileNetworkPacketCoreControlPlane#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/mobile_network_packet_core_control_plane#id DataAzurermMobileNetworkPacketCoreControlPlane#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeouts">DataAzurermMobileNetworkPacketCoreControlPlaneTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/mobile_network_packet_core_control_plane#name DataAzurermMobileNetworkPacketCoreControlPlane#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/mobile_network_packet_core_control_plane#resource_group_name DataAzurermMobileNetworkPacketCoreControlPlane#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/mobile_network_packet_core_control_plane#id DataAzurermMobileNetworkPacketCoreControlPlane#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeouts">DataAzurermMobileNetworkPacketCoreControlPlaneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/mobile_network_packet_core_control_plane#timeouts DataAzurermMobileNetworkPacketCoreControlPlane#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/mobile_network_packet_core_control_plane#read DataAzurermMobileNetworkPacketCoreControlPlane#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermMobileNetworkPacketCoreControlPlane resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_packet_core_control_plane

dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_packet_core_control_plane

dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_packet_core_control_plane

dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_packet_core_control_plane

dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermMobileNetworkPacketCoreControlPlane resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermMobileNetworkPacketCoreControlPlane to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermMobileNetworkPacketCoreControlPlane that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/mobile_network_packet_core_control_plane#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermMobileNetworkPacketCoreControlPlane to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4Address">control_plane_access_ipv4_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4Gateway">control_plane_access_ipv4_gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4Subnet">control_plane_access_ipv4_subnet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.controlPlaneAccessName">control_plane_access_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.coreNetworkTechnology">core_network_technology</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityList">DataAzurermMobileNetworkPacketCoreControlPlaneIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.interoperabilitySettingsJson">interoperability_settings_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.localDiagnosticsAccess">local_diagnostics_access</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessList">DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.platform">platform</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformList">DataAzurermMobileNetworkPacketCoreControlPlanePlatformList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.siteIds">site_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.sku">sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.softwareVersion">software_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference">DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.userEquipmentMtuInBytes">user_equipment_mtu_in_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeouts">DataAzurermMobileNetworkPacketCoreControlPlaneTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `control_plane_access_ipv4_address`<sup>Required</sup> <a name="control_plane_access_ipv4_address" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4Address"></a>

```python
control_plane_access_ipv4_address: str
```

- *Type:* str

---

##### `control_plane_access_ipv4_gateway`<sup>Required</sup> <a name="control_plane_access_ipv4_gateway" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4Gateway"></a>

```python
control_plane_access_ipv4_gateway: str
```

- *Type:* str

---

##### `control_plane_access_ipv4_subnet`<sup>Required</sup> <a name="control_plane_access_ipv4_subnet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4Subnet"></a>

```python
control_plane_access_ipv4_subnet: str
```

- *Type:* str

---

##### `control_plane_access_name`<sup>Required</sup> <a name="control_plane_access_name" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.controlPlaneAccessName"></a>

```python
control_plane_access_name: str
```

- *Type:* str

---

##### `core_network_technology`<sup>Required</sup> <a name="core_network_technology" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.coreNetworkTechnology"></a>

```python
core_network_technology: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.identity"></a>

```python
identity: DataAzurermMobileNetworkPacketCoreControlPlaneIdentityList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityList">DataAzurermMobileNetworkPacketCoreControlPlaneIdentityList</a>

---

##### `interoperability_settings_json`<sup>Required</sup> <a name="interoperability_settings_json" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.interoperabilitySettingsJson"></a>

```python
interoperability_settings_json: str
```

- *Type:* str

---

##### `local_diagnostics_access`<sup>Required</sup> <a name="local_diagnostics_access" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.localDiagnosticsAccess"></a>

```python
local_diagnostics_access: DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessList">DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.platform"></a>

```python
platform: DataAzurermMobileNetworkPacketCoreControlPlanePlatformList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformList">DataAzurermMobileNetworkPacketCoreControlPlanePlatformList</a>

---

##### `site_ids`<sup>Required</sup> <a name="site_ids" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.siteIds"></a>

```python
site_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.sku"></a>

```python
sku: str
```

- *Type:* str

---

##### `software_version`<sup>Required</sup> <a name="software_version" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.softwareVersion"></a>

```python
software_version: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.timeouts"></a>

```python
timeouts: DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference">DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference</a>

---

##### `user_equipment_mtu_in_bytes`<sup>Required</sup> <a name="user_equipment_mtu_in_bytes" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.userEquipmentMtuInBytes"></a>

```python
user_equipment_mtu_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermMobileNetworkPacketCoreControlPlaneTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeouts">DataAzurermMobileNetworkPacketCoreControlPlaneTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlane.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMobileNetworkPacketCoreControlPlaneConfig <a name="DataAzurermMobileNetworkPacketCoreControlPlaneConfig" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_packet_core_control_plane

dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermMobileNetworkPacketCoreControlPlaneTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/mobile_network_packet_core_control_plane#name DataAzurermMobileNetworkPacketCoreControlPlane#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/mobile_network_packet_core_control_plane#resource_group_name DataAzurermMobileNetworkPacketCoreControlPlane#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/mobile_network_packet_core_control_plane#id DataAzurermMobileNetworkPacketCoreControlPlane#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeouts">DataAzurermMobileNetworkPacketCoreControlPlaneTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/mobile_network_packet_core_control_plane#name DataAzurermMobileNetworkPacketCoreControlPlane#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/mobile_network_packet_core_control_plane#resource_group_name DataAzurermMobileNetworkPacketCoreControlPlane#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/mobile_network_packet_core_control_plane#id DataAzurermMobileNetworkPacketCoreControlPlane#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneConfig.property.timeouts"></a>

```python
timeouts: DataAzurermMobileNetworkPacketCoreControlPlaneTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeouts">DataAzurermMobileNetworkPacketCoreControlPlaneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/mobile_network_packet_core_control_plane#timeouts DataAzurermMobileNetworkPacketCoreControlPlane#timeouts}

---

### DataAzurermMobileNetworkPacketCoreControlPlaneIdentity <a name="DataAzurermMobileNetworkPacketCoreControlPlaneIdentity" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_packet_core_control_plane

dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentity()
```


### DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess <a name="DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_packet_core_control_plane

dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess()
```


### DataAzurermMobileNetworkPacketCoreControlPlanePlatform <a name="DataAzurermMobileNetworkPacketCoreControlPlanePlatform" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatform"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatform.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_packet_core_control_plane

dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatform()
```


### DataAzurermMobileNetworkPacketCoreControlPlaneTimeouts <a name="DataAzurermMobileNetworkPacketCoreControlPlaneTimeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_packet_core_control_plane

dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/mobile_network_packet_core_control_plane#read DataAzurermMobileNetworkPacketCoreControlPlane#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/mobile_network_packet_core_control_plane#read DataAzurermMobileNetworkPacketCoreControlPlane#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMobileNetworkPacketCoreControlPlaneIdentityList <a name="DataAzurermMobileNetworkPacketCoreControlPlaneIdentityList" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_packet_core_control_plane

dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference <a name="DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_packet_core_control_plane

dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentity">DataAzurermMobileNetworkPacketCoreControlPlaneIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMobileNetworkPacketCoreControlPlaneIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneIdentity">DataAzurermMobileNetworkPacketCoreControlPlaneIdentity</a>

---


### DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessList <a name="DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessList" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_packet_core_control_plane

dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference <a name="DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_packet_core_control_plane

dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.authenticationType">authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.httpsServerCertificateUrl">https_server_certificate_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess">DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

---

##### `https_server_certificate_url`<sup>Required</sup> <a name="https_server_certificate_url" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.httpsServerCertificateUrl"></a>

```python
https_server_certificate_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess">DataAzurermMobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess</a>

---


### DataAzurermMobileNetworkPacketCoreControlPlanePlatformList <a name="DataAzurermMobileNetworkPacketCoreControlPlanePlatformList" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_packet_core_control_plane

dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference <a name="DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_packet_core_control_plane

dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.property.arcKubernetesClusterId">arc_kubernetes_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.property.customLocationId">custom_location_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.property.edgeDeviceId">edge_device_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.property.stackHciClusterId">stack_hci_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatform">DataAzurermMobileNetworkPacketCoreControlPlanePlatform</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arc_kubernetes_cluster_id`<sup>Required</sup> <a name="arc_kubernetes_cluster_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.property.arcKubernetesClusterId"></a>

```python
arc_kubernetes_cluster_id: str
```

- *Type:* str

---

##### `custom_location_id`<sup>Required</sup> <a name="custom_location_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.property.customLocationId"></a>

```python
custom_location_id: str
```

- *Type:* str

---

##### `edge_device_id`<sup>Required</sup> <a name="edge_device_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.property.edgeDeviceId"></a>

```python
edge_device_id: str
```

- *Type:* str

---

##### `stack_hci_cluster_id`<sup>Required</sup> <a name="stack_hci_cluster_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.property.stackHciClusterId"></a>

```python
stack_hci_cluster_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatformOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMobileNetworkPacketCoreControlPlanePlatform
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlanePlatform">DataAzurermMobileNetworkPacketCoreControlPlanePlatform</a>

---


### DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference <a name="DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_packet_core_control_plane

dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeouts">DataAzurermMobileNetworkPacketCoreControlPlaneTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermMobileNetworkPacketCoreControlPlaneTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreControlPlane.DataAzurermMobileNetworkPacketCoreControlPlaneTimeouts">DataAzurermMobileNetworkPacketCoreControlPlaneTimeouts</a>]

---



