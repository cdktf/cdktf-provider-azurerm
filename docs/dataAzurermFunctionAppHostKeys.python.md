# `dataAzurermFunctionAppHostKeys` Submodule <a name="`dataAzurermFunctionAppHostKeys` Submodule" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermFunctionAppHostKeys <a name="DataAzurermFunctionAppHostKeys" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/function_app_host_keys azurerm_function_app_host_keys}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_function_app_host_keys

dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys(
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
  timeouts: DataAzurermFunctionAppHostKeysTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/function_app_host_keys#name DataAzurermFunctionAppHostKeys#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/function_app_host_keys#resource_group_name DataAzurermFunctionAppHostKeys#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/function_app_host_keys#id DataAzurermFunctionAppHostKeys#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeouts">DataAzurermFunctionAppHostKeysTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/function_app_host_keys#name DataAzurermFunctionAppHostKeys#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/function_app_host_keys#resource_group_name DataAzurermFunctionAppHostKeys#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/function_app_host_keys#id DataAzurermFunctionAppHostKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeouts">DataAzurermFunctionAppHostKeysTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/function_app_host_keys#timeouts DataAzurermFunctionAppHostKeys#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/function_app_host_keys#read DataAzurermFunctionAppHostKeys#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermFunctionAppHostKeys resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_function_app_host_keys

dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_function_app_host_keys

dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_function_app_host_keys

dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_function_app_host_keys

dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermFunctionAppHostKeys resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermFunctionAppHostKeys to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermFunctionAppHostKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/function_app_host_keys#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermFunctionAppHostKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.blobsExtensionKey">blobs_extension_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.defaultFunctionKey">default_function_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.durabletaskExtensionKey">durabletask_extension_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.eventGridExtensionConfigKey">event_grid_extension_config_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.eventGridExtensionKey">event_grid_extension_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.primaryKey">primary_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.signalrExtensionKey">signalr_extension_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference">DataAzurermFunctionAppHostKeysTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.webpubsubExtensionKey">webpubsub_extension_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeouts">DataAzurermFunctionAppHostKeysTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `blobs_extension_key`<sup>Required</sup> <a name="blobs_extension_key" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.blobsExtensionKey"></a>

```python
blobs_extension_key: str
```

- *Type:* str

---

##### `default_function_key`<sup>Required</sup> <a name="default_function_key" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.defaultFunctionKey"></a>

```python
default_function_key: str
```

- *Type:* str

---

##### `durabletask_extension_key`<sup>Required</sup> <a name="durabletask_extension_key" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.durabletaskExtensionKey"></a>

```python
durabletask_extension_key: str
```

- *Type:* str

---

##### `event_grid_extension_config_key`<sup>Required</sup> <a name="event_grid_extension_config_key" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.eventGridExtensionConfigKey"></a>

```python
event_grid_extension_config_key: str
```

- *Type:* str

---

##### `event_grid_extension_key`<sup>Required</sup> <a name="event_grid_extension_key" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.eventGridExtensionKey"></a>

```python
event_grid_extension_key: str
```

- *Type:* str

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.primaryKey"></a>

```python
primary_key: str
```

- *Type:* str

---

##### `signalr_extension_key`<sup>Required</sup> <a name="signalr_extension_key" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.signalrExtensionKey"></a>

```python
signalr_extension_key: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.timeouts"></a>

```python
timeouts: DataAzurermFunctionAppHostKeysTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference">DataAzurermFunctionAppHostKeysTimeoutsOutputReference</a>

---

##### `webpubsub_extension_key`<sup>Required</sup> <a name="webpubsub_extension_key" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.webpubsubExtensionKey"></a>

```python
webpubsub_extension_key: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermFunctionAppHostKeysTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeouts">DataAzurermFunctionAppHostKeysTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermFunctionAppHostKeysConfig <a name="DataAzurermFunctionAppHostKeysConfig" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_function_app_host_keys

dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig(
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
  timeouts: DataAzurermFunctionAppHostKeysTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/function_app_host_keys#name DataAzurermFunctionAppHostKeys#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/function_app_host_keys#resource_group_name DataAzurermFunctionAppHostKeys#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/function_app_host_keys#id DataAzurermFunctionAppHostKeys#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeouts">DataAzurermFunctionAppHostKeysTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/function_app_host_keys#name DataAzurermFunctionAppHostKeys#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/function_app_host_keys#resource_group_name DataAzurermFunctionAppHostKeys#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/function_app_host_keys#id DataAzurermFunctionAppHostKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.timeouts"></a>

```python
timeouts: DataAzurermFunctionAppHostKeysTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeouts">DataAzurermFunctionAppHostKeysTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/function_app_host_keys#timeouts DataAzurermFunctionAppHostKeys#timeouts}

---

### DataAzurermFunctionAppHostKeysTimeouts <a name="DataAzurermFunctionAppHostKeysTimeouts" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_function_app_host_keys

dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/function_app_host_keys#read DataAzurermFunctionAppHostKeys#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/function_app_host_keys#read DataAzurermFunctionAppHostKeys#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermFunctionAppHostKeysTimeoutsOutputReference <a name="DataAzurermFunctionAppHostKeysTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_function_app_host_keys

dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeouts">DataAzurermFunctionAppHostKeysTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermFunctionAppHostKeysTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeouts">DataAzurermFunctionAppHostKeysTimeouts</a>]

---



