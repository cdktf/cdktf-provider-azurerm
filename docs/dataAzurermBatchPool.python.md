# `dataAzurermBatchPool` Submodule <a name="`dataAzurermBatchPool` Submodule" id="@cdktf/provider-azurerm.dataAzurermBatchPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermBatchPool <a name="DataAzurermBatchPool" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/batch_pool azurerm_batch_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPool(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_name: str,
  name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermBatchPoolTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.Initializer.parameter.accountName">account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/batch_pool#account_name DataAzurermBatchPool#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/batch_pool#name DataAzurermBatchPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/batch_pool#resource_group_name DataAzurermBatchPool#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/batch_pool#id DataAzurermBatchPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeouts">DataAzurermBatchPoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.Initializer.parameter.accountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/batch_pool#account_name DataAzurermBatchPool#account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/batch_pool#name DataAzurermBatchPool#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/batch_pool#resource_group_name DataAzurermBatchPool#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/batch_pool#id DataAzurermBatchPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeouts">DataAzurermBatchPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/batch_pool#timeouts DataAzurermBatchPool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/batch_pool#read DataAzurermBatchPool#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermBatchPool resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPool.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermBatchPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermBatchPool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermBatchPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/batch_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermBatchPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.autoScale">auto_scale</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleList">DataAzurermBatchPoolAutoScaleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateList">DataAzurermBatchPoolCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.containerConfiguration">container_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationList">DataAzurermBatchPoolContainerConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.dataDisks">data_disks</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksList">DataAzurermBatchPoolDataDisksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.diskEncryption">disk_encryption</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionList">DataAzurermBatchPoolDiskEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.extensions">extensions</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsList">DataAzurermBatchPoolExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.fixedScale">fixed_scale</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleList">DataAzurermBatchPoolFixedScaleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.interNodeCommunication">inter_node_communication</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.licenseType">license_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.maxTasksPerNode">max_tasks_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.mount">mount</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountList">DataAzurermBatchPoolMountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationList">DataAzurermBatchPoolNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.nodeAgentSkuId">node_agent_sku_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.nodePlacement">node_placement</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementList">DataAzurermBatchPoolNodePlacementList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.osDiskPlacement">os_disk_placement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.startTask">start_task</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskList">DataAzurermBatchPoolStartTaskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.storageImageReference">storage_image_reference</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceList">DataAzurermBatchPoolStorageImageReferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.taskSchedulingPolicy">task_scheduling_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyList">DataAzurermBatchPoolTaskSchedulingPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference">DataAzurermBatchPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.userAccounts">user_accounts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsList">DataAzurermBatchPoolUserAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.vmSize">vm_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.windows">windows</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsList">DataAzurermBatchPoolWindowsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.accountNameInput">account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeouts">DataAzurermBatchPoolTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.accountName">account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `auto_scale`<sup>Required</sup> <a name="auto_scale" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.autoScale"></a>

```python
auto_scale: DataAzurermBatchPoolAutoScaleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleList">DataAzurermBatchPoolAutoScaleList</a>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.certificate"></a>

```python
certificate: DataAzurermBatchPoolCertificateList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateList">DataAzurermBatchPoolCertificateList</a>

---

##### `container_configuration`<sup>Required</sup> <a name="container_configuration" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.containerConfiguration"></a>

```python
container_configuration: DataAzurermBatchPoolContainerConfigurationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationList">DataAzurermBatchPoolContainerConfigurationList</a>

---

##### `data_disks`<sup>Required</sup> <a name="data_disks" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.dataDisks"></a>

```python
data_disks: DataAzurermBatchPoolDataDisksList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksList">DataAzurermBatchPoolDataDisksList</a>

---

##### `disk_encryption`<sup>Required</sup> <a name="disk_encryption" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.diskEncryption"></a>

```python
disk_encryption: DataAzurermBatchPoolDiskEncryptionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionList">DataAzurermBatchPoolDiskEncryptionList</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.extensions"></a>

```python
extensions: DataAzurermBatchPoolExtensionsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsList">DataAzurermBatchPoolExtensionsList</a>

---

##### `fixed_scale`<sup>Required</sup> <a name="fixed_scale" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.fixedScale"></a>

```python
fixed_scale: DataAzurermBatchPoolFixedScaleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleList">DataAzurermBatchPoolFixedScaleList</a>

---

##### `inter_node_communication`<sup>Required</sup> <a name="inter_node_communication" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.interNodeCommunication"></a>

```python
inter_node_communication: str
```

- *Type:* str

---

##### `license_type`<sup>Required</sup> <a name="license_type" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.licenseType"></a>

```python
license_type: str
```

- *Type:* str

---

##### `max_tasks_per_node`<sup>Required</sup> <a name="max_tasks_per_node" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.maxTasksPerNode"></a>

```python
max_tasks_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.metadata"></a>

```python
metadata: StringMap
```

- *Type:* cdktf.StringMap

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.mount"></a>

```python
mount: DataAzurermBatchPoolMountList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountList">DataAzurermBatchPoolMountList</a>

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.networkConfiguration"></a>

```python
network_configuration: DataAzurermBatchPoolNetworkConfigurationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationList">DataAzurermBatchPoolNetworkConfigurationList</a>

---

##### `node_agent_sku_id`<sup>Required</sup> <a name="node_agent_sku_id" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.nodeAgentSkuId"></a>

```python
node_agent_sku_id: str
```

