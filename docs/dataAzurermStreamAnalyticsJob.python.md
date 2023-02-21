# `dataAzurermStreamAnalyticsJob` Submodule <a name="`dataAzurermStreamAnalyticsJob` Submodule" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermStreamAnalyticsJob <a name="DataAzurermStreamAnalyticsJob" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/stream_analytics_job azurerm_stream_analytics_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_stream_analytics_job

dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob(
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
  timeouts: DataAzurermStreamAnalyticsJobTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/stream_analytics_job#name DataAzurermStreamAnalyticsJob#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/stream_analytics_job#resource_group_name DataAzurermStreamAnalyticsJob#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/stream_analytics_job#id DataAzurermStreamAnalyticsJob#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeouts">DataAzurermStreamAnalyticsJobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/stream_analytics_job#name DataAzurermStreamAnalyticsJob#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/stream_analytics_job#resource_group_name DataAzurermStreamAnalyticsJob#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/stream_analytics_job#id DataAzurermStreamAnalyticsJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeouts">DataAzurermStreamAnalyticsJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/stream_analytics_job#timeouts DataAzurermStreamAnalyticsJob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/stream_analytics_job#read DataAzurermStreamAnalyticsJob#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_stream_analytics_job

dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_stream_analytics_job

dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_stream_analytics_job

dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.compatibilityLevel">compatibility_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.dataLocale">data_locale</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.eventsLateArrivalMaxDelayInSeconds">events_late_arrival_max_delay_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.eventsOutOfOrderMaxDelayInSeconds">events_out_of_order_max_delay_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.eventsOutOfOrderPolicy">events_out_of_order_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList">DataAzurermStreamAnalyticsJobIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.jobId">job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.lastOutputTime">last_output_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.outputErrorPolicy">output_error_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.startMode">start_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.streamingUnits">streaming_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference">DataAzurermStreamAnalyticsJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.transformationQuery">transformation_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeouts">DataAzurermStreamAnalyticsJobTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `compatibility_level`<sup>Required</sup> <a name="compatibility_level" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.compatibilityLevel"></a>

```python
compatibility_level: str
```

- *Type:* str

---

##### `data_locale`<sup>Required</sup> <a name="data_locale" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.dataLocale"></a>

```python
data_locale: str
```

- *Type:* str

---

##### `events_late_arrival_max_delay_in_seconds`<sup>Required</sup> <a name="events_late_arrival_max_delay_in_seconds" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.eventsLateArrivalMaxDelayInSeconds"></a>

```python
events_late_arrival_max_delay_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `events_out_of_order_max_delay_in_seconds`<sup>Required</sup> <a name="events_out_of_order_max_delay_in_seconds" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.eventsOutOfOrderMaxDelayInSeconds"></a>

```python
events_out_of_order_max_delay_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `events_out_of_order_policy`<sup>Required</sup> <a name="events_out_of_order_policy" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.eventsOutOfOrderPolicy"></a>

```python
events_out_of_order_policy: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.identity"></a>

```python
identity: DataAzurermStreamAnalyticsJobIdentityList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList">DataAzurermStreamAnalyticsJobIdentityList</a>

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

---

##### `last_output_time`<sup>Required</sup> <a name="last_output_time" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.lastOutputTime"></a>

```python
last_output_time: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `output_error_policy`<sup>Required</sup> <a name="output_error_policy" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.outputErrorPolicy"></a>

```python
output_error_policy: str
```

- *Type:* str

---

##### `start_mode`<sup>Required</sup> <a name="start_mode" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.startMode"></a>

```python
start_mode: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `streaming_units`<sup>Required</sup> <a name="streaming_units" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.streamingUnits"></a>

```python
streaming_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.timeouts"></a>

```python
timeouts: DataAzurermStreamAnalyticsJobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference">DataAzurermStreamAnalyticsJobTimeoutsOutputReference</a>

---

##### `transformation_query`<sup>Required</sup> <a name="transformation_query" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.transformationQuery"></a>

```python
transformation_query: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataAzurermStreamAnalyticsJobTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeouts">DataAzurermStreamAnalyticsJobTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermStreamAnalyticsJobConfig <a name="DataAzurermStreamAnalyticsJobConfig" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_stream_analytics_job

dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig(
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
  timeouts: DataAzurermStreamAnalyticsJobTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/stream_analytics_job#name DataAzurermStreamAnalyticsJob#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/stream_analytics_job#resource_group_name DataAzurermStreamAnalyticsJob#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/stream_analytics_job#id DataAzurermStreamAnalyticsJob#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeouts">DataAzurermStreamAnalyticsJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/stream_analytics_job#name DataAzurermStreamAnalyticsJob#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/stream_analytics_job#resource_group_name DataAzurermStreamAnalyticsJob#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/stream_analytics_job#id DataAzurermStreamAnalyticsJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.timeouts"></a>

```python
timeouts: DataAzurermStreamAnalyticsJobTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeouts">DataAzurermStreamAnalyticsJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/stream_analytics_job#timeouts DataAzurermStreamAnalyticsJob#timeouts}

---

### DataAzurermStreamAnalyticsJobIdentity <a name="DataAzurermStreamAnalyticsJobIdentity" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_stream_analytics_job

dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentity()
```


### DataAzurermStreamAnalyticsJobTimeouts <a name="DataAzurermStreamAnalyticsJobTimeouts" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_stream_analytics_job

dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/stream_analytics_job#read DataAzurermStreamAnalyticsJob#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/stream_analytics_job#read DataAzurermStreamAnalyticsJob#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermStreamAnalyticsJobIdentityList <a name="DataAzurermStreamAnalyticsJobIdentityList" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_stream_analytics_job

dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermStreamAnalyticsJobIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermStreamAnalyticsJobIdentityOutputReference <a name="DataAzurermStreamAnalyticsJobIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_stream_analytics_job

dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentity">DataAzurermStreamAnalyticsJobIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermStreamAnalyticsJobIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentity">DataAzurermStreamAnalyticsJobIdentity</a>

---


### DataAzurermStreamAnalyticsJobTimeoutsOutputReference <a name="DataAzurermStreamAnalyticsJobTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_stream_analytics_job

dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeouts">DataAzurermStreamAnalyticsJobTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAzurermStreamAnalyticsJobTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeouts">DataAzurermStreamAnalyticsJobTimeouts</a>, cdktf.IResolvable]

---



