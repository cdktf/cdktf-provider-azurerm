# `dataAzurermMobileNetworkSim` Submodule <a name="`dataAzurermMobileNetworkSim` Submodule" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMobileNetworkSim <a name="DataAzurermMobileNetworkSim" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/data-sources/mobile_network_sim azurerm_mobile_network_sim}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_sim

dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  mobile_network_sim_group_id: str,
  name: str,
  id: str = None,
  timeouts: DataAzurermMobileNetworkSimTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.Initializer.parameter.mobileNetworkSimGroupId">mobile_network_sim_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/data-sources/mobile_network_sim#mobile_network_sim_group_id DataAzurermMobileNetworkSim#mobile_network_sim_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/data-sources/mobile_network_sim#name DataAzurermMobileNetworkSim#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/data-sources/mobile_network_sim#id DataAzurermMobileNetworkSim#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeouts">DataAzurermMobileNetworkSimTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `mobile_network_sim_group_id`<sup>Required</sup> <a name="mobile_network_sim_group_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.Initializer.parameter.mobileNetworkSimGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/data-sources/mobile_network_sim#mobile_network_sim_group_id DataAzurermMobileNetworkSim#mobile_network_sim_group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/data-sources/mobile_network_sim#name DataAzurermMobileNetworkSim#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/data-sources/mobile_network_sim#id DataAzurermMobileNetworkSim#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeouts">DataAzurermMobileNetworkSimTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/data-sources/mobile_network_sim#timeouts DataAzurermMobileNetworkSim#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/data-sources/mobile_network_sim#read DataAzurermMobileNetworkSim#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermMobileNetworkSim resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_sim

dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_sim

dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_sim

dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_sim

dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermMobileNetworkSim resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermMobileNetworkSim to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermMobileNetworkSim that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/data-sources/mobile_network_sim#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermMobileNetworkSim to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.deviceType">device_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.integratedCircuitCardIdentifier">integrated_circuit_card_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.internationalMobileSubscriberIdentity">international_mobile_subscriber_identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.simPolicyId">sim_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.simState">sim_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.staticIpConfiguration">static_ip_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationList">DataAzurermMobileNetworkSimStaticIpConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference">DataAzurermMobileNetworkSimTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.vendorKeyFingerprint">vendor_key_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.vendorName">vendor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.mobileNetworkSimGroupIdInput">mobile_network_sim_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeouts">DataAzurermMobileNetworkSimTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.mobileNetworkSimGroupId">mobile_network_sim_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `device_type`<sup>Required</sup> <a name="device_type" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.deviceType"></a>

```python
device_type: str
```

- *Type:* str

---

##### `integrated_circuit_card_identifier`<sup>Required</sup> <a name="integrated_circuit_card_identifier" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.integratedCircuitCardIdentifier"></a>

```python
integrated_circuit_card_identifier: str
```

- *Type:* str

---

##### `international_mobile_subscriber_identity`<sup>Required</sup> <a name="international_mobile_subscriber_identity" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.internationalMobileSubscriberIdentity"></a>

```python
international_mobile_subscriber_identity: str
```

- *Type:* str

---

##### `sim_policy_id`<sup>Required</sup> <a name="sim_policy_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.simPolicyId"></a>

```python
sim_policy_id: str
```

- *Type:* str

---

##### `sim_state`<sup>Required</sup> <a name="sim_state" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.simState"></a>

```python
sim_state: str
```

- *Type:* str

---

##### `static_ip_configuration`<sup>Required</sup> <a name="static_ip_configuration" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.staticIpConfiguration"></a>

```python
static_ip_configuration: DataAzurermMobileNetworkSimStaticIpConfigurationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationList">DataAzurermMobileNetworkSimStaticIpConfigurationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.timeouts"></a>

```python
timeouts: DataAzurermMobileNetworkSimTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference">DataAzurermMobileNetworkSimTimeoutsOutputReference</a>

---

##### `vendor_key_fingerprint`<sup>Required</sup> <a name="vendor_key_fingerprint" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.vendorKeyFingerprint"></a>