- *Type:* str

---

##### `node_placement`<sup>Required</sup> <a name="node_placement" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.nodePlacement"></a>

```python
node_placement: DataAzurermBatchPoolNodePlacementList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementList">DataAzurermBatchPoolNodePlacementList</a>

---

##### `os_disk_placement`<sup>Required</sup> <a name="os_disk_placement" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.osDiskPlacement"></a>

```python
os_disk_placement: str
```

- *Type:* str

---

##### `start_task`<sup>Required</sup> <a name="start_task" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.startTask"></a>

```python
start_task: DataAzurermBatchPoolStartTaskList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskList">DataAzurermBatchPoolStartTaskList</a>

---

##### `storage_image_reference`<sup>Required</sup> <a name="storage_image_reference" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.storageImageReference"></a>

```python
storage_image_reference: DataAzurermBatchPoolStorageImageReferenceList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceList">DataAzurermBatchPoolStorageImageReferenceList</a>

---

##### `task_scheduling_policy`<sup>Required</sup> <a name="task_scheduling_policy" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.taskSchedulingPolicy"></a>

```python
task_scheduling_policy: DataAzurermBatchPoolTaskSchedulingPolicyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyList">DataAzurermBatchPoolTaskSchedulingPolicyList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.timeouts"></a>

```python
timeouts: DataAzurermBatchPoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference">DataAzurermBatchPoolTimeoutsOutputReference</a>

---

##### `user_accounts`<sup>Required</sup> <a name="user_accounts" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.userAccounts"></a>

```python
user_accounts: DataAzurermBatchPoolUserAccountsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsList">DataAzurermBatchPoolUserAccountsList</a>

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

---

##### `windows`<sup>Required</sup> <a name="windows" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.windows"></a>

```python
windows: DataAzurermBatchPoolWindowsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsList">DataAzurermBatchPoolWindowsList</a>

---

##### `account_name_input`<sup>Optional</sup> <a name="account_name_input" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.accountNameInput"></a>

```python
account_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermBatchPoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeouts">DataAzurermBatchPoolTimeouts</a>]

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermBatchPoolAutoScale <a name="DataAzurermBatchPoolAutoScale" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScale.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolAutoScale()
```


### DataAzurermBatchPoolCertificate <a name="DataAzurermBatchPoolCertificate" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolCertificate()
```


### DataAzurermBatchPoolConfig <a name="DataAzurermBatchPoolConfig" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_name: str,
  name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermBatchPoolTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolConfig.property.accountName">account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/batch_pool#account_name DataAzurermBatchPool#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/batch_pool#name DataAzurermBatchPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/batch_pool#resource_group_name DataAzurermBatchPool#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/batch_pool#id DataAzurermBatchPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeouts">DataAzurermBatchPoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolConfig.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/batch_pool#account_name DataAzurermBatchPool#account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/batch_pool#name DataAzurermBatchPool#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/batch_pool#resource_group_name DataAzurermBatchPool#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/batch_pool#id DataAzurermBatchPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolConfig.property.timeouts"></a>

```python
timeouts: DataAzurermBatchPoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeouts">DataAzurermBatchPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/batch_pool#timeouts DataAzurermBatchPool#timeouts}

---

### DataAzurermBatchPoolContainerConfiguration <a name="DataAzurermBatchPoolContainerConfiguration" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolContainerConfiguration()
```


### DataAzurermBatchPoolContainerConfigurationContainerRegistries <a name="DataAzurermBatchPoolContainerConfigurationContainerRegistries" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistries.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistries()
```


### DataAzurermBatchPoolDataDisks <a name="DataAzurermBatchPoolDataDisks" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisks.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolDataDisks()
```


### DataAzurermBatchPoolDiskEncryption <a name="DataAzurermBatchPoolDiskEncryption" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryption()
```


### DataAzurermBatchPoolExtensions <a name="DataAzurermBatchPoolExtensions" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensions.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolExtensions()
```


### DataAzurermBatchPoolFixedScale <a name="DataAzurermBatchPoolFixedScale" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScale.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolFixedScale()
```


### DataAzurermBatchPoolMount <a name="DataAzurermBatchPoolMount" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMount.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolMount()
```


### DataAzurermBatchPoolMountAzureBlobFileSystem <a name="DataAzurermBatchPoolMountAzureBlobFileSystem" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystem.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystem()
```


### DataAzurermBatchPoolMountAzureFileShare <a name="DataAzurermBatchPoolMountAzureFileShare" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShare"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShare.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShare()
```


### DataAzurermBatchPoolMountCifsMount <a name="DataAzurermBatchPoolMountCifsMount" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMount.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMount()
```


### DataAzurermBatchPoolMountNfsMount <a name="DataAzurermBatchPoolMountNfsMount" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMount.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMount()
```


### DataAzurermBatchPoolNetworkConfiguration <a name="DataAzurermBatchPoolNetworkConfiguration" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfiguration()
```


### DataAzurermBatchPoolNetworkConfigurationEndpointConfiguration <a name="DataAzurermBatchPoolNetworkConfigurationEndpointConfiguration" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfiguration()
```


### DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules <a name="DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules()
```


### DataAzurermBatchPoolNodePlacement <a name="DataAzurermBatchPoolNodePlacement" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacement.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolNodePlacement()
```


