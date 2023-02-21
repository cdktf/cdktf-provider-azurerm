# `dataAzurermWindowsFunctionApp` Submodule <a name="`dataAzurermWindowsFunctionApp` Submodule" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermWindowsFunctionApp <a name="DataAzurermWindowsFunctionApp" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/windows_function_app azurerm_windows_function_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermWindowsFunctionAppTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/windows_function_app#name DataAzurermWindowsFunctionApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/windows_function_app#resource_group_name DataAzurermWindowsFunctionApp#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/windows_function_app#id DataAzurermWindowsFunctionApp#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeouts">DataAzurermWindowsFunctionAppTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/windows_function_app#name DataAzurermWindowsFunctionApp#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/windows_function_app#resource_group_name DataAzurermWindowsFunctionApp#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/windows_function_app#id DataAzurermWindowsFunctionApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeouts">DataAzurermWindowsFunctionAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/windows_function_app#timeouts DataAzurermWindowsFunctionApp#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/windows_function_app#read DataAzurermWindowsFunctionApp#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.appSettings">app_settings</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.authSettings">auth_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList">DataAzurermWindowsFunctionAppAuthSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.backup">backup</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList">DataAzurermWindowsFunctionAppBackupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.builtinLoggingEnabled">builtin_logging_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.clientCertificateEnabled">client_certificate_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.clientCertificateExclusionPaths">client_certificate_exclusion_paths</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.clientCertificateMode">client_certificate_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.connectionString">connection_string</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList">DataAzurermWindowsFunctionAppConnectionStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.contentShareForceDisabled">content_share_force_disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.customDomainVerificationId">custom_domain_verification_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.dailyMemoryTimeQuota">daily_memory_time_quota</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.defaultHostname">default_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.functionsExtensionVersion">functions_extension_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.httpsOnly">https_only</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList">DataAzurermWindowsFunctionAppIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.outboundIpAddresses">outbound_ip_addresses</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.outboundIpAddressList">outbound_ip_address_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.possibleOutboundIpAddresses">possible_outbound_ip_addresses</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.possibleOutboundIpAddressList">possible_outbound_ip_address_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.servicePlanId">service_plan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.siteConfig">site_config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList">DataAzurermWindowsFunctionAppSiteConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.siteCredential">site_credential</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList">DataAzurermWindowsFunctionAppSiteCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.stickySettings">sticky_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList">DataAzurermWindowsFunctionAppStickySettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.storageAccountAccessKey">storage_account_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.storageAccountName">storage_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.storageKeyVaultSecretId">storage_key_vault_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.storageUsesManagedIdentity">storage_uses_managed_identity</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference">DataAzurermWindowsFunctionAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.virtualNetworkSubnetId">virtual_network_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeouts">DataAzurermWindowsFunctionAppTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `app_settings`<sup>Required</sup> <a name="app_settings" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.appSettings"></a>

```python
app_settings: StringMap
```

- *Type:* cdktf.StringMap

---

##### `auth_settings`<sup>Required</sup> <a name="auth_settings" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.authSettings"></a>

```python
auth_settings: DataAzurermWindowsFunctionAppAuthSettingsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList">DataAzurermWindowsFunctionAppAuthSettingsList</a>

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.backup"></a>

```python
backup: DataAzurermWindowsFunctionAppBackupList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList">DataAzurermWindowsFunctionAppBackupList</a>

---

##### `builtin_logging_enabled`<sup>Required</sup> <a name="builtin_logging_enabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.builtinLoggingEnabled"></a>

```python
builtin_logging_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `client_certificate_enabled`<sup>Required</sup> <a name="client_certificate_enabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.clientCertificateEnabled"></a>

```python
client_certificate_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `client_certificate_exclusion_paths`<sup>Required</sup> <a name="client_certificate_exclusion_paths" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.clientCertificateExclusionPaths"></a>

```python
client_certificate_exclusion_paths: str
```

- *Type:* str

---

##### `client_certificate_mode`<sup>Required</sup> <a name="client_certificate_mode" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.clientCertificateMode"></a>

```python
client_certificate_mode: str
```

- *Type:* str

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.connectionString"></a>

```python
connection_string: DataAzurermWindowsFunctionAppConnectionStringList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList">DataAzurermWindowsFunctionAppConnectionStringList</a>

---

##### `content_share_force_disabled`<sup>Required</sup> <a name="content_share_force_disabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.contentShareForceDisabled"></a>

```python
content_share_force_disabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `custom_domain_verification_id`<sup>Required</sup> <a name="custom_domain_verification_id" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.customDomainVerificationId"></a>

```python
custom_domain_verification_id: str
```

- *Type:* str

---

##### `daily_memory_time_quota`<sup>Required</sup> <a name="daily_memory_time_quota" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.dailyMemoryTimeQuota"></a>

```python
daily_memory_time_quota: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_hostname`<sup>Required</sup> <a name="default_hostname" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.defaultHostname"></a>

