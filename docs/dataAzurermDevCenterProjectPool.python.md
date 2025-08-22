# `dataAzurermDevCenterProjectPool` Submodule <a name="`dataAzurermDevCenterProjectPool` Submodule" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermDevCenterProjectPool <a name="DataAzurermDevCenterProjectPool" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/dev_center_project_pool azurerm_dev_center_project_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dev_center_project_pool

dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dev_center_project_id: str,
  name: str,
  id: str = None,
  timeouts: DataAzurermDevCenterProjectPoolTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.Initializer.parameter.devCenterProjectId">dev_center_project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/dev_center_project_pool#dev_center_project_id DataAzurermDevCenterProjectPool#dev_center_project_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/dev_center_project_pool#name DataAzurermDevCenterProjectPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/dev_center_project_pool#id DataAzurermDevCenterProjectPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeouts">DataAzurermDevCenterProjectPoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dev_center_project_id`<sup>Required</sup> <a name="dev_center_project_id" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.Initializer.parameter.devCenterProjectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/dev_center_project_pool#dev_center_project_id DataAzurermDevCenterProjectPool#dev_center_project_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/dev_center_project_pool#name DataAzurermDevCenterProjectPool#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/dev_center_project_pool#id DataAzurermDevCenterProjectPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeouts">DataAzurermDevCenterProjectPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/dev_center_project_pool#timeouts DataAzurermDevCenterProjectPool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/dev_center_project_pool#read DataAzurermDevCenterProjectPool#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermDevCenterProjectPool resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dev_center_project_pool

dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dev_center_project_pool

dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dev_center_project_pool

dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dev_center_project_pool

dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermDevCenterProjectPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermDevCenterProjectPool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermDevCenterProjectPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/dev_center_project_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermDevCenterProjectPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.devBoxDefinitionName">dev_box_definition_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.devCenterAttachedNetworkName">dev_center_attached_network_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.localAdministratorEnabled">local_administrator_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.stopOnDisconnectGracePeriodMinutes">stop_on_disconnect_grace_period_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference">DataAzurermDevCenterProjectPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.devCenterProjectIdInput">dev_center_project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeouts">DataAzurermDevCenterProjectPoolTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.devCenterProjectId">dev_center_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `dev_box_definition_name`<sup>Required</sup> <a name="dev_box_definition_name" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.devBoxDefinitionName"></a>

```python
dev_box_definition_name: str
```

- *Type:* str

---

##### `dev_center_attached_network_name`<sup>Required</sup> <a name="dev_center_attached_network_name" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.devCenterAttachedNetworkName"></a>

```python
dev_center_attached_network_name: str
```

- *Type:* str

---

##### `local_administrator_enabled`<sup>Required</sup> <a name="local_administrator_enabled" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.localAdministratorEnabled"></a>

```python
local_administrator_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `stop_on_disconnect_grace_period_minutes`<sup>Required</sup> <a name="stop_on_disconnect_grace_period_minutes" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.stopOnDisconnectGracePeriodMinutes"></a>

```python
stop_on_disconnect_grace_period_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.timeouts"></a>

```python
timeouts: DataAzurermDevCenterProjectPoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference">DataAzurermDevCenterProjectPoolTimeoutsOutputReference</a>

---

##### `dev_center_project_id_input`<sup>Optional</sup> <a name="dev_center_project_id_input" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.devCenterProjectIdInput"></a>

```python
dev_center_project_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermDevCenterProjectPoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeouts">DataAzurermDevCenterProjectPoolTimeouts</a>]

---

##### `dev_center_project_id`<sup>Required</sup> <a name="dev_center_project_id" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.devCenterProjectId"></a>

```python
dev_center_project_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermDevCenterProjectPoolConfig <a name="DataAzurermDevCenterProjectPoolConfig" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dev_center_project_pool

dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dev_center_project_id: str,
  name: str,
  id: str = None,
  timeouts: DataAzurermDevCenterProjectPoolTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolConfig.property.devCenterProjectId">dev_center_project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/dev_center_project_pool#dev_center_project_id DataAzurermDevCenterProjectPool#dev_center_project_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/dev_center_project_pool#name DataAzurermDevCenterProjectPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/dev_center_project_pool#id DataAzurermDevCenterProjectPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeouts">DataAzurermDevCenterProjectPoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dev_center_project_id`<sup>Required</sup> <a name="dev_center_project_id" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolConfig.property.devCenterProjectId"></a>

```python
dev_center_project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/dev_center_project_pool#dev_center_project_id DataAzurermDevCenterProjectPool#dev_center_project_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/dev_center_project_pool#name DataAzurermDevCenterProjectPool#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/dev_center_project_pool#id DataAzurermDevCenterProjectPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolConfig.property.timeouts"></a>

```python
timeouts: DataAzurermDevCenterProjectPoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeouts">DataAzurermDevCenterProjectPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/dev_center_project_pool#timeouts DataAzurermDevCenterProjectPool#timeouts}

---

### DataAzurermDevCenterProjectPoolTimeouts <a name="DataAzurermDevCenterProjectPoolTimeouts" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dev_center_project_pool

dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/dev_center_project_pool#read DataAzurermDevCenterProjectPool#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/dev_center_project_pool#read DataAzurermDevCenterProjectPool#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermDevCenterProjectPoolTimeoutsOutputReference <a name="DataAzurermDevCenterProjectPoolTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dev_center_project_pool

dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeouts">DataAzurermDevCenterProjectPoolTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermDevCenterProjectPoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermDevCenterProjectPool.DataAzurermDevCenterProjectPoolTimeouts">DataAzurermDevCenterProjectPoolTimeouts</a>]

---