### DataAzurermBatchPoolStartTask <a name="DataAzurermBatchPoolStartTask" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTask.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolStartTask()
```


### DataAzurermBatchPoolStartTaskContainer <a name="DataAzurermBatchPoolStartTaskContainer" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainer.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainer()
```


### DataAzurermBatchPoolStartTaskContainerRegistry <a name="DataAzurermBatchPoolStartTaskContainerRegistry" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistry.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistry()
```


### DataAzurermBatchPoolStartTaskResourceFile <a name="DataAzurermBatchPoolStartTaskResourceFile" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFile.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFile()
```


### DataAzurermBatchPoolStartTaskUserIdentity <a name="DataAzurermBatchPoolStartTaskUserIdentity" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentity()
```


### DataAzurermBatchPoolStartTaskUserIdentityAutoUser <a name="DataAzurermBatchPoolStartTaskUserIdentityAutoUser" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUser.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUser()
```


### DataAzurermBatchPoolStorageImageReference <a name="DataAzurermBatchPoolStorageImageReference" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReference()
```


### DataAzurermBatchPoolTaskSchedulingPolicy <a name="DataAzurermBatchPoolTaskSchedulingPolicy" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicy()
```


### DataAzurermBatchPoolTimeouts <a name="DataAzurermBatchPoolTimeouts" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/batch_pool#read DataAzurermBatchPool#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/batch_pool#read DataAzurermBatchPool#read}.

---

### DataAzurermBatchPoolUserAccounts <a name="DataAzurermBatchPoolUserAccounts" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccounts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolUserAccounts()
```


### DataAzurermBatchPoolUserAccountsLinuxUserConfiguration <a name="DataAzurermBatchPoolUserAccountsLinuxUserConfiguration" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfiguration()
```


### DataAzurermBatchPoolUserAccountsWindowsUserConfiguration <a name="DataAzurermBatchPoolUserAccountsWindowsUserConfiguration" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfiguration()
```


### DataAzurermBatchPoolWindows <a name="DataAzurermBatchPoolWindows" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindows"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindows.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolWindows()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermBatchPoolAutoScaleList <a name="DataAzurermBatchPoolAutoScaleList" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermBatchPoolAutoScaleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermBatchPoolAutoScaleOutputReference <a name="DataAzurermBatchPoolAutoScaleOutputReference" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.property.evaluationInterval">evaluation_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.property.formula">formula</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScale">DataAzurermBatchPoolAutoScale</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `evaluation_interval`<sup>Required</sup> <a name="evaluation_interval" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.property.evaluationInterval"></a>

```python
evaluation_interval: str
```

- *Type:* str

---

##### `formula`<sup>Required</sup> <a name="formula" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.property.formula"></a>

```python
formula: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScaleOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermBatchPoolAutoScale
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolAutoScale">DataAzurermBatchPoolAutoScale</a>

---


### DataAzurermBatchPoolCertificateList <a name="DataAzurermBatchPoolCertificateList" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolCertificateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermBatchPoolCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermBatchPoolCertificateOutputReference <a name="DataAzurermBatchPoolCertificateOutputReference" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.property.storeLocation">store_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.property.storeName">store_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.property.visibility">visibility</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificate">DataAzurermBatchPoolCertificate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `store_location`<sup>Required</sup> <a name="store_location" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.property.storeLocation"></a>

```python
store_location: str
```

- *Type:* str

---

##### `store_name`<sup>Required</sup> <a name="store_name" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.property.storeName"></a>

```python
store_name: str
```

- *Type:* str

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.property.visibility"></a>

```python
visibility: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificateOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermBatchPoolCertificate
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolCertificate">DataAzurermBatchPoolCertificate</a>

---


### DataAzurermBatchPoolContainerConfigurationContainerRegistriesList <a name="DataAzurermBatchPoolContainerConfigurationContainerRegistriesList" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference <a name="DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.property.registryServer">registry_server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.property.userAssignedIdentityId">user_assigned_identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistries">DataAzurermBatchPoolContainerConfigurationContainerRegistries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `registry_server`<sup>Required</sup> <a name="registry_server" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.property.registryServer"></a>

```python
registry_server: str
```

- *Type:* str

---

##### `user_assigned_identity_id`<sup>Required</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.property.userAssignedIdentityId"></a>

```python
user_assigned_identity_id: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermBatchPoolContainerConfigurationContainerRegistries
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistries">DataAzurermBatchPoolContainerConfigurationContainerRegistries</a>

---


### DataAzurermBatchPoolContainerConfigurationList <a name="DataAzurermBatchPoolContainerConfigurationList" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermBatchPoolContainerConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermBatchPoolContainerConfigurationOutputReference <a name="DataAzurermBatchPoolContainerConfigurationOutputReference" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.property.containerImageNames">container_image_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.property.containerRegistries">container_registries</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesList">DataAzurermBatchPoolContainerConfigurationContainerRegistriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfiguration">DataAzurermBatchPoolContainerConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_image_names`<sup>Required</sup> <a name="container_image_names" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.property.containerImageNames"></a>

```python
container_image_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `container_registries`<sup>Required</sup> <a name="container_registries" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.property.containerRegistries"></a>

```python
container_registries: DataAzurermBatchPoolContainerConfigurationContainerRegistriesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationContainerRegistriesList">DataAzurermBatchPoolContainerConfigurationContainerRegistriesList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermBatchPoolContainerConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolContainerConfiguration">DataAzurermBatchPoolContainerConfiguration</a>

---