```python
default_hostname: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `functions_extension_version`<sup>Required</sup> <a name="functions_extension_version" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.functionsExtensionVersion"></a>

```python
functions_extension_version: str
```

- *Type:* str

---

##### `https_only`<sup>Required</sup> <a name="https_only" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.httpsOnly"></a>

```python
https_only: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.identity"></a>

```python
identity: DataAzurermWindowsFunctionAppIdentityList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList">DataAzurermWindowsFunctionAppIdentityList</a>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `outbound_ip_addresses`<sup>Required</sup> <a name="outbound_ip_addresses" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.outboundIpAddresses"></a>

```python
outbound_ip_addresses: str
```

- *Type:* str

---

##### `outbound_ip_address_list`<sup>Required</sup> <a name="outbound_ip_address_list" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.outboundIpAddressList"></a>

```python
outbound_ip_address_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `possible_outbound_ip_addresses`<sup>Required</sup> <a name="possible_outbound_ip_addresses" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.possibleOutboundIpAddresses"></a>

```python
possible_outbound_ip_addresses: str
```

- *Type:* str

---

##### `possible_outbound_ip_address_list`<sup>Required</sup> <a name="possible_outbound_ip_address_list" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.possibleOutboundIpAddressList"></a>

```python
possible_outbound_ip_address_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_plan_id`<sup>Required</sup> <a name="service_plan_id" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.servicePlanId"></a>

```python
service_plan_id: str
```

- *Type:* str

---

##### `site_config`<sup>Required</sup> <a name="site_config" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.siteConfig"></a>

```python
site_config: DataAzurermWindowsFunctionAppSiteConfigList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList">DataAzurermWindowsFunctionAppSiteConfigList</a>

---

##### `site_credential`<sup>Required</sup> <a name="site_credential" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.siteCredential"></a>

```python
site_credential: DataAzurermWindowsFunctionAppSiteCredentialList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList">DataAzurermWindowsFunctionAppSiteCredentialList</a>

---

##### `sticky_settings`<sup>Required</sup> <a name="sticky_settings" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.stickySettings"></a>

```python
sticky_settings: DataAzurermWindowsFunctionAppStickySettingsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList">DataAzurermWindowsFunctionAppStickySettingsList</a>

---

##### `storage_account_access_key`<sup>Required</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.storageAccountAccessKey"></a>

```python
storage_account_access_key: str
```

- *Type:* str

---

##### `storage_account_name`<sup>Required</sup> <a name="storage_account_name" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.storageAccountName"></a>

```python
storage_account_name: str
```

- *Type:* str

---

##### `storage_key_vault_secret_id`<sup>Required</sup> <a name="storage_key_vault_secret_id" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.storageKeyVaultSecretId"></a>

```python
storage_key_vault_secret_id: str
```

- *Type:* str

---

##### `storage_uses_managed_identity`<sup>Required</sup> <a name="storage_uses_managed_identity" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.storageUsesManagedIdentity"></a>

```python
storage_uses_managed_identity: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.timeouts"></a>

```python
timeouts: DataAzurermWindowsFunctionAppTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference">DataAzurermWindowsFunctionAppTimeoutsOutputReference</a>

---

##### `virtual_network_subnet_id`<sup>Required</sup> <a name="virtual_network_subnet_id" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.virtualNetworkSubnetId"></a>

```python
virtual_network_subnet_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataAzurermWindowsFunctionAppTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeouts">DataAzurermWindowsFunctionAppTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermWindowsFunctionAppAuthSettings <a name="DataAzurermWindowsFunctionAppAuthSettings" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettings()
```


### DataAzurermWindowsFunctionAppAuthSettingsActiveDirectory <a name="DataAzurermWindowsFunctionAppAuthSettingsActiveDirectory" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectory.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectory()
```


### DataAzurermWindowsFunctionAppAuthSettingsFacebook <a name="DataAzurermWindowsFunctionAppAuthSettingsFacebook" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebook.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebook()
```


### DataAzurermWindowsFunctionAppAuthSettingsGithub <a name="DataAzurermWindowsFunctionAppAuthSettingsGithub" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithub.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithub()
```


### DataAzurermWindowsFunctionAppAuthSettingsGoogle <a name="DataAzurermWindowsFunctionAppAuthSettingsGoogle" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogle.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogle()
```


### DataAzurermWindowsFunctionAppAuthSettingsMicrosoft <a name="DataAzurermWindowsFunctionAppAuthSettingsMicrosoft" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoft"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoft.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoft()
```


### DataAzurermWindowsFunctionAppAuthSettingsTwitter <a name="DataAzurermWindowsFunctionAppAuthSettingsTwitter" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitter.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitter()
```


### DataAzurermWindowsFunctionAppBackup <a name="DataAzurermWindowsFunctionAppBackup" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackup.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackup()
```


