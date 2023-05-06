# `data_azurerm_databox_edge_device`

Refer to the Terraform Registory for docs: [`data_azurerm_databox_edge_device`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/databox_edge_device).

# `dataAzurermDataboxEdgeDevice` Submodule <a name="`dataAzurermDataboxEdgeDevice` Submodule" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermDataboxEdgeDevice <a name="DataAzurermDataboxEdgeDevice" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/databox_edge_device azurerm_databox_edge_device}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_databox_edge_device

dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice(
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
  timeouts: DataAzurermDataboxEdgeDeviceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/databox_edge_device#name DataAzurermDataboxEdgeDevice#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/databox_edge_device#resource_group_name DataAzurermDataboxEdgeDevice#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/databox_edge_device#id DataAzurermDataboxEdgeDevice#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeouts">DataAzurermDataboxEdgeDeviceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/databox_edge_device#name DataAzurermDataboxEdgeDevice#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/databox_edge_device#resource_group_name DataAzurermDataboxEdgeDevice#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/databox_edge_device#id DataAzurermDataboxEdgeDevice#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeouts">DataAzurermDataboxEdgeDeviceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/databox_edge_device#timeouts DataAzurermDataboxEdgeDevice#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/databox_edge_device#read DataAzurermDataboxEdgeDevice#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_databox_edge_device

dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_databox_edge_device

dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_databox_edge_device

dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.deviceProperties">device_properties</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesList">DataAzurermDataboxEdgeDeviceDevicePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.skuName">sku_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference">DataAzurermDataboxEdgeDeviceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeouts">DataAzurermDataboxEdgeDeviceTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `device_properties`<sup>Required</sup> <a name="device_properties" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.deviceProperties"></a>

```python
device_properties: DataAzurermDataboxEdgeDeviceDevicePropertiesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesList">DataAzurermDataboxEdgeDeviceDevicePropertiesList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.timeouts"></a>

```python
timeouts: DataAzurermDataboxEdgeDeviceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference">DataAzurermDataboxEdgeDeviceTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataAzurermDataboxEdgeDeviceTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeouts">DataAzurermDataboxEdgeDeviceTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDevice.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermDataboxEdgeDeviceConfig <a name="DataAzurermDataboxEdgeDeviceConfig" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_databox_edge_device

dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceConfig(
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
  timeouts: DataAzurermDataboxEdgeDeviceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/databox_edge_device#name DataAzurermDataboxEdgeDevice#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/databox_edge_device#resource_group_name DataAzurermDataboxEdgeDevice#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/databox_edge_device#id DataAzurermDataboxEdgeDevice#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeouts">DataAzurermDataboxEdgeDeviceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/databox_edge_device#name DataAzurermDataboxEdgeDevice#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/databox_edge_device#resource_group_name DataAzurermDataboxEdgeDevice#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/databox_edge_device#id DataAzurermDataboxEdgeDevice#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceConfig.property.timeouts"></a>

```python
timeouts: DataAzurermDataboxEdgeDeviceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeouts">DataAzurermDataboxEdgeDeviceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/databox_edge_device#timeouts DataAzurermDataboxEdgeDevice#timeouts}

---

### DataAzurermDataboxEdgeDeviceDeviceProperties <a name="DataAzurermDataboxEdgeDeviceDeviceProperties" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDeviceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDeviceProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_databox_edge_device

dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDeviceProperties()
```


### DataAzurermDataboxEdgeDeviceTimeouts <a name="DataAzurermDataboxEdgeDeviceTimeouts" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_databox_edge_device

dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/databox_edge_device#read DataAzurermDataboxEdgeDevice#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/databox_edge_device#read DataAzurermDataboxEdgeDevice#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermDataboxEdgeDeviceDevicePropertiesList <a name="DataAzurermDataboxEdgeDeviceDevicePropertiesList" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_databox_edge_device

dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference <a name="DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_databox_edge_device

dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.property.capacity">capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.property.configuredRoleTypes">configured_role_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.property.culture">culture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.property.hcsVersion">hcs_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.property.model">model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.property.serialNumber">serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.property.softwareVersion">software_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDeviceProperties">DataAzurermDataboxEdgeDeviceDeviceProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.property.capacity"></a>

```python
capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `configured_role_types`<sup>Required</sup> <a name="configured_role_types" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.property.configuredRoleTypes"></a>

```python
configured_role_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `culture`<sup>Required</sup> <a name="culture" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.property.culture"></a>

```python
culture: str
```

- *Type:* str

---

##### `hcs_version`<sup>Required</sup> <a name="hcs_version" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.property.hcsVersion"></a>

```python
hcs_version: str
```

- *Type:* str

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.property.model"></a>

```python
model: str
```

- *Type:* str

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

---

##### `software_version`<sup>Required</sup> <a name="software_version" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.property.softwareVersion"></a>

```python
software_version: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDevicePropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermDataboxEdgeDeviceDeviceProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceDeviceProperties">DataAzurermDataboxEdgeDeviceDeviceProperties</a>

---


### DataAzurermDataboxEdgeDeviceTimeoutsOutputReference <a name="DataAzurermDataboxEdgeDeviceTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_databox_edge_device

dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeouts">DataAzurermDataboxEdgeDeviceTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAzurermDataboxEdgeDeviceTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.dataAzurermDataboxEdgeDevice.DataAzurermDataboxEdgeDeviceTimeouts">DataAzurermDataboxEdgeDeviceTimeouts</a>, cdktf.IResolvable]

---