### DataAzurermBatchPoolDataDisksList <a name="DataAzurermBatchPoolDataDisksList" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolDataDisksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermBatchPoolDataDisksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermBatchPoolDataDisksOutputReference <a name="DataAzurermBatchPoolDataDisksOutputReference" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.property.caching">caching</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.property.lun">lun</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.property.storageAccountType">storage_account_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisks">DataAzurermBatchPoolDataDisks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.property.caching"></a>

```python
caching: str
```

- *Type:* str

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.property.lun"></a>

```python
lun: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_account_type`<sup>Required</sup> <a name="storage_account_type" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.property.storageAccountType"></a>

```python
storage_account_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisksOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermBatchPoolDataDisks
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDataDisks">DataAzurermBatchPoolDataDisks</a>

---


### DataAzurermBatchPoolDiskEncryptionList <a name="DataAzurermBatchPoolDiskEncryptionList" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermBatchPoolDiskEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermBatchPoolDiskEncryptionOutputReference <a name="DataAzurermBatchPoolDiskEncryptionOutputReference" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.property.diskEncryptionTarget">disk_encryption_target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryption">DataAzurermBatchPoolDiskEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_encryption_target`<sup>Required</sup> <a name="disk_encryption_target" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.property.diskEncryptionTarget"></a>

```python
disk_encryption_target: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermBatchPoolDiskEncryption
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolDiskEncryption">DataAzurermBatchPoolDiskEncryption</a>

---


### DataAzurermBatchPoolExtensionsList <a name="DataAzurermBatchPoolExtensionsList" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolExtensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermBatchPoolExtensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermBatchPoolExtensionsOutputReference <a name="DataAzurermBatchPoolExtensionsOutputReference" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.property.autoUpgradeMinorVersion">auto_upgrade_minor_version</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.property.protectedSettings">protected_settings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.property.provisionAfterExtensions">provision_after_extensions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.property.publisher">publisher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.property.settingsJson">settings_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.property.typeHandlerVersion">type_handler_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensions">DataAzurermBatchPoolExtensions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_upgrade_minor_version`<sup>Required</sup> <a name="auto_upgrade_minor_version" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.property.autoUpgradeMinorVersion"></a>

```python
auto_upgrade_minor_version: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protected_settings`<sup>Required</sup> <a name="protected_settings" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.property.protectedSettings"></a>

```python
protected_settings: str
```

- *Type:* str

---

##### `provision_after_extensions`<sup>Required</sup> <a name="provision_after_extensions" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.property.provisionAfterExtensions"></a>

```python
provision_after_extensions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

---

##### `settings_json`<sup>Required</sup> <a name="settings_json" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.property.settingsJson"></a>

```python
settings_json: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `type_handler_version`<sup>Required</sup> <a name="type_handler_version" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.property.typeHandlerVersion"></a>

```python
type_handler_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermBatchPoolExtensions
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolExtensions">DataAzurermBatchPoolExtensions</a>

---


### DataAzurermBatchPoolFixedScaleList <a name="DataAzurermBatchPoolFixedScaleList" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermBatchPoolFixedScaleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermBatchPoolFixedScaleOutputReference <a name="DataAzurermBatchPoolFixedScaleOutputReference" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.property.resizeTimeout">resize_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.property.targetDedicatedNodes">target_dedicated_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.property.targetLowPriorityNodes">target_low_priority_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScale">DataAzurermBatchPoolFixedScale</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resize_timeout`<sup>Required</sup> <a name="resize_timeout" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.property.resizeTimeout"></a>

```python
resize_timeout: str
```

- *Type:* str

---

##### `target_dedicated_nodes`<sup>Required</sup> <a name="target_dedicated_nodes" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.property.targetDedicatedNodes"></a>

```python
target_dedicated_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_low_priority_nodes`<sup>Required</sup> <a name="target_low_priority_nodes" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.property.targetLowPriorityNodes"></a>

```python
target_low_priority_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScaleOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermBatchPoolFixedScale
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolFixedScale">DataAzurermBatchPoolFixedScale</a>

---


### DataAzurermBatchPoolMountAzureBlobFileSystemList <a name="DataAzurermBatchPoolMountAzureBlobFileSystemList" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference <a name="DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.property.accountKey">account_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.property.accountName">account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.property.blobfuseOptions">blobfuse_options</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.property.containerName">container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.property.identityId">identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.property.relativeMountPath">relative_mount_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.property.sasKey">sas_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystem">DataAzurermBatchPoolMountAzureBlobFileSystem</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_key`<sup>Required</sup> <a name="account_key" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.property.accountKey"></a>

```python
account_key: str
```

- *Type:* str

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

---

##### `blobfuse_options`<sup>Required</sup> <a name="blobfuse_options" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.property.blobfuseOptions"></a>

```python
blobfuse_options: str
```

- *Type:* str

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

---

##### `identity_id`<sup>Required</sup> <a name="identity_id" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.property.identityId"></a>

```python
identity_id: str
```

- *Type:* str

---

##### `relative_mount_path`<sup>Required</sup> <a name="relative_mount_path" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.property.relativeMountPath"></a>

```python
relative_mount_path: str
```

- *Type:* str

---

##### `sas_key`<sup>Required</sup> <a name="sas_key" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.property.sasKey"></a>

