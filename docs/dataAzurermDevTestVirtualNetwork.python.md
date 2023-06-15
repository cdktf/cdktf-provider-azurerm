# `data_azurerm_dev_test_virtual_network`

Refer to the Terraform Registory for docs: [`data_azurerm_dev_test_virtual_network`](https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/data-sources/dev_test_virtual_network).

# `dataAzurermDevTestVirtualNetwork` Submodule <a name="`dataAzurermDevTestVirtualNetwork` Submodule" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermDevTestVirtualNetwork <a name="DataAzurermDevTestVirtualNetwork" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/data-sources/dev_test_virtual_network azurerm_dev_test_virtual_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dev_test_virtual_network

dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  lab_name: str,
  name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermDevTestVirtualNetworkTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.Initializer.parameter.labName">lab_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/data-sources/dev_test_virtual_network#lab_name DataAzurermDevTestVirtualNetwork#lab_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/data-sources/dev_test_virtual_network#name DataAzurermDevTestVirtualNetwork#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/data-sources/dev_test_virtual_network#resource_group_name DataAzurermDevTestVirtualNetwork#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/data-sources/dev_test_virtual_network#id DataAzurermDevTestVirtualNetwork#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeouts">DataAzurermDevTestVirtualNetworkTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `lab_name`<sup>Required</sup> <a name="lab_name" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.Initializer.parameter.labName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/data-sources/dev_test_virtual_network#lab_name DataAzurermDevTestVirtualNetwork#lab_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/data-sources/dev_test_virtual_network#name DataAzurermDevTestVirtualNetwork#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/data-sources/dev_test_virtual_network#resource_group_name DataAzurermDevTestVirtualNetwork#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/data-sources/dev_test_virtual_network#id DataAzurermDevTestVirtualNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeouts">DataAzurermDevTestVirtualNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/data-sources/dev_test_virtual_network#timeouts DataAzurermDevTestVirtualNetwork#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/data-sources/dev_test_virtual_network#read DataAzurermDevTestVirtualNetwork#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dev_test_virtual_network

dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dev_test_virtual_network

dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dev_test_virtual_network

dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.allowedSubnets">allowed_subnets</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList">DataAzurermDevTestVirtualNetworkAllowedSubnetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.subnetOverrides">subnet_overrides</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList">DataAzurermDevTestVirtualNetworkSubnetOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference">DataAzurermDevTestVirtualNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.uniqueIdentifier">unique_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.labNameInput">lab_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeouts">DataAzurermDevTestVirtualNetworkTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.labName">lab_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `allowed_subnets`<sup>Required</sup> <a name="allowed_subnets" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.allowedSubnets"></a>

```python
allowed_subnets: DataAzurermDevTestVirtualNetworkAllowedSubnetsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList">DataAzurermDevTestVirtualNetworkAllowedSubnetsList</a>

---

##### `subnet_overrides`<sup>Required</sup> <a name="subnet_overrides" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.subnetOverrides"></a>

```python
subnet_overrides: DataAzurermDevTestVirtualNetworkSubnetOverridesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList">DataAzurermDevTestVirtualNetworkSubnetOverridesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.timeouts"></a>

```python
timeouts: DataAzurermDevTestVirtualNetworkTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference">DataAzurermDevTestVirtualNetworkTimeoutsOutputReference</a>

---

##### `unique_identifier`<sup>Required</sup> <a name="unique_identifier" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.uniqueIdentifier"></a>

```python
unique_identifier: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `lab_name_input`<sup>Optional</sup> <a name="lab_name_input" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.labNameInput"></a>

```python
lab_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermDevTestVirtualNetworkTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeouts">DataAzurermDevTestVirtualNetworkTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lab_name`<sup>Required</sup> <a name="lab_name" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.labName"></a>

```python
lab_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermDevTestVirtualNetworkAllowedSubnets <a name="DataAzurermDevTestVirtualNetworkAllowedSubnets" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnets.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dev_test_virtual_network

dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnets()
```


### DataAzurermDevTestVirtualNetworkConfig <a name="DataAzurermDevTestVirtualNetworkConfig" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dev_test_virtual_network

dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  lab_name: str,
  name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermDevTestVirtualNetworkTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.labName">lab_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/data-sources/dev_test_virtual_network#lab_name DataAzurermDevTestVirtualNetwork#lab_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/data-sources/dev_test_virtual_network#name DataAzurermDevTestVirtualNetwork#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/data-sources/dev_test_virtual_network#resource_group_name DataAzurermDevTestVirtualNetwork#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/data-sources/dev_test_virtual_network#id DataAzurermDevTestVirtualNetwork#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeouts">DataAzurermDevTestVirtualNetworkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `lab_name`<sup>Required</sup> <a name="lab_name" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.labName"></a>

```python
lab_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/data-sources/dev_test_virtual_network#lab_name DataAzurermDevTestVirtualNetwork#lab_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/data-sources/dev_test_virtual_network#name DataAzurermDevTestVirtualNetwork#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/data-sources/dev_test_virtual_network#resource_group_name DataAzurermDevTestVirtualNetwork#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/data-sources/dev_test_virtual_network#id DataAzurermDevTestVirtualNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.timeouts"></a>

```python
timeouts: DataAzurermDevTestVirtualNetworkTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeouts">DataAzurermDevTestVirtualNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/data-sources/dev_test_virtual_network#timeouts DataAzurermDevTestVirtualNetwork#timeouts}

---

### DataAzurermDevTestVirtualNetworkSubnetOverrides <a name="DataAzurermDevTestVirtualNetworkSubnetOverrides" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverrides.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dev_test_virtual_network

dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverrides()
```


### DataAzurermDevTestVirtualNetworkTimeouts <a name="DataAzurermDevTestVirtualNetworkTimeouts" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dev_test_virtual_network

dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/data-sources/dev_test_virtual_network#read DataAzurermDevTestVirtualNetwork#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/data-sources/dev_test_virtual_network#read DataAzurermDevTestVirtualNetwork#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermDevTestVirtualNetworkAllowedSubnetsList <a name="DataAzurermDevTestVirtualNetworkAllowedSubnetsList" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dev_test_virtual_network

dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference <a name="DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dev_test_virtual_network

dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.property.allowPublicIp">allow_public_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.property.labSubnetName">lab_subnet_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnets">DataAzurermDevTestVirtualNetworkAllowedSubnets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_public_ip`<sup>Required</sup> <a name="allow_public_ip" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.property.allowPublicIp"></a>

```python
allow_public_ip: str
```

- *Type:* str

---

##### `lab_subnet_name`<sup>Required</sup> <a name="lab_subnet_name" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.property.labSubnetName"></a>

```python
lab_subnet_name: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermDevTestVirtualNetworkAllowedSubnets
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnets">DataAzurermDevTestVirtualNetworkAllowedSubnets</a>

---


### DataAzurermDevTestVirtualNetworkSubnetOverridesList <a name="DataAzurermDevTestVirtualNetworkSubnetOverridesList" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dev_test_virtual_network

dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference <a name="DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dev_test_virtual_network

dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.property.labSubnetName">lab_subnet_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.property.useInVmCreationPermission">use_in_vm_creation_permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.property.usePublicIpAddressPermission">use_public_ip_address_permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.property.virtualNetworkPoolName">virtual_network_pool_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverrides">DataAzurermDevTestVirtualNetworkSubnetOverrides</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lab_subnet_name`<sup>Required</sup> <a name="lab_subnet_name" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.property.labSubnetName"></a>

```python
lab_subnet_name: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `use_in_vm_creation_permission`<sup>Required</sup> <a name="use_in_vm_creation_permission" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.property.useInVmCreationPermission"></a>

```python
use_in_vm_creation_permission: str
```

- *Type:* str

---

##### `use_public_ip_address_permission`<sup>Required</sup> <a name="use_public_ip_address_permission" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.property.usePublicIpAddressPermission"></a>

```python
use_public_ip_address_permission: str
```

- *Type:* str

---

##### `virtual_network_pool_name`<sup>Required</sup> <a name="virtual_network_pool_name" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.property.virtualNetworkPoolName"></a>

```python
virtual_network_pool_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermDevTestVirtualNetworkSubnetOverrides
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverrides">DataAzurermDevTestVirtualNetworkSubnetOverrides</a>

---


### DataAzurermDevTestVirtualNetworkTimeoutsOutputReference <a name="DataAzurermDevTestVirtualNetworkTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dev_test_virtual_network

dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeouts">DataAzurermDevTestVirtualNetworkTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermDevTestVirtualNetworkTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeouts">DataAzurermDevTestVirtualNetworkTimeouts</a>]

---