### DataAzurermWindowsFunctionAppBackupSchedule <a name="DataAzurermWindowsFunctionAppBackupSchedule" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupSchedule()
```


### DataAzurermWindowsFunctionAppConfig <a name="DataAzurermWindowsFunctionAppConfig" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermWindowsFunctionAppTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/windows_function_app#name DataAzurermWindowsFunctionApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/windows_function_app#resource_group_name DataAzurermWindowsFunctionApp#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/windows_function_app#id DataAzurermWindowsFunctionApp#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeouts">DataAzurermWindowsFunctionAppTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/windows_function_app#name DataAzurermWindowsFunctionApp#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/windows_function_app#resource_group_name DataAzurermWindowsFunctionApp#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/windows_function_app#id DataAzurermWindowsFunctionApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.timeouts"></a>

```python
timeouts: DataAzurermWindowsFunctionAppTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeouts">DataAzurermWindowsFunctionAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/windows_function_app#timeouts DataAzurermWindowsFunctionApp#timeouts}

---

### DataAzurermWindowsFunctionAppConnectionString <a name="DataAzurermWindowsFunctionAppConnectionString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionString.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionString()
```


### DataAzurermWindowsFunctionAppIdentity <a name="DataAzurermWindowsFunctionAppIdentity" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentity()
```


### DataAzurermWindowsFunctionAppSiteConfig <a name="DataAzurermWindowsFunctionAppSiteConfig" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfig()
```


### DataAzurermWindowsFunctionAppSiteConfigApplicationStack <a name="DataAzurermWindowsFunctionAppSiteConfigApplicationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStack"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStack.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStack()
```


### DataAzurermWindowsFunctionAppSiteConfigAppServiceLogs <a name="DataAzurermWindowsFunctionAppSiteConfigAppServiceLogs" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogs.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogs()
```


### DataAzurermWindowsFunctionAppSiteConfigCors <a name="DataAzurermWindowsFunctionAppSiteConfigCors" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCors.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCors()
```


### DataAzurermWindowsFunctionAppSiteConfigIpRestriction <a name="DataAzurermWindowsFunctionAppSiteConfigIpRestriction" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestriction.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestriction()
```


### DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeaders <a name="DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeaders" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeaders()
```


### DataAzurermWindowsFunctionAppSiteConfigScmIpRestriction <a name="DataAzurermWindowsFunctionAppSiteConfigScmIpRestriction" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestriction.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestriction()
```


### DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeaders <a name="DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeaders" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeaders()
```


### DataAzurermWindowsFunctionAppSiteCredential <a name="DataAzurermWindowsFunctionAppSiteCredential" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredential.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredential()
```


### DataAzurermWindowsFunctionAppStickySettings <a name="DataAzurermWindowsFunctionAppStickySettings" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettings.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettings()
```


### DataAzurermWindowsFunctionAppTimeouts <a name="DataAzurermWindowsFunctionAppTimeouts" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/windows_function_app#read DataAzurermWindowsFunctionApp#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/windows_function_app#read DataAzurermWindowsFunctionApp#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList <a name="DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences">allowed_audiences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecretSettingName">client_secret_setting_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectory">DataAzurermWindowsFunctionAppAuthSettingsActiveDirectory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_audiences`<sup>Required</sup> <a name="allowed_audiences" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences"></a>

```python
allowed_audiences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `client_secret_setting_name`<sup>Required</sup> <a name="client_secret_setting_name" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecretSettingName"></a>

```python
client_secret_setting_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermWindowsFunctionAppAuthSettingsActiveDirectory
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectory">DataAzurermWindowsFunctionAppAuthSettingsActiveDirectory</a>

---


### DataAzurermWindowsFunctionAppAuthSettingsFacebookList <a name="DataAzurermWindowsFunctionAppAuthSettingsFacebookList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.appSecret">app_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.appSecretSettingName">app_secret_setting_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebook">DataAzurermWindowsFunctionAppAuthSettingsFacebook</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `app_secret`<sup>Required</sup> <a name="app_secret" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.appSecret"></a>

```python
app_secret: str
```

- *Type:* str

---

##### `app_secret_setting_name`<sup>Required</sup> <a name="app_secret_setting_name" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.appSecretSettingName"></a>

```python
app_secret_setting_name: str
```

- *Type:* str

---

##### `oauth_scopes`<sup>Required</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermWindowsFunctionAppAuthSettingsFacebook
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebook">DataAzurermWindowsFunctionAppAuthSettingsFacebook</a>

---


### DataAzurermWindowsFunctionAppAuthSettingsGithubList <a name="DataAzurermWindowsFunctionAppAuthSettingsGithubList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.clientSecretSettingName">client_secret_setting_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithub">DataAzurermWindowsFunctionAppAuthSettingsGithub</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `client_secret_setting_name`<sup>Required</sup> <a name="client_secret_setting_name" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.clientSecretSettingName"></a>

```python
client_secret_setting_name: str
```

- *Type:* str

---