```python
sas_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermBatchPoolMountAzureBlobFileSystem
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystem">DataAzurermBatchPoolMountAzureBlobFileSystem</a>

---


### DataAzurermBatchPoolMountAzureFileShareList <a name="DataAzurermBatchPoolMountAzureFileShareList" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermBatchPoolMountAzureFileShareOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermBatchPoolMountAzureFileShareOutputReference <a name="DataAzurermBatchPoolMountAzureFileShareOutputReference" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.property.accountKey">account_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.property.accountName">account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.property.azureFileUrl">azure_file_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.property.mountOptions">mount_options</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.property.relativeMountPath">relative_mount_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShare">DataAzurermBatchPoolMountAzureFileShare</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_key`<sup>Required</sup> <a name="account_key" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.property.accountKey"></a>

```python
account_key: str
```

- *Type:* str

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

---

##### `azure_file_url`<sup>Required</sup> <a name="azure_file_url" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.property.azureFileUrl"></a>

```python
azure_file_url: str
```

- *Type:* str

---

##### `mount_options`<sup>Required</sup> <a name="mount_options" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.property.mountOptions"></a>

```python
mount_options: str
```

- *Type:* str

---

##### `relative_mount_path`<sup>Required</sup> <a name="relative_mount_path" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.property.relativeMountPath"></a>

```python
relative_mount_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermBatchPoolMountAzureFileShare
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShare">DataAzurermBatchPoolMountAzureFileShare</a>

---


### DataAzurermBatchPoolMountCifsMountList <a name="DataAzurermBatchPoolMountCifsMountList" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermBatchPoolMountCifsMountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermBatchPoolMountCifsMountOutputReference <a name="DataAzurermBatchPoolMountCifsMountOutputReference" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.property.mountOptions">mount_options</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.property.relativeMountPath">relative_mount_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMount">DataAzurermBatchPoolMountCifsMount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mount_options`<sup>Required</sup> <a name="mount_options" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.property.mountOptions"></a>

```python
mount_options: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `relative_mount_path`<sup>Required</sup> <a name="relative_mount_path" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.property.relativeMountPath"></a>

```python
relative_mount_path: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermBatchPoolMountCifsMount
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMount">DataAzurermBatchPoolMountCifsMount</a>

---


### DataAzurermBatchPoolMountList <a name="DataAzurermBatchPoolMountList" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolMountList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermBatchPoolMountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermBatchPoolMountNfsMountList <a name="DataAzurermBatchPoolMountNfsMountList" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermBatchPoolMountNfsMountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermBatchPoolMountNfsMountOutputReference <a name="DataAzurermBatchPoolMountNfsMountOutputReference" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.property.mountOptions">mount_options</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.property.relativeMountPath">relative_mount_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMount">DataAzurermBatchPoolMountNfsMount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mount_options`<sup>Required</sup> <a name="mount_options" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.property.mountOptions"></a>

```python
mount_options: str
```

- *Type:* str

---

##### `relative_mount_path`<sup>Required</sup> <a name="relative_mount_path" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.property.relativeMountPath"></a>

```python
relative_mount_path: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermBatchPoolMountNfsMount
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMount">DataAzurermBatchPoolMountNfsMount</a>

---


### DataAzurermBatchPoolMountOutputReference <a name="DataAzurermBatchPoolMountOutputReference" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.property.azureBlobFileSystem">azure_blob_file_system</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemList">DataAzurermBatchPoolMountAzureBlobFileSystemList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.property.azureFileShare">azure_file_share</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareList">DataAzurermBatchPoolMountAzureFileShareList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.property.cifsMount">cifs_mount</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountList">DataAzurermBatchPoolMountCifsMountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.property.nfsMount">nfs_mount</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountList">DataAzurermBatchPoolMountNfsMountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMount">DataAzurermBatchPoolMount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `azure_blob_file_system`<sup>Required</sup> <a name="azure_blob_file_system" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.property.azureBlobFileSystem"></a>

```python
azure_blob_file_system: DataAzurermBatchPoolMountAzureBlobFileSystemList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureBlobFileSystemList">DataAzurermBatchPoolMountAzureBlobFileSystemList</a>

---

##### `azure_file_share`<sup>Required</sup> <a name="azure_file_share" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.property.azureFileShare"></a>

```python
azure_file_share: DataAzurermBatchPoolMountAzureFileShareList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountAzureFileShareList">DataAzurermBatchPoolMountAzureFileShareList</a>

---

##### `cifs_mount`<sup>Required</sup> <a name="cifs_mount" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.property.cifsMount"></a>

```python
cifs_mount: DataAzurermBatchPoolMountCifsMountList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountCifsMountList">DataAzurermBatchPoolMountCifsMountList</a>

---

##### `nfs_mount`<sup>Required</sup> <a name="nfs_mount" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.property.nfsMount"></a>

```python
nfs_mount: DataAzurermBatchPoolMountNfsMountList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountNfsMountList">DataAzurermBatchPoolMountNfsMountList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMountOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermBatchPoolMount
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolMount">DataAzurermBatchPoolMount</a>

---


### DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationList <a name="DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationList" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList <a name="DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference <a name="DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.access">access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.sourceAddressPrefix">source_address_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.sourcePortRanges">source_port_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules">DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.access"></a>

```python
access: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_address_prefix`<sup>Required</sup> <a name="source_address_prefix" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.sourceAddressPrefix"></a>

```python
source_address_prefix: str
```

- *Type:* str

---

##### `source_port_ranges`<sup>Required</sup> <a name="source_port_ranges" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.sourcePortRanges"></a>

```python
source_port_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules">DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules</a>

