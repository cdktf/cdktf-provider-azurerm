# `dataAzurermVirtualNetworkPeering` Submodule <a name="`dataAzurermVirtualNetworkPeering` Submodule" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermVirtualNetworkPeering <a name="DataAzurermVirtualNetworkPeering" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/virtual_network_peering azurerm_virtual_network_peering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_virtual_network_peering

dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering(
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
  virtual_network_id: str,
  id: str = None,
  timeouts: DataAzurermVirtualNetworkPeeringTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/virtual_network_peering#name DataAzurermVirtualNetworkPeering#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/virtual_network_peering#virtual_network_id DataAzurermVirtualNetworkPeering#virtual_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/virtual_network_peering#id DataAzurermVirtualNetworkPeering#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeouts">DataAzurermVirtualNetworkPeeringTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/virtual_network_peering#name DataAzurermVirtualNetworkPeering#name}.

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.virtualNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/virtual_network_peering#virtual_network_id DataAzurermVirtualNetworkPeering#virtual_network_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/virtual_network_peering#id DataAzurermVirtualNetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeouts">DataAzurermVirtualNetworkPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/virtual_network_peering#timeouts DataAzurermVirtualNetworkPeering#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/virtual_network_peering#read DataAzurermVirtualNetworkPeering#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermVirtualNetworkPeering resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_virtual_network_peering

dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_virtual_network_peering

dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_virtual_network_peering

dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_virtual_network_peering

dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermVirtualNetworkPeering resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermVirtualNetworkPeering to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermVirtualNetworkPeering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/virtual_network_peering#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermVirtualNetworkPeering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.allowForwardedTraffic">allow_forwarded_traffic</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.allowGatewayTransit">allow_gateway_transit</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.allowVirtualNetworkAccess">allow_virtual_network_access</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.onlyIpv6PeeringEnabled">only_ipv6_peering_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.peerCompleteVirtualNetworksEnabled">peer_complete_virtual_networks_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.remoteVirtualNetworkId">remote_virtual_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference">DataAzurermVirtualNetworkPeeringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.useRemoteGateways">use_remote_gateways</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeouts">DataAzurermVirtualNetworkPeeringTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.virtualNetworkIdInput">virtual_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `allow_forwarded_traffic`<sup>Required</sup> <a name="allow_forwarded_traffic" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.allowForwardedTraffic"></a>

```python
allow_forwarded_traffic: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `allow_gateway_transit`<sup>Required</sup> <a name="allow_gateway_transit" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.allowGatewayTransit"></a>

```python
allow_gateway_transit: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `allow_virtual_network_access`<sup>Required</sup> <a name="allow_virtual_network_access" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.allowVirtualNetworkAccess"></a>

```python
allow_virtual_network_access: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `only_ipv6_peering_enabled`<sup>Required</sup> <a name="only_ipv6_peering_enabled" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.onlyIpv6PeeringEnabled"></a>

```python
only_ipv6_peering_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `peer_complete_virtual_networks_enabled`<sup>Required</sup> <a name="peer_complete_virtual_networks_enabled" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.peerCompleteVirtualNetworksEnabled"></a>

```python
peer_complete_virtual_networks_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `remote_virtual_network_id`<sup>Required</sup> <a name="remote_virtual_network_id" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.remoteVirtualNetworkId"></a>

```python
remote_virtual_network_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.timeouts"></a>

```python
timeouts: DataAzurermVirtualNetworkPeeringTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference">DataAzurermVirtualNetworkPeeringTimeoutsOutputReference</a>

---

##### `use_remote_gateways`<sup>Required</sup> <a name="use_remote_gateways" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.useRemoteGateways"></a>

```python
use_remote_gateways: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermVirtualNetworkPeeringTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeouts">DataAzurermVirtualNetworkPeeringTimeouts</a>]

---

##### `virtual_network_id_input`<sup>Optional</sup> <a name="virtual_network_id_input" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.virtualNetworkIdInput"></a>

```python
virtual_network_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeering.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermVirtualNetworkPeeringConfig <a name="DataAzurermVirtualNetworkPeeringConfig" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_virtual_network_peering

dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  virtual_network_id: str,
  id: str = None,
  timeouts: DataAzurermVirtualNetworkPeeringTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/virtual_network_peering#name DataAzurermVirtualNetworkPeering#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/virtual_network_peering#virtual_network_id DataAzurermVirtualNetworkPeering#virtual_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/virtual_network_peering#id DataAzurermVirtualNetworkPeering#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeouts">DataAzurermVirtualNetworkPeeringTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/virtual_network_peering#name DataAzurermVirtualNetworkPeering#name}.

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/virtual_network_peering#virtual_network_id DataAzurermVirtualNetworkPeering#virtual_network_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/virtual_network_peering#id DataAzurermVirtualNetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringConfig.property.timeouts"></a>

```python
timeouts: DataAzurermVirtualNetworkPeeringTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeouts">DataAzurermVirtualNetworkPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/virtual_network_peering#timeouts DataAzurermVirtualNetworkPeering#timeouts}

---

### DataAzurermVirtualNetworkPeeringTimeouts <a name="DataAzurermVirtualNetworkPeeringTimeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_virtual_network_peering

dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/virtual_network_peering#read DataAzurermVirtualNetworkPeering#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/virtual_network_peering#read DataAzurermVirtualNetworkPeering#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermVirtualNetworkPeeringTimeoutsOutputReference <a name="DataAzurermVirtualNetworkPeeringTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_virtual_network_peering

dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeouts">DataAzurermVirtualNetworkPeeringTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermVirtualNetworkPeeringTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermVirtualNetworkPeering.DataAzurermVirtualNetworkPeeringTimeouts">DataAzurermVirtualNetworkPeeringTimeouts</a>]

---



