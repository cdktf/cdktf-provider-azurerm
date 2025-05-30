# `dataAzurermAppConfiguration` Submodule <a name="`dataAzurermAppConfiguration` Submodule" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermAppConfiguration <a name="DataAzurermAppConfiguration" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/app_configuration azurerm_app_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_configuration

dataAzurermAppConfiguration.DataAzurermAppConfiguration(
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
  timeouts: DataAzurermAppConfigurationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/app_configuration#name DataAzurermAppConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/app_configuration#resource_group_name DataAzurermAppConfiguration#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/app_configuration#id DataAzurermAppConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeouts">DataAzurermAppConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/app_configuration#name DataAzurermAppConfiguration#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/app_configuration#resource_group_name DataAzurermAppConfiguration#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/app_configuration#id DataAzurermAppConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeouts">DataAzurermAppConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/app_configuration#timeouts DataAzurermAppConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/app_configuration#read DataAzurermAppConfiguration#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermAppConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_configuration

dataAzurermAppConfiguration.DataAzurermAppConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_configuration

dataAzurermAppConfiguration.DataAzurermAppConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_configuration

dataAzurermAppConfiguration.DataAzurermAppConfiguration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_configuration

dataAzurermAppConfiguration.DataAzurermAppConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermAppConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermAppConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermAppConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/app_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermAppConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.dataPlaneProxyAuthenticationMode">data_plane_proxy_authentication_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.dataPlaneProxyPrivateLinkDelegationEnabled">data_plane_proxy_private_link_delegation_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionList">DataAzurermAppConfigurationEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityList">DataAzurermAppConfigurationIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.localAuthEnabled">local_auth_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.primaryReadKey">primary_read_key</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyList">DataAzurermAppConfigurationPrimaryReadKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.primaryWriteKey">primary_write_key</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyList">DataAzurermAppConfigurationPrimaryWriteKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.publicNetworkAccess">public_network_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.purgeProtectionEnabled">purge_protection_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.replica">replica</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaList">DataAzurermAppConfigurationReplicaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.secondaryReadKey">secondary_read_key</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyList">DataAzurermAppConfigurationSecondaryReadKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.secondaryWriteKey">secondary_write_key</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyList">DataAzurermAppConfigurationSecondaryWriteKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.sku">sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.softDeleteRetentionDays">soft_delete_retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference">DataAzurermAppConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeouts">DataAzurermAppConfigurationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `data_plane_proxy_authentication_mode`<sup>Required</sup> <a name="data_plane_proxy_authentication_mode" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.dataPlaneProxyAuthenticationMode"></a>

```python
data_plane_proxy_authentication_mode: str
```

- *Type:* str

---

##### `data_plane_proxy_private_link_delegation_enabled`<sup>Required</sup> <a name="data_plane_proxy_private_link_delegation_enabled" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.dataPlaneProxyPrivateLinkDelegationEnabled"></a>

```python
data_plane_proxy_private_link_delegation_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.encryption"></a>

```python
encryption: DataAzurermAppConfigurationEncryptionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionList">DataAzurermAppConfigurationEncryptionList</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.identity"></a>

```python
identity: DataAzurermAppConfigurationIdentityList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityList">DataAzurermAppConfigurationIdentityList</a>

---

##### `local_auth_enabled`<sup>Required</sup> <a name="local_auth_enabled" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.localAuthEnabled"></a>

```python
local_auth_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `primary_read_key`<sup>Required</sup> <a name="primary_read_key" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.primaryReadKey"></a>

```python
primary_read_key: DataAzurermAppConfigurationPrimaryReadKeyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyList">DataAzurermAppConfigurationPrimaryReadKeyList</a>

---

##### `primary_write_key`<sup>Required</sup> <a name="primary_write_key" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.primaryWriteKey"></a>

```python
primary_write_key: DataAzurermAppConfigurationPrimaryWriteKeyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyList">DataAzurermAppConfigurationPrimaryWriteKeyList</a>

---

##### `public_network_access`<sup>Required</sup> <a name="public_network_access" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.publicNetworkAccess"></a>

```python
public_network_access: str
```

- *Type:* str

---

##### `public_network_access_enabled`<sup>Required</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `purge_protection_enabled`<sup>Required</sup> <a name="purge_protection_enabled" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.purgeProtectionEnabled"></a>

```python
purge_protection_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `replica`<sup>Required</sup> <a name="replica" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.replica"></a>

```python
replica: DataAzurermAppConfigurationReplicaList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaList">DataAzurermAppConfigurationReplicaList</a>

---

##### `secondary_read_key`<sup>Required</sup> <a name="secondary_read_key" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.secondaryReadKey"></a>

```python
secondary_read_key: DataAzurermAppConfigurationSecondaryReadKeyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyList">DataAzurermAppConfigurationSecondaryReadKeyList</a>

---

##### `secondary_write_key`<sup>Required</sup> <a name="secondary_write_key" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.secondaryWriteKey"></a>

```python
secondary_write_key: DataAzurermAppConfigurationSecondaryWriteKeyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyList">DataAzurermAppConfigurationSecondaryWriteKeyList</a>

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.sku"></a>

```python
sku: str
```

- *Type:* str

---

##### `soft_delete_retention_days`<sup>Required</sup> <a name="soft_delete_retention_days" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.softDeleteRetentionDays"></a>

```python
soft_delete_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.timeouts"></a>

```python
timeouts: DataAzurermAppConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference">DataAzurermAppConfigurationTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermAppConfigurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeouts">DataAzurermAppConfigurationTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermAppConfigurationConfig <a name="DataAzurermAppConfigurationConfig" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_configuration

dataAzurermAppConfiguration.DataAzurermAppConfigurationConfig(
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
  timeouts: DataAzurermAppConfigurationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/app_configuration#name DataAzurermAppConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/app_configuration#resource_group_name DataAzurermAppConfiguration#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/app_configuration#id DataAzurermAppConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeouts">DataAzurermAppConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/app_configuration#name DataAzurermAppConfiguration#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/app_configuration#resource_group_name DataAzurermAppConfiguration#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/app_configuration#id DataAzurermAppConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationConfig.property.timeouts"></a>

```python
timeouts: DataAzurermAppConfigurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeouts">DataAzurermAppConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/app_configuration#timeouts DataAzurermAppConfiguration#timeouts}

---

### DataAzurermAppConfigurationEncryption <a name="DataAzurermAppConfigurationEncryption" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_configuration

dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryption()
```


### DataAzurermAppConfigurationIdentity <a name="DataAzurermAppConfigurationIdentity" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_configuration

dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentity()
```


### DataAzurermAppConfigurationPrimaryReadKey <a name="DataAzurermAppConfigurationPrimaryReadKey" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKey.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_configuration

dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKey()
```


### DataAzurermAppConfigurationPrimaryWriteKey <a name="DataAzurermAppConfigurationPrimaryWriteKey" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKey.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_configuration

dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKey()
```


### DataAzurermAppConfigurationReplica <a name="DataAzurermAppConfigurationReplica" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplica"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplica.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_configuration

dataAzurermAppConfiguration.DataAzurermAppConfigurationReplica()
```


### DataAzurermAppConfigurationSecondaryReadKey <a name="DataAzurermAppConfigurationSecondaryReadKey" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKey.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_configuration

dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKey()
```


### DataAzurermAppConfigurationSecondaryWriteKey <a name="DataAzurermAppConfigurationSecondaryWriteKey" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKey.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_configuration

dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKey()
```


### DataAzurermAppConfigurationTimeouts <a name="DataAzurermAppConfigurationTimeouts" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_configuration

dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/app_configuration#read DataAzurermAppConfiguration#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/app_configuration#read DataAzurermAppConfiguration#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermAppConfigurationEncryptionList <a name="DataAzurermAppConfigurationEncryptionList" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_configuration

dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermAppConfigurationEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermAppConfigurationEncryptionOutputReference <a name="DataAzurermAppConfigurationEncryptionOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_configuration

dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.property.identityClientId">identity_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.property.keyVaultKeyIdentifier">key_vault_key_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryption">DataAzurermAppConfigurationEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_client_id`<sup>Required</sup> <a name="identity_client_id" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.property.identityClientId"></a>

```python
identity_client_id: str
```

- *Type:* str

---

##### `key_vault_key_identifier`<sup>Required</sup> <a name="key_vault_key_identifier" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.property.keyVaultKeyIdentifier"></a>

```python
key_vault_key_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermAppConfigurationEncryption
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationEncryption">DataAzurermAppConfigurationEncryption</a>

---


### DataAzurermAppConfigurationIdentityList <a name="DataAzurermAppConfigurationIdentityList" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_configuration

dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermAppConfigurationIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermAppConfigurationIdentityOutputReference <a name="DataAzurermAppConfigurationIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_configuration

dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentity">DataAzurermAppConfigurationIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentityOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermAppConfigurationIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationIdentity">DataAzurermAppConfigurationIdentity</a>

---


### DataAzurermAppConfigurationPrimaryReadKeyList <a name="DataAzurermAppConfigurationPrimaryReadKeyList" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_configuration

dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermAppConfigurationPrimaryReadKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermAppConfigurationPrimaryReadKeyOutputReference <a name="DataAzurermAppConfigurationPrimaryReadKeyOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_configuration

dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.property.connectionString">connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKey">DataAzurermAppConfigurationPrimaryReadKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermAppConfigurationPrimaryReadKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryReadKey">DataAzurermAppConfigurationPrimaryReadKey</a>

---


### DataAzurermAppConfigurationPrimaryWriteKeyList <a name="DataAzurermAppConfigurationPrimaryWriteKeyList" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_configuration

dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermAppConfigurationPrimaryWriteKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermAppConfigurationPrimaryWriteKeyOutputReference <a name="DataAzurermAppConfigurationPrimaryWriteKeyOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_configuration

dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.property.connectionString">connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKey">DataAzurermAppConfigurationPrimaryWriteKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermAppConfigurationPrimaryWriteKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationPrimaryWriteKey">DataAzurermAppConfigurationPrimaryWriteKey</a>

---


### DataAzurermAppConfigurationReplicaList <a name="DataAzurermAppConfigurationReplicaList" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_configuration

dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermAppConfigurationReplicaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermAppConfigurationReplicaOutputReference <a name="DataAzurermAppConfigurationReplicaOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_configuration

dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplica">DataAzurermAppConfigurationReplica</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplicaOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermAppConfigurationReplica
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationReplica">DataAzurermAppConfigurationReplica</a>

---


### DataAzurermAppConfigurationSecondaryReadKeyList <a name="DataAzurermAppConfigurationSecondaryReadKeyList" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_configuration

dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermAppConfigurationSecondaryReadKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermAppConfigurationSecondaryReadKeyOutputReference <a name="DataAzurermAppConfigurationSecondaryReadKeyOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_configuration

dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.property.connectionString">connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKey">DataAzurermAppConfigurationSecondaryReadKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermAppConfigurationSecondaryReadKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryReadKey">DataAzurermAppConfigurationSecondaryReadKey</a>

---


### DataAzurermAppConfigurationSecondaryWriteKeyList <a name="DataAzurermAppConfigurationSecondaryWriteKeyList" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_configuration

dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermAppConfigurationSecondaryWriteKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermAppConfigurationSecondaryWriteKeyOutputReference <a name="DataAzurermAppConfigurationSecondaryWriteKeyOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_configuration

dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.property.connectionString">connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKey">DataAzurermAppConfigurationSecondaryWriteKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermAppConfigurationSecondaryWriteKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationSecondaryWriteKey">DataAzurermAppConfigurationSecondaryWriteKey</a>

---


### DataAzurermAppConfigurationTimeoutsOutputReference <a name="DataAzurermAppConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_configuration

dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeouts">DataAzurermAppConfigurationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermAppConfigurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermAppConfiguration.DataAzurermAppConfigurationTimeouts">DataAzurermAppConfigurationTimeouts</a>]

---