---


### DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference <a name="DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.backendPort">backend_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.frontendPortRange">frontend_port_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.networkSecurityGroupRules">network_security_group_rules</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList">DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfiguration">DataAzurermBatchPoolNetworkConfigurationEndpointConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backend_port`<sup>Required</sup> <a name="backend_port" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.backendPort"></a>

```python
backend_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `frontend_port_range`<sup>Required</sup> <a name="frontend_port_range" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.frontendPortRange"></a>

```python
frontend_port_range: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_security_group_rules`<sup>Required</sup> <a name="network_security_group_rules" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.networkSecurityGroupRules"></a>

```python
network_security_group_rules: DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList">DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList</a>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermBatchPoolNetworkConfigurationEndpointConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfiguration">DataAzurermBatchPoolNetworkConfigurationEndpointConfiguration</a>

---


### DataAzurermBatchPoolNetworkConfigurationList <a name="DataAzurermBatchPoolNetworkConfigurationList" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermBatchPoolNetworkConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermBatchPoolNetworkConfigurationOutputReference <a name="DataAzurermBatchPoolNetworkConfigurationOutputReference" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.property.acceleratedNetworkingEnabled">accelerated_networking_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.property.dynamicVnetAssignmentScope">dynamic_vnet_assignment_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.property.endpointConfiguration">endpoint_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationList">DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.property.publicAddressProvisioningType">public_address_provisioning_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.property.publicIps">public_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfiguration">DataAzurermBatchPoolNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accelerated_networking_enabled`<sup>Required</sup> <a name="accelerated_networking_enabled" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.property.acceleratedNetworkingEnabled"></a>

```python
accelerated_networking_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `dynamic_vnet_assignment_scope`<sup>Required</sup> <a name="dynamic_vnet_assignment_scope" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.property.dynamicVnetAssignmentScope"></a>

```python
dynamic_vnet_assignment_scope: str
```

- *Type:* str

---

##### `endpoint_configuration`<sup>Required</sup> <a name="endpoint_configuration" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.property.endpointConfiguration"></a>

```python
endpoint_configuration: DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationList">DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationList</a>

---

##### `public_address_provisioning_type`<sup>Required</sup> <a name="public_address_provisioning_type" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.property.publicAddressProvisioningType"></a>

```python
public_address_provisioning_type: str
```

- *Type:* str

---

##### `public_ips`<sup>Required</sup> <a name="public_ips" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.property.publicIps"></a>

```python
public_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermBatchPoolNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNetworkConfiguration">DataAzurermBatchPoolNetworkConfiguration</a>

---


### DataAzurermBatchPoolNodePlacementList <a name="DataAzurermBatchPoolNodePlacementList" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermBatchPoolNodePlacementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermBatchPoolNodePlacementOutputReference <a name="DataAzurermBatchPoolNodePlacementOutputReference" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.property.policy">policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacement">DataAzurermBatchPoolNodePlacement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacementOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermBatchPoolNodePlacement
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolNodePlacement">DataAzurermBatchPoolNodePlacement</a>

---


### DataAzurermBatchPoolStartTaskContainerList <a name="DataAzurermBatchPoolStartTaskContainerList" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermBatchPoolStartTaskContainerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermBatchPoolStartTaskContainerOutputReference <a name="DataAzurermBatchPoolStartTaskContainerOutputReference" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.property.imageName">image_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.property.registry">registry</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryList">DataAzurermBatchPoolStartTaskContainerRegistryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.property.runOptions">run_options</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.property.workingDirectory">working_directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainer">DataAzurermBatchPoolStartTaskContainer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

---

##### `registry`<sup>Required</sup> <a name="registry" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.property.registry"></a>

```python
registry: DataAzurermBatchPoolStartTaskContainerRegistryList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryList">DataAzurermBatchPoolStartTaskContainerRegistryList</a>

---

##### `run_options`<sup>Required</sup> <a name="run_options" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.property.runOptions"></a>

```python
run_options: str
```

- *Type:* str

---

##### `working_directory`<sup>Required</sup> <a name="working_directory" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.property.workingDirectory"></a>

```python
working_directory: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermBatchPoolStartTaskContainer
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainer">DataAzurermBatchPoolStartTaskContainer</a>

---


### DataAzurermBatchPoolStartTaskContainerRegistryList <a name="DataAzurermBatchPoolStartTaskContainerRegistryList" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermBatchPoolStartTaskContainerRegistryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermBatchPoolStartTaskContainerRegistryOutputReference <a name="DataAzurermBatchPoolStartTaskContainerRegistryOutputReference" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.property.registryServer">registry_server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.property.userAssignedIdentityId">user_assigned_identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistry">DataAzurermBatchPoolStartTaskContainerRegistry</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `registry_server`<sup>Required</sup> <a name="registry_server" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.property.registryServer"></a>

```python
registry_server: str
```

- *Type:* str

---

##### `user_assigned_identity_id`<sup>Required</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.property.userAssignedIdentityId"></a>

```python
user_assigned_identity_id: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistryOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermBatchPoolStartTaskContainerRegistry
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerRegistry">DataAzurermBatchPoolStartTaskContainerRegistry</a>

---