##### `oauth_scopes`<sup>Required</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermWindowsFunctionAppAuthSettingsGithub
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithub">DataAzurermWindowsFunctionAppAuthSettingsGithub</a>

---


### DataAzurermWindowsFunctionAppAuthSettingsGoogleList <a name="DataAzurermWindowsFunctionAppAuthSettingsGoogleList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientSecretSettingName">client_secret_setting_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogle">DataAzurermWindowsFunctionAppAuthSettingsGoogle</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `client_secret_setting_name`<sup>Required</sup> <a name="client_secret_setting_name" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientSecretSettingName"></a>

```python
client_secret_setting_name: str
```

- *Type:* str

---

##### `oauth_scopes`<sup>Required</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermWindowsFunctionAppAuthSettingsGoogle
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogle">DataAzurermWindowsFunctionAppAuthSettingsGoogle</a>

---


### DataAzurermWindowsFunctionAppAuthSettingsList <a name="DataAzurermWindowsFunctionAppAuthSettingsList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermWindowsFunctionAppAuthSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList <a name="DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecretSettingName">client_secret_setting_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoft">DataAzurermWindowsFunctionAppAuthSettingsMicrosoft</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `client_secret_setting_name`<sup>Required</sup> <a name="client_secret_setting_name" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecretSettingName"></a>

```python
client_secret_setting_name: str
```

- *Type:* str

---

##### `oauth_scopes`<sup>Required</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermWindowsFunctionAppAuthSettingsMicrosoft
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoft">DataAzurermWindowsFunctionAppAuthSettingsMicrosoft</a>

---


### DataAzurermWindowsFunctionAppAuthSettingsOutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.activeDirectory">active_directory</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList">DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.additionalLoginParameters">additional_login_parameters</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.allowedExternalRedirectUrls">allowed_external_redirect_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.defaultProvider">default_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.facebook">facebook</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList">DataAzurermWindowsFunctionAppAuthSettingsFacebookList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.github">github</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList">DataAzurermWindowsFunctionAppAuthSettingsGithubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.google">google</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList">DataAzurermWindowsFunctionAppAuthSettingsGoogleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.microsoft">microsoft</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList">DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.runtimeVersion">runtime_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.tokenRefreshExtensionHours">token_refresh_extension_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.tokenStoreEnabled">token_store_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.twitter">twitter</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList">DataAzurermWindowsFunctionAppAuthSettingsTwitterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.unauthenticatedClientAction">unauthenticated_client_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettings">DataAzurermWindowsFunctionAppAuthSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_directory`<sup>Required</sup> <a name="active_directory" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.activeDirectory"></a>

```python
active_directory: DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList">DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList</a>

---

##### `additional_login_parameters`<sup>Required</sup> <a name="additional_login_parameters" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.additionalLoginParameters"></a>

```python
additional_login_parameters: StringMap
```

- *Type:* cdktf.StringMap

---

##### `allowed_external_redirect_urls`<sup>Required</sup> <a name="allowed_external_redirect_urls" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.allowedExternalRedirectUrls"></a>

```python
allowed_external_redirect_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_provider`<sup>Required</sup> <a name="default_provider" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.defaultProvider"></a>

```python
default_provider: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `facebook`<sup>Required</sup> <a name="facebook" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.facebook"></a>

```python
facebook: DataAzurermWindowsFunctionAppAuthSettingsFacebookList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList">DataAzurermWindowsFunctionAppAuthSettingsFacebookList</a>

---

##### `github`<sup>Required</sup> <a name="github" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.github"></a>

```python
github: DataAzurermWindowsFunctionAppAuthSettingsGithubList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList">DataAzurermWindowsFunctionAppAuthSettingsGithubList</a>

---

##### `google`<sup>Required</sup> <a name="google" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.google"></a>

```python
google: DataAzurermWindowsFunctionAppAuthSettingsGoogleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList">DataAzurermWindowsFunctionAppAuthSettingsGoogleList</a>

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `microsoft`<sup>Required</sup> <a name="microsoft" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.microsoft"></a>

```python
microsoft: DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList">DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList</a>

---

##### `runtime_version`<sup>Required</sup> <a name="runtime_version" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.runtimeVersion"></a>

```python
runtime_version: str
```

- *Type:* str

---

##### `token_refresh_extension_hours`<sup>Required</sup> <a name="token_refresh_extension_hours" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.tokenRefreshExtensionHours"></a>

```python
token_refresh_extension_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_store_enabled`<sup>Required</sup> <a name="token_store_enabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.tokenStoreEnabled"></a>

```python
token_store_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `twitter`<sup>Required</sup> <a name="twitter" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.twitter"></a>

```python
twitter: DataAzurermWindowsFunctionAppAuthSettingsTwitterList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList">DataAzurermWindowsFunctionAppAuthSettingsTwitterList</a>

---

##### `unauthenticated_client_action`<sup>Required</sup> <a name="unauthenticated_client_action" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.unauthenticatedClientAction"></a>