```python
vendor_key_fingerprint: str
```

- *Type:* str

---

##### `vendor_name`<sup>Required</sup> <a name="vendor_name" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.vendorName"></a>

```python
vendor_name: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mobile_network_sim_group_id_input`<sup>Optional</sup> <a name="mobile_network_sim_group_id_input" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.mobileNetworkSimGroupIdInput"></a>

```python
mobile_network_sim_group_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermMobileNetworkSimTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeouts">DataAzurermMobileNetworkSimTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mobile_network_sim_group_id`<sup>Required</sup> <a name="mobile_network_sim_group_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.mobileNetworkSimGroupId"></a>

```python
mobile_network_sim_group_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSim.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMobileNetworkSimConfig <a name="DataAzurermMobileNetworkSimConfig" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_sim

dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  mobile_network_sim_group_id: str,
  name: str,
  id: str = None,
  timeouts: DataAzurermMobileNetworkSimTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimConfig.property.mobileNetworkSimGroupId">mobile_network_sim_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/data-sources/mobile_network_sim#mobile_network_sim_group_id DataAzurermMobileNetworkSim#mobile_network_sim_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/data-sources/mobile_network_sim#name DataAzurermMobileNetworkSim#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/data-sources/mobile_network_sim#id DataAzurermMobileNetworkSim#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeouts">DataAzurermMobileNetworkSimTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `mobile_network_sim_group_id`<sup>Required</sup> <a name="mobile_network_sim_group_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimConfig.property.mobileNetworkSimGroupId"></a>

```python
mobile_network_sim_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/data-sources/mobile_network_sim#mobile_network_sim_group_id DataAzurermMobileNetworkSim#mobile_network_sim_group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/data-sources/mobile_network_sim#name DataAzurermMobileNetworkSim#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/data-sources/mobile_network_sim#id DataAzurermMobileNetworkSim#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimConfig.property.timeouts"></a>

```python
timeouts: DataAzurermMobileNetworkSimTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeouts">DataAzurermMobileNetworkSimTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/data-sources/mobile_network_sim#timeouts DataAzurermMobileNetworkSim#timeouts}

---

### DataAzurermMobileNetworkSimStaticIpConfiguration <a name="DataAzurermMobileNetworkSimStaticIpConfiguration" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_sim

dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfiguration()
```


### DataAzurermMobileNetworkSimTimeouts <a name="DataAzurermMobileNetworkSimTimeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_sim

dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/data-sources/mobile_network_sim#read DataAzurermMobileNetworkSim#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/data-sources/mobile_network_sim#read DataAzurermMobileNetworkSim#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMobileNetworkSimStaticIpConfigurationList <a name="DataAzurermMobileNetworkSimStaticIpConfigurationList" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_sim

dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference <a name="DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_sim

dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.property.attachedDataNetworkId">attached_data_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.property.sliceId">slice_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.property.staticIpv4Address">static_ipv4_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfiguration">DataAzurermMobileNetworkSimStaticIpConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attached_data_network_id`<sup>Required</sup> <a name="attached_data_network_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.property.attachedDataNetworkId"></a>

```python
attached_data_network_id: str
```

- *Type:* str

---

##### `slice_id`<sup>Required</sup> <a name="slice_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.property.sliceId"></a>

```python
slice_id: str
```

- *Type:* str

---

##### `static_ipv4_address`<sup>Required</sup> <a name="static_ipv4_address" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.property.staticIpv4Address"></a>

```python
static_ipv4_address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMobileNetworkSimStaticIpConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimStaticIpConfiguration">DataAzurermMobileNetworkSimStaticIpConfiguration</a>

---


### DataAzurermMobileNetworkSimTimeoutsOutputReference <a name="DataAzurermMobileNetworkSimTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_sim

dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeouts">DataAzurermMobileNetworkSimTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermMobileNetworkSimTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSim.DataAzurermMobileNetworkSimTimeouts">DataAzurermMobileNetworkSimTimeouts</a>]

---