### DataAzurermBatchPoolStartTaskList <a name="DataAzurermBatchPoolStartTaskList" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolStartTaskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermBatchPoolStartTaskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermBatchPoolStartTaskOutputReference <a name="DataAzurermBatchPoolStartTaskOutputReference" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.property.commandLine">command_line</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.property.commonEnvironmentProperties">common_environment_properties</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.property.container">container</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerList">DataAzurermBatchPoolStartTaskContainerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.property.resourceFile">resource_file</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileList">DataAzurermBatchPoolStartTaskResourceFileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.property.taskRetryMaximum">task_retry_maximum</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.property.userIdentity">user_identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityList">DataAzurermBatchPoolStartTaskUserIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.property.waitForSuccess">wait_for_success</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTask">DataAzurermBatchPoolStartTask</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `command_line`<sup>Required</sup> <a name="command_line" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.property.commandLine"></a>

```python
command_line: str
```

- *Type:* str

---

##### `common_environment_properties`<sup>Required</sup> <a name="common_environment_properties" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.property.commonEnvironmentProperties"></a>

```python
common_environment_properties: StringMap
```

- *Type:* cdktf.StringMap

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.property.container"></a>

```python
container: DataAzurermBatchPoolStartTaskContainerList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskContainerList">DataAzurermBatchPoolStartTaskContainerList</a>

---

##### `resource_file`<sup>Required</sup> <a name="resource_file" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.property.resourceFile"></a>

```python
resource_file: DataAzurermBatchPoolStartTaskResourceFileList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileList">DataAzurermBatchPoolStartTaskResourceFileList</a>

---

##### `task_retry_maximum`<sup>Required</sup> <a name="task_retry_maximum" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.property.taskRetryMaximum"></a>

```python
task_retry_maximum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_identity`<sup>Required</sup> <a name="user_identity" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.property.userIdentity"></a>

```python
user_identity: DataAzurermBatchPoolStartTaskUserIdentityList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityList">DataAzurermBatchPoolStartTaskUserIdentityList</a>

---

##### `wait_for_success`<sup>Required</sup> <a name="wait_for_success" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.property.waitForSuccess"></a>

```python
wait_for_success: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermBatchPoolStartTask
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTask">DataAzurermBatchPoolStartTask</a>

---


### DataAzurermBatchPoolStartTaskResourceFileList <a name="DataAzurermBatchPoolStartTaskResourceFileList" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermBatchPoolStartTaskResourceFileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermBatchPoolStartTaskResourceFileOutputReference <a name="DataAzurermBatchPoolStartTaskResourceFileOutputReference" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.property.autoStorageContainerName">auto_storage_container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.property.blobPrefix">blob_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.property.fileMode">file_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.property.filePath">file_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.property.httpUrl">http_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.property.storageContainerUrl">storage_container_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.property.userAssignedIdentityId">user_assigned_identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFile">DataAzurermBatchPoolStartTaskResourceFile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_storage_container_name`<sup>Required</sup> <a name="auto_storage_container_name" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.property.autoStorageContainerName"></a>

```python
auto_storage_container_name: str
```

- *Type:* str

---

##### `blob_prefix`<sup>Required</sup> <a name="blob_prefix" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.property.blobPrefix"></a>

```python
blob_prefix: str
```

- *Type:* str

---

##### `file_mode`<sup>Required</sup> <a name="file_mode" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.property.fileMode"></a>

```python
file_mode: str
```

- *Type:* str

---

##### `file_path`<sup>Required</sup> <a name="file_path" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.property.filePath"></a>

```python
file_path: str
```

- *Type:* str

---

##### `http_url`<sup>Required</sup> <a name="http_url" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.property.httpUrl"></a>

```python
http_url: str
```

- *Type:* str

---

##### `storage_container_url`<sup>Required</sup> <a name="storage_container_url" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.property.storageContainerUrl"></a>

```python
storage_container_url: str
```

- *Type:* str

---

##### `user_assigned_identity_id`<sup>Required</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.property.userAssignedIdentityId"></a>

```python
user_assigned_identity_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFileOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermBatchPoolStartTaskResourceFile
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskResourceFile">DataAzurermBatchPoolStartTaskResourceFile</a>

---


### DataAzurermBatchPoolStartTaskUserIdentityAutoUserList <a name="DataAzurermBatchPoolStartTaskUserIdentityAutoUserList" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference <a name="DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.property.elevationLevel">elevation_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUser">DataAzurermBatchPoolStartTaskUserIdentityAutoUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `elevation_level`<sup>Required</sup> <a name="elevation_level" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.property.elevationLevel"></a>

```python
elevation_level: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermBatchPoolStartTaskUserIdentityAutoUser
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUser">DataAzurermBatchPoolStartTaskUserIdentityAutoUser</a>

---


### DataAzurermBatchPoolStartTaskUserIdentityList <a name="DataAzurermBatchPoolStartTaskUserIdentityList" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermBatchPoolStartTaskUserIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermBatchPoolStartTaskUserIdentityOutputReference <a name="DataAzurermBatchPoolStartTaskUserIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.property.autoUser">auto_user</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserList">DataAzurermBatchPoolStartTaskUserIdentityAutoUserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentity">DataAzurermBatchPoolStartTaskUserIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_user`<sup>Required</sup> <a name="auto_user" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.property.autoUser"></a>