```python
unauthenticated_client_action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermWindowsFunctionAppAuthSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettings">DataAzurermWindowsFunctionAppAuthSettings</a>

---


### DataAzurermWindowsFunctionAppAuthSettingsTwitterList <a name="DataAzurermWindowsFunctionAppAuthSettingsTwitterList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerKey">consumer_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerSecret">consumer_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerSecretSettingName">consumer_secret_setting_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitter">DataAzurermWindowsFunctionAppAuthSettingsTwitter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `consumer_key`<sup>Required</sup> <a name="consumer_key" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerKey"></a>

```python
consumer_key: str
```

- *Type:* str

---

##### `consumer_secret`<sup>Required</sup> <a name="consumer_secret" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerSecret"></a>

```python
consumer_secret: str
```

- *Type:* str

---

##### `consumer_secret_setting_name`<sup>Required</sup> <a name="consumer_secret_setting_name" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerSecretSettingName"></a>

```python
consumer_secret_setting_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermWindowsFunctionAppAuthSettingsTwitter
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitter">DataAzurermWindowsFunctionAppAuthSettingsTwitter</a>

---


### DataAzurermWindowsFunctionAppBackupList <a name="DataAzurermWindowsFunctionAppBackupList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermWindowsFunctionAppBackupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermWindowsFunctionAppBackupOutputReference <a name="DataAzurermWindowsFunctionAppBackupOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList">DataAzurermWindowsFunctionAppBackupScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.storageAccountUrl">storage_account_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackup">DataAzurermWindowsFunctionAppBackup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.schedule"></a>

```python
schedule: DataAzurermWindowsFunctionAppBackupScheduleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList">DataAzurermWindowsFunctionAppBackupScheduleList</a>

---

##### `storage_account_url`<sup>Required</sup> <a name="storage_account_url" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.storageAccountUrl"></a>

```python
storage_account_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermWindowsFunctionAppBackup
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackup">DataAzurermWindowsFunctionAppBackup</a>

---


### DataAzurermWindowsFunctionAppBackupScheduleList <a name="DataAzurermWindowsFunctionAppBackupScheduleList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermWindowsFunctionAppBackupScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermWindowsFunctionAppBackupScheduleOutputReference <a name="DataAzurermWindowsFunctionAppBackupScheduleOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.frequencyInterval">frequency_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.frequencyUnit">frequency_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.keepAtLeastOneBackup">keep_at_least_one_backup</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.lastExecutionTime">last_execution_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.retentionPeriodDays">retention_period_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupSchedule">DataAzurermWindowsFunctionAppBackupSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `frequency_interval`<sup>Required</sup> <a name="frequency_interval" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.frequencyInterval"></a>

```python
frequency_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `frequency_unit`<sup>Required</sup> <a name="frequency_unit" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.frequencyUnit"></a>

```python
frequency_unit: str
```

- *Type:* str

---

##### `keep_at_least_one_backup`<sup>Required</sup> <a name="keep_at_least_one_backup" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.keepAtLeastOneBackup"></a>

```python
keep_at_least_one_backup: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `last_execution_time`<sup>Required</sup> <a name="last_execution_time" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.lastExecutionTime"></a>

```python
last_execution_time: str
```

- *Type:* str

---

##### `retention_period_days`<sup>Required</sup> <a name="retention_period_days" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.retentionPeriodDays"></a>

```python
retention_period_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermWindowsFunctionAppBackupSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupSchedule">DataAzurermWindowsFunctionAppBackupSchedule</a>

---


### DataAzurermWindowsFunctionAppConnectionStringList <a name="DataAzurermWindowsFunctionAppConnectionStringList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermWindowsFunctionAppConnectionStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermWindowsFunctionAppConnectionStringOutputReference <a name="DataAzurermWindowsFunctionAppConnectionStringOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionString">DataAzurermWindowsFunctionAppConnectionString</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermWindowsFunctionAppConnectionString
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionString">DataAzurermWindowsFunctionAppConnectionString</a>

---


### DataAzurermWindowsFunctionAppIdentityList <a name="DataAzurermWindowsFunctionAppIdentityList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermWindowsFunctionAppIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermWindowsFunctionAppIdentityOutputReference <a name="DataAzurermWindowsFunctionAppIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentity">DataAzurermWindowsFunctionAppIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermWindowsFunctionAppIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentity">DataAzurermWindowsFunctionAppIdentity</a>

---


### DataAzurermWindowsFunctionAppSiteConfigApplicationStackList <a name="DataAzurermWindowsFunctionAppSiteConfigApplicationStackList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference <a name="DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.dotnetVersion">dotnet_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.javaVersion">java_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.nodeVersion">node_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.powershellCoreVersion">powershell_core_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.useCustomRuntime">use_custom_runtime</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.useDotnetIsolatedRuntime">use_dotnet_isolated_runtime</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStack">DataAzurermWindowsFunctionAppSiteConfigApplicationStack</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dotnet_version`<sup>Required</sup> <a name="dotnet_version" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.dotnetVersion"></a>

