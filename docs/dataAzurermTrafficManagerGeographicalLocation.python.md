# `dataAzurermTrafficManagerGeographicalLocation` Submodule <a name="`dataAzurermTrafficManagerGeographicalLocation` Submodule" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermTrafficManagerGeographicalLocation <a name="DataAzurermTrafficManagerGeographicalLocation" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/traffic_manager_geographical_location azurerm_traffic_manager_geographical_location}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_traffic_manager_geographical_location

dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation(
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
  id: str = None,
  timeouts: DataAzurermTrafficManagerGeographicalLocationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/traffic_manager_geographical_location#name DataAzurermTrafficManagerGeographicalLocation#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/traffic_manager_geographical_location#id DataAzurermTrafficManagerGeographicalLocation#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeouts">DataAzurermTrafficManagerGeographicalLocationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/traffic_manager_geographical_location#name DataAzurermTrafficManagerGeographicalLocation#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/traffic_manager_geographical_location#id DataAzurermTrafficManagerGeographicalLocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeouts">DataAzurermTrafficManagerGeographicalLocationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/traffic_manager_geographical_location#timeouts DataAzurermTrafficManagerGeographicalLocation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/traffic_manager_geographical_location#read DataAzurermTrafficManagerGeographicalLocation#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermTrafficManagerGeographicalLocation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_traffic_manager_geographical_location

dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_traffic_manager_geographical_location

dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_traffic_manager_geographical_location

dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_traffic_manager_geographical_location

dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermTrafficManagerGeographicalLocation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermTrafficManagerGeographicalLocation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermTrafficManagerGeographicalLocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/traffic_manager_geographical_location#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermTrafficManagerGeographicalLocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference">DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeouts">DataAzurermTrafficManagerGeographicalLocationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.timeouts"></a>

```python
timeouts: DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference">DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermTrafficManagerGeographicalLocationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeouts">DataAzurermTrafficManagerGeographicalLocationTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermTrafficManagerGeographicalLocationConfig <a name="DataAzurermTrafficManagerGeographicalLocationConfig" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_traffic_manager_geographical_location

dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  timeouts: DataAzurermTrafficManagerGeographicalLocationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/traffic_manager_geographical_location#name DataAzurermTrafficManagerGeographicalLocation#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/traffic_manager_geographical_location#id DataAzurermTrafficManagerGeographicalLocation#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeouts">DataAzurermTrafficManagerGeographicalLocationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/traffic_manager_geographical_location#name DataAzurermTrafficManagerGeographicalLocation#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/traffic_manager_geographical_location#id DataAzurermTrafficManagerGeographicalLocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.timeouts"></a>

```python
timeouts: DataAzurermTrafficManagerGeographicalLocationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeouts">DataAzurermTrafficManagerGeographicalLocationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/traffic_manager_geographical_location#timeouts DataAzurermTrafficManagerGeographicalLocation#timeouts}

---

### DataAzurermTrafficManagerGeographicalLocationTimeouts <a name="DataAzurermTrafficManagerGeographicalLocationTimeouts" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_traffic_manager_geographical_location

dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/traffic_manager_geographical_location#read DataAzurermTrafficManagerGeographicalLocation#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/traffic_manager_geographical_location#read DataAzurermTrafficManagerGeographicalLocation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference <a name="DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_traffic_manager_geographical_location

dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeouts">DataAzurermTrafficManagerGeographicalLocationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermTrafficManagerGeographicalLocationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeouts">DataAzurermTrafficManagerGeographicalLocationTimeouts</a>]

---