```python
auto_user: DataAzurermBatchPoolStartTaskUserIdentityAutoUserList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityAutoUserList">DataAzurermBatchPoolStartTaskUserIdentityAutoUserList</a>

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentityOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermBatchPoolStartTaskUserIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStartTaskUserIdentity">DataAzurermBatchPoolStartTaskUserIdentity</a>

---


### DataAzurermBatchPoolStorageImageReferenceList <a name="DataAzurermBatchPoolStorageImageReferenceList" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermBatchPoolStorageImageReferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermBatchPoolStorageImageReferenceOutputReference <a name="DataAzurermBatchPoolStorageImageReferenceOutputReference" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.property.offer">offer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.property.publisher">publisher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.property.sku">sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReference">DataAzurermBatchPoolStorageImageReference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.property.offer"></a>

```python
offer: str
```

- *Type:* str

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.property.sku"></a>

```python
sku: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReferenceOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermBatchPoolStorageImageReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolStorageImageReference">DataAzurermBatchPoolStorageImageReference</a>

---


### DataAzurermBatchPoolTaskSchedulingPolicyList <a name="DataAzurermBatchPoolTaskSchedulingPolicyList" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermBatchPoolTaskSchedulingPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermBatchPoolTaskSchedulingPolicyOutputReference <a name="DataAzurermBatchPoolTaskSchedulingPolicyOutputReference" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.property.nodeFillType">node_fill_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicy">DataAzurermBatchPoolTaskSchedulingPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `node_fill_type`<sup>Required</sup> <a name="node_fill_type" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.property.nodeFillType"></a>

```python
node_fill_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermBatchPoolTaskSchedulingPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTaskSchedulingPolicy">DataAzurermBatchPoolTaskSchedulingPolicy</a>

---


### DataAzurermBatchPoolTimeoutsOutputReference <a name="DataAzurermBatchPoolTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeouts">DataAzurermBatchPoolTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermBatchPoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolTimeouts">DataAzurermBatchPoolTimeouts</a>]

---


### DataAzurermBatchPoolUserAccountsLinuxUserConfigurationList <a name="DataAzurermBatchPoolUserAccountsLinuxUserConfigurationList" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference <a name="DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.gid">gid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.sshPrivateKey">ssh_private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.uid">uid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfiguration">DataAzurermBatchPoolUserAccountsLinuxUserConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.gid"></a>

```python
gid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ssh_private_key`<sup>Required</sup> <a name="ssh_private_key" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.sshPrivateKey"></a>

```python
ssh_private_key: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.uid"></a>

```python
uid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermBatchPoolUserAccountsLinuxUserConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfiguration">DataAzurermBatchPoolUserAccountsLinuxUserConfiguration</a>

---


### DataAzurermBatchPoolUserAccountsList <a name="DataAzurermBatchPoolUserAccountsList" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermBatchPoolUserAccountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermBatchPoolUserAccountsOutputReference <a name="DataAzurermBatchPoolUserAccountsOutputReference" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.property.elevationLevel">elevation_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.property.linuxUserConfiguration">linux_user_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationList">DataAzurermBatchPoolUserAccountsLinuxUserConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.property.windowsUserConfiguration">windows_user_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationList">DataAzurermBatchPoolUserAccountsWindowsUserConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccounts">DataAzurermBatchPoolUserAccounts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `elevation_level`<sup>Required</sup> <a name="elevation_level" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.property.elevationLevel"></a>

```python
elevation_level: str
```

- *Type:* str

---

##### `linux_user_configuration`<sup>Required</sup> <a name="linux_user_configuration" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.property.linuxUserConfiguration"></a>

```python
linux_user_configuration: DataAzurermBatchPoolUserAccountsLinuxUserConfigurationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsLinuxUserConfigurationList">DataAzurermBatchPoolUserAccountsLinuxUserConfigurationList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `windows_user_configuration`<sup>Required</sup> <a name="windows_user_configuration" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.property.windowsUserConfiguration"></a>

```python
windows_user_configuration: DataAzurermBatchPoolUserAccountsWindowsUserConfigurationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationList">DataAzurermBatchPoolUserAccountsWindowsUserConfigurationList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermBatchPoolUserAccounts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccounts">DataAzurermBatchPoolUserAccounts</a>

---


### DataAzurermBatchPoolUserAccountsWindowsUserConfigurationList <a name="DataAzurermBatchPoolUserAccountsWindowsUserConfigurationList" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference <a name="DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.loginMode">login_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfiguration">DataAzurermBatchPoolUserAccountsWindowsUserConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `login_mode`<sup>Required</sup> <a name="login_mode" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.loginMode"></a>

```python
login_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermBatchPoolUserAccountsWindowsUserConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolUserAccountsWindowsUserConfiguration">DataAzurermBatchPoolUserAccountsWindowsUserConfiguration</a>

---


### DataAzurermBatchPoolWindowsList <a name="DataAzurermBatchPoolWindowsList" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolWindowsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermBatchPoolWindowsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermBatchPoolWindowsOutputReference <a name="DataAzurermBatchPoolWindowsOutputReference" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_batch_pool

dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.property.enableAutomaticUpdates">enable_automatic_updates</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindows">DataAzurermBatchPoolWindows</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_automatic_updates`<sup>Required</sup> <a name="enable_automatic_updates" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.property.enableAutomaticUpdates"></a>

```python
enable_automatic_updates: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindowsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermBatchPoolWindows
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBatchPool.DataAzurermBatchPoolWindows">DataAzurermBatchPoolWindows</a>

---