```python
dotnet_version: str
```

- *Type:* str

---

##### `java_version`<sup>Required</sup> <a name="java_version" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.javaVersion"></a>

```python
java_version: str
```

- *Type:* str

---

##### `node_version`<sup>Required</sup> <a name="node_version" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.nodeVersion"></a>

```python
node_version: str
```

- *Type:* str

---

##### `powershell_core_version`<sup>Required</sup> <a name="powershell_core_version" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.powershellCoreVersion"></a>

```python
powershell_core_version: str
```

- *Type:* str

---

##### `use_custom_runtime`<sup>Required</sup> <a name="use_custom_runtime" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.useCustomRuntime"></a>

```python
use_custom_runtime: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `use_dotnet_isolated_runtime`<sup>Required</sup> <a name="use_dotnet_isolated_runtime" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.useDotnetIsolatedRuntime"></a>

```python
use_dotnet_isolated_runtime: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermWindowsFunctionAppSiteConfigApplicationStack
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStack">DataAzurermWindowsFunctionAppSiteConfigApplicationStack</a>

---


### DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList <a name="DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference <a name="DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.diskQuotaMb">disk_quota_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.retentionPeriodDays">retention_period_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogs">DataAzurermWindowsFunctionAppSiteConfigAppServiceLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_quota_mb`<sup>Required</sup> <a name="disk_quota_mb" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.diskQuotaMb"></a>

```python
disk_quota_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_period_days`<sup>Required</sup> <a name="retention_period_days" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.retentionPeriodDays"></a>

```python
retention_period_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermWindowsFunctionAppSiteConfigAppServiceLogs
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogs">DataAzurermWindowsFunctionAppSiteConfigAppServiceLogs</a>

---


### DataAzurermWindowsFunctionAppSiteConfigCorsList <a name="DataAzurermWindowsFunctionAppSiteConfigCorsList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference <a name="DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.property.supportCredentials">support_credentials</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCors">DataAzurermWindowsFunctionAppSiteConfigCors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `support_credentials`<sup>Required</sup> <a name="support_credentials" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.property.supportCredentials"></a>

```python
support_credentials: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermWindowsFunctionAppSiteConfigCors
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCors">DataAzurermWindowsFunctionAppSiteConfigCors</a>

---


### DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList <a name="DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference <a name="DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid">x_azure_fdid</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe">x_fd_health_probe</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor">x_forwarded_for</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost">x_forwarded_host</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeaders">DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeaders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x_azure_fdid`<sup>Required</sup> <a name="x_azure_fdid" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```python
x_azure_fdid: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_fd_health_probe`<sup>Required</sup> <a name="x_fd_health_probe" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```python
x_fd_health_probe: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_for`<sup>Required</sup> <a name="x_forwarded_for" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```python
x_forwarded_for: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_host`<sup>Required</sup> <a name="x_forwarded_host" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```python
x_forwarded_host: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeaders
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeaders">DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeaders</a>

---


### DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList <a name="DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference <a name="DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList">DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.serviceTag">service_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId">virtual_network_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestriction">DataAzurermWindowsFunctionAppSiteConfigIpRestriction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.headers"></a>

```python
headers: DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList">DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList</a>

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_tag`<sup>Required</sup> <a name="service_tag" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.serviceTag"></a>

```python
service_tag: str
```

- *Type:* str

---

##### `virtual_network_subnet_id`<sup>Required</sup> <a name="virtual_network_subnet_id" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```python
virtual_network_subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermWindowsFunctionAppSiteConfigIpRestriction
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestriction">DataAzurermWindowsFunctionAppSiteConfigIpRestriction</a>

---


### DataAzurermWindowsFunctionAppSiteConfigList <a name="DataAzurermWindowsFunctionAppSiteConfigList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermWindowsFunctionAppSiteConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermWindowsFunctionAppSiteConfigOutputReference <a name="DataAzurermWindowsFunctionAppSiteConfigOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.alwaysOn">always_on</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.apiDefinitionUrl">api_definition_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.apiManagementApiId">api_management_api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.appCommandLine">app_command_line</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.applicationInsightsConnectionString">application_insights_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.applicationInsightsKey">application_insights_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.applicationStack">application_stack</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList">DataAzurermWindowsFunctionAppSiteConfigApplicationStackList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.appScaleLimit">app_scale_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.appServiceLogs">app_service_logs</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList">DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList">DataAzurermWindowsFunctionAppSiteConfigCorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.defaultDocuments">default_documents</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.detailedErrorLoggingEnabled">detailed_error_logging_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.elasticInstanceMinimum">elastic_instance_minimum</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.ftpsState">ftps_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.healthCheckEvictionTimeInMin">health_check_eviction_time_in_min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.healthCheckPath">health_check_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.http2Enabled">http2_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.ipRestriction">ip_restriction</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList">DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.loadBalancingMode">load_balancing_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.managedPipelineMode">managed_pipeline_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.minimumTlsVersion">minimum_tls_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.preWarmedInstanceCount">pre_warmed_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.remoteDebuggingEnabled">remote_debugging_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.remoteDebuggingVersion">remote_debugging_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled">runtime_scale_monitoring_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.scmIpRestriction">scm_ip_restriction</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList">DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.scmMinimumTlsVersion">scm_minimum_tls_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.scmType">scm_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.scmUseMainIpRestriction">scm_use_main_ip_restriction</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.use32BitWorker">use32_bit_worker</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.vnetRouteAllEnabled">vnet_route_all_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.websocketsEnabled">websockets_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.windowsFxVersion">windows_fx_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.workerCount">worker_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfig">DataAzurermWindowsFunctionAppSiteConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `always_on`<sup>Required</sup> <a name="always_on" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.alwaysOn"></a>

```python
always_on: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `api_definition_url`<sup>Required</sup> <a name="api_definition_url" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.apiDefinitionUrl"></a>

```python
api_definition_url: str
```

- *Type:* str

---

##### `api_management_api_id`<sup>Required</sup> <a name="api_management_api_id" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.apiManagementApiId"></a>

```python
api_management_api_id: str
```

- *Type:* str

---

##### `app_command_line`<sup>Required</sup> <a name="app_command_line" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.appCommandLine"></a>

```python
app_command_line: str
```

- *Type:* str

---

##### `application_insights_connection_string`<sup>Required</sup> <a name="application_insights_connection_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.applicationInsightsConnectionString"></a>

```python
application_insights_connection_string: str
```

- *Type:* str

---

##### `application_insights_key`<sup>Required</sup> <a name="application_insights_key" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.applicationInsightsKey"></a>

```python
application_insights_key: str
```

- *Type:* str

---

##### `application_stack`<sup>Required</sup> <a name="application_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.applicationStack"></a>

```python
application_stack: DataAzurermWindowsFunctionAppSiteConfigApplicationStackList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList">DataAzurermWindowsFunctionAppSiteConfigApplicationStackList</a>

---

##### `app_scale_limit`<sup>Required</sup> <a name="app_scale_limit" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.appScaleLimit"></a>

```python
app_scale_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `app_service_logs`<sup>Required</sup> <a name="app_service_logs" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.appServiceLogs"></a>

```python
app_service_logs: DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList">DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList</a>

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.cors"></a>

```python
cors: DataAzurermWindowsFunctionAppSiteConfigCorsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList">DataAzurermWindowsFunctionAppSiteConfigCorsList</a>

---

##### `default_documents`<sup>Required</sup> <a name="default_documents" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.defaultDocuments"></a>

```python
default_documents: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `detailed_error_logging_enabled`<sup>Required</sup> <a name="detailed_error_logging_enabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.detailedErrorLoggingEnabled"></a>

```python
detailed_error_logging_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `elastic_instance_minimum`<sup>Required</sup> <a name="elastic_instance_minimum" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.elasticInstanceMinimum"></a>

```python
elastic_instance_minimum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ftps_state`<sup>Required</sup> <a name="ftps_state" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.ftpsState"></a>

```python
ftps_state: str
```

- *Type:* str

---

##### `health_check_eviction_time_in_min`<sup>Required</sup> <a name="health_check_eviction_time_in_min" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.healthCheckEvictionTimeInMin"></a>

```python
health_check_eviction_time_in_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_check_path`<sup>Required</sup> <a name="health_check_path" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.healthCheckPath"></a>

```python
health_check_path: str
```

- *Type:* str

---

##### `http2_enabled`<sup>Required</sup> <a name="http2_enabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.http2Enabled"></a>

```python
http2_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ip_restriction`<sup>Required</sup> <a name="ip_restriction" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.ipRestriction"></a>

```python
ip_restriction: DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList">DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList</a>

---

##### `load_balancing_mode`<sup>Required</sup> <a name="load_balancing_mode" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.loadBalancingMode"></a>

```python
load_balancing_mode: str
```

- *Type:* str

---

##### `managed_pipeline_mode`<sup>Required</sup> <a name="managed_pipeline_mode" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.managedPipelineMode"></a>

```python
managed_pipeline_mode: str
```

- *Type:* str

---

##### `minimum_tls_version`<sup>Required</sup> <a name="minimum_tls_version" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.minimumTlsVersion"></a>

```python
minimum_tls_version: str
```

- *Type:* str

---

##### `pre_warmed_instance_count`<sup>Required</sup> <a name="pre_warmed_instance_count" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.preWarmedInstanceCount"></a>

```python
pre_warmed_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `remote_debugging_enabled`<sup>Required</sup> <a name="remote_debugging_enabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.remoteDebuggingEnabled"></a>

```python
remote_debugging_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `remote_debugging_version`<sup>Required</sup> <a name="remote_debugging_version" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.remoteDebuggingVersion"></a>

```python
remote_debugging_version: str
```

- *Type:* str

---

##### `runtime_scale_monitoring_enabled`<sup>Required</sup> <a name="runtime_scale_monitoring_enabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled"></a>

```python
runtime_scale_monitoring_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `scm_ip_restriction`<sup>Required</sup> <a name="scm_ip_restriction" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.scmIpRestriction"></a>

```python
scm_ip_restriction: DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList">DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList</a>

---

##### `scm_minimum_tls_version`<sup>Required</sup> <a name="scm_minimum_tls_version" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.scmMinimumTlsVersion"></a>

```python
scm_minimum_tls_version: str
```

- *Type:* str

---

##### `scm_type`<sup>Required</sup> <a name="scm_type" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.scmType"></a>

```python
scm_type: str
```

- *Type:* str

---

##### `scm_use_main_ip_restriction`<sup>Required</sup> <a name="scm_use_main_ip_restriction" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.scmUseMainIpRestriction"></a>

```python
scm_use_main_ip_restriction: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `use32_bit_worker`<sup>Required</sup> <a name="use32_bit_worker" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.use32BitWorker"></a>

```python
use32_bit_worker: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `vnet_route_all_enabled`<sup>Required</sup> <a name="vnet_route_all_enabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.vnetRouteAllEnabled"></a>

```python
vnet_route_all_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `websockets_enabled`<sup>Required</sup> <a name="websockets_enabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.websocketsEnabled"></a>

```python
websockets_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `windows_fx_version`<sup>Required</sup> <a name="windows_fx_version" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.windowsFxVersion"></a>

```python
windows_fx_version: str
```

- *Type:* str

---

##### `worker_count`<sup>Required</sup> <a name="worker_count" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.workerCount"></a>

```python
worker_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermWindowsFunctionAppSiteConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfig">DataAzurermWindowsFunctionAppSiteConfig</a>

---


### DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList <a name="DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference <a name="DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid">x_azure_fdid</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe">x_fd_health_probe</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor">x_forwarded_for</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost">x_forwarded_host</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeaders">DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeaders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x_azure_fdid`<sup>Required</sup> <a name="x_azure_fdid" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```python
x_azure_fdid: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_fd_health_probe`<sup>Required</sup> <a name="x_fd_health_probe" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```python
x_fd_health_probe: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_for`<sup>Required</sup> <a name="x_forwarded_for" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```python
x_forwarded_for: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_host`<sup>Required</sup> <a name="x_forwarded_host" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```python
x_forwarded_host: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeaders
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeaders">DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeaders</a>

---


### DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList <a name="DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference <a name="DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList">DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.serviceTag">service_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId">virtual_network_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestriction">DataAzurermWindowsFunctionAppSiteConfigScmIpRestriction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.headers"></a>

```python
headers: DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList">DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList</a>

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_tag`<sup>Required</sup> <a name="service_tag" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.serviceTag"></a>

```python
service_tag: str
```

- *Type:* str

---

##### `virtual_network_subnet_id`<sup>Required</sup> <a name="virtual_network_subnet_id" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```python
virtual_network_subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermWindowsFunctionAppSiteConfigScmIpRestriction
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestriction">DataAzurermWindowsFunctionAppSiteConfigScmIpRestriction</a>

---


### DataAzurermWindowsFunctionAppSiteCredentialList <a name="DataAzurermWindowsFunctionAppSiteCredentialList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermWindowsFunctionAppSiteCredentialOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermWindowsFunctionAppSiteCredentialOutputReference <a name="DataAzurermWindowsFunctionAppSiteCredentialOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredential">DataAzurermWindowsFunctionAppSiteCredential</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermWindowsFunctionAppSiteCredential
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredential">DataAzurermWindowsFunctionAppSiteCredential</a>

---


### DataAzurermWindowsFunctionAppStickySettingsList <a name="DataAzurermWindowsFunctionAppStickySettingsList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermWindowsFunctionAppStickySettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermWindowsFunctionAppStickySettingsOutputReference <a name="DataAzurermWindowsFunctionAppStickySettingsOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.property.appSettingNames">app_setting_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.property.connectionStringNames">connection_string_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettings">DataAzurermWindowsFunctionAppStickySettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_setting_names`<sup>Required</sup> <a name="app_setting_names" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.property.appSettingNames"></a>

```python
app_setting_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connection_string_names`<sup>Required</sup> <a name="connection_string_names" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.property.connectionStringNames"></a>

```python
connection_string_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermWindowsFunctionAppStickySettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettings">DataAzurermWindowsFunctionAppStickySettings</a>

---


### DataAzurermWindowsFunctionAppTimeoutsOutputReference <a name="DataAzurermWindowsFunctionAppTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_windows_function_app

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeouts">DataAzurermWindowsFunctionAppTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAzurermWindowsFunctionAppTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeouts">DataAzurermWindowsFunctionAppTimeouts</a>, cdktf.IResolvable]

---



